const container = document.getElementById("article-list");
const featuredContainer = document.getElementById("featured-article");
const filterContainer = document.getElementById("category-filter");
const searchInput = document.getElementById("article-search");
const sortSelect = document.getElementById("article-sort");
const articleCount = document.getElementById("article-count");
const emptyState = document.getElementById("empty-state");

/* Build category labels automatically from the articles — no manual list needed */
const categoryMap = { all: "All" };
articleCatalog.forEach(a => { categoryMap[a.categoryKey] = a.category; });
const categoryKeys = ["all", ...new Set(articleCatalog.map(a => a.categoryKey))];
let activeCategory = "all";
let activeSearch = "";
let activeSort = "newest";

function articleTimestamp(article) {
    return new Date(article.dateValue).getTime();
}

function readTimeValue(article) {
    return article.readMinutes;
}

function articleCard(article) {
    const thumb = article.image
        ? `<div class="card-thumb"><img src="${article.image}" alt="${article.title}" loading="lazy"></div>`
        : '';
    return `
        <article class="card${article.image ? ' card--has-thumb' : ''}">
            ${thumb}
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

function renderFilters() {
    filterContainer.innerHTML = categoryKeys.map(categoryKey => `
        <button class="${categoryKey === activeCategory ? "active" : ""}" type="button" data-category="${categoryKey}">
            ${categoryMap[categoryKey]}
        </button>
    `).join("");
}

function renderArticles() {
    const featured = articles.find(a => a.featured) || articles[0];
    const visibleArticles = articles
        .filter(article => activeCategory === "all" || article.categoryKey === activeCategory)
        .filter(article => {
            const query = activeSearch.toLowerCase();
            const searchableText = `${article.title} ${article.category} ${article.excerpt}`.toLowerCase();

            return searchableText.includes(query);
        })
        .sort((a, b) => {
            if (activeSort === "oldest") {
                return articleTimestamp(a) - articleTimestamp(b);
            }

            if (activeSort === "readTime") {
                return readTimeValue(a) - readTimeValue(b);
            }

            return articleTimestamp(b) - articleTimestamp(a);
        });

    featuredContainer.innerHTML = activeCategory === "all" && activeSearch === "" ? `
        <article class="featured-card">
            <div>
                <p class="eyebrow">${featured.category}</p>
                <h3>${featured.title}</h3>
                <p>${featured.excerpt}</p>
            </div>
            <a class="button primary" href="articles.html?id=${featured.id}">${siteText.readFeaturedLink}</a>
        </article>
    ` : "";

    container.innerHTML = visibleArticles.map(articleCard).join("");
    articleCount.textContent = `${visibleArticles.length} ${siteText.articlesShownSuffix}`;
    emptyState.hidden = visibleArticles.length > 0;
}

filterContainer.addEventListener("click", event => {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    activeCategory = button.dataset.category;
    renderFilters();
    renderArticles();
});

searchInput.addEventListener("input", event => {
    activeSearch = event.target.value.trim();
    renderArticles();
});

sortSelect.addEventListener("change", event => {
    activeSort = event.target.value;
    renderArticles();
});

renderFilters();
renderArticles();
