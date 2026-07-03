/* =====================================================================
   PORTFOLIO — all the text on the Portfolio page lives here.
   =====================================================================
   HOW TO EDIT
   Change the text between quotes " ... ". Don't delete quotes, commas,
   or curly braces { }. Save the file when done — that's it.

   EACH STOCK HAS TWO PARTS:
   1. The CARD (shown on the portfolio page) — ticker, logo, company name.
   2. The FULL ANALYSIS (shown on the stock's own page) — sections with
      title, optional photo, and paragraphs.

   HOW TO ADD A COMPANY LOGO
   1. Put the logo image file inside the "images/portfolio/" folder
      (e.g. images/logo-bbca.png).
   2. Find the stock below and change logo: "" to logo: "images/portfolio/logo-bbca.png".
   3. Save. The logo will appear on both the portfolio card and the stock page.
   If logo is left empty (""), the ticker abbreviation badge is shown instead.

   HOW TO ADD A HERO BACKGROUND PHOTO (landscape cover image)
   1. Put a wide/landscape photo inside the "images/portfolio/" folder
      (e.g. images/bbca-hero.jpg).
   2. Find the stock below and change heroBg: "" to heroBg: "images/portfolio/bbca-hero.jpg".
   3. Save. The photo will appear as a full-width background behind the dark hero section.
   Leave heroBg: "" if you don't want a background photo.

   HOW TO CHANGE THE PHOTO ON THE TOP OF THE PORTFOLIO PAGE
   (the big navy banner behind "Stocks I Own and the Analysis Behind Them")
   1. Put a wide/landscape photo inside the "images/portfolio/" folder
      (e.g. images/portfolio/portfolio-hero.jpg).
   2. Find "portfolioHeroImage" below and change it to
      portfolioHeroImage: "images/portfolio/portfolio-hero.jpg".
   3. Save. Leave portfolioHeroImage: "" for a plain navy background (no photo).

   HOW TO ADD A PHOTO TO AN ANALYSIS SECTION
   Inside any section in "analysis: [ ... ]", set the "image" field:
       image: "images/portfolio/bbca-chart.jpg"
   Put the image file in the images/ folder first. Leave image: "" for
   sections where you don't want a photo.

   HOW TO SET THE PHOTO SIZE
   Add an "imageSize" field next to "image":
       imageSize: "small"    →  200px wide
       imageSize: "medium"   →  380px wide  (default)
       imageSize: "large"    →  580px wide
       imageSize: "full"     →  full column width
   Example:
       image: "images/portfolio/bbca-chart.jpg",
       imageSize: "large",

   HOW TO CUSTOMIZE THE INFO BOXES IN THE HERO (Thesis / Risk / Monitor area)
   Each stock has a "snapshot" array that controls the info boxes shown on its page.
   You can change the label, change the text, add more boxes, or remove boxes.
   Example — 3 boxes:
       snapshot: [
           { label: "Thesis",  value: "My investment reason here." },
           { label: "Risk",    value: "Key risks I'm watching." },
           { label: "Monitor", value: "Metrics I track." }
       ],
   To add a 4th box just add another line:
           { label: "Target Price", value: "Rp 10.000" }
   To remove a box, delete its line (including the comma after it).

   HOW TO EDIT THE FULL ANALYSIS OF A STOCK
   Find the stock, then look for "analysis: [ ... ]". Each section looks like:
       {
           sectionTitle: "Business Overview",
           image: "",
           paragraphs: [
               "First paragraph.",
               "Second paragraph."
           ]
       }
   Edit the text in paragraphs. Add a new paragraph by adding a new quoted
   line inside paragraphs: [ ... ] separated by a comma.

   HOW TO ADD A NEW STOCK
   Copy one complete stock block (from "{" to "},"), paste it before the
   closing "];", and fill in every field.
   ===================================================================== */

/* =====================================================================
   STOCK PAGE LABELS — semua teks di halaman analisis saham.
   Ubah sesuka hati tanpa menyentuh kode lain.
   ===================================================================== */
