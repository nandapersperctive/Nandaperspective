const params    = new URLSearchParams(window.location.search);

/* No id at all in the URL (e.g. someone opened articles.html directly) —
   send them to the insights list instead of showing "not found". A
   present-but-wrong id (an old/broken link) still shows "not found". */
if (!params.has("id")) {
    window.location.replace("index.html#articles");
}

const id = parseInt(params.get("id"));

const categoryEl  = document.getElementById("category");
const titleEl     = document.getElementById("title");
const metaEl      = document.getElementById("meta");
const heroImgEl   = document.getElementById("article-hero-img");
const tocEl       = document.getElementById("article-toc");
const contentEl   = document.getElementById("content");
const relatedList = document.getElementById("related-list");
const sidebarAudiobookEl = document.getElementById("sidebar-audiobook");

/* Optional audiobook player in the sidebar — specific to whichever
   article is currently open (see the "audiobook" field per article). */
function renderAudiobook(article) {
    if (!sidebarAudiobookEl) return;

    if (!article || !article.audiobook) {
        sidebarAudiobookEl.innerHTML = "";
        sidebarAudiobookEl.hidden = true;
        return;
    }

    sidebarAudiobookEl.hidden = false;
    sidebarAudiobookEl.innerHTML = `
        <p class="eyebrow">${siteText.audiobookEyebrow}</p>
        <p>${siteText.audiobookBody}</p>
        <audio controls preload="none" src="${article.audiobook}"></audio>
    `;
}

function card(article) {
    return `
        <article class="card">
            <div class="card-meta">
                <span>${article.category}</span>
                <span>${article.readTime}</span>
            </div>
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <a href="articles.html?id=${article.id}">${siteText.readArticleLink}</a>
        </article>
    `;
}

function renderArticle() {
    const article = articles.find(a => a.id === id);
    const related = articles.filter(a => a.id !== id).slice(0, 3);

    if (!article) {
        document.title = `${siteText.articleNotFoundTitle} | Nanda Perspective`;
        titleEl.textContent    = siteText.articleNotFoundTitle;
        categoryEl.textContent = "Not found";
        metaEl.textContent     = siteText.articleNotFoundMeta;
        contentEl.innerHTML    = `
            <p>${siteText.articleNotFoundBody}</p>
            <a class="button primary not-found-cta" href="index.html#articles">${siteText.articleNotFoundButton}</a>
        `;
        relatedList.innerHTML  = articles.slice(0, 3).map(card).join("");
        renderAudiobook(null);
        return;
    }

    renderAudiobook(article);

    document.title = `${article.title} | Nanda Perspective`;

    /* Single meta line: CATEGORY • DATE • READ TIME (CSS makes it uppercase + red) */
    categoryEl.textContent = `${article.category} • ${article.date} • ${article.readTime}`;
    titleEl.textContent    = article.title;
    metaEl.textContent = article.excerpt;

    /* Hero image (optional) */
    if (article.image) {
        heroImgEl.innerHTML = `
            <figure class="article-hero-img">
                <img src="${article.image}" alt="${article.imageAlt || article.title}">
                ${article.imageCaption ? `<figcaption>${article.imageCaption}</figcaption>` : ""}
            </figure>`;
    } else {
        heroImgEl.innerHTML = "";
    }

    const hasSections = article.sections && article.sections.length;

    if (hasSections) {
        /* Table of contents */
        tocEl.innerHTML = `
            <div class="article-toc">
                <p class="article-toc-title">Table of Contents</p>
                <ol>
                    ${article.sections.map((s, i) =>
                        `<li><a href="#section-${i + 1}">${s.sectionTitle}</a></li>`
                    ).join("")}
                </ol>
            </div>
        `;

        /* Numbered sections with h2 headings */
        contentEl.innerHTML = article.sections.map((s, i) => `
            <div class="article-section" id="section-${i + 1}">
                <h2>${i + 1}. ${s.sectionTitle}</h2>
                ${s.paragraphs.map(p => `<p>${p}</p>`).join("")}
            </div>
        `).join("") + CONTENT_SIGNATURE;
    } else {
        /* Fallback: flat paragraphs (no TOC) */
        contentEl.innerHTML = (article.paragraphs || []).map(p => `<p>${p}</p>`).join("") + CONTENT_SIGNATURE;
    }

    relatedList.innerHTML = related.map(card).join("");
    renderShare(article);
}

