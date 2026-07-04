/* ═══════════════════════════════════════════════════════════════
   SOCIAL PREVIEW EDGE FUNCTION
   Rewrites <title> and adds Open Graph / Twitter Card meta tags for
   individual article and stock pages, so links shared on WhatsApp,
   X, Threads, etc. show the real title/excerpt/photo instead of the
   site's generic description.

   Runs for requests to /articles.html?id=... and /stock.html?ticker=...
   It re-reads content/articles-content.js and content/portfolio-content.js
   on every request (no build step, no duplicated data) so it always
   matches whatever is currently saved in those files.

   If anything here fails or a matching id/ticker isn't found, the
   original page is returned unchanged — this never breaks the site.
   ═══════════════════════════════════════════════════════════════ */

export default async (request, context) => {
    const url = new URL(request.url);
    const isArticle = url.pathname === "/articles.html" && url.searchParams.has("id");
    const isStock   = url.pathname === "/stock.html" && url.searchParams.has("ticker");

    if (!isArticle && !isStock) {
        return context.next();
    }

    const response = await context.next();

    try {
        const contentType = response.headers.get("content-type") || "";
        if (!response.ok || !contentType.includes("text/html")) {
            return response;
        }

        let meta = null;

        if (isArticle) {
            const id = parseInt(url.searchParams.get("id"), 10);
            const article = await findArticle(url, id);
            if (article && article.title) {
                meta = {
                    type: "article",
                    title: `${article.title} | Nanda Perspective`,
                    description: article.excerpt || "Read insights from Nanda Perspective.",
                    image: article.image || ""
                };
            }
        } else {
            const ticker = url.searchParams.get("ticker");
            const holding = await findHolding(url, ticker);
            if (holding && holding.company) {
                meta = {
                    type: "article",
                    title: `${holding.ticker} — ${holding.company} | Nanda Perspective`,
                    description: holding.thesis || "Stock analysis from Nanda Perspective.",
                    image: holding.heroBg || holding.logo || ""
                };
            }
        }

        if (!meta) return response;

        const html = await response.text();
        const rewritten = injectMeta(html, url, meta);

        const headers = new Headers(response.headers);
        headers.delete("content-length");

        return new Response(rewritten, { status: response.status, headers });
    } catch (err) {
        return response;
    }
};

/* ── fetch + isolate the array body of a content/*.js file ── */
async function getArrayBody(baseUrl, path, varName) {
    const res = await fetch(new URL(path, baseUrl.origin));
    if (!res.ok) return null;
    const text = await res.text();

    const declRe = new RegExp(varName + "\\s*=\\s*\\[");
    const m = declRe.exec(text);
    if (!m) return null;

    const startIdx = m.index + m[0].length - 1; // index of the opening "["
    let depth = 0, inString = false, strChar = "", escape = false, endIdx = -1;

    for (let i = startIdx; i < text.length; i++) {
        const ch = text[i];
        if (inString) {
            if (escape) escape = false;
            else if (ch === "\\") escape = true;
            else if (ch === strChar) inString = false;
            continue;
        }
        if (ch === '"' || ch === "'" || ch === "`") { inString = true; strChar = ch; continue; }
        if (ch === "[") depth++;
        else if (ch === "]") {
            depth--;
            if (depth === 0) { endIdx = i; break; }
        }
    }

    if (endIdx === -1) return null;
    return text.slice(startIdx + 1, endIdx);
}

/* ── split an array body into its top-level {...} object blocks ── */
function splitTopLevelObjects(arrayBody) {
    const blocks = [];
    let depth = 0, start = -1, inString = false, strChar = "", escape = false;

    for (let i = 0; i < arrayBody.length; i++) {
        const ch = arrayBody[i];
        if (inString) {
            if (escape) escape = false;
            else if (ch === "\\") escape = true;
            else if (ch === strChar) inString = false;
            continue;
        }
        if (ch === '"' || ch === "'" || ch === "`") { inString = true; strChar = ch; continue; }
        if (ch === "{") {
            if (depth === 0) start = i;
            depth++;
        } else if (ch === "}") {
            depth--;
            if (depth === 0 && start !== -1) {
                blocks.push(arrayBody.slice(start, i + 1));
                start = -1;
            }
        }
    }
    return blocks;
}

