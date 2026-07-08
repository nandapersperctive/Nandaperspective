/* =====================================================================
   PUBLIC RESOURCES — semua teks dan daftar materi di halaman Public.
   Halaman ini dua bahasa (EN/ID) — `publicPageText` dan `publicResources`
   resolve ke bahasa yang aktif (lihat js/lang.js). Semua halaman lain di
   situs ini tetap satu bahasa (Inggris).
   =====================================================================

   HOW TO FILL IN MATERI (untuk PDF)
   ----------------------------------
   Setiap item PDF bisa punya field "content" berisi array bagian-bagian materi.
   Format tiap bagian:
       { heading: "Judul Sub-bagian", text: "Isi paragraf materi di sini." }

   Jika "content" terisi → tombol "Baca Materi" muncul otomatis di kartu.
   Jika "file" terisi    → tombol "Download" muncul.
   Jika keduanya ada     → kedua tombol muncul berdampingan.
   Jika keduanya kosong  → tombol "Coming Soon" abu-abu.

   HOW TO ADD A DOWNLOAD FILE
   --------------------------
   1. Taruh file PDF/Excel ke folder "downloads/"
   2. Di field "file" isi path-nya: "downloads/nama-file.pdf"
   File path sama untuk kedua bahasa — hanya perlu diisi sekali per item
   di publicResourcesID (field file/downloadFile di publicResourcesEN
   ikut menyalin path yang sama).

   HOW TO ADD A NEW RESOURCE / CATEGORY
   -------------------------------------
   - Salin satu blok { title, description, ... } dan tempel di dalam items: [...]
     pada KEDUA object (publicResourcesEN dan publicResourcesID), dengan
     urutan kategori/item yang sama persis di kedua bahasa.
   - Salin satu blok { category, items: [...] } untuk kategori baru
   ===================================================================== */

const publicPageTextEN = {
    eyebrow:      "Free Resources",
    title:        "Accounting for Everyone",
    description:  "Free accounting materials and templates to help small businesses, students, and the general public understand and apply good financial record-keeping.",
    downloadBtn:  "Free Download",
    readBtn:      "Read Material",
    comingSoon:   "Coming Soon",
    freeLabel:    "Free",
    noteEyebrow:  "Note",
    noteTitle:    "All these materials are shared completely free of charge.",
    noteBody:     "No registration needed. No cost. Just click download and use it for your business or learning needs.",
    printBtn:     "🖨 Print / Save as PDF",
    closeBtn:     "Close",
    openAppBtn:      "Open App",
    availableNowLabel: "Available Now",
    downloadIconBtn: "⬇ Download"
};

const publicPageTextID = {
    eyebrow:      "Free Resources",
    title:        "Akuntansi untuk Semua",
    description:  "Materi dan template akuntansi gratis untuk membantu UMKM, pelajar, dan masyarakat umum memahami dan menerapkan pencatatan keuangan yang baik.",
    downloadBtn:  "Download Gratis",
    readBtn:      "Baca Materi",
    comingSoon:   "Coming Soon",
    freeLabel:    "Gratis",
    noteEyebrow:  "Catatan",
    noteTitle:    "Semua materi ini dibagikan secara cuma-cuma.",
    noteBody:     "Tidak perlu registrasi. Tidak ada biaya. Cukup klik download dan gunakan untuk keperluan bisnis atau belajar Anda.",
    printBtn:     "🖨 Cetak / Simpan PDF",
    closeBtn:     "Tutup",
    openAppBtn:      "Buka Aplikasi",
    availableNowLabel: "Tersedia Sekarang",
    downloadIconBtn: "⬇ Download"
};

const publicPageText = (typeof getLang === "function" && getLang() === "id") ? publicPageTextID : publicPageTextEN;

