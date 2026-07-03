/* =====================================================================
   PUBLIC RESOURCES — semua teks dan daftar materi di halaman Public.
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

   HOW TO ADD A NEW RESOURCE / CATEGORY
   -------------------------------------
   - Salin satu blok { title, description, ... } dan tempel di dalam items: [...]
   - Salin satu blok { category, items: [...] } untuk kategori baru
   ===================================================================== */

const publicPageText = {
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
    closeBtn:     "Tutup"
};

const publicResources = [
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
