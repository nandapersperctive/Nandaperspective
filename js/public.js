/* publicPageText and publicResources come from content/public-content.js */

const pt = publicPageText;

/* Shared by public.html (App page) and resources.html (materials page):
   each element is filled only if that page has it. */
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}
setText("public-eyebrow", pt.eyebrow);
setText("public-title", pt.title);
setText("public-description", pt.description);
setText("public-note-eyebrow", pt.noteEyebrow);
setText("public-note-title", pt.noteTitle);
setText("public-note-body", pt.noteBody);
document.getElementById("mat-print-btn").textContent = pt.printBtn;
document.getElementById("mat-close-btn").setAttribute("aria-label", pt.closeBtn);

function escAttr(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
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
   button used in the top-right corner of resource cards.
   No inline onclick here on purpose — the site's CSP (script-src 'self')
   blocks inline event handlers, so the toggle is wired via addEventListener
   in the delegated click handler further down. */
const SHARE_ARROW_SVG = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>';

function shareBlockHtml(compact) {
    const wrapClass = "resource-share-wrap" + (compact ? " resource-share-wrap--corner" : "");
    const btnClass  = "resource-download-btn resource-share-btn" + (compact ? " resource-share-btn--icon" : "");
    const btnLabel  = compact ? SHARE_ARROW_SVG : `${uiT("shareButton", "Share")} ${SHARE_ARROW_SVG}`;
    return `
        <div class="${wrapClass}">
            <button type="button" class="${btnClass} resource-share-toggle" aria-label="${uiT("shareResourceLabel", "Share this resource")}" aria-haspopup="true" aria-expanded="false">${btnLabel}</button>
            <div class="resource-share-menu">
                <a class="share-btn share-wa" target="_blank" rel="noopener">WhatsApp</a>
                <a class="share-btn share-x" target="_blank" rel="noopener">X</a>
                <a class="share-btn share-threads" target="_blank" rel="noopener">Threads</a>
                <button type="button" class="share-btn share-ig">Instagram</button>
                <button type="button" class="share-btn share-copy">${uiT("copyLink", "Copy Link")}</button>
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

    if (!hasFile && !hasContent) {
        return `<span class="resource-download-btn resource-coming">${pt.comingSoon}</span>`;
    }

    let btns = "";

    if (hasContent) {
        btns += `<button type="button" class="resource-download-btn resource-read-btn"
                    data-title="${escAttr(item.title)}"
                    data-content='${JSON.stringify(item.content).replace(/'/g,"&#39;")}'>
                    ${pt.readBtn}
                 </button>`;
    }

    if (hasFile) {
        btns += `<a class="resource-download-btn" href="${item.file}" download>${pt.downloadBtn}</a>`;
    }

    return btns;
}

function buildFeaturedApp(item) {
    const img = "images/app/";
    return `
        <section class="app-band">
            <div class="ab-text">
                <h2 class="ab-title">${pt.appName}</h2>
                <p class="ab-lead">${pt.appLead}</p>
                <p class="ab-story">${pt.appStory}</p>
                <div class="ab-stats">
                    <div><b class="ab-c1">27</b><span>${pt.statScreens}</span></div>
                    <div><b class="ab-c2">799</b><span>${pt.statButtons}</span></div>
                    <div><b class="ab-c3">100%</b><span>${pt.statOffline}</span></div>
                </div>
                <div class="ab-buttons">
                    ${item.fileApk
                        ? `<a class="ab-primary" href="${item.fileApk}" download>${pt.downloadAndroidBtn}</a>
                           <a class="ab-secondary" href="${item.file}" download>${pt.downloadDesktopBtn}</a>`
                        : `<a class="ab-primary" href="${item.file}" download>${pt.downloadBtn}</a>`}
                </div>
            </div>
            <div class="ab-stage" aria-hidden="true">
                <img class="ab-icon" src="${img}still-accounting-icon.svg" alt="">
                <div class="ab-phone ab-phone--left"><img src="${img}still-accounting-kasir.webp" alt="" loading="lazy"></div>
                <div class="ab-phone ab-phone--right"><img src="${img}still-accounting-laporan.webp" alt="" loading="lazy"></div>
                <div class="ab-phone ab-phone--center"><img src="${img}still-accounting-dasbor.webp" alt=""></div>
                <div class="ab-card ab-card--sale"><i class="ab-i1">✓</i><div><b>${pt.cardSaleTitle}</b><span>${pt.cardSaleBody}</span></div></div>
                <div class="ab-card ab-card--profit"><i class="ab-i2">Rp</i><div><b>${pt.cardProfitTitle}</b><span>${pt.cardProfitBody}</span></div></div>
                <div class="ab-card ab-card--offline"><i class="ab-i3">⚡</i><div><b>${pt.cardOfflineTitle}</b><span>${pt.cardOfflineBody}</span></div></div>
            </div>
        </section>`;
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
                            <p class="resource-type">${item.type}</p>
                            <h3 class="resource-card-title">${item.title}</h3>
                            <p class="resource-card-desc">${item.description}</p>
                            <div class="resource-btn-group">${buildButtons(item)}</div>
                        </article>`).join("")}
                </div>
            </section>`;
    }).join("");

    const show = container.dataset.show;
    container.innerHTML = show === "app" ? featuredHtml
                        : show === "materials" ? categoriesHtml
                        : featuredHtml + categoriesHtml;
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
        const text    = title + " | Nanda Perspective";
        const encUrl  = encodeURIComponent(url);
        const encText = encodeURIComponent(text);

        shareWrap.querySelector(".share-wa").href      = "https://wa.me/?text=" + encText + "%20" + encUrl;
        shareWrap.querySelector(".share-x").href       = "https://twitter.com/intent/tweet?text=" + encText + "&url=" + encUrl;
        shareWrap.querySelector(".share-threads").href = "https://www.threads.net/intent/post?text=" + encText + "%20" + encUrl;

        const copyBtn = shareWrap.querySelector(".share-copy");
        copyBtn.addEventListener("click", function () {
            navigator.clipboard.writeText(url).then(function () {
                const original = copyBtn.textContent;
                copyBtn.textContent = uiT("copied", "✓ Copied!");
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
                showShareToast(uiT("igToast", "Link copied! Now open Instagram and paste it in your story, bio, or DM."));
                setTimeout(function () { window.open("https://www.instagram.com", "_blank"); }, 600);
            });
        });
    });
}

function closeAllShareMenus() {
    document.querySelectorAll(".resource-share-wrap.open").forEach(function (w) {
        w.classList.remove("open");
        w.querySelector(".resource-share-toggle").setAttribute("aria-expanded", "false");
    });
}

/* Delegated click handling — covers every share-toggle and "Baca Materi"
   button even though they're generated dynamically, and needs no inline
   onclick attributes (which the site's CSP blocks). */
document.getElementById("resources-container").addEventListener("click", function (e) {
    const toggleBtn = e.target.closest(".resource-share-toggle");
    if (toggleBtn) {
        const wrap = toggleBtn.closest(".resource-share-wrap");
        const willOpen = !wrap.classList.contains("open");
        closeAllShareMenus();
        if (willOpen) {
            wrap.classList.add("open");
            toggleBtn.setAttribute("aria-expanded", "true");
        }
        return;
    }

    const readBtn = e.target.closest(".resource-read-btn");
    if (readBtn) {
        openMaterial(readBtn.getAttribute("data-title"), readBtn);
    }
});

document.addEventListener("click", function (e) {
    if (!e.target.closest(".resource-share-wrap")) {
        closeAllShareMenus();
    }
});

renderResources();

/* Materials moved from public.html to resources.html: forward old shared links. */
if (document.getElementById("resources-container").dataset.show === "app" &&
    window.location.hash.indexOf("#resource-") === 0) {
    window.location.replace("resources.html" + window.location.hash);
}

/* Jump straight to a shared resource, e.g. resources.html#resource-template-jurnal-umum */
if (window.location.hash.indexOf("#resource-") === 0) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) {
        setTimeout(function () { target.scrollIntoView({ behavior: "smooth", block: "center" }); }, 60);
    }
}

/* ── Material modal ── */
function openMaterial(title, btn) {
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

function closeMaterial() {
    document.getElementById("mat-modal").classList.remove("open");
    document.body.style.overflow = "";
}

document.getElementById("mat-modal").addEventListener("click", function (e) {
    if (e.target === this) closeMaterial();
});

document.getElementById("mat-print-btn").addEventListener("click", function () {
    window.print();
});

document.getElementById("mat-close-btn").addEventListener("click", closeMaterial);