const publicResourcesEN = [
    {
        category: "Accounting Basics",
        items: [
            {
                title: "What Is Accounting?",
                description: "A basic explanation of accounting, its function in business, and why financial record-keeping matters for small businesses.",
                type: "PDF",
                file: "",
                free: true,
                content: [
                    {
                        heading: "Definition of Accounting",
                        text: "Accounting is a systematic system for recording, measuring, classifying, and reporting the financial information of a business entity. Its purpose is to produce information that is useful to stakeholders in making economic decisions."
                    },
                    {
                        heading: "Why Is Accounting Important for Small Businesses?",
                        text: "Many small business owners run their business without organized financial records. As a result, it's hard to know whether the business is making a profit or a loss, hard to apply for a bank loan, and hard to make sound business decisions. With accounting, small business owners can monitor the financial health of their business at any time."
                    },
                    {
                        heading: "Main Functions of Accounting",
                        text: "1. Recording — Recording all financial transactions in chronological order.\n2. Classifying — Grouping transactions into appropriate categories.\n3. Summarizing — Presenting financial data in an easy-to-understand summary form.\n4. Reporting — Preparing financial statements as the final output of the accounting process."
                    },
                    {
                        heading: "Who Needs Accounting?",
                        text: "Accounting is needed by every type of business, from street vendors to multinational corporations. For small businesses, even simple record-keeping is a huge help in managing daily cash flow, calculating profit, and planning business growth."
                    }
                ]
            },
            {
                title: "The Basic Accounting Equation",
                description: "Understanding the concept of Assets = Liabilities + Equity as the foundation of the entire accounting system.",
                type: "PDF",
                file: "",
                free: true,
                content: [
                    {
                        heading: "The Basic Accounting Equation",
                        text: "The entire modern accounting system rests on one fundamental equation:\n\n        ASSETS = LIABILITIES + EQUITY\n\nThis equation must always stay balanced after every transaction. If it doesn't balance, there's a recording error somewhere."
                    },
                    {
                        heading: "Components of the Equation",
                        text: "ASSETS are all resources owned by the business that provide future economic benefit. Examples: cash, receivables, equipment, vehicles, and buildings.\n\nLIABILITIES are obligations the business owes to others that must be settled in the future. Examples: bank loans, accounts payable, and wages payable.\n\nEQUITY is the owner's claim on the business's assets after subtracting all liabilities. Equity increases from capital contributions and profit, and decreases from losses and owner's drawings (withdrawals by the owner)."
                    },
                    {
                        heading: "Example in Practice",
                        text: "Mrs. Sari opens a small shop with Rp 10,000,000 in capital.\n→ Assets (Cash) Rp 10,000,000 = Equity (Capital) Rp 10,000,000 ✓\n\nMrs. Sari buys a refrigerator for Rp 3,000,000 on credit.\n→ Assets increase (Refrigerator +Rp 3,000,000) and Liabilities increase (Payable +Rp 3,000,000)\n→ Total Assets Rp 13,000,000 = Liabilities Rp 3,000,000 + Equity Rp 10,000,000 ✓"
                    }
                ]
            },
            {
                title: "Types of Accounts",
                description: "A complete guide to the basic accounts: cash, receivables, payables, capital, revenue, and expenses.",
                type: "PDF",
                file: "",
                free: true,
                content: [
                    {
                        heading: "What Is an Account?",
                        text: "An account is a dedicated record used to track changes in the value of each financial item. Every type of asset, liability, equity, revenue, and expense has its own account."
                    },
                    {
                        heading: "1. Asset Accounts",
                        text: "Asset accounts record all the wealth owned by the business.\n• Current Assets: Cash, Cash in Bank, Accounts Receivable, Inventory, Supplies.\n• Fixed Assets: Equipment, Vehicles, Buildings, Land.\n• Normal balance of asset accounts: DEBIT (increases on the debit side, decreases on the credit side)."
                    },
                    {
                        heading: "2. Liability Accounts",
                        text: "Liability accounts record all of the business's obligations.\n• Short-Term Liabilities: Accounts Payable, Wages Payable, Taxes Payable.\n• Long-Term Liabilities: Bank Loans, Mortgage Payable.\n• Normal balance of liability accounts: CREDIT."
                    },
                    {
                        heading: "3. Equity Accounts",
                        text: "Equity accounts record the owner's claim on the business.\n• Owner's Capital, Drawings (withdrawals by the owner), Income Summary.\n• Normal balance: CREDIT (except Drawings, whose normal balance is Debit)."
                    },
                    {
                        heading: "4. Revenue Accounts",
                        text: "Revenue accounts record all income earned by the business.\n• Sales Revenue, Service Revenue, Other Revenue.\n• Normal balance: CREDIT."
                    },
                    {
                        heading: "5. Expense Accounts",
                        text: "Expense accounts record all costs of running the business.\n• Salary Expense, Rent Expense, Utilities Expense (electricity/water), Depreciation Expense, Cost of Goods Sold (COGS).\n• Normal balance: DEBIT."
                    }
                ]
            }
        ]
    },
    {
        category: "Accounting Cycle",
        items: [
            {
                title: "Small Business Accounting Cycle App",
                description: "A complete interactive app covering all 8 steps of the accounting cycle — transaction entry, general journal, general ledger, trial balance, adjustments, financial statements, and closing entries. Runs directly in your browser, no install needed.",
                type: "App",
                file: "downloads/siklus-akuntansi.html",
                downloadFile: "downloads/siklus-akuntansi-offline.html",
                free: true,
                content: []
            },
            {
                title: "Accounting Cycle Guide",
                description: "A complete explanation of the 8 steps of the accounting cycle: from transactions, journal entries, and the general ledger, to the trial balance and financial statements.",
                type: "PDF",
                file: "",
                free: true,
                content: [
                    {
                        heading: "What Is the Accounting Cycle?",
                        text: "The accounting cycle is a series of steps performed repeatedly every accounting period (usually monthly or annually) to produce accurate financial statements."
                    },
                    {
                        heading: "Step 1 — Identify and Analyze Transactions",
                        text: "Any event that has a financial impact on the business is called a transaction. Examples: selling goods, paying wages, buying equipment. Gather transaction evidence such as receipts, sales slips, invoices, and bank statements."
                    },
                    {
                        heading: "Step 2 — Recording in the General Journal",
                        text: "Every transaction is recorded in the General Journal using the double-entry system. Every transaction affects at least two accounts: one on the Debit side and one on the Credit side. Total Debits must always equal total Credits."
                    },
                    {
                        heading: "Step 3 — Posting to the General Ledger",
                        text: "After being recorded in the journal, each entry is transferred (posted) to the General Ledger. The General Ledger has one page per account, making it easy to see the total and balance of each account."
                    },
                    {
                        heading: "Step 4 — Trial Balance",
                        text: "A list of all accounts along with their balances at the end of the period. Used to verify that total Debits equal total Credits before making adjustments."
                    },
                    {
                        heading: "Step 5 — Adjusting Entries",
                        text: "Adjustments are made to record transactions that haven't yet been recorded or that need correcting: depreciation of fixed assets, accrued expenses not yet paid, unearned revenue, and supplies used up."
                    },
                    {
                        heading: "Step 6 — Adjusted Trial Balance",
                        text: "A trial balance rebuilt after all adjusting entries have been applied. This forms the basis for preparing the financial statements."
                    },
                    {
                        heading: "Step 7 — Financial Statements",
                        text: "Three main statements:\n• Income Statement — revenue minus expenses = net profit/loss.\n• Balance Sheet — the position of assets, liabilities, and equity.\n• Cash Flow Statement — the flow of money in and out."
                    },
                    {
                        heading: "Step 8 — Closing Entries",
                        text: "Closes all nominal accounts (revenue, expenses, drawings) so their balances return to zero, ready for the next period. Net profit/loss is transferred to the Capital account."
                    }
                ]
            },
            {
                title: "General Journal Template",
                description: "A complete Excel template with automatic formulas: 40 transaction rows, automatic Debit = Credit balance check, PSAK-compliant double-entry format. Nanda Perspective watermark.",
                type: "Excel",
                file: "downloads/template-jurnal-umum.xlsx",
                free: true,
                content: []
            },
            {
                title: "General Ledger Template",
                description: "An Excel template with 20 standard accounts (Cash, Receivables, Payables, Capital, Revenue, Expenses, etc.) with automatic running balances and a D/C indicator per row.",
                type: "Excel",
                file: "downloads/template-buku-besar.xlsx",
                free: true,
                content: []
            },
            {
                title: "Trial Balance Template",
                description: "A complete Excel trial balance template: 20 PSAK-compliant accounts, automatic balance check with a ✓ BALANCED / ✗ NOT BALANCED message, and color-coding by account type.",
                type: "Excel",
                file: "downloads/template-neraca-saldo.xlsx",
                free: true,
                content: []
            }
        ]
    },
    {
        category: "Financial Statements",
        items: [
            {
                title: "Income Statement Template",
                description: "A PSAK 1-compliant multi-step Excel template: Revenue → COGS → Gross Profit → Operating Expenses → Operating Profit → Tax → Net Profit. Everything is calculated automatically.",
                type: "Excel",
                file: "downloads/template-laporan-laba-rugi.xlsx",
                free: true,
                content: []
            },
            {
                title: "Balance Sheet Template",
                description: "A PSAK 1-compliant two-column Excel template: Current & Non-Current Assets vs. Liabilities & Equity. Automatically checks that Total Assets = Liabilities + Equity.",
                type: "Excel",
                file: "downloads/template-neraca.xlsx",
                free: true,
                content: []
            },
            {
                title: "Cash Flow Statement Template",
                description: "A PSAK 2 indirect-method Excel template: Operating, Investing & Financing Activities. The ending cash balance is automatically calculated from all three activities.",
                type: "Excel",
                file: "downloads/template-laporan-arus-kas.xlsx",
                free: true,
                content: []
            },
            {
                title: "How to Read Financial Statements",
                description: "A concise guide to understanding financial statements without needing to be an accountant first.",
                type: "PDF",
                file: "",
                free: true,
                content: [
                    {
                        heading: "Why Read Financial Statements?",
                        text: "Financial statements are your business's 'report card.' From these statements you can find out whether the business is making a profit or a loss, how large its assets are, how much debt it has, and how its cash position looks. Understanding financial statements helps you make smarter business decisions."
                    },
                    {
                        heading: "Reading the Income Statement",
                        text: "The Income Statement answers the question: 'Is my business profitable?'\n\nStructure:\n  Sales Revenue                Rp xxx\n  (−) Cost of Goods Sold      (Rp xxx)\n  = Gross Profit                Rp xxx\n  (−) Operating Expenses      (Rp xxx)\n  = NET PROFIT                  Rp xxx\n\nIf the result is positive → the business is profitable. Negative → the business is at a loss."
                    },
                    {
                        heading: "Reading the Balance Sheet",
                        text: "The Balance Sheet answers the question: 'What does my business own, and what does it owe?'\n\nLeft Side (Assets): everything the business owns.\nRight Side (Liabilities + Equity): where those assets were funded from.\n\nFormula: Total Assets = Total Liabilities + Total Equity\n\nIf equity keeps growing from period to period → the business is growing."
                    },
                    {
                        heading: "Simple Financial Ratios",
                        text: "• Current Ratio = Current Assets ÷ Current Liabilities\n  (above 1 means the business can cover its short-term debts)\n\n• Net Profit Margin = Net Profit ÷ Revenue × 100%\n  (the higher it is, the more efficiently the business turns sales into profit)\n\n• Inventory Turnover = COGS ÷ Average Inventory\n  (the higher it is, the faster stock is turning over)"
                    }
                ]
            }
        ]
    },
    {
        category: "Small Business Guides",
        items: [
            {
                title: "Simple Bookkeeping for Small Businesses",
                description: "A practical guide to daily bookkeeping for micro-business owners with no accounting background.",
                type: "PDF",
                file: "",
                free: true,
                content: [
                    {
                        heading: "Why Do Small Businesses Need Bookkeeping?",
                        text: "Many small businesses fail not because they can't sell, but because the owner doesn't know their financial condition. Sales money gets mixed with personal money, debts get forgotten, or the owner doesn't realize the business is actually losing money. Simple bookkeeping prevents all of this."
                    },
                    {
                        heading: "Step 1 — Separate Personal and Business Finances",
                        text: "Open a dedicated business bank account. All money coming in from sales goes into the business account. All business expenses are paid from the business account. If you need money for personal use, record it as 'drawings' (a withdrawal of capital)."
                    },
                    {
                        heading: "Step 2 — Record Every Transaction Every Day",
                        text: "At minimum, record:\n• Transaction date\n• Description (what happened)\n• Money in (revenue)\n• Money out (expense)\n• Current balance\n\nYou can use a notebook, a spreadsheet, or an app like the one available on this page."
                    },
                    {
                        heading: "Step 3 — Make a Simple Monthly Report",
                        text: "At the end of every month, calculate:\n• Total Revenue this month\n• Total Expenses this month\n• Profit/Loss = Revenue − Expenses\n• Ending Cash Balance for the month\n\nCompare it with the previous month to see the trend of your business."
                    },
                    {
                        heading: "Practical Tips",
                        text: "✓ Keep every receipt — photograph it with your phone if needed.\n✓ Record transactions right away, don't put it off.\n✓ Reconcile your cash balance with your bank account every month.\n✓ Don't be afraid to ask for help — small business consultants, cooperatives, or accounting students can help."
                    }
                ]
            },
            {
                title: "How to Create a Business Budget",
                description: "Easy steps to create a monthly budget for small businesses to keep spending under control.",
                type: "PDF",
                file: "",
                free: true,
                content: [
                    {
                        heading: "What Is a Business Budget?",
                        text: "A budget is a financial plan that sets revenue targets and spending limits for a given period. Budgets aren't just for large companies — small businesses need them even more, to avoid overspending and to plan for growth."
                    },
                    {
                        heading: "Steps to Build a Simple Budget",
                        text: "1. Estimate Revenue — What's your sales target for this month? Base it on the previous months' average or a new target.\n2. List Fixed Costs — Costs that stay the same every month: rent, permanent staff salaries, loan installments.\n3. List Variable Costs — Costs that change with sales: raw materials, shipping, commissions.\n4. Calculate the Difference — Revenue − Fixed Costs − Variable Costs = Remainder (target profit)."
                    },
                    {
                        heading: "Monitor and Evaluate",
                        text: "At the end of the month, compare actual results with the budget:\n• If revenue is below target → review your sales strategy.\n• If spending exceeds the budget → find areas to cut back.\n• Update next month's budget based on what you find."
                    }
                ]
            }
        ]
    }
];

