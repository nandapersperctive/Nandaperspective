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
   closing "];", and fill in every field. Also add a line for it in
   sitemap.xml (copy an existing stock.html?ticker=... entry and change
   the ticker) so search engines find it.
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
    thesis: "Low-cost nickel ore producer with improving margins, a strengthening balance sheet, and direct exposure to Indonesia's nickel downstreaming policy.",
    risk: "Nickel price volatility, production quota (RKAB) dependency, single-commodity concentration, and smelter economics.",
    monitor: "Nickel prices, RKAB quota approvals, production and sales volume, net profit margin, and smelter utilization.",

    analysis: [
        {
            sectionTitle: "Business Overview",
            image: "",  /* Optional photo — e.g. "images/portfolio/bbca-overview.jpg". Leave empty for no photo. */
            paragraphs: [
                "Central Omega Resources is an Indonesian nickel mining group with operations concentrated in Central and Southeast Sulawesi, the heart of the country's nickel belt. Through its subsidiaries, the company mines and sells nickel ore into the domestic market and operates a ferronickel processing facility, giving it a foot in both segments of Indonesia's nickel value chain: raw ore supply and downstream processing.",
                "The strategic backdrop matters more for DKFT than for most companies. Since Indonesia banned raw nickel ore exports, all ore must be sold to domestic smelters — a policy that transformed the country into the center of global nickel processing. For a miner like DKFT, this means a captive, growing domestic customer base sitting close to its mines, with demand structurally supported by the stainless steel and electric vehicle battery supply chains being built onshore.",
                "DKFT is a small player next to giants like Antam or the IMIP ecosystem, but small has its advantages: incremental production growth moves the needle, and operational improvements show up quickly in the bottom line."
            ]
        },
        {
            sectionTitle: "Why I Own This",
            image: "",
            paragraphs: [
                "The investment case is a combination of macro tailwind and micro execution. The macro tailwind is Indonesia's downstreaming policy: domestic nickel demand from smelters keeps ore absorbed locally, and every new processing facility tightens the market for the ore DKFT digs. The company is positioned exactly where national industrial policy is pushing value creation.",
                "The micro execution is visible in the numbers. This is a company whose profits are growing much faster than its revenue — the signature of expanding margins rather than mere volume. Management has been disciplined about costs, and the company is preparing to grow: it has applied to revise its RKAB (the government-approved work plan and budget) to raise production quotas, and secured a Rp245 billion credit facility to fund expansion, a small enough sum to leave the balance sheet comfortable.",
                "Warren Buffett's timing principle applies to cyclical stocks more than anywhere else: \"Be fearful when others are greedy and greedy when others are fearful.\"",
                "Nickel is a deeply cyclical commodity, and the time to study a miner is precisely when the market treats the whole sector with indifference. The position is a bet that DKFT's cost discipline lets it prosper across the cycle, not just at the top of it."
            ]
        },
        {
            sectionTitle: "Financial Highlights",
            image: "",
            paragraphs: [
                "Full-year 2025 showed the operating leverage clearly: revenue rose 7.9% year-on-year to Rp1.58 trillion, while net profit jumped 56.9% to Rp574.4 billion. Profit growing seven times faster than sales is margin expansion at work — better prices, better cost control, or both.",
                "The first quarter of 2026 accelerated the pattern. Revenue grew 20.2% year-on-year to Rp506 billion, driven by domestic nickel ore sales up 17.9%, while net profit surged roughly 73% to Rp238.5 billion. Net profit margin reached an exceptional ~47% — a level few miners anywhere achieve, and one that signals DKFT sits low on the industry cost curve. Notably, analysts observed that profit leapt even as production volume fell, underlining that efficiency and pricing, not tonnage, drove the result.",
                "For the full year 2026, management targets revenue of about Rp1.6 trillion and net profit of Rp628.9 billion. If Q1 is any guide — Rp238 billion of profit in a single quarter — that target may prove conservative, though commodity businesses have a way of humbling extrapolation."
            ]
        },
        {
            sectionTitle: "Risk Analysis",
            image: "",
            paragraphs: [
                "Every attraction here has a mirror-image risk. First and dominant: the nickel price. DKFT does not set the price of what it sells; the global market does. A margin of 47% at today's prices can compress brutally if nickel enters one of its periodic gluts — and Indonesia's own massive supply growth is the usual suspect behind such gluts. The very policy that guarantees DKFT's customers also floods the world with Indonesian nickel.",
                "Second, regulatory dependency. Production is capped by the government-approved RKAB quota. The planned quota increase is an opportunity, but it is also a reminder that DKFT's growth requires periodic state permission. Delays or rejections in RKAB approvals — a recurring industry complaint — directly cap revenue.",
                "Third, concentration. This is a single-commodity, single-country, few-assets company. There is no diversified cash flow to cushion a bad year in nickel, and mining operations in Sulawesi carry weather, logistics, and community-relations risks that large diversified miners can absorb more easily.",
                "Fourth, smelter economics. Ferronickel processing is energy-intensive and margin-volatile; a downstream facility can be a value-add in good times and a cash drain when processing spreads collapse. The smelter deserves separate scrutiny from the mining business, not consolidated applause."
            ]
        },
        {
            sectionTitle: "What I Monitor",
            image: "",
            paragraphs: [
                "Five things, in order. The nickel price and Indonesian supply dynamics, because they set the ceiling on everything else. RKAB quota approvals, because they set the volume DKFT is legally allowed to sell. Quarterly production and sales volumes against those quotas, to separate price-driven results from real operational growth. Net profit margin, because the ~47% level is extraordinary and its erosion would be the first sign the cycle has turned. And smelter utilization and profitability, to confirm downstream operations are adding value rather than consuming the mine's cash."
            ]
        },
        {
            sectionTitle: "Conclusion",
            image: "",
            paragraphs: [
                "DKFT is a focused, low-cost nickel producer riding the strongest industrial-policy tailwind in Indonesia, with financials — accelerating profit growth, premium margins, modest debt — that show a management team converting that tailwind into shareholder value. But it remains a small, single-commodity cyclical whose fortunes are leased from the nickel price and licensed by the state. The position deserves to be sized accordingly, watched quarterly, and judged over a full cycle rather than a good year. The thesis holds as long as costs stay low, quotas keep coming, and margins stay well above the industry's — the moment those three slip together, the cycle, not the company, is in charge."
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
    thesis: "Diversified energy group transitioning from thermal coal toward metallurgical coal, power, aluminum, and renewables, with strong cash generation and a generous dividend policy.",
    risk: "Coal price volatility, execution risk in the green transition, post-spinoff earnings decline, and capital intensity of new ventures.",
    monitor: "Coal prices, metallurgical coal volumes (ADMR), dividend sustainability, smelter and renewables progress, and cost discipline.",

    analysis: [
        {
            sectionTitle: "Business Overview",
            image: "",  /* Optional photo — e.g. "images/portfolio/bbca-overview.jpg". Leave empty for no photo. */
            paragraphs: [
                "Alamtri Resources Indonesia is the company formerly known as Adaro Energy — one of Indonesia's largest energy groups — midway through the most consequential reinvention in its history. In late 2024 it spun off its thermal coal engine, Adaro Andalan Indonesia (AADI), into a separate listing, and rebranded the remaining group as Alamtri. What is left is a deliberately different animal: metallurgical (coking) coal through Adaro Minerals (ADMR), one of Indonesia's largest mining services contractors (SIS), power generation, an aluminum smelter project in North Kalimantan, and a growing renewables portfolio spanning hydro and solar.",
                "The logic of the split was to separate the cash-rich but sunset thermal coal business from the growth assets, allowing Alamtri to pursue greener, processing-oriented ventures — and cleaner ESG optics — without the thermal coal discount hanging over the whole group.",
                "Peter Lynch's oldest rule applies with unusual force here: \"Know what you own, and know why you own it.\"",
                "Anyone holding ADRO today owns a fundamentally different company than the Adaro of two years ago. The analysis has to start from that fact."
            ]
        },
        {
            sectionTitle: "Why I Own This",
            image: "",
            paragraphs: [
                "The case rests on three legs. First, proven cash generation and shareholder returns: even in a transition year, Alamtri paid out essentially its entire 2025 profit — US$447.5 million, or 99.96% of net income — as dividends, worth Rp3.40 trillion (Rp118.26 per share, paid May 2026). Few Indonesian companies match this record of returning cash, and it reflects a controlling family with a long history of aligning with minority shareholders on payouts.",
                "Second, the metallurgical coal growth story. ADMR's coking coal serves steelmaking, not power generation — a commodity with a different demand curve and a scarcer supply base than thermal coal, and one that fits the aluminum smelter strategy: the group is effectively building an integrated energy-and-materials chain in Kalimantan.",
                "Third, optionality on the energy transition. The Kaltara aluminum smelter, hydropower plans, and solar projects are early-stage, but they are funded by a balance sheet and operating cash flow that most transition-story companies can only wish for. If even part of this portfolio matures, today's valuation — priced largely as a shrunken coal company — gets re-rated."
            ]
        },
        {
            sectionTitle: "Financial Highlights",
            image: "",
            paragraphs: [
                "The 2025 numbers must be read through the lens of the spinoff. Revenue fell 9.9% to US$1.87 billion, and net profit attributable to shareholders dropped 68% to US$447.7 million — a decline driven by the deconsolidation of the thermal coal business and by weaker commodity prices through the year. Within the smaller revenue base, mining contributed US$966 million and mining services US$865 million, confirming that the group's earnings engine is now split between ADMR's coal and SIS's contracting work.",
                "The encouraging signal came in the first quarter of 2026: net profit jumped 67% year-on-year to US$128.1 million. Annualized, that pace would comfortably exceed the whole of 2025 — evidence that the post-spinoff base is stabilizing and the remaining businesses are gaining traction rather than merely shrinking gracefully.",
                "The dividend deserves its own paragraph. Paying out 99.96% of profit is extraordinary — and double-edged. It signals confidence and discipline, but a payout ratio that high leaves nothing retained; it can only be sustained if operating cash flow keeps covering both the dividend and the group's ambitious capex pipeline. That tension between generosity and growth investment is the central capital-allocation question for this company."
            ]
        },
        {
            sectionTitle: "Risk Analysis",
            image: "",
            paragraphs: [
                "The first risk remains commodity prices. Metallurgical coal is less structurally challenged than thermal, but it is still cyclical, still hostage to Chinese and Indian steel demand, and the 68% profit fall in 2025 shows how fast the tide can go out.",
                "Second, execution risk in the transformation. Aluminum smelting and renewables are capital-hungry businesses in which Alamtri has limited operating history. Smelters are notorious for cost overruns and delays; renewables in Indonesia face tariff and offtake uncertainties. The green story is currently a promise, and promises consume cash before they produce it.",
                "Third, the dividend-versus-capex squeeze described above. If management insists on jumbo payouts while funding the smelter buildout, debt must fill the gap — and leverage layered onto cyclical earnings is how good companies manufacture bad years.",
                "Fourth, structural complexity. Post-spinoff, value sits in layered listed entities (ADRO, ADMR, and related companies), with holding-company discounts, related-party transactions, and minority-shareholder alignment all requiring ongoing vigilance."
            ]
        },
        {
            sectionTitle: "What I Monitor",
            image: "",
            paragraphs: [
                "Coal prices — metallurgical above all — because they still set the earnings weather. ADMR's production volumes and costs, as the group's primary profit engine. The dividend payout ratio against operating cash flow and capex, because the 99.96% payout is either a statement of strength or a warning sign, and the cash flow statement will say which. Milestones at the Kaltara smelter and renewables projects — budgets, timelines, first production — to judge whether the transition is real. And the balance sheet: net debt creeping upward while payouts stay jumbo would be the earliest signal that something has to give."
            ]
        },
        {
            sectionTitle: "Conclusion",
            image: "",
            paragraphs: [
                "Alamtri is a bet that one of Indonesia's best-run energy groups can do something very few commodity companies manage: redeploy a fortune earned in coal into durable assets on the right side of the energy transition, while paying shareholders handsomely along the way. The 2025 profit decline was the accounting cost of that choice; the 67% rebound in early 2026 is the first evidence the remaining engine works. The thesis holds as long as cash generation covers both the dividend and the buildout — and the moment those two start competing, the payout, the projects, or the balance sheet will tell the story before the headlines do."
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