const stockPageText = {
    backLink:             "← Back to portfolio",
    contentsLabel:        "Contents",
    viewAnalysisLink:     "View Full Analysis →",
    otherHoldingsEyebrow: "Portfolio",
    otherHoldingsTitle:   "Other Holdings",
    disclaimerTitle:      "Not Investment Advice",
    disclaimerBody:       "The analysis on this page reflects personal research and reasoning at a point in time. It is not a recommendation to buy, sell, or hold any security. Investment decisions involve risks, and past reasoning may change as new information emerges. Always conduct your own due diligence before making any investment decision."
};

const portfolioText = {
    portfolioEyebrow: "Personal portfolio",
    portfolioTitle: "Stocks I Own and the Analysis Behind Them",
    portfolioDescription: "A structured view of holdings, investment thesis, risk factors, and monitoring notes. This page is for personal documentation, not investment advice.",
    portfolioHeroImage: "images/portfolio/portofolio-banner.png",   /* Photo behind this banner, e.g. "images/portfolio/portfolio-hero.jpg". Leave empty for plain navy. */
    portfolioStyleLabel: "Style",
    portfolioStyleValue: "Long-term, quality-first",
    portfolioRiskLabel: "Risk Control",
    portfolioRiskValue: "Business quality + valuation discipline",
    portfolioUpdatedLabel: "Updated",
    portfolioUpdatedValue: "June 2026",
    holdingsEyebrow: "Holdings",
    holdingsTitle: "Current Stock Analysis",
    portfolioNoteEyebrow: "Important note",
    portfolioNoteTitle: "This portfolio is a learning journal.",
    portfolioNoteBody: "The analysis here records personal reasoning and may change as new information appears. It should not be treated as a recommendation to buy or sell any stock."
};

const portfolioFieldLabels = {
    thesis: "Thesis",
    risk: "Risk",
    monitor: "Monitor",
    sector: "Sector",
    allocation: "Role",
    horizon: "Horizon"
};

