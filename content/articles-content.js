/* =====================================================================
   ARTICLES — all the article text lives in this file.
   =====================================================================
   No HTML or code knowledge needed to edit articles here.

   HOW TO EDIT AN EXISTING ARTICLE
   1. Find the article you want to change (look at "title" to spot it).
   2. Change the text between quotes " ... " however you like.
   3. Don't delete quotes ("), commas (,), or curly braces { }.
   4. Save the file. Done — no other steps needed.

   HOW TO ADD A NEW SECTION TO AN ARTICLE
   Each article is divided into "sections". Each section has:
   - "sectionTitle"  → the heading shown above that section
   - "paragraphs"    → the text inside that section (one item per paragraph)

   To add a new paragraph inside a section, add a new line, e.g.:
       "paragraphs": [
           "First paragraph.",
           "My new paragraph here."
       ]

   To add a new section, copy a section block and paste it inside
   the "sections: [ ... ]" list of the article you want to update.

   HOW TO ADD A NEW ARTICLE
   1. Copy one article block below, from "{" to its closing "},".
   2. Paste it at the very bottom of the list, before the "];".
   3. Change "id" to a number not already used by another article.
   4. Fill in all the text fields.

   HOW TO ADD OR REMOVE A CATEGORY
   Categories are created automatically from the articles — no separate list to edit.
   To add a new category: write a new article and set a new categoryKey + category.
       categoryKey: "psychology",
       category:    "Psychology",
   That's it. The filter button will appear automatically on the homepage.
   To remove a category: delete (or change) all articles that use that categoryKey.
   The filter button disappears automatically when no articles use it.

   HOW TO CHANGE THE BIG BLUE FEATURED ARTICLE ON THE HOME PAGE
   The home page shows one article in a big navy banner above the grid.
   1. Find the article you want featured below.
   2. Add the line  featured: true,  anywhere inside that article's block
      (right after "id:" is a good spot).
   3. If another article already has featured: true, remove that line
      (or set it to false) so only one article is featured at a time.
   4. Save. No other steps needed — the order of articles in this file
      does not matter for this.
   If no article has featured: true, the first article in this file is
   used automatically.

   WHAT EACH ARTICLE FIELD MEANS
   - id            unique article number, must not repeat
   - featured      (optional) set to true to show this article in the
                   big navy banner on the home page. See instructions above.
   - categoryKey   short identifier for filtering, e.g. "investment", "macro", "book"
                   must match exactly across articles of the same category
   - dateValue     article date, format: YEAR-MONTH-DAY (used for sorting)
   - readMinutes   estimated read time in minutes, a plain number
   - title         article title
   - category      category label shown on the page, e.g. "Investment", "Macro"
                   this also becomes the filter button label — no extra step needed
   - readTime      read-time text shown on the page, e.g. "3 min read"
   - date          date text shown on the page, e.g. "23 June 2026"
   - excerpt       short summary shown in the article list and as a
                   subtitle at the top of the article page
   - image         (optional) foto ditampilkan di DUA tempat:
                   1. Thumbnail di kartu artikel halaman utama (pojok atas kartu)
                   2. Hero photo di atas Table of Contents di halaman artikel
                   Taruh file gambar di folder images/articles/ lalu isi path-nya di sini.
                   Contoh: image: "images/articles/article-inflation.jpg"
                   Jika field ini tidak ada (atau diisi "") → kartu tampil seperti biasa (teks saja).
   - imageAlt      (optional) teks alt untuk foto. Default: judul artikel.
   - imageCaption  (optional) keterangan foto, muncul di bawah foto halaman artikel.
   - sections      list of sections, each with "sectionTitle" + "paragraphs"
   ===================================================================== */

