/* =====================================================================
   TEKS UMUM (BAHASA INDONESIA)
   Versi Indonesia dari content/site-text.js. Hanya dipakai saat
   pengunjung memilih bahasa ID (tombol EN/ID di header).

   CARA EDIT
   Ubah teks di antara tanda kutip " ... ". Kunci di sebelah kiri
   (misalnya navHome) harus sama persis dengan yang ada di
   content/site-text.js. Kalau satu teks tidak ada di sini, versi
   bahasa Inggris yang tampil.
   ===================================================================== */

if (typeof getLang === "function" && getLang() === "id") {
    Object.assign(siteText, {
        navHome: "Beranda",
        navArticles: "Tulisan",
        navPortfolio: "Portofolio",
        navPublic: "Publik",
        navAbout: "Tentang",
        navContact: "Kontak",
        navPrivacy: "Privasi",

        heroEyebrow: "Jurnal pribadi",
        heroTitleHtml: 'Baca Luas.<br>Pikir <em class="hero-accent">Dalam.</em><br>Tulis Jujur.',
        heroDescription: "Ruang pribadi untuk menjelajahi gagasan seputar bisnis, pasar, dan pemikiran sehari-hari, ditulis oleh seorang mahasiswa yang sedang belajar melihat dunia dengan lebih jernih.",
        readArticles: "Baca Tulisan",
        viewPortfolio: "Lihat Portofolio",

        approachTitle: "Menulis untuk memahami, bukan sekadar bereaksi terhadap pasar.",
        approachBody: "Setiap tulisan berawal dari satu pertanyaan sederhana: apa yang sebenarnya menentukan nilai sebuah aset, bisnis, atau kebijakan ekonomi?",

        latestThinking: "Pemikiran terbaru",
        latestArticles: "Tulisan Terbaru",
        searchLabel: "Cari",
        sortLabel: "Urutkan",
        sortNewest: "Terbaru",
        sortOldest: "Terlama",
        sortReadTime: "Waktu baca",
        searchPlaceholder: "Cari topik, kategori, atau judul",
        emptyTitle: "Tulisan tidak ditemukan",
        emptyBody: "Coba kata kunci lain atau pilih kategori yang berbeda.",
        readArticleLink: "Baca Tulisan",
        readFeaturedLink: "Baca",
        articlesShownSuffix: "tulisan ditampilkan",
        filterAll: "Semua",

        contactEyebrow: "Hubungi Saya",
        contactTitle: "Punya pertanyaan atau masukan?",
        contactBody: "Isi formulir di bawah ini. Formulir akan membuka aplikasi email kamu, siap dikirim langsung ke nandaperspective@gmail.com.",
        contactNameLabel: "Nama",
        contactNamePlaceholder: "Nama kamu",
        contactEmailLabel: "Email Kamu",
        emailPlaceholder: "nama@email.com",
        contactMessageLabel: "Pesan",
        contactMessagePlaceholder: "Apa yang ingin kamu sampaikan?",
        contactSend: "Kirim Email",

        backToTop: "Kembali ke atas",
        backToHome: "Kembali ke beranda",
        backToArticles: "← Kembali ke daftar tulisan",
        relatedArticles: "Tulisan Terkait",

        articleNotFoundTitle: "Tulisan tidak ditemukan",
        articleNotFoundMeta: "Silakan kembali ke daftar tulisan.",
        articleNotFoundBody: "Tulisan yang kamu cari tidak tersedia atau tautannya sudah berubah.",
        articleNotFoundButton: "Lihat Semua Tulisan",

        audiobookEyebrow: "Audiobook",
        audiobookBody: "Dengarkan versi audiobook dari tulisan ini.",

        /* Pencarian situs */
        searchButton: "Cari",
        searchAria: "Cari konten",
        searchDialogAria: "Pencarian situs",
        searchInputPlaceholder: "Cari tulisan, saham, atau topik…",
        searchHint: "Ketik kata kunci untuk mencari di semua halaman.",
        searchEmpty: "Tidak ada hasil untuk",
        closeLabel: "Tutup",

        /* Tombol bagikan */
        shareButton: "Bagikan",
        shareInsightLabel: "Bagikan tulisan ini",
        shareAnalysisLabel: "Bagikan analisis ini",
        shareResourceLabel: "Bagikan materi ini",
        copyLink: "Salin Tautan",
        copied: "✓ Tersalin!",
        igToast: "Tautan tersalin! Sekarang buka Instagram dan tempel di story, bio, atau DM kamu.",
        notFound: "Tidak ditemukan",

        nowPlaying: "Sedang Diputar",
        tocTitle: "Daftar Isi",
        viewLabel: "Lihat",
        comingSoon: "Segera Hadir",

        /* Sidebar halaman tulisan */
        sidebarAuthorBio: "Mahasiswa Akuntansi Universitas Syiah Kuala yang menulis tentang investasi, ekonomi, dan bisnis dari sudut pandang jangka panjang.",
        aboutMeLink: "Tentang saya →",
        sidebarPortfolioBody: "Lihat saham yang saya miliki dan analisis di balik setiap posisi.",
        viewPortfolioLink: "Lihat Portofolio →",

        /* Halaman Tentang & Portofolio */
        aboutEyebrow: "Profil Pribadi",
        portfolioUpdateTitle: "Pembaruan Portofolio",

        /* Halaman Privasi */
        privacyEyebrow: "Legal",
        privacyTitle: "Kebijakan Privasi",
        privacyUpdated: "Terakhir diperbarui: 29 Juli 2026",
        privacyIntro: "Nanda Perspective adalah jurnal pribadi. Halaman ini menjelaskan dengan bahasa sederhana data apa yang dikumpulkan saat kamu berkunjung dan alasannya.",
        privacyAnalyticsTitle: "Analitik",
        privacyAnalyticsBody: "Situs ini memakai Google Analytics untuk mengetahui tulisan mana yang dibaca dan bagaimana pengunjung menemukan situs ini, misalnya halaman yang dilihat, perkiraan lokasi (tingkat kota/negara), jenis perangkat, dan sumber rujukan. Google Analytics memasang cookie untuk keperluan ini. Tidak ada profil pribadi yang dibuat di luar data standar yang dikumpulkan Google Analytics, dan data ini tidak pernah dijual.",
        privacyContactTitle: "Formulir kontak",
        privacyContactBodyHtml: 'Formulir kontak di beranda tidak mengirim data ke server. Formulir itu membuka aplikasi email kamu sendiri dengan pesan yang sudah terisi dan ditujukan ke <a href="mailto:nandaperspective@gmail.com">nandaperspective@gmail.com</a>. Apa pun yang kamu ketik di sana tidak disimpan oleh situs ini.',
        privacyCookiesTitle: "Cookie",
        privacyCookiesBody: "Selain cookie dari Google Analytics, situs ini memakai penyimpanan lokal browser kamu hanya untuk preferensi kamu sendiri: pilihan bahasa (Inggris/Indonesia) dan catatan error lokal untuk perbaikan situs. Semua itu tidak pernah keluar dari perangkat kamu.",
        privacyThirdTitle: "Layanan pihak ketiga",
        privacyThirdBody: "Situs ini memuat font dari Google Fonts dan analitik dari Google Analytics. Keduanya layanan Google dengan kebijakan privasi masing-masing.",
        privacyQuestionsTitle: "Pertanyaan",
        privacyQuestionsBodyHtml: 'Kalau ada pertanyaan tentang kebijakan ini, kirim email ke <a href="mailto:nandaperspective@gmail.com">nandaperspective@gmail.com</a>.',

        /* Halaman 404 */
        notFoundEyebrow: "404 · Halaman tidak ditemukan",
        notFoundTitle: "Halaman ini tidak ada.",
        notFoundBody: "Tautannya mungkin rusak, atau halamannya sudah dipindahkan. Yuk kembali ke halaman yang berguna.",
        notFoundHomeButton: "Kembali ke Beranda"
    });
}