const portfolioHoldings = [
{
    ticker: "BBCA",
    logo: "images/portfolio/logo-bbca.png",   /* Path to logo, e.g. "images/portfolio/logo-bbca.png". Leave empty to show ticker text. */
    heroBg: "images/portfolio/hero-bbca.png",                     /* Wide landscape photo for hero background, e.g. "images/portfolio/bbca-hero.jpg". Leave empty for solid navy. */
    company: "Bank Central Asia Tbk",
    sector: "Banking",
    allocation: "Core holding",
    horizon: "Long term",
    thesis: "High-quality private bank with strong deposit franchise, consistent profitability, and disciplined risk management.",
    risk: "Premium valuation, slowing loan growth, sensitivity to liquidity conditions, and rising digital/fintech competition.",
    monitor: "CASA ratio, loan growth, net interest margin, asset quality, and fee-based income.",

    /* Info boxes shown in the dark hero section — edit labels and values freely, add or remove boxes */
    snapshot: [
        { label: "Thesis",  value: "High-quality private bank with strong deposit franchise, consistent profitability, and disciplined risk management." },
        { label: "Risk",    value: "Premium valuation, slowing loan growth, sensitivity to liquidity conditions, and rising digital/fintech competition." },
        { label: "Monitor", value: "CASA ratio, loan growth, net interest margin, asset quality, and fee-based income." }
    ],

    /* Full analysis — shown on the stock's own page (stock.html?ticker=BBCA).
       Edit the paragraphs below to fill in your complete personal analysis. */
    analysis: [
        {
            sectionTitle: "Business Overview",
            image: "",  /* Optional photo — e.g. "images/portfolio/bbca-overview.jpg". Leave empty for no photo. */
            imageSize: "full",            /* Photo size: "small" (200px), "medium" (380px), "large" (580px), "full" (full width) */
            paragraphs: [
                "Bank Central Asia is Indonesia's largest private bank and, by most measures, its most admired. Its business model is deceptively simple: gather the cheapest deposits in the country, lend them out conservatively, and collect a growing stream of fee income from the payment network that millions of Indonesians use every day.",
                "The heart of the franchise is transaction banking. BCA is not primarily where Indonesians chase the highest deposit rate; it is where they park their everyday money because the ecosystem — mobile banking, ATMs, merchant networks, corporate payrolls — makes leaving inconvenient. That convenience translates into an extraordinary funding structure: current and savings accounts (CASA) reached 85.2% of third-party funds in the first quarter of 2026, among the highest of any major bank in the region.",
                "Cheap, sticky funding is a structural advantage that compounds. It lets BCA earn a healthy net interest margin — 5.4% in early 2026, with full-year guidance of 5.4–5.6% — without stretching into risky lending, and it cushions the bank when interest rates move against the industry.",
                "Warren Buffett's observation about the industry captures why this matters: \"Banking is a very good business if you don't do anything dumb.\"",
                "BCA's entire history is essentially a long demonstration of not doing anything dumb."
            ]
        },
        {
            sectionTitle: "Why I Own This",
            image: "",
            paragraphs: [
                "The thesis rests on three pillars. First, the deposit franchise described above — a moat that competitors have spent two decades failing to replicate. Second, consistent profitability: return on equity has run in the 22–23% range, a level most global banks can only envy, achieved with conservative leverage and strong capital. Third, disciplined risk management: through the Asian financial crisis aftermath, the 2008 crisis, the pandemic, and every commodity cycle in between, BCA's asset quality has consistently outperformed the Indonesian banking system.",
                "There is also a macro argument. Indonesia remains an underbanked economy with a young population, a growing middle class, and rising formalization of business. Loan penetration relative to GDP is low compared with regional peers. A dominant, trusted bank sitting on top of that demographic runway does not need heroic assumptions to keep growing for decades.",
                "Finally, ownership here is a bet on compounding rather than re-rating. The market already knows BCA is excellent — which is precisely the risk section's problem — but excellence retained and reinvested at 20%+ returns on equity does the heavy lifting over a long holding period, regardless of what the multiple does in any given year."
            ]
        },
        {
            sectionTitle: "Financial Highlights",
            image: "",
            paragraphs: [
                "The latest numbers illustrate the machine at work — and show it navigating a tougher environment. Full-year 2025 net profit reached approximately Rp58 trillion, up about 5% from 2024, with earnings per share rising from Rp445 to Rp467. The first quarter of 2026 continued the pattern: net profit of Rp14.7 trillion, up 3.8% year-on-year, even as sector-wide credit demand cooled.",
                "The moat actually widened while growth slowed. CASA balances jumped 11.2% year-on-year in 1Q26, lifting the CASA ratio to a record 85.2%. Loan growth moderated to 5.6% year-on-year (total loans of Rp994 trillion), still led by corporate lending while consumer credit — particularly auto — weakened. NIM compressed to 5.4%, within management's full-year guidance of 5.4–5.6%, reflecting rate cuts and soft credit demand rather than funding deterioration.",
                "Two details deserve credit. Cost discipline sharpened, with the cost-to-income ratio improving to 27.3% in 1Q26. And although provisions rose 22.5% year-on-year to Rp1.2 trillion, pre-provision operating profit of Rp19.3 trillion gives the bank enormous headroom to absorb credit-cost normalization — prudence taken through the income statement, not deferred, which is exactly the behavior a long-term shareholder should want to see.",
                "None of these figures, taken alone, is the story. The story is their consistency: BCA produces this profile year after year, in a sector where most banks' results swing with the credit cycle."
            ]
        },
        {
            sectionTitle: "Risk Analysis",
            image: "",
            paragraphs: [
                "Every strength has a price, and BCA's price is literal: premium valuation. The stock persistently trades at a price-to-book multiple far above Indonesian and regional banking peers. A premium multiple means expectations are already high — when growth merely meets expectations, returns can be mediocre, and any stumble can compress the multiple painfully even if the business itself remains sound. The greatest risk to a BCA shareholder has rarely been the bank; it has been the price paid for it.",
                "The second risk is slower loan growth — no longer hypothetical, but visible in the numbers. Loan growth decelerated from 7.6% in 2025 to 5.6% by early 2026, with consumer and auto lending notably soft. As Indonesia's largest private lender, BCA is increasingly a proxy for the economy itself. If national credit demand stays weak, BCA cannot outgrow the system indefinitely without loosening standards it has no intention of loosening.",
                "Third is sensitivity to liquidity conditions. BCA's funding advantage is most valuable when system liquidity is tight and competitors must pay up for deposits. When liquidity is abundant and rates fall, the gap between BCA's funding cost and everyone else's narrows, and with it part of the margin advantage. Shifts in Bank Indonesia policy, government cash management, and global rate cycles all feed into this channel.",
                "A slower-burning risk deserves mention: digital competition. Fintech players and digital banks are attacking the payments layer that anchors BCA's deposit stickiness. So far BCA's own digital execution has neutralized the threat, but the moat here must be actively defended, not assumed."
            ]
        },
        {
            sectionTitle: "What I Monitor",
            image: "",
            paragraphs: [
                "Five indicators, in order of importance. The CASA ratio, because it is the moat made measurable — sustained erosion would be the earliest structural warning. Loan growth relative to system growth, to check that expansion is neither stalling nor being bought with looser standards. Net interest margin, as the joint readout of funding advantage and pricing discipline. Asset quality — NPL and loan-at-risk ratios along with provisioning coverage — because banking failures are always credit failures first. And fee-based income growth, which signals whether the transaction ecosystem is deepening or merely defending."
            ]
        },
        {
            sectionTitle: "Conclusion",
            image: "",
            paragraphs: [
                "BCA is the rare bank where the analysis is less about discovering hidden value and more about verifying that visible excellence remains intact. The deposit franchise is the moat, the ROE is the engine, and the discipline is the culture. The honest caveats are the entry price and the ceiling that size imposes on growth. As long as the CASA ratio holds, asset quality stays clean, and margins remain in their historical band, the thesis stands — and the right posture is patience, not activity."
            ]
        }
    ]
},
{
    ticker: "DKFT",
    logo: "images/portfolio/logo-dkft.png",   /* Path to logo, e.g. "images/portfolio/logo-dkft.png". Leave empty to show ticker text. */
    heroBg: "images/portfolio/hero-dkft.png",
    company: "Central Omega Resources Tbk",
    sector: "Mining",
    allocation: "Growth income",
    horizon: "Mid term",
    thesis: "Dominant microfinance franchise with wide distribution, strong customer base, and attractive exposure to Indonesia's productive economy.",
    risk: "Credit quality pressure in micro lending, funding cost increases, and economic slowdown.",
    monitor: "NPL ratio, loan restructuring, micro loan growth, cost of credit, and dividend sustainability.",

    analysis: [
        {
            sectionTitle: "Business Overview",
            image: "",  /* Optional photo — e.g. "images/portfolio/bbca-overview.jpg". Leave empty for no photo. */
            paragraphs: [
                "Write your overview here — the company's business model, its microfinance network, and the segments that drive its growth and profitability."
            ]
        },
        {
            sectionTitle: "Why I Own This",
            image: "",
            paragraphs: [
                "Dominant microfinance franchise with wide distribution, strong customer base, and attractive exposure to Indonesia's productive economy.",
                "Add your deeper reasoning here — why microfinance exposure is attractive, what structural tailwinds you see, and your long-term view."
            ]
        },
        {
            sectionTitle: "Financial Highlights",
            image: "",
            paragraphs: [
                "Add the key financial metrics you track — NPL, ROE, cost of credit, dividend yield, and any others relevant to your analysis."
            ]
        },
        {
            sectionTitle: "Risk Analysis",
            image: "",
            paragraphs: [
                "Credit quality pressure in micro lending, funding cost increases, and economic slowdown.",
                "Add a more detailed discussion of each risk and how you think about managing it."
            ]
        },
        {
            sectionTitle: "What I Monitor",
            image: "",
            paragraphs: [
                "NPL ratio, loan restructuring, micro loan growth, cost of credit, and dividend sustainability.",
                "Note any specific threshold or trigger that would change your position."
            ]
        },
        {
            sectionTitle: "Conclusion",
            image: "",
            paragraphs: [
                "Write your current conviction level, position sizing rationale, and what would change your view."
            ]
        }
    ]
},
{
    ticker: "ADRO",
    logo: "images/portfolio/logo-adro.png",   /* Path to logo, e.g. "images/portfolio/logo-adro.png". Leave empty to show ticker text. */
    heroBg: "images/portfolio/hero-adro.png",
    company: "Alamtri Resources Indonesia Tbk",
    sector: "Energy",
    allocation: "Defensive income",
    horizon: "Medium to long term",
    thesis: "Large telecom infrastructure owner with recurring demand for connectivity and potential value from digital infrastructure assets.",
    risk: "Competitive pricing, high capital expenditure, and execution risk in digital transformation.",
    monitor: "ARPU, subscriber quality, capex intensity, data revenue, and infrastructure monetization.",

    analysis: [
        {
            sectionTitle: "Business Overview",
            image: "",  /* Optional photo — e.g. "images/portfolio/bbca-overview.jpg". Leave empty for no photo. */
            paragraphs: [
                "Write your overview of TLKM here — its main infrastructure assets, subsidiary structure, and its role in Indonesia's digital ecosystem."
            ]
        },
        {
            sectionTitle: "Why I Own This",
            image: "",
            paragraphs: [
                "Large telecom infrastructure owner with recurring demand for connectivity and potential value from digital infrastructure assets.",
                "Add your investment rationale — why connectivity demand is structural, what optionality you see in TLKM's digital assets, and your long-term thesis."
            ]
        },
        {
            sectionTitle: "Financial Highlights",
            image: "",
            paragraphs: [
                "Add the key financial metrics — ARPU trends, data revenue growth, capex-to-revenue ratio, EBITDA margin, and dividend coverage."
            ]
        },
        {
            sectionTitle: "Risk Analysis",
            image: "",
            paragraphs: [
                "Competitive pricing, high capital expenditure, and execution risk in digital transformation.",
                "Elaborate on the competitive landscape, capex cycle concerns, and what transformation milestones you'd want to see."
            ]
        },
        {
            sectionTitle: "What I Monitor",
            image: "",
            paragraphs: [
                "ARPU, subscriber quality, capex intensity, data revenue, and infrastructure monetization.",
                "Add any specific event or metric shift that would prompt you to revisit the position."
            ]
        },
        {
            sectionTitle: "Conclusion",
            image: "",
            paragraphs: [
                "Write your current conviction level, time horizon reasoning, and what would change your view on TLKM."
            ]
        }
    ]
},

];

/* =====================================================================
   PORTFOLIO UPDATES — quarterly / annual report links.

   HOW TO EDIT
   Each year is a block with a list of quarters.
   - label   text shown, e.g. "Q1 2026" or "FY 2026"
   - url     link to a PDF or page, e.g. "reports/q1-2026.pdf"
             Leave url: "" if the report is not uploaded yet.
   - status  "available"  → shows as a clickable link (or plain text if url is empty)
             "coming"     → shows greyed out with "(Coming Soon)"

   HOW TO ADD A NEW YEAR
   Copy one year block (from "{" to "},") and paste it before the closing "];".
   Change "year" and update the quarters list.

   HOW TO ADD A NEW QUARTER
   Copy one quarter line inside "quarters: [ ... ]" and fill in the details.
   ===================================================================== */

const portfolioUpdates = [
    {
        year: "2026",
        quarters: [
            { label: "Q1 2026", url: "", status: "available" },
            { label: "Q2 2026", url: "", status: "available" },
            { label: "Q3 2026", url: "", status: "coming"    },
            { label: "FY 2026", url: "", status: "coming"    }
        ]
    }
];
