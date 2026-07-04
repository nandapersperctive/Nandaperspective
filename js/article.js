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

    document.getElementById("share-ig-btn").addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showShareToast("Link copied! Now open Instagram and paste it in your story, bio, or DM.");
            setTimeout(() => window.open("https://www.instagram.com", "_blank"), 600);
        });
    });
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
