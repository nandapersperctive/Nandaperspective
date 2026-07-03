/* portfolioHoldings, portfolioFieldLabels, portfolioUpdates are filled in at content/portfolio-content.js */

const holdingList  = document.getElementById("holding-list");
const updatesList  = document.getElementById("updates-list");
const portfolioHero = document.querySelector(".portfolio-hero");

if (portfolioHero && portfolioText.portfolioHeroImage) {
    portfolioHero.style.backgroundImage =
        `linear-gradient(rgba(10,27,44,.82), rgba(10,27,44,.88)), url('${portfolioText.portfolioHeroImage}')`;
}

function renderUpdates() {
    if (!updatesList || !portfolioUpdates || !portfolioUpdates.length) return;

    updatesList.innerHTML = portfolioUpdates.map((yearBlock, yi) => {
        const quarters = yearBlock.quarters.map(q => {
            if (q.status === "coming") {
                return `<li class="update-item update-coming">${q.label} <span class="coming-label">Coming Soon</span></li>`;
            }
            if (q.url) {
                return `<li class="update-item"><a href="${q.url}" target="_blank" rel="noopener">${q.label}</a></li>`;
            }
            return `<li class="update-item update-empty">${q.label}</li>`;
        }).join("");

        const id = `update-year-${yi}`;
        return `
            <div class="update-year">
                <button class="update-year-btn" aria-expanded="true" aria-controls="${id}" type="button">
                    <span>${yearBlock.year}</span>
                    <span class="update-chevron">&#8963;</span>
                </button>
                <ul class="update-quarters" id="${id}">${quarters}</ul>
            </div>`;
    }).join("");

    updatesList.querySelectorAll(".update-year-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const expanded = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", String(!expanded));
            document.getElementById(btn.getAttribute("aria-controls"))
                .classList.toggle("update-quarters--closed", expanded);
        });
    });
}

function renderPortfolio() {
    holdingList.innerHTML = portfolioHoldings.map(holding => {
        const bgStyle = holding.logo
            ? `style="background-image:url('${holding.logo}')"`
            : "";
        const tickerWatermark = holding.logo
            ? ""
            : `<span class="holding-card-ticker">${holding.ticker}</span>`;

        return `
            <article class="holding-card" ${bgStyle}>
                ${tickerWatermark}
                <div class="holding-card-overlay">
                    <div>
                        <h3>${holding.company}</h3>
                        <p class="holding-card-meta">${holding.ticker} · ${holding.sector}</p>
                    </div>
                    <a class="view-analysis-link" href="stock.html?ticker=${holding.ticker}">View Full Analysis →</a>
                </div>
            </article>
        `;
    }).join("");
}

renderPortfolio();
renderUpdates();
