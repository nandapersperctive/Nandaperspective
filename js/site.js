/* Appended to the end of every long-form piece of writing on the site
   (articles, stock analysis, public materials) — see article.js, stock.js,
   public.js. */
const CONTENT_SIGNATURE = '<p class="content-signature">Nanda Perspective</p>';

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("main-nav");
const year = document.getElementById("year");

/* All page text is filled in from the content/ folder. This file just
   combines the shared text (content/site-text.js) with the Portfolio
   page's text (content/portfolio-content.js) so the data-i18n system
   below can read it. */
const uiText = { ...siteText, ...(typeof portfolioText !== "undefined" ? portfolioText : {}) };

/* Text lookup with an English fallback, for strings built in JS.
   Indonesian values come from content/id/site-text.js. */
function uiT(key, fallback) {
    return (typeof siteText !== "undefined" && siteText[key]) || fallback;
}

function translatePage() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (uiText[key]) {
            element.textContent = uiText[key];
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(element => {
        const key = element.dataset.i18nHtml;

        if (uiText[key]) {
            element.innerHTML = uiText[key];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;

        if (uiText[key]) {
            element.placeholder = uiText[key];
        }
    });
}

if (year) {
    year.textContent = new Date().getFullYear();
}

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.addEventListener("click", event => {
        if (event.target.tagName === "A") {
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });

    document.addEventListener("click", event => {
        if (!mainNav.classList.contains("open")) return;
        if (mainNav.contains(event.target) || menuToggle.contains(event.target)) return;
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
}

translatePage();

/* Contact form (homepage only) — builds a mailto: link from the fields
   and hands it to the visitor's own email app. No backend involved, so
   this works the moment the site is online with zero extra setup. */
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name       = document.getElementById("contact-name").value.trim();
        const fromEmail  = document.getElementById("contact-email-from").value.trim();
        const message    = document.getElementById("contact-message").value.trim();

        const subject = encodeURIComponent(`Message from ${name} via Nanda Perspective`);
        const body    = encodeURIComponent(`${message}\n\n${name} (${fromEmail})`);

        window.location.href = `mailto:nandaperspective@gmail.com?subject=${subject}&body=${body}`;
    });
}

/* Fade sections into view as the visitor scrolls down the page. */
const revealSections = document.querySelectorAll(".section");

if (revealSections.length) {
    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealSections.forEach(section => {
            section.classList.add("reveal");
            revealObserver.observe(section);
        });
    } else {
        revealSections.forEach(section => section.classList.add("is-visible"));
    }
}

/* ── Language toggle (EN / ID) ──
   js/lang.js defines getLang/setLang and is loaded on every page. The
   button shows the language you can switch TO. */
if (typeof getLang === 'function') {
    const header = document.querySelector('.site-header');
    const nav = header && header.querySelector('nav');

    if (nav) {
        const nextLang = getLang() === 'id' ? 'en' : 'id';
        const langToggle = document.createElement('button');
        langToggle.className = 'lang-toggle';
        langToggle.type = 'button';
        langToggle.textContent = nextLang.toUpperCase();
        langToggle.setAttribute('aria-label', nextLang === 'en' ? 'Switch to English' : 'Beralih ke Bahasa Indonesia');
        langToggle.addEventListener('click', () => setLang(nextLang));
        nav.appendChild(langToggle);

        /* On phones the nav is hidden behind the Menu button, so a second
           copy sits right next to Menu where it is always visible. CSS
           shows only one of the two depending on screen width. */
        const menuBtn = header.querySelector('.menu-toggle');
        if (menuBtn) {
            const headerToggle = langToggle.cloneNode(true);
            headerToggle.classList.add('lang-toggle--header');
            headerToggle.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' + nextLang.toUpperCase();
            headerToggle.addEventListener('click', () => setLang(nextLang));
            header.insertBefore(headerToggle, menuBtn);
        }
    }
}

