const params = new URLSearchParams(window.location.search);
const tickerParam = params.get("ticker");

const stockCompany    = document.getElementById("stock-company");
const stockSector     = document.getElementById("stock-sector");
const stockSnapshotEl = document.getElementById("stock-snapshot");
const stockAnalysis   = document.getElementById("stock-analysis");
const stockSidebar    = document.getElementById("stock-sidebar");
const relatedHoldings = document.getElementById("related-holdings");
const labels = portfolioFieldLabels;
const pt = stockPageText;

/* Inject page-level labels from content file */
document.getElementById("stock-back-link").textContent   = pt.backLink;
document.getElementById("other-eyebrow").textContent     = pt.otherHoldingsEyebrow;
document.getElementById("other-title").textContent       = pt.otherHoldingsTitle;
document.getElementById("disclaimer-title").textContent  = pt.disclaimerTitle;
document.getElementById("disclaimer-body").textContent   = pt.disclaimerBody;
document.getElementById("footer-back-link").textContent  = pt.backLink.replace("← ", "");

function relatedCard(holding) {
    const bgStyle = holding.logo
        ? `style="background-image:url('${holding.logo}')"` : "";
    const watermark = holding.logo
        ? "" : `<span class="holding-card-ticker">${holding.ticker}</span>`;
    return `
        <article class="holding-card" ${bgStyle}>
            ${watermark}
            <div class="holding-card-overlay">
                <div>
                    <h3>${holding.company}</h3>
                    <p class="holding-card-meta">${holding.ticker} · ${holding.sector}</p>
                </div>
                <a class="view-analysis-link" href="stock.html?ticker=${holding.ticker}">${pt.viewAnalysisLink}</a>
            </div>
        </article>
    `;
}

function renderStock() {
    const holding = portfolioHoldings.find(h => h.ticker === tickerParam);

    if (!holding) {
        document.title = "Stock not found | Nanda Perspective";
        document.getElementById("stock-hero").innerHTML = `
            <a class="back-link" href="portfolio.html">← Back to portfolio</a>
            <h1 style="margin-top:24px;color:white">Stock not found</h1>
            <p style="color:rgba(255,255,255,.7)">Return to the <a href="portfolio.html" style="color:white;font-weight:700">portfolio page</a>.</p>
        `;
        return;
    }

    document.title = `${holding.ticker} — ${holding.company} | Nanda Perspective`;

    const hero = document.getElementById("stock-hero");

    /* Full-width landscape background photo in the hero */
    if (holding.heroBg) {
        hero.style.backgroundImage =
            `linear-gradient(rgba(10,27,44,0.78), rgba(10,27,44,0.84)), url("${holding.heroBg}")`;
        hero.style.backgroundSize    = "cover";
        hero.style.backgroundPosition = "center";
    }

    /* Logo watermark (top of logo, behind text) */
    if (holding.logo) {
        hero.style.setProperty("--hero-logo", `url("${holding.logo}")`);
    }

    stockCompany.textContent = holding.company;
    stockSector.textContent  = holding.sector;

    /* Snapshot info boxes — use custom array if defined, otherwise fall back to thesis/risk/monitor */
    const snapshotItems = holding.snapshot || [
        { label: labels.thesis,  value: holding.thesis  },
        { label: labels.risk,    value: holding.risk    },
        { label: labels.monitor, value: holding.monitor }
    ];
    stockSnapshotEl.innerHTML = snapshotItems.map(item => `
        <div>
            <dt class="snapshot-label">${item.label}</dt>
            <dd class="snapshot-value">${item.value}</dd>
        </div>
    `).join("");

    const sizeMap = { small: "200px", medium: "380px", large: "580px", full: "100%" };

    /* Analysis sections with anchor IDs */
    if (holding.analysis && holding.analysis.length) {
        stockAnalysis.innerHTML = holding.analysis.map((section, i) => {
            let imgHtml = "";
            if (section.image) {
                const w = sizeMap[section.imageSize] || sizeMap.medium;
                imgHtml = `<img src="${section.image}" alt="${section.sectionTitle}" class="section-image" style="max-width:${w}">`;
            }
            return `
            <div class="stock-section" id="analysis-${i + 1}">
                <h2>${section.sectionTitle}</h2>
                ${imgHtml}
                ${section.paragraphs.map(p => `<p>${p}</p>`).join("")}
            </div>`;
        }).join("") + CONTENT_SIGNATURE;

        /* Sidebar TOC */
        if (stockSidebar) {
            stockSidebar.innerHTML = `
                <p class="eyebrow">${pt.contentsLabel}</p>
                <ol class="sidebar-toc">
                    ${holding.analysis.map((s, i) =>
                        `<li><a href="#analysis-${i + 1}">${s.sectionTitle}</a></li>`
                    ).join("")}
                </ol>
            `;
        }
    }

    const others = portfolioHoldings.filter(h => h.ticker !== tickerParam);
    relatedHoldings.innerHTML = others.map(relatedCard).join("");

    renderShare(holding);
}

function renderShare(holding) {
    const shareEl = document.getElementById("stock-share");
    if (!shareEl) return;

    const pageUrl   = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(`${holding.ticker} — ${holding.company} | Nanda Perspective`);

    const waUrl      = `https://wa.me/?text=${pageTitle}%20${pageUrl}`;
    const xUrl       = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
    const threadsUrl = `https://www.threads.net/intent/post?text=${pageTitle}%20${pageUrl}`;

    const nativeBtn = navigator.share
        ? `<button class="share-btn share-native" id="share-native-btn">Share</button>`
        : "";

    shareEl.innerHTML = `
        <div class="share-bar">
            <p class="share-label">Share this analysis</p>
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
            navigator.share({
                title: `${holding.ticker} — ${holding.company}`,
                text: holding.thesis || "",
                url: window.location.href
            });
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

renderStock();