const articleCatalog = [
{
    id: 1,
    featured: true,
    categoryKey: "investment",
    dateValue: "2026-06-23",
    readMinutes: 3,
    title: "Why Students Should Learn Investing Early",
    category: "Investment",
    readTime: "3 min read",
    date: "23 June 2026",
    excerpt: "Investing is not only for wealthy people. Students can start by understanding assets, cash flow, and risk management.",
    image: "images/articles/article-id1.png",
    imageAlt: "Why Students Should Learn Investing Early",
    sections: [
        {
            sectionTitle: "Time Is the Student's Greatest Asset",
            paragraphs: [
                "Many students believe investing is something to think about \"later\" — after graduation, after landing a job, after the salary gets comfortable. But the truth is the opposite: the earlier you start, the less money you actually need. What students lack in capital, they more than make up for in time.",
                "Compound growth rewards patience above all else. A student who invests a small amount monthly from age 20 will often end up wealthier than someone who invests three times as much starting at 35. The money is not doing the heavy lifting — time is.",
                "As Warren Buffett once put it: \"Someone's sitting in the shade today because someone planted a tree a long time ago.\"",
                "Starting early is planting that tree. Even a modest portfolio built during university becomes the seed of long-term financial independence."
            ]
        },
        {
            sectionTitle: "Learn the Language Before You Need It",
            paragraphs: [
                "Investing forces you to understand three things every adult eventually needs: assets, cash flow, and risk. An asset puts money into your pocket; a liability takes it out. Cash flow tells you whether your habits are building wealth or draining it. Risk management teaches you that protecting capital matters more than chasing quick gains.",
                "Buffett's most famous rule captures this mindset: \"Rule No. 1: Never lose money. Rule No. 2: Never forget Rule No. 1.\"",
                "Students who internalize this early avoid the most expensive lessons — panic selling, gambling on hype, and confusing speculation with investing."
            ]
        },
        {
            sectionTitle: "Small Mistakes Now Beat Big Mistakes Later",
            paragraphs: [
                "University is the cheapest classroom for financial mistakes. Losing a small sum on a poorly researched stock at 20 is tuition; making the same mistake with a family's savings at 40 is a disaster. Early exposure builds the emotional discipline — patience, skepticism, and consistency — that no textbook can teach.",
                "Benjamin Franklin said it best: \"An investment in knowledge pays the best interest.\"",
                "Before buying any asset, invest in understanding it. Read financial statements. Follow how businesses actually make money. For accounting students especially, this turns classroom theory into living practice."
            ]
        },
        {
            sectionTitle: "How to Start as a Student",
            paragraphs: [
                "Start with what you have, not what you wish you had. Build a small emergency fund first. Then begin with low-cost, diversified instruments — index funds or mutual funds — rather than trying to pick winning stocks. Automate a fixed amount each month, even if it is small. Consistency beats intensity.",
                "And remember Buffett's advice on saving: \"Do not save what is left after spending, but spend what is left after saving.\""
            ]
        },
        {
            sectionTitle: "Closing Thought",
            paragraphs: [
                "Investing early is not about getting rich in college. It is about building the habits, knowledge, and temperament that compound for decades — long before the stakes get high. The best time to plant the tree was yesterday. The second-best time is today."
            ]
        }
    ]
},

{
    id: 2,
    categoryKey: "economics",
    dateValue: "2026-06-23",
    readMinutes: 2,
    title: "How BI Interest Rates Affect Stock Prices",
    category: "Economics",
    readTime: "2 min read",
    date: "23 June 2026",
    excerpt: "Interest rate changes often influence the stock market, company valuations, and investor decisions.",
    image: "images/articles/article-id2.png",
    imageAlt: "How BI Interest Rates Affect Stock Prices",
    sections: [
        {
            sectionTitle: "How Interest Rates Work",
            paragraphs: [
                "Interest rates are one of the most important tools in monetary policy."
            ]
        },
        {
            sectionTitle: "The Transmission to Stock Prices",
            paragraphs: [
                "When rates rise, risk-free assets become more attractive. At the same time, companies may face higher borrowing costs, which can pressure earnings forecasts and valuations."
            ]
        },
        {
            sectionTitle: "Who Weathers Rate Cycles Best",
            paragraphs: [
                "The impact is not always equal across sectors. Companies with strong balance sheets, low debt, and stable cash flow are usually more resilient than businesses that depend heavily on cheap financing."
            ]
        }
    ]
},

{
    id: 3,
    categoryKey: "business",
    dateValue: "2026-06-24",
    readMinutes: 9,
    title: "How to Read Financial Statements Without Getting Trapped by Big Numbers",
    category: "Business",
    readTime: "9 min read",
    date: "24 June 2026",
    excerpt: "Large revenue does not always mean a healthy business. Investors need to examine earnings quality, cash flow, and capital structure.",
    image: "images/articles/article-id3.png",
    imageAlt: "How to Read Financial Statements Without Getting Trapped by Big Numbers",
    sections: [
        {
            sectionTitle: "Revenue Is Vanity, Profit Is Sanity, Cash Is Reality",
            paragraphs: [
                "A company announces record revenue and the headlines celebrate. The stock jumps, analysts raise their targets, and social media fills with screenshots of the press release. But experienced investors know that big numbers are often where the analysis begins, not where it ends. Revenue can grow while the business quietly deteriorates. Profits can be manufactured on paper while cash drains out the back door. A balance sheet can look impressive right up until the moment it collapses.",
                "Warren Buffett likes to say that accounting is the language of business. If that is true, then financial statements are the text — and like any text, they can be read carelessly or read well. This article is about reading them well: looking past the headline figures to the three things that actually determine whether a business is healthy — earnings quality, cash flow, and capital structure.",
                "This old accounting saying survives because it keeps proving true. Revenue tells you a company can sell; it says nothing about whether it sells profitably, or whether the money ever actually arrives. A business can book billions in sales while margins shrink, receivables pile up, and debt finances the whole show.",
                "Consider what a revenue figure really is: a number produced by a set of recognition rules, applied by management, with real discretion at the edges. When can a sale be recorded? What counts as delivered? How are multi-year contracts split across periods? What about sales to distributors who have not yet sold anything to end customers? Every one of those questions has a defensible range of answers, and the difference between the conservative end and the aggressive end of that range can be enormous.",
                "This is why big revenue growth should trigger curiosity, not celebration. Growth that comes from genuine customer demand looks very different, under the surface, from growth that comes from stuffing distribution channels, loosening credit terms, or booking long-term contracts up front. On the surface, both produce the same beautiful chart.",
                "Buffett has long warned against taking reported figures at face value: \"Managers that always promise to 'make the numbers' will at some point be tempted to make up the numbers.\"",
                "So start with the income statement, but never stop there."
            ]
        },
        {
            sectionTitle: "Earnings Quality: Not How Much, but How",
            paragraphs: [
                "Two companies can report identical profits with very different realities behind them. The size of earnings is on the front page; the quality of earnings is buried in the details. Quality means durability — profits that come from the core business, recur year after year, and convert into actual cash.",
                "When examining earnings quality, ask a few blunt questions. First, where do the profits come from? Operating profit from selling products is fundamentally different from a one-time gain on selling a building, a revaluation of assets, a favorable tax settlement, or a change in accounting estimates. One-time items are not necessarily dishonest, but they tell you nothing about next year. A company that routinely needs \"exceptional\" gains to hit its targets is telling you something important about its ordinary business.",
                "Second, how do earnings compare with operating cash flow over several years? Net income is an opinion shaped by accounting choices — depreciation schedules, provision estimates, revenue recognition policies. Operating cash flow is much harder to dress up. In a healthy business the two track each other reasonably well over time. When reported profits march steadily upward while operating cash flow stagnates or falls, the gap has to be explained by something: ballooning receivables, swelling inventory, capitalized costs that used to be expensed. Each of those has an innocent explanation and a sinister one, and your job is to find out which applies.",
                "Third, watch the trend in receivables and inventory relative to sales. If revenue grows 15 percent but receivables grow 40 percent, the company may be borrowing growth from the future — booking sales that customers have not paid for and may never pay for. If inventory grows much faster than sales, products may be piling up because demand is weaker than the revenue line suggests.",
                "History is full of cautionary tales here. Enron reported spectacular earnings almost to the end. WorldCom turned ordinary expenses into \"investments\" and manufactured billions in fake profit. Wirecard showed years of impressive growth before admitting that 1.9 billion euros of cash simply did not exist. In every case, the headline numbers were big and the quality behind them was hollow — and in every case, skeptical readers of the statements saw the warning signs early: profits without cash, growth without explanation, complexity without purpose."
            ]
        },
        {
            sectionTitle: "Follow the Cash",
            paragraphs: [
                "The cash flow statement is the least glamorous of the three main reports and the most honest one. It answers the only question that ultimately matters: is money actually coming in?",
                "Focus first on cash from operations. Is the business collecting real cash from customers, after paying suppliers and employees? A consistently positive and growing operating cash flow is the signature of a genuinely healthy company. A consistently negative one means the business is being kept alive by outside money — and outside money always has conditions.",
                "Then look at the relationship among the three sections. A mature, self-sustaining company typically generates cash from operations, spends part of it on investments, and returns part to shareholders or creditors. A company that funds dividends and expansion from its own operations is fundamentally different from one that funds them by borrowing or endlessly issuing new shares. Both may report the same net income; only the cash flow statement reveals the difference.",
                "Free cash flow — operating cash flow minus capital expenditure — deserves special attention, because it represents the money the business truly has left over after maintaining and growing itself. Companies with strong free cash flow have options: they can survive downturns, buy competitors, raise dividends, or simply wait. Companies without it live at the mercy of their lenders.",
                "As Charlie Munger put it: \"It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent.\"",
                "Reading the cash flow statement is exactly that kind of \"not stupid\" discipline. It rarely feels clever. It will not give you a dramatic thesis to post about. But it filters out most disasters before they can reach your portfolio."
            ]
        },
        {
            sectionTitle: "Capital Structure: Who Really Owns This Company?",
            paragraphs: [
                "Finally, turn to the balance sheet and ask a simple question: how is all of this financed? Every asset a company holds is paid for either by owners (equity) or by someone who expects to be paid back (debt). The mix between the two — the capital structure — determines how fragile or resilient the business is.",
                "Leverage is a magnifier. A heavily indebted company looks brilliant in good years, because profits are earned on a small equity base. The same company can be destroyed by a single bad year, because interest must be paid regardless of how business is going. Debt does not care about your growth story.",
                "Buffett's most quoted warning applies directly: \"Only when the tide goes out do you discover who's been swimming naked.\"",
                "Rising markets and cheap credit hide weak capital structures; recessions and rate hikes expose them. So check the numbers before the tide goes out. Look at the debt-to-equity ratio, and compare it with industry peers rather than judging it in isolation — utilities and banks live with leverage that would kill a software company. Look at interest coverage: how many times can operating profit pay the annual interest bill? A ratio comfortably above three or four suggests breathing room; a ratio near one means the company is working mostly for its creditors. Look at the maturity schedule in the notes: a mountain of debt due next year is a very different risk from the same debt spread over a decade. And look at what kind of debt it is — fixed or floating rate, secured or unsecured, in which currency.",
                "One more balance-sheet habit worth building: read the equity section skeptically. Retained earnings that grew through decades of real profit are not the same as equity inflated by revaluations or accounting adjustments. And a large pile of goodwill from past acquisitions is a monument to prices paid, not value guaranteed — it can be written off in a single painful quarter."
            ]
        },
        {
            sectionTitle: "Read the Notes — That Is Where the Truth Lives",
            paragraphs: [
                "The financial statements proper occupy a few pages; the notes often run to a hundred or more. That ratio is not an accident. The notes are where companies disclose the accounting policies they chose, the estimates they made, the lawsuits they face, the commitments they signed, the related-party transactions they entered, and the debt covenants they must obey.",
                "Nobody reads the notes for fun, and that is precisely the opportunity. Most bad surprises in investing were disclosed somewhere in the notes long before they hit the headlines. Make it a rule: any item in the main statements that is large, growing fast, or hard to understand gets traced to its note. If the note does not make it clearer — if the language turns foggy exactly where the money gets big — treat that fog as information.",
                "Benjamin Graham, the father of value investing, set the standard for this kind of skeptical care: \"The investor's chief problem — and even his worst enemy — is likely to be himself.\"",
                "The biggest numbers on the page are the ones most likely to trigger excitement, and excitement is exactly the state in which investors skip the notes."
            ]
        },
        {
            sectionTitle: "Red Flags Worth Memorizing",
            paragraphs: [
                "Over time, certain patterns show up again and again before trouble arrives, and it pays to recognize them on sight. Profits that grow every single quarter with machine-like smoothness, in an industry that is anything but smooth, suggest earnings are being managed rather than earned. A sudden change of auditor, or an auditor's report with qualified language, deserves far more attention than the market usually gives it. Frequent changes in accounting policy that always happen to flatter results are a pattern, not a coincidence. Heavy selling of shares by insiders while the company issues optimistic guidance is a mismatch between words and actions — trust the actions. Acquisitions announced just as organic growth stalls often exist to muddy comparisons, because merged numbers are harder to benchmark against the past. None of these signs proves wrongdoing on its own; each one simply raises the burden of proof. When three or four appear together, the wise response is usually to walk away, no matter how big the revenue number is."
            ]
        },
        {
            sectionTitle: "A Practical Reading Order",
            paragraphs: [
                "Putting it all together, here is a simple discipline for opening any annual report. Resist the urge to start with the headline profit. Read the cash flow statement first, because it shows reality. Read the balance sheet second, because it shows resilience. Read the income statement third, because it shows performance — and by now you will have the context to judge whether that performance is real. Then read the notes for anything that surprised you, compare this year against at least the previous four so trends replace snapshots, and finish by asking the summary questions: Do profits become cash? Is growth financed by customers or by creditors? Would this company survive two bad years in a row?",
                "None of this requires advanced mathematics. It requires patience, skepticism, and the willingness to be bored for an hour — a small price for avoiding permanent losses."
            ]
        },
        {
            sectionTitle: "Closing Thought",
            paragraphs: [
                "Big numbers are designed to impress; financial statements are designed to inform. The investor's job is to refuse the first and insist on the second. Revenue answers whether people buy. Earnings quality answers whether the business truly profits. Cash flow answers whether the money is real. Capital structure answers whether the company will survive. Ask all four questions, in that order, every time — and no big number will ever trap you again."
            ]
        }
    ]
},


{
    id: 5,
    categoryKey: "economics",
    dateValue: "2026-06-25",
    readMinutes: 5,
    title: "What Is Inflation? Understanding the Silent Force That Shrinks Your Money",
    category: "Economics",
    readTime: "5 min read",
    date: "25 June 2026",
    excerpt: "Prices rise, money weakens, and savings quietly lose value. Understanding inflation is the first step to protecting yourself from it.",
    image: "images/articles/article-id5.png",
    imageAlt: "What Is Inflation? Understanding the Silent Force That Shrinks Your Money",
    sections: [
        {
            sectionTitle: "The Definition",
            paragraphs: [
                "Ask your parents what a plate of fried rice cost when they were students, and the answer will sound absurd. The dish has not changed; the money has. That slow, steady erosion in what a unit of currency can buy is inflation — and it is one of the most important economic forces in your financial life, precisely because it works quietly.",
                "Inflation is a sustained increase in the general level of prices across an economy. The key words are sustained and general. One product getting more expensive is not inflation; that is a relative price change. A one-off jump that reverses next month is not inflation either. Inflation means that, on average, most goods and services cost more this year than last year — and will likely cost more again next year.",
                "The mirror image is what matters to you: when prices rise, the purchasing power of money falls. If inflation runs at 5 percent, the same banknote buys roughly 5 percent less than it did a year ago. Nothing was taken from your wallet, yet you are poorer in real terms.",
                "Ronald Reagan described this quality memorably: \"Inflation is as violent as a mugger, as frightening as an armed robber and as deadly as a hit man.\"",
                "The comparison is dramatic, but the point is fair: unlike a visible tax, inflation takes value without ever announcing itself."
            ]
        },
        {
            sectionTitle: "How Inflation Is Measured",
            paragraphs: [
                "Statisticians track inflation by pricing a \"basket\" of goods and services that a typical household buys — food, housing, transport, education, healthcare — and comparing the basket's cost over time. The result is the Consumer Price Index (CPI), and the percentage change in the CPI is the headline inflation rate you see in the news.",
                "The measure is useful but imperfect. Your personal inflation rate depends on what you buy. A student who spends heavily on food and rent may experience much higher inflation than the national average suggests, while someone whose spending tilts toward electronics — which tend to fall in price — may experience less. Economists also watch core inflation, which strips out volatile food and energy prices to reveal the underlying trend."
            ]
        },
        {
            sectionTitle: "What Causes It",
            paragraphs: [
                "Economists group the causes into three broad families. Demand-pull inflation happens when total spending grows faster than the economy can produce: too much money chasing too few goods. Think of stimulus-fueled booms or rapid credit expansion. Cost-push inflation happens when production costs rise — oil shocks, supply chain disruptions, currency depreciation that makes imports expensive — and companies pass those costs to consumers. Built-in inflation comes from expectations: when workers expect prices to rise, they demand higher wages; higher wages raise costs; higher costs raise prices. The spiral feeds itself.",
                "Behind all three, most economists agree, sits the supply of money. Milton Friedman, the Nobel laureate who spent a career studying the subject, put it in the most quoted sentence in monetary economics: \"Inflation is always and everywhere a monetary phenomenon.\"",
                "When money is created much faster than the economy grows, each unit of it commands less of the real output — and prices adjust upward to say so."
            ]
        },
        {
            sectionTitle: "Why a Little Is Normal and a Lot Is Dangerous",
            paragraphs: [
                "Most central banks do not aim for zero inflation. A low, stable rate — often around 2 to 3 percent — is considered healthy. It gives wages and prices room to adjust, encourages spending and investment rather than hoarding cash, and provides a buffer against deflation, the opposite condition in which falling prices cause consumers to delay purchases and economies to stall.",
                "The danger begins when inflation is high, volatile, or unanchored. High inflation scrambles the price signals that markets rely on: businesses cannot tell whether demand for their product is really rising or whether all prices are simply drifting up. Long-term planning becomes guesswork. And in extreme cases — hyperinflation — money fails entirely. In Weimar Germany in 1923, prices doubled every few days and workers were paid twice daily so they could shop before the money lost value. Zimbabwe in 2008 and Venezuela in the 2010s replayed the same tragedy. John Maynard Keynes understood the political stakes: \"There is no subtler, no surer means of overturning the existing basis of society than to debauch the currency.\""
            ]
        },
        {
            sectionTitle: "Who Wins and Who Loses",
            paragraphs: [
                "Inflation is not neutral; it silently redistributes wealth. Savers holding cash lose, because their money buys less each year. Lenders lose on fixed-rate loans, because they are repaid in cheaper money — which means, symmetrically, that borrowers with fixed-rate debt win. People on fixed incomes, such as pensioners, lose as their purchasing power erodes. Owners of real assets — property, productive businesses, equities — tend to be better protected, because the value and earnings of those assets can rise along with prices.",
                "This is exactly why inflation matters for investors, and especially for young ones. The real enemy of long-term wealth is not market volatility; it is leaving money idle while inflation compounds against you. Cash sitting in a low-interest account at 2 percent while inflation runs at 5 percent is losing 3 percent of its real value every year — guaranteed, silently, without a single red number on the statement."
            ]
        },
        {
            sectionTitle: "What You Can Do About It",
            paragraphs: [
                "You cannot control inflation, but you can position yourself for it. Think in real returns, not nominal ones: an investment yielding 7 percent during 4 percent inflation earns 3 percent in reality. Keep an emergency fund in cash, but recognize that cash beyond that buffer is a slowly melting asset. Favor productive assets for long-term money — diversified stock funds, businesses, skills and education that raise your earning power — because these historically outpace inflation over long horizons. And when comparing salaries, loans, or returns across years, always adjust for inflation before drawing conclusions."
            ]
        },
        {
            sectionTitle: "Closing Thought",
            paragraphs: [
                "Inflation is the quiet arithmetic running underneath every financial decision you will ever make. It cannot be seen in your account balance, only in what that balance can buy. Learn to measure it, respect it, and invest ahead of it — because the price of ignoring inflation is paid every single year, whether you notice or not."
            ]
        }
    ]
}
];