function extractString(block, key) {
    // Content files normally use double quotes, but tolerate single quotes
    // too (e.g. heroBg: 'images/...') so an editor's quote-style choice
    // doesn't silently break the social-preview fallback.
    const doubleQuoted = new RegExp(key + '\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"');
    const singleQuoted = new RegExp(key + "\\s*:\\s*'((?:[^'\\\\]|\\\\.)*)'");
    const m = block.match(doubleQuoted) || block.match(singleQuoted);
    if (!m) return "";
    return m[1].replace(/\\(.)/g, "$1");
}

function extractNumber(block, key) {
    const re = new RegExp(key + "\\s*:\\s*(-?\\d+)");
    const m = block.match(re);
    return m ? parseInt(m[1], 10) : null;
}

async function findArticle(baseUrl, id) {
    if (!Number.isFinite(id)) return null;
    const body = await getArrayBody(baseUrl, "/content/articles-content.js", "articleCatalog");
    if (!body) return null;

    for (const block of splitTopLevelObjects(body)) {
        if (extractNumber(block, "id") === id) {
            return {
                title: extractString(block, "title"),
                excerpt: extractString(block, "excerpt"),
                image: extractString(block, "image")
            };
        }
    }
    return null;
}

async function findHolding(baseUrl, ticker) {
    if (!ticker) return null;
    const body = await getArrayBody(baseUrl, "/content/portfolio-content.js", "portfolioHoldings");
    if (!body) return null;

    for (const block of splitTopLevelObjects(body)) {
        if (extractString(block, "ticker") === ticker) {
            return {
                ticker: extractString(block, "ticker"),
                company: extractString(block, "company"),
                thesis: extractString(block, "thesis"),
                heroBg: extractString(block, "heroBg"),
                logo: extractString(block, "logo")
            };
        }
    }
    return null;
}

function escAttr(str) {
    return String(str).replace(/[&<>"']/g, c => (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));
}

function injectMeta(html, pageUrl, meta) {
    const absImage = meta.image ? new URL(meta.image, pageUrl.origin).href : "";
    const title = escAttr(meta.title);
    const description = escAttr(meta.description);

    const tags = `
    <meta property="og:type" content="${meta.type}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${escAttr(pageUrl.href)}">${absImage ? `
    <meta property="og:image" content="${escAttr(absImage)}">` : ""}
    <meta name="twitter:card" content="${absImage ? "summary_large_image" : "summary"}">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">${absImage ? `
    <meta name="twitter:image" content="${escAttr(absImage)}">` : ""}
`;

    let out = html.replace(/<title>.*?<\/title>/i, () => `<title>${title}</title>${tags}`);

    // Also swap out the static og:*/twitter:* tags already baked into the page,
    // so bots that read the whole <head> don't see two conflicting titles
    // (or two og:type / twitter:card tags, which is just as confusing).
    out = out.replace(/<meta property="og:type"[^>]*>/i, "");
    out = out.replace(/<meta property="og:title"[^>]*>/i, "");
    out = out.replace(/<meta property="og:description"[^>]*>/i, "");
    out = out.replace(/<meta property="og:url"[^>]*>/i, "");
    out = out.replace(/<meta property="og:image"[^>]*>/i, "");
    out = out.replace(/<meta name="twitter:card"[^>]*>/i, "");
    out = out.replace(/<meta name="twitter:title"[^>]*>/i, "");
    out = out.replace(/<meta name="twitter:description"[^>]*>/i, "");
    out = out.replace(/<meta name="twitter:image"[^>]*>/i, "");
    out = out.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${description}">`);

    return out;
}