function renderShare(article) {
    const pageUrl   = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(article.title + " — Nanda Perspective");

    const waUrl      = `https://wa.me/?text=${pageTitle}%20${pageUrl}`;
    const xUrl       = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
    const threadsUrl = `https://www.threads.net/intent/post?text=${pageTitle}%20${pageUrl}`;

    const nativeBtn = navigator.share
        ? `<button class="share-btn share-native" id="share-native-btn">Share</button>`
        : "";

    document.getElementById("article-share").innerHTML = `
        <div class="share-bar">
            <p class="share-label">Share this insight</p>
            <div class="share-buttons">
                ${nativeBtn}
                <button class="share-btn share-copy"  id="share-copy-btn">Copy Link</button>
                <button class="share-btn share-ig"    id="share-ig-btn">Instagram</button>
                <a class="share-btn share-wa"      href="${waUrl}"      target="_blank" rel="noopener">WhatsApp</a>
                <a class="share-btn share-x"       href="${xUrl}"       target="_blank" rel="noopener">X / Twitter</a>
                <a class="share-btn share-threads" href="${threadsUrl}" target="_blank" rel="noopener">Threads</a>
            </div>
        </div>
    `;

    document.getElementById("share-copy-btn").addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            const btn = document.getElementById("share-copy-btn");
            btn.textContent = "✓ Copied!";
            btn.classList.add("share-copy--done");
            setTimeout(() => {
                btn.textContent = "Copy Link";
                btn.classList.remove("share-copy--done");
            }, 2200);
        });
    });

    if (navigator.share) {
        document.getElementById("share-native-btn").addEventListener("click", () => {
            navigator.share({ title: article.title, text: article.excerpt, url: window.location.href });
        });
    }

    document.getElementById("share-ig-btn").addEventListener("click", async () => {
        const btn = document.getElementById("share-ig-btn");
        const original = btn.textContent;

        const fallback = () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showShareToast("Link copied! Now open Instagram and paste it in your story, bio, or DM.");
                setTimeout(() => window.open("https://www.instagram.com", "_blank"), 600);
            });
        };

        if (!navigator.canShare) { fallback(); return; }

        btn.textContent = "Preparing…";
        btn.disabled = true;
        try {
            const blob = await buildStoryCard(article);
            const file = new File([blob], "nanda-perspective-story.png", { type: "image/png" });
            if (navigator.canShare({ files: [file] })) {
                await navigator.share({ files: [file], title: article.title, text: article.excerpt });
            } else {
                fallback();
            }
        } catch (err) {
            if (!err || err.name !== "AbortError") fallback();
        } finally {
            btn.textContent = original;
            btn.disabled = false;
        }
    });
}

/* ── Instagram Story card generator ──────────────────────────────────
   Renders a 1080x1920 branded image (title + hero photo) so the
   "Instagram" share button can hand it straight to the OS share sheet
   via navigator.share({files}) — on phones with Instagram installed
   that opens directly into the Stories composer with the image ready,
   no copy-paste needed. */
function loadImageEl(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

function roundRectPath(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
}

function drawImageCover(ctx, img, x, y, w, h, radius) {
    const scale = Math.max(w / img.width, h / img.height);
    const sw = w / scale, sh = h / scale;
    const sx = (img.width - sw) / 2, sy = (img.height - sh) / 2;
    ctx.save();
    roundRectPath(ctx, x, y, w, h, radius);
    ctx.clip();
    ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
    ctx.restore();
}

/* Word-wraps text into at most maxLines, ellipsizing the last line if
   there's leftover text, and draws it. Returns the y position after
   the last line drawn. */
function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
    const words = (text || "").split(/\s+/).filter(Boolean);
    const lines = [];
    let line = "";
    let i = 0;
    while (i < words.length) {
        const test = line ? line + " " + words[i] : words[i];
        if (ctx.measureText(test).width > maxWidth && line) {
            lines.push(line);
            line = "";
            if (lines.length === maxLines) break;
        } else {
            line = test;
            i++;
        }
    }
    if (line && lines.length < maxLines) {
        lines.push(line);
        i = words.length;
    }
    if (i < words.length && lines.length) {
        let last = lines[lines.length - 1];
        while (last.length && ctx.measureText(last + "…").width > maxWidth) {
            last = last.slice(0, -1).trimEnd();
        }
        lines[lines.length - 1] = last + "…";
    }
    lines.forEach((l, idx) => ctx.fillText(l, x, y + idx * lineHeight));
    return y + lines.length * lineHeight;
}

async function buildStoryCard(article) {
    const W = 1080, H = 1920;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");

    await Promise.all([
        document.fonts.load('700 66px Fraunces'),
        document.fonts.load('700 28px "DM Sans"'),
        document.fonts.load('600 28px "DM Sans"'),
        document.fonts.load('400 34px "DM Sans"')
    ]);

    ctx.fillStyle = "#141E2A";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#E05A3A";
    ctx.fillRect(0, 0, W, 10);

    ctx.fillStyle = "#E05A3A";
    ctx.font = '700 30px "DM Sans"';
    ctx.textBaseline = "alphabetic";
    ctx.fillText("NANDA PERSPECTIVE", 72, 130);

    const imgX = 72, imgY = 180, imgW = W - 144, imgH = 920;
    if (article.image) {
        try {
            const img = await loadImageEl(article.image);
            drawImageCover(ctx, img, imgX, imgY, imgW, imgH, 28);
        } catch (e) { /* no image reachable — keep plain background */ }
    }

    let y = imgY + imgH + 90;
    if (article.category) {
        const label = article.category.toUpperCase();
        ctx.font = '700 28px "DM Sans"';
        const padX = 28;
        const pillW = ctx.measureText(label).width + padX * 2;
        roundRectPath(ctx, 72, y - 40, pillW, 56, 28);
        ctx.fillStyle = "#E05A3A";
        ctx.fill();
        ctx.fillStyle = "#141E2A";
        ctx.fillText(label, 72 + padX, y - 2);
        y += 40;
    }

    ctx.fillStyle = "#FFFCF9";
    ctx.font = '700 66px Fraunces';
    y = wrapText(ctx, article.title, 72, y + 60, W - 144, 78, 4);

    ctx.fillStyle = "#C9BFB6";
    ctx.font = '400 34px "DM Sans"';
    wrapText(ctx, article.excerpt || "", 72, y + 30, W - 144, 46, 3);

    ctx.fillStyle = "#8A7A72";
    ctx.font = '600 28px "DM Sans"';
    ctx.fillText("nandaperspective.com", 72, H - 80);

    return new Promise(resolve => canvas.toBlob(resolve, "image/png", 0.95));
}

function showShareToast(msg) {
    let toast = document.getElementById("share-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "share-toast";
        toast.className = "share-toast";
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("share-toast--show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove("share-toast--show"), 3500);
}

if (params.has("id")) {
    renderArticle();
}