const publicResourcesID = [
    {
        category: "Dasar Akuntansi",
        items: [
            {
                title: "Apa Itu Akuntansi?",
                description: "Penjelasan dasar tentang akuntansi, fungsinya dalam bisnis, dan mengapa pencatatan keuangan penting bagi UMKM.",
                type: "PDF",
                file: "",
                free: true,
                content: [
                    {
                        heading: "Pengertian Akuntansi",
                        text: "Akuntansi adalah sistem pencatatan, pengukuran, pengklasifikasian, dan pelaporan informasi keuangan suatu entitas bisnis secara sistematis. Tujuannya adalah menghasilkan informasi yang berguna bagi para pemangku kepentingan dalam mengambil keputusan ekonomi."
                    },
                    {
                        heading: "Mengapa Akuntansi Penting untuk UMKM?",
                        text: "Banyak pelaku UMKM menjalankan bisnis tanpa pencatatan keuangan yang teratur. Akibatnya, sulit mengetahui apakah bisnis untung atau rugi, sulit mengajukan pinjaman ke bank, dan sulit membuat keputusan bisnis yang tepat. Dengan akuntansi, pemilik UMKM dapat memantau kesehatan keuangan bisnis setiap saat."
                    },
                    {
                        heading: "Fungsi Utama Akuntansi",
                        text: "1. Pencatatan (Recording) — Mencatat semua transaksi keuangan secara kronologis.\n2. Pengklasifikasian (Classifying) — Mengelompokkan transaksi ke dalam kategori yang sesuai.\n3. Pengikhtisaran (Summarizing) — Menyajikan data keuangan dalam bentuk ringkasan yang mudah dipahami.\n4. Pelaporan (Reporting) — Menyusun laporan keuangan sebagai output akhir proses akuntansi."
                    },
                    {
                        heading: "Siapa yang Membutuhkan Akuntansi?",
                        text: "Akuntansi dibutuhkan oleh semua jenis usaha: dari pedagang kaki lima hingga perusahaan multinasional. Untuk UMKM, pencatatan sederhana pun sudah sangat membantu dalam mengelola arus kas harian, menghitung laba, dan merencanakan pengembangan usaha."
                    }
                ]
            },
            {
                title: "Persamaan Dasar Akuntansi",
                description: "Memahami konsep Aset = Liabilitas + Ekuitas sebagai fondasi seluruh sistem akuntansi.",
                type: "PDF",
                file: "",
                free: true,
                content: [
                    {
                        heading: "Persamaan Dasar Akuntansi",
                        text: "Seluruh sistem akuntansi modern berdiri di atas satu persamaan fundamental:\n\n        ASET = LIABILITAS + EKUITAS\n\nPersamaan ini harus selalu seimbang setelah setiap transaksi. Jika tidak seimbang, berarti ada kesalahan pencatatan."
                    },
                    {
                        heading: "Komponen Persamaan",
                        text: "ASET adalah segala sumber daya yang dimiliki bisnis dan memberikan manfaat ekonomi di masa depan. Contoh: kas, piutang, peralatan, kendaraan, dan gedung.\n\nLIABILITAS adalah kewajiban bisnis kepada pihak lain yang harus dilunasi di masa depan. Contoh: utang bank, utang usaha, dan utang gaji.\n\nEKUITAS adalah hak pemilik atas aset bisnis setelah dikurangi seluruh liabilitas. Ekuitas bertambah dari modal yang disetor dan laba, serta berkurang dari kerugian dan prive (penarikan oleh pemilik)."
                    },
                    {
                        heading: "Contoh Penerapan",
                        text: "Ibu Sari membuka warung dengan modal Rp 10.000.000.\n→ Aset (Kas) Rp 10.000.000 = Ekuitas (Modal) Rp 10.000.000 ✓\n\nIbu Sari membeli kulkas seharga Rp 3.000.000 secara kredit.\n→ Aset bertambah (Kulkas +Rp 3.000.000) dan Liabilitas bertambah (Utang +Rp 3.000.000)\n→ Total Aset Rp 13.000.000 = Liabilitas Rp 3.000.000 + Ekuitas Rp 10.000.000 ✓"
                    }
                ]
            },
            {
                title: "Jenis-Jenis Akun",
                description: "Panduan lengkap mengenal akun-akun dasar: kas, piutang, utang, modal, pendapatan, dan beban.",
                type: "PDF",
                file: "",
                free: true,
                content: [
                    {
                        heading: "Apa Itu Akun?",
                        text: "Akun (account) adalah catatan khusus yang digunakan untuk mencatat perubahan nilai dari setiap pos keuangan. Setiap jenis aset, liabilitas, ekuitas, pendapatan, dan beban memiliki akunnya sendiri."
                    },
                    {
                        heading: "1. Akun Aset",
                        text: "Akun aset mencatat semua kekayaan yang dimiliki bisnis.\n• Aset Lancar: Kas, Kas di Bank, Piutang Usaha, Persediaan Barang, Perlengkapan.\n• Aset Tetap: Peralatan, Kendaraan, Gedung, Tanah.\n• Saldo normal akun aset: DEBIT (bertambah di sisi debit, berkurang di sisi kredit)."
                    },
                    {
                        heading: "2. Akun Liabilitas",
                        text: "Akun liabilitas mencatat semua kewajiban bisnis.\n• Liabilitas Jangka Pendek: Utang Usaha, Utang Gaji, Utang Pajak.\n• Liabilitas Jangka Panjang: Utang Bank, Utang Hipotek.\n• Saldo normal akun liabilitas: KREDIT."
                    },
                    {
                        heading: "3. Akun Ekuitas",
                        text: "Akun ekuitas mencatat hak pemilik atas bisnis.\n• Modal Pemilik, Prive (penarikan oleh pemilik), Ikhtisar Laba Rugi.\n• Saldo normal: KREDIT (kecuali Prive yang normal di Debit)."
                    },
                    {
                        heading: "4. Akun Pendapatan",
                        text: "Akun pendapatan mencatat semua penghasilan bisnis.\n• Pendapatan Penjualan, Pendapatan Jasa, Pendapatan Lain-lain.\n• Saldo normal: KREDIT."
                    },
                    {
                        heading: "5. Akun Beban",
                        text: "Akun beban mencatat semua pengeluaran untuk menjalankan bisnis.\n• Beban Gaji, Beban Sewa, Beban Utilitas (listrik/air), Beban Penyusutan, HPP.\n• Saldo normal: DEBIT."
                    }
                ]
            }
        ]
    },
    {
        category: "Siklus Akuntansi",
        items: [
            {
                title: "Aplikasi Siklus Akuntansi UMKM",
                description: "Aplikasi interaktif lengkap 8 langkah siklus akuntansi — input transaksi, jurnal umum, buku besar, neraca saldo, penyesuaian, laporan keuangan, hingga jurnal penutup. Langsung pakai di browser, tanpa install.",
                type: "App",
                file: "downloads/siklus-akuntansi.html",
                downloadFile: "downloads/siklus-akuntansi-offline.html",
                free: true,
                content: []
            },
            {
                title: "Panduan Siklus Akuntansi",
                description: "Penjelasan lengkap 8 langkah siklus akuntansi: dari transaksi, jurnal, buku besar, neraca saldo, hingga laporan keuangan.",
                type: "PDF",
                file: "",
                free: true,
                content: [
                    {
                        heading: "Apa Itu Siklus Akuntansi?",
                        text: "Siklus akuntansi adalah serangkaian langkah yang dilakukan secara berulang setiap periode akuntansi (biasanya setiap bulan atau tahun) untuk menghasilkan laporan keuangan yang akurat."
                    },
                    {
                        heading: "Langkah 1 — Identifikasi dan Analisis Transaksi",
                        text: "Setiap kejadian yang memiliki dampak keuangan pada bisnis disebut transaksi. Contoh: penjualan barang, pembayaran gaji, pembelian peralatan. Kumpulkan bukti transaksi seperti kwitansi, nota, faktur, dan rekening koran."
                    },
                    {
                        heading: "Langkah 2 — Pencatatan ke Jurnal Umum",
                        text: "Setiap transaksi dicatat ke dalam Jurnal Umum menggunakan sistem double-entry (pencatatan ganda). Setiap transaksi mempengaruhi minimal dua akun: satu di sisi Debit dan satu di sisi Kredit. Total Debit harus selalu sama dengan total Kredit."
                    },
                    {
                        heading: "Langkah 3 — Posting ke Buku Besar",
                        text: "Setelah dicatat di jurnal, setiap entri dipindahkan (diposting) ke Buku Besar. Buku Besar berisi satu halaman untuk setiap akun, sehingga mudah melihat total dan saldo masing-masing akun."
                    },
                    {
                        heading: "Langkah 4 — Neraca Saldo (Trial Balance)",
                        text: "Daftar semua akun beserta saldonya pada akhir periode. Digunakan untuk memverifikasi bahwa total Debit sama dengan total Kredit sebelum membuat penyesuaian."
                    },
                    {
                        heading: "Langkah 5 — Jurnal Penyesuaian",
                        text: "Penyesuaian dilakukan untuk mencatat transaksi yang belum tercatat atau yang perlu dikoreksi: depresiasi aset tetap, beban yang masih terutang (akrual), pendapatan yang belum terrealisasi, dan perlengkapan yang terpakai."
                    },
                    {
                        heading: "Langkah 6 — Neraca Saldo Disesuaikan",
                        text: "Neraca saldo yang dibuat ulang setelah semua jurnal penyesuaian diterapkan. Ini adalah dasar penyusunan laporan keuangan."
                    },
                    {
                        heading: "Langkah 7 — Laporan Keuangan",
                        text: "Tiga laporan utama:\n• Laporan Laba Rugi — pendapatan dikurangi beban = laba/rugi bersih.\n• Neraca (Balance Sheet) — posisi aset, liabilitas, dan ekuitas.\n• Laporan Arus Kas — aliran uang masuk dan keluar."
                    },
                    {
                        heading: "Langkah 8 — Jurnal Penutup",
                        text: "Menutup semua akun nominal (pendapatan, beban, prive) agar saldonya kembali ke nol, siap untuk periode berikutnya. Laba/rugi bersih dipindahkan ke akun Modal."
                    }
                ]
            },
            {
                title: "Template Jurnal Umum",
                description: "Template Excel lengkap dengan formula otomatis: 40 baris transaksi, cek saldo Debit = Kredit, format PSAK double-entry. Watermark Nanda Perspective.",
                type: "Excel",
                file: "downloads/template-jurnal-umum.xlsx",
                free: true,
                content: []
            },
            {
                title: "Template Buku Besar",
                description: "Template Excel 20 akun standar (Kas, Piutang, Utang, Modal, Pendapatan, Beban, dll.) dengan saldo berjalan otomatis dan indikator D/K per baris.",
                type: "Excel",
                file: "downloads/template-buku-besar.xlsx",
                free: true,
                content: []
            },
            {
                title: "Template Neraca Saldo",
                description: "Template Excel neraca saldo lengkap: 20 akun PSAK, cek seimbang otomatis dengan pesan ✓ SEIMBANG / ✗ TIDAK SEIMBANG, kode warna per tipe akun.",
                type: "Excel",
                file: "downloads/template-neraca-saldo.xlsx",
                free: true,
                content: []
            }
        ]
    },
    {
        category: "Laporan Keuangan",
        items: [
            {
                title: "Template Laporan Laba Rugi",
                description: "Template Excel PSAK 1 multi-step: Pendapatan → HPP → Laba Kotor → Beban Operasi → Laba Usaha → Pajak → Laba Bersih. Semua dihitung otomatis.",
                type: "Excel",
                file: "downloads/template-laporan-laba-rugi.xlsx",
                free: true,
                content: []
            },
            {
                title: "Template Neraca (Balance Sheet)",
                description: "Template Excel PSAK 1 dua kolom: Aset Lancar & Tidak Lancar vs Liabilitas & Ekuitas. Cek seimbang Total Aset = Liabilitas + Ekuitas secara otomatis.",
                type: "Excel",
                file: "downloads/template-neraca.xlsx",
                free: true,
                content: []
            },
            {
                title: "Template Laporan Arus Kas",
                description: "Template Excel PSAK 2 metode tidak langsung: Aktivitas Operasi, Investasi & Pendanaan. Saldo akhir kas dihitung otomatis dari ketiga aktivitas.",
                type: "Excel",
                file: "downloads/template-laporan-arus-kas.xlsx",
                free: true,
                content: []
            },
            {
                title: "Cara Membaca Laporan Keuangan",
                description: "Panduan ringkas memahami laporan keuangan tanpa perlu jadi akuntan terlebih dahulu.",
                type: "PDF",
                file: "",
                free: true,
                content: [
                    {
                        heading: "Mengapa Perlu Membaca Laporan Keuangan?",
                        text: "Laporan keuangan adalah 'rapor' bisnis Anda. Dari laporan ini Anda bisa mengetahui apakah bisnis untung atau rugi, seberapa besar aset yang dimiliki, berapa banyak utang, dan bagaimana kondisi kas. Memahami laporan keuangan membantu Anda membuat keputusan bisnis yang lebih cerdas."
                    },
                    {
                        heading: "Membaca Laporan Laba Rugi",
                        text: "Laporan Laba Rugi menjawab pertanyaan: 'Apakah bisnis saya untung?'\n\nStrukturnya:\n  Pendapatan Penjualan         Rp xxx\n  (−) HPP / Beban Pokok       (Rp xxx)\n  = Laba Kotor                 Rp xxx\n  (−) Beban Operasional       (Rp xxx)\n  = LABA BERSIH                Rp xxx\n\nJika hasilnya positif → bisnis untung. Negatif → bisnis rugi."
                    },
                    {
                        heading: "Membaca Neraca",
                        text: "Neraca menjawab pertanyaan: 'Apa yang dimiliki dan apa yang dihutang bisnis saya?'\n\nSisi Kiri (Aset): semua yang dimiliki bisnis.\nSisi Kanan (Liabilitas + Ekuitas): dari mana aset itu didanai.\n\nRumus: Total Aset = Total Liabilitas + Total Ekuitas\n\nJika ekuitas terus bertambah dari periode ke periode → bisnis berkembang."
                    },
                    {
                        heading: "Rasio Keuangan Sederhana",
                        text: "• Rasio Lancar = Aset Lancar ÷ Liabilitas Lancar\n  (di atas 1 artinya bisnis mampu bayar utang jangka pendek)\n\n• Margin Laba Bersih = Laba Bersih ÷ Pendapatan × 100%\n  (semakin tinggi semakin efisien bisnis menghasilkan laba)\n\n• Perputaran Persediaan = HPP ÷ Rata-rata Persediaan\n  (semakin tinggi artinya stok berputar cepat)"
                    }
                ]
            }
        ]
    },
    {
        category: "Panduan UMKM",
        items: [
            {
                title: "Pembukuan Sederhana untuk UMKM",
                description: "Panduan praktis pembukuan harian bagi pelaku usaha mikro yang tidak berlatar belakang akuntansi.",
                type: "PDF",
                file: "",
                free: true,
                content: [
                    {
                        heading: "Mengapa UMKM Perlu Pembukuan?",
                        text: "Banyak usaha kecil gulung tikar bukan karena tidak laku, tapi karena tidak tahu kondisi keuangannya. Uang penjualan tercampur dengan uang pribadi, lupa bayar utang, atau tidak sadar bahwa bisnis sebenarnya rugi. Pembukuan sederhana mencegah semua ini."
                    },
                    {
                        heading: "Langkah 1 — Pisahkan Keuangan Pribadi dan Bisnis",
                        text: "Buka rekening bank khusus bisnis. Semua uang masuk dari penjualan masuk ke rekening bisnis. Semua pengeluaran bisnis dibayar dari rekening bisnis. Jika butuh uang pribadi, catat sebagai 'prive' (penarikan modal)."
                    },
                    {
                        heading: "Langkah 2 — Catat Setiap Transaksi Setiap Hari",
                        text: "Minimal catat:\n• Tanggal transaksi\n• Keterangan (apa yang terjadi)\n• Uang masuk (pendapatan)\n• Uang keluar (beban)\n• Saldo saat ini\n\nBisa pakai buku catatan, spreadsheet, atau aplikasi seperti yang tersedia di halaman ini."
                    },
                    {
                        heading: "Langkah 3 — Buat Laporan Bulanan Sederhana",
                        text: "Di akhir setiap bulan, hitung:\n• Total Pendapatan bulan ini\n• Total Pengeluaran bulan ini\n• Laba/Rugi = Pendapatan − Pengeluaran\n• Saldo Kas akhir bulan\n\nBandingkan dengan bulan sebelumnya untuk melihat tren bisnis."
                    },
                    {
                        heading: "Tips Praktis",
                        text: "✓ Simpan semua nota/kwitansi — foto dengan HP jika perlu.\n✓ Catat transaksi segera, jangan ditunda.\n✓ Rekonsiliasi saldo kas dengan rekening bank setiap bulan.\n✓ Jangan takut meminta bantuan — konsultan UMKM, koperasi, atau mahasiswa akuntansi bisa membantu."
                    }
                ]
            },
            {
                title: "Cara Membuat Anggaran Bisnis",
                description: "Langkah mudah membuat anggaran (budget) bulanan untuk UMKM agar pengeluaran terkontrol.",
                type: "PDF",
                file: "",
                free: true,
                content: [
                    {
                        heading: "Apa Itu Anggaran Bisnis?",
                        text: "Anggaran adalah rencana keuangan yang menetapkan target pendapatan dan batas pengeluaran untuk periode tertentu. Anggaran bukan hanya untuk perusahaan besar — UMKM justru sangat perlu anggaran agar tidak boros dan bisa merencanakan pertumbuhan."
                    },
                    {
                        heading: "Langkah Membuat Anggaran Sederhana",
                        text: "1. Estimasi Pendapatan — Berapa target penjualan bulan ini? Berdasarkan rata-rata bulan sebelumnya atau target baru.\n2. Daftar Biaya Tetap — Biaya yang sama setiap bulan: sewa, gaji karyawan tetap, cicilan.\n3. Daftar Biaya Variabel — Biaya yang berubah sesuai penjualan: bahan baku, ongkos kirim, komisi.\n4. Hitung Selisih — Pendapatan − Biaya Tetap − Biaya Variabel = Sisa (target laba)."
                    },
                    {
                        heading: "Pantau dan Evaluasi",
                        text: "Di akhir bulan, bandingkan realisasi dengan anggaran:\n• Jika pendapatan di bawah target → evaluasi strategi penjualan.\n• Jika pengeluaran melebihi anggaran → cari pos yang bisa dihemat.\n• Perbarui anggaran bulan berikutnya berdasarkan temuan ini."
                    }
                ]
            }
        ]
    }
];

const publicResources = (typeof getLang === "function" && getLang() === "id") ? publicResourcesID : publicResourcesEN;
