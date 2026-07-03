/* publicPageText and publicResources come from content/public-content.js */

const pt = publicPageText;

document.getElementById("public-eyebrow").textContent     = pt.eyebrow;
document.getElementById("public-title").textContent       = pt.title;
document.getElementById("public-description").textContent = pt.description;
document.getElementById("public-note-eyebrow").textContent = pt.noteEyebrow;
document.getElementById("public-note-title").textContent   = pt.noteTitle;
document.getElementById("public-note-body").textContent    = pt.noteBody;

function typeColor(type) {
    if (type === "Excel") return "badge-excel";
    if (type === "PDF")   return "badge-pdf";
    if (type === "App")   return "badge-app";
    return "badge-other";
}

function slugify(str) {
    return str.toLowerCase()
        .normalize("NFD").replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

/* Share block markup is fully static — the real title/URL are wired in
   afterwards by wireShareButtons(), so nothing dynamic ever gets typed
   into innerHTML here. Pass compact=true to render the small icon-only
   button used in the top-right corner of resource cards. */
function shareBlockHtml(compact) {
    const wrapClass = "resource-share-wrap" + (compact ? " resource-share-wrap--corner" : "");
    const btnClass  = "resource-download-btn resource-share-btn" + (compact ? " resource-share-btn--icon" : "");
    const btnLabel  = compact ? "↗" : "Share ↗";
    return `
        <div class="${wrapClass}">
            <button type="button" class="${btnClass}" onclick="toggleShareMenu(this)" aria-label="Share this resource">${btnLabel}</button>
            <div class="resource-share-menu">
                <a class="share-btn share-wa" target="_blank" rel="noopener">WhatsApp</a>
                <a class="share-btn share-x" target="_blank" rel="noopener">X</a>
                <a class="share-btn share-threads" target="_blank" rel="noopener">Threads</a>
                <button type="button" class="share-btn share-ig">Instagram</button>
                <button type="button" class="share-btn share-copy">Copy Link</button>
            </div>
        </div>`;
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

/* ── build button(s) for each item ── */
function buildButtons(item) {
    const hasFile    = item.file && item.file.trim() !== "";
    const hasContent = Array.isArray(item.content) && item.content.length > 0;
    const isApp      = item.type === "App";

    if (!hasFile && !hasContent) {
        return `<span class="resource-download-btn resource-coming">${pt.comingSoon}</span>`;
    }

    let btns = "";

    if (hasContent) {
        const safe = encodeURIComponent(item.title);
        const idx  = encodeURIComponent(JSON.stringify(item.content));
        btns += `<button class="resource-download-btn resource-read-btn"
                    onclick="openMaterial('${safe}', this)"
                    data-content='${JSON.stringify(item.content).replace(/'/g,"&#39;")}'>
                    ${pt.readBtn}
                 </button>`;
    }

    if (hasFile) {
        btns += isApp
            ? `<a class="resource-download-btn resource-app-btn" href="${item.file}" target="_blank" rel="noopener">Buka Aplikasi</a>`
            : `<a class="resource-download-btn" href="${item.file}" download>${pt.downloadBtn}</a>`;
    }

    return btns;
}

function buildFeaturedApp(item) {
    return `
        <div class="featured-app-wrap">
            <div class="featured-app-card">
                ${shareBlockHtml(true)}
                <div class="featured-app-body">
                    <div class="featured-app-badges">
                        <span class="resource-type-badge badge-app">${item.type}</span>
                        <span class="resource-free-badge">${pt.freeLabel}</span>
                        <span class="featured-app-tag">Tersedia Sekarang</span>
                    </div>
                    <h2 class="featured-app-title">${item.title}</h2>
                    <p class="featured-app-desc">${item.description}</p>
                    <div class="featured-app-actions">
                        <a class="featured-app-cta" href="${item.file}" target="_blank" rel="noopener">Buka Aplikasi</a>
                        <a class="featured-app-cta featured-app-cta--download" href="${item.file}" download>⬇ Download</a>
                    </div>
                </div>
            </div>
        </div>`;
}

function renderResources() {
    const container = document.getElementById("resources-container");

    // Extract App items for featured rendering
    const featuredApps = [];
    publicResources.forEach(cat => cat.items.forEach(item => {
        if (item.type === "App") featuredApps.push(item);
    }));

    const featuredHtml = featuredApps.map(buildFeaturedApp).join("");

    const categoriesHtml = publicResources.map(cat => {
        const regularItems = cat.items.filter(item => item.type !== "App");
        if (!regularItems.length) return "";
        return `
            <section class="resource-category">
                <div class="resource-category-header">
                    <h2 class="resource-category-title">${cat.category}</h2>
                </div>
                <div class="resource-grid">
                    ${regularItems.map(item => `
                        <article class="resource-card">
                            ${shareBlockHtml(true)}
                            <div class="resource-card-top">
                                <span class="resource-type-badge ${typeColor(item.type)}">${item.type}</span>
                                <span class="resource-free-badge">${pt.freeLabel}</span>
                            </div>
                            <h3 class="resource-card-title">${item.title}</h3>
                            <p class="resource-card-desc">${item.description}</p>
                            <div class="resource-btn-group">${buildButtons(item)}</div>
                        </article>`).join("")}
                </div>
            </section>`;
    }).join("");

    container.innerHTML = featuredHtml + categoriesHtml;
    wireShareButtons();
}

/* Fill in each share block with the real title/URL after the page has
   rendered. Nothing here is written back into innerHTML — hrefs and
   listeners are assigned as DOM properties, so no escaping is needed. */
function wireShareButtons() {
    document.querySelectorAll(".resource-card, .featured-app-card").forEach(function (card) {
        const titleEl   = card.querySelector(".resource-card-title, .featured-app-title");
        const shareWrap = card.querySelector(".resource-share-wrap");
        if (!titleEl || !shareWrap) return;

        const title = titleEl.textContent.trim();
        const slug  = slugify(title);
        card.id = "resource-" + slug;

        const url     = window.location.origin + window.location.pathname + "#resource-" + slug;
        const text    = title + " — Nanda Perspective";
        const encUrl  = encodeURIComponent(url);
        const encText = encodeURIComponent(text);

        shareWrap.querySelector(".share-wa").href      = "https://wa.me/?text=" + encText + "%20" + encUrl;
        shareWrap.querySelector(".share-x").href       = "https://twitter.com/intent/tweet?text=" + encText + "&url=" + encUrl;
        shareWrap.querySelector(".share-threads").href = "https://www.threads.net/intent/post?text=" + encText + "%20" + encUrl;

        const copyBtn = shareWrap.querySelector(".share-copy");
        copyBtn.addEventListener("click", function () {
            navigator.clipboard.writeText(url).then(function () {
                const original = copyBtn.textContent;
                copyBtn.textContent = "✓ Copied!";
                copyBtn.classList.add("share-copy--done");
                setTimeout(function () {
                    copyBtn.textContent = original;
                    copyBtn.classList.remove("share-copy--done");
                }, 2200);
            });
        });

        const igBtn = shareWrap.querySelector(".share-ig");
        igBtn.addEventListener("click", function () {
            navigator.clipboard.writeText(url).then(function () {
                showShareToast("Link copied! Now open Instagram and paste it in your story, bio, or DM.");
                setTimeout(function () { window.open("https://www.instagram.com", "_blank"); }, 600);
            });
        });
    });
}

function toggleShareMenu(btn) {
    const wrap = btn.closest(".resource-share-wrap");
    const willOpen = !wrap.classList.contains("open");
    document.querySelectorAll(".resource-share-wrap.open").forEach(function (w) { w.classList.remove("open"); });
    if (willOpen) wrap.classList.add("open");
}
window.toggleShareMenu = toggleShareMenu;

document.addEventListener("click", function (e) {
    if (!e.target.closest(".resource-share-wrap")) {
        document.querySelectorAll(".resource-share-wrap.open").forEach(function (w) { w.classList.remove("open"); });
    }
});

renderResources();

/* Jump straight to a shared resource, e.g. public.html#resource-template-jurnal-umum */
if (window.location.hash.indexOf("#resource-") === 0) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) {
        setTimeout(function () { target.scrollIntoView({ behavior: "smooth", block: "center" }); }, 60);
    }
}

/* ── Material modal ── */
function openMaterial(encodedTitle, btn) {
    const title   = decodeURIComponent(encodedTitle);
    const content = JSON.parse(btn.getAttribute("data-content"));

    document.getElementById("mat-modal-title").textContent = title;
    document.getElementById("mat-modal-body").innerHTML = content.map(sec => `
        <div class="mat-section">
            <h3 class="mat-heading">${sec.heading}</h3>
            <p class="mat-text">${sec.text.replace(/\n/g, "<br>")}</p>
        </div>
    `).join("") + CONTENT_SIGNATURE;

    document.getElementById("mat-modal").classList.add("open");
    document.body.style.overflow = "hidden";
}
window.openMaterial = openMaterial;

function closeMaterial() {
    document.getElementById("mat-modal").classList.remove("open");
    document.body.style.overflow = "";
}
window.closeMaterial = closeMaterial;

document.getElementById("mat-modal").addEventListener("click", function(e) {
    if (e.target === this) closeMaterial();
});