/* ── Global Search ── */
(function () {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const ICON_SVG = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';

    // Inject trigger button at the end of nav (next to Contact)
    const trigger = document.createElement('button');
    trigger.className = 'search-trigger';
    trigger.setAttribute('aria-label', uiT('searchAria', 'Search content'));
    trigger.innerHTML = ICON_SVG + ' ' + uiT('searchButton', 'Search');

    const nav = header.querySelector('nav');
    if (nav) nav.appendChild(trigger);
    else header.appendChild(trigger);

    // Inject overlay modal
    const overlay = document.createElement('div');
    overlay.id = 'gs-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', uiT('searchDialogAria', 'Site search'));
    overlay.innerHTML =
        '<div class="gs-modal">' +
            '<div class="gs-input-row">' +
                '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" style="color:var(--muted);flex-shrink:0"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
                '<input id="gs-input" type="text" placeholder="' + uiT('searchInputPlaceholder', 'Search articles, stocks, or topics…') + '" autocomplete="off" spellcheck="false">' +
                '<button class="gs-close" aria-label="' + uiT('closeLabel', 'Close') + '">✕</button>' +
            '</div>' +
            '<div id="gs-results"><p class="gs-hint">Ketik kata kunci untuk mencari di semua halaman.</p></div>' +
        '</div>';
    document.body.appendChild(overlay);

    const input = document.getElementById('gs-input');
    const results = document.getElementById('gs-results');

    function openSearch() {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        setTimeout(function () { input.focus(); }, 60);
    }
    function closeSearch() {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    trigger.addEventListener('click', openSearch);
    overlay.querySelector('.gs-close').addEventListener('click', closeSearch);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeSearch(); });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('open')) closeSearch();
    });

    // Build search index once, lazily
    var idx = null;

    function buildIdx() {
        var items = [];

        if (typeof articleCatalog !== 'undefined') {
            articleCatalog.forEach(function (a) {
                var body = [a.title, a.category, a.excerpt]
                    .concat((a.sections || []).reduce(function (acc, s) {
                        return acc.concat([s.sectionTitle]).concat(s.paragraphs || []);
                    }, []))
                    .filter(Boolean).join(' ');
                items.push({ type: 'article', label: uiT('navArticles', 'Insights'), title: a.title, body: body, snippet: a.excerpt || '', url: 'articles.html?id=' + a.id });
            });
        }

        if (typeof portfolioHoldings !== 'undefined') {
            portfolioHoldings.forEach(function (s) {
                var body = [s.ticker, s.company, s.sector, s.thesis, s.risk, s.monitor]
                    .concat((s.analysis || []).reduce(function (acc, sec) {
                        return acc.concat([sec.sectionTitle]).concat(sec.paragraphs || []);
                    }, []))
                    .filter(Boolean).join(' ');
                items.push({ type: 'portfolio', label: uiT('navPortfolio', 'Portfolio'), title: s.ticker + ' · ' + s.company, body: body, snippet: s.thesis || '', url: 'stock.html?ticker=' + s.ticker });
            });
        }

        if (typeof aboutText !== 'undefined') {
            var body = [aboutText.heading, aboutText.bio, aboutText.quote].filter(Boolean).join(' ');
            items.push({ type: 'about', label: uiT('navAbout', 'About'), title: uiT('navAbout', 'About') + ' · Nanda Mulia', body: body, snippet: (aboutText.bio || '').slice(0, 110) + '…', url: 'about.html' });
        }

        if (typeof publicResources !== 'undefined') {
            publicResources.forEach(function (cat) {
                (cat.items || []).forEach(function (item) {
                    var body = [cat.category, item.title, item.description]
                        .concat((item.content || []).reduce(function (acc, c) {
                            return acc.concat([c.heading, c.text]);
                        }, []))
                        .filter(Boolean).join(' ');
                    items.push({ type: 'public', label: uiT('navResources', 'Resources'), title: item.title, body: body, snippet: item.description || '', url: 'resources.html' });
                });
            });
        }

        return items;
    }

    function escRe(str) { return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

    function escHtml(str) {
        return String(str).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function highlight(text, words) {
        var safe = escHtml(text);
        return words.reduce(function (t, w) {
            return t.replace(new RegExp(escRe(escHtml(w)), 'gi'), function (m) { return '<mark>' + m + '</mark>'; });
        }, safe);
    }

    function snippet(body, words) {
        var lo = body.toLowerCase(), pos = 0;
        for (var i = 0; i < words.length; i++) {
            var p = lo.indexOf(words[i]);
            if (p > 40) { pos = p - 40; break; }
        }
        var raw = body.slice(pos, pos + 130).trim();
        return (pos > 0 ? '…' : '') + raw + (body.length > pos + 130 ? '…' : '');
    }

    function render(q) {
        var words = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
        if (!words.length) {
            results.innerHTML = '<p class="gs-hint">' + uiT('searchHint', 'Type a keyword to search across every page.') + '</p>';
            return;
        }
        if (!idx) idx = buildIdx();
        var hits = idx.filter(function (item) {
            var lo = item.body.toLowerCase();
            return words.every(function (w) { return lo.includes(w); });
        });
        if (!hits.length) {
            results.innerHTML = '<p class="gs-empty">' + uiT('searchEmpty', 'No results for') + ' "<strong>' + escHtml(q.trim()) + '</strong>".</p>';
            return;
        }
        var groups = {};
        hits.forEach(function (h) { (groups[h.label] = groups[h.label] || []).push(h); });
        results.innerHTML = Object.keys(groups).map(function (label) {
            return '<div class="gs-group-label">' + escHtml(label) + '</div>' +
                groups[label].map(function (h) {
                    return '<a class="gs-item" href="' + encodeURI(h.url) + '">' +
                        '<div>' +
                            '<p class="gs-title">' + highlight(h.title, words) + '</p>' +
                            '<p class="gs-snippet">' + highlight(snippet(h.body, words), words) + '</p>' +
                        '</div>' +
                    '</a>';
                }).join('');
        }).join('');
    }

    var timer;
    input.addEventListener('input', function (e) {
        clearTimeout(timer);
        timer = setTimeout(function () { render(e.target.value); }, 140);
    });
})();

/* ── Back to top (mobile-heavy scroll relief on long pages) ── */
(function () {
    var btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.type = 'button';
    btn.setAttribute('aria-label', uiT('backToTop', 'Back to top'));
    btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>';
    document.body.appendChild(btn);

    var visible = false;
    window.addEventListener('scroll', function () {
        var shouldShow = window.scrollY > window.innerHeight;
        if (shouldShow !== visible) {
            visible = shouldShow;
            btn.classList.toggle('back-to-top--visible', visible);
        }
    }, { passive: true });

    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();
