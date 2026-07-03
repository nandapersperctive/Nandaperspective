const aboutHeading = document.getElementById("about-heading");
const aboutBio     = document.getElementById("about-bio");
const aboutQuote   = document.getElementById("about-quote");

/* ── Heading: render kata per kata dengan delay bertingkat ── */
function animateHeading(el, text) {
    const words = text.trim().split(/\s+/);
    el.innerHTML = words.map((w, i) =>
        `<span class="word" style="animation-delay:${.42 + i * .07}s">${w}</span>`
    ).join(" ");
}

animateHeading(aboutHeading, aboutText.heading);

/* ── Bio: pecah jadi beberapa paragraf, animasi scroll-triggered ── */
function splitBio(text) {
    const sentences = text.replace(/\.\s+/g, ".|").split("|").filter(Boolean);
    const groups = [];
    for (let i = 0; i < sentences.length; i += 2) {
        groups.push(sentences.slice(i, i + 2).join(" "));
    }
    return groups;
}

const bioGroups = splitBio(aboutText.bio);
aboutBio.innerHTML = bioGroups.map(g => `<p>${g}</p>`).join("");

/* ── IntersectionObserver: bio paragraphs ── */
const bioParas = aboutBio.querySelectorAll("p");

const bioObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const para = entry.target;
        const idx  = [...bioParas].indexOf(para);
        setTimeout(() => para.classList.add("bio-visible"), idx * 110);
        bioObserver.unobserve(para);
    });
}, { threshold: 0.15 });

bioParas.forEach(p => bioObserver.observe(p));

/* ── Quote: fade in saat terlihat di viewport ── */
if (aboutText.quote) {
    aboutQuote.textContent = aboutText.quote;
    const quoteObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            aboutQuote.style.animationDelay = ".1s";
            aboutQuote.style.animationFillMode = "both";
            aboutQuote.classList.add("quote-visible");
            quoteObserver.unobserve(aboutQuote);
        });
    }, { threshold: 0.3 });
    quoteObserver.observe(aboutQuote);
} else {
    aboutQuote.hidden = true;
}

/* ── Mouse parallax: kartu foto bergeser mengikuti kursor ── */
(function () {
    const layout = document.querySelector('.about-layout');
    const card   = document.querySelector('.profile-card');
    if (!layout || !card) return;

    /* berapa piksel maksimum kartu bergeser */
    const MAX_X = 14;
    const MAX_Y = 10;

    let raf = null;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    /* lerp untuk gerak halus */
    function lerp(a, b, t) { return a + (b - a) * t; }

    function tick() {
        currentX = lerp(currentX, targetX, 0.1);
        currentY = lerp(currentY, targetY, 0.1);
        card.style.transform = `translate(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px)`;

        /* terus update sampai sudah cukup dekat ke target */
        if (Math.abs(currentX - targetX) > 0.05 || Math.abs(currentY - targetY) > 0.05) {
            raf = requestAnimationFrame(tick);
        } else {
            card.style.transform = `translate(${targetX}px, ${targetY}px)`;
            raf = null;
        }
    }

    layout.addEventListener('mousemove', e => {
        const rect = layout.getBoundingClientRect();
        /* posisi mouse relatif ke tengah layout: -0.5 … +0.5 */
        const nx = (e.clientX - rect.left)  / rect.width  - 0.5;
        const ny = (e.clientY - rect.top)   / rect.height - 0.5;

        targetX = nx * MAX_X;
        targetY = ny * MAX_Y;

        if (!raf) raf = requestAnimationFrame(tick);
    });

    layout.addEventListener('mouseleave', () => {
        targetX = 0;
        targetY = 0;
        if (!raf) raf = requestAnimationFrame(tick);
    });
})();
