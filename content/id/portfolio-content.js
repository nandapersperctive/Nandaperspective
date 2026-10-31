/* =====================================================================
   PORTOFOLIO (BAHASA INDONESIA)
   Versi Indonesia dari content/portfolio-content.js. Hanya dipakai saat
   pengunjung memilih bahasa ID.

   CARA KERJA
   Setiap saham ditandai dengan kode tickernya (BBCA, DKFT, ADRO).
   Bagian analisis diterjemahkan berurutan: bagian pertama di sini
   menggantikan teks bagian pertama di file bahasa Inggris, dan
   seterusnya. Logo, foto, dan ukuran foto tetap diambil dari file
   bahasa Inggris.
   ===================================================================== */

const stockPageTextID = {
    backLink:             "Kembali ke portofolio",
    contentsLabel:        "Daftar Isi",
    viewAnalysisLink:     "Lihat Analisis Lengkap",
    otherHoldingsEyebrow: "Portofolio",
    otherHoldingsTitle:   "Saham Lainnya",
    disclaimerTitle:      "Bukan Saran Investasi",
    disclaimerBody:       "Analisis di halaman ini mencerminkan riset dan penalaran pribadi pada satu titik waktu. Ini bukan rekomendasi untuk membeli, menjual, atau menahan efek apa pun. Keputusan investasi mengandung risiko, dan penalaran di masa lalu bisa berubah seiring munculnya informasi baru. Selalu lakukan riset sendiri sebelum mengambil keputusan investasi."
};

const portfolioTextID = {
    portfolioEyebrow: "Portofolio pribadi",
    portfolioTitle: "Saham yang Saya Miliki dan Analisis di Baliknya",
    portfolioDescription: "Gambaran terstruktur tentang saham yang dimiliki, tesis investasi, faktor risiko, dan catatan pemantauan. Halaman ini adalah dokumentasi pribadi, bukan saran investasi.",
    portfolioStyleLabel: "Gaya",
    portfolioStyleValue: "Jangka panjang, kualitas lebih dulu",
    portfolioRiskLabel: "Kendali Risiko",
    portfolioRiskValue: "Kualitas bisnis + disiplin valuasi",
    portfolioUpdatedLabel: "Diperbarui",
    portfolioUpdatedValue: "Juni 2026",
    holdingsEyebrow: "Saham dimiliki",
    holdingsTitle: "Analisis Saham Saat Ini",
    portfolioNoteEyebrow: "Catatan penting",
    portfolioNoteTitle: "Portofolio ini adalah jurnal belajar.",
    portfolioNoteBody: "Analisis di sini mencatat penalaran pribadi dan bisa berubah seiring munculnya informasi baru. Analisis ini tidak boleh dianggap sebagai rekomendasi untuk membeli atau menjual saham apa pun."
};

const portfolioFieldLabelsID = {
    thesis: "Tesis",
    risk: "Risiko",
    monitor: "Pantauan",
    sector: "Sektor",
    allocation: "Peran",
    horizon: "Horizon"
};

const portfolioHoldingsID = {

BBCA: {
    sector: "Perbankan",
    allocation: "Saham inti",
    horizon: "Jangka panjang",
    thesis: "Bank swasta berkualitas tinggi dengan basis dana murah yang kuat, profitabilitas yang konsisten, dan manajemen risiko yang disiplin.",
    risk: "Valuasi premium, pertumbuhan kredit yang melambat, sensitivitas terhadap kondisi likuiditas, dan persaingan digital/fintech yang makin ketat.",
    monitor: "Rasio CASA, pertumbuhan kredit, margin bunga bersih, kualitas aset, dan pendapatan berbasis komisi.",
    analysis: [
        {
            sectionTitle: "Gambaran Bisnis",
            paragraphs: [
                "Bank Central Asia adalah bank swasta terbesar di Indonesia dan, dari banyak sisi, yang paling dikagumi. Model bisnisnya tampak sederhana: menghimpun dana termurah di negeri ini, menyalurkannya sebagai kredit secara hati-hati, dan mengumpulkan pendapatan komisi yang terus tumbuh dari jaringan pembayaran yang dipakai jutaan orang Indonesia setiap hari.",
                "Jantung waralabanya adalah perbankan transaksi. BCA bukan terutama tempat orang Indonesia mengejar bunga deposito tertinggi; BCA adalah tempat mereka menyimpan uang sehari-hari karena ekosistemnya (mobile banking, ATM, jaringan merchant, payroll perusahaan) membuat pindah bank terasa merepotkan. Kenyamanan itu menghasilkan struktur pendanaan yang luar biasa: giro dan tabungan (CASA) mencapai 85,2% dari dana pihak ketiga pada kuartal pertama 2026, salah satu yang tertinggi di antara bank besar di kawasan ini.",
                "Pendanaan yang murah dan loyal adalah keunggulan struktural yang terus berlipat. Keunggulan ini memungkinkan BCA meraih margin bunga bersih yang sehat (5,4% pada awal 2026, dengan panduan setahun penuh 5,4–5,6%) tanpa harus masuk ke kredit berisiko, dan melindungi bank ketika suku bunga bergerak merugikan industri.",
                "Pengamatan Warren Buffett tentang industri ini menjelaskan kenapa hal itu penting: “Perbankan adalah bisnis yang sangat bagus selama kamu tidak melakukan hal bodoh.”",
                "Seluruh sejarah BCA pada dasarnya adalah pembuktian panjang tentang tidak melakukan hal bodoh."
            ]
        },
        {
            sectionTitle: "Kenapa Saya Memilikinya",
            paragraphs: [
                "Tesisnya bertumpu pada tiga pilar. Pertama, basis dana murah yang dijelaskan di atas, parit pertahanan yang selama dua dekade gagal ditiru pesaing. Kedua, profitabilitas yang konsisten: imbal hasil ekuitas berada di kisaran 22–23%, level yang hanya bisa diimpikan kebanyakan bank global, dicapai dengan leverage yang konservatif dan permodalan yang kuat. Ketiga, manajemen risiko yang disiplin: melewati dampak krisis keuangan Asia, krisis 2008, pandemi, dan setiap siklus komoditas di antaranya, kualitas aset BCA konsisten lebih baik daripada sistem perbankan Indonesia.",
                "Ada juga argumen makro. Indonesia masih merupakan ekonomi yang belum banyak tersentuh layanan perbankan, dengan populasi muda, kelas menengah yang tumbuh, dan formalisasi usaha yang meningkat. Penetrasi kredit terhadap PDB masih rendah dibandingkan negara tetangga. Bank yang dominan dan dipercaya, yang berdiri di atas landasan demografi seperti itu, tidak butuh asumsi muluk untuk terus tumbuh selama puluhan tahun.",
                "Terakhir, kepemilikan di sini adalah taruhan pada pertumbuhan majemuk, bukan pada kenaikan valuasi. Pasar sudah tahu BCA itu unggul (dan justru itulah masalah di bagian risiko), tetapi keunggulan yang ditahan dan diinvestasikan kembali dengan imbal hasil ekuitas di atas 20% akan bekerja keras sepanjang periode kepemilikan yang panjang, terlepas dari apa yang terjadi pada valuasinya di tahun tertentu."
            ]
        },
        {
            sectionTitle: "Sorotan Keuangan",
            paragraphs: [
                "Angka terbaru memperlihatkan mesin ini bekerja, sekaligus menunjukkan kemampuannya melewati kondisi yang lebih berat. Laba bersih setahun penuh 2025 mencapai sekitar Rp58 triliun, naik sekitar 5% dari 2024, dengan laba per saham naik dari Rp445 menjadi Rp467. Kuartal pertama 2026 melanjutkan pola itu: laba bersih Rp14,7 triliun, naik 3,8% secara tahunan, meskipun permintaan kredit di seluruh sektor melemah.",
                "Paritnya justru melebar saat pertumbuhan melambat. Saldo CASA melonjak 11,2% secara tahunan pada 1Q26, mendorong rasio CASA ke rekor 85,2%. Pertumbuhan kredit melambat menjadi 5,6% secara tahunan (total kredit Rp994 triliun), masih dipimpin kredit korporasi sementara kredit konsumer (terutama kendaraan) melemah. NIM turun ke 5,4%, masih dalam panduan manajemen untuk setahun penuh sebesar 5,4–5,6%, yang mencerminkan penurunan suku bunga dan lemahnya permintaan kredit, bukan memburuknya pendanaan.",
                "Dua detail layak diapresiasi. Disiplin biaya makin tajam, dengan rasio biaya terhadap pendapatan membaik menjadi 27,3% pada 1Q26. Dan meskipun pencadangan naik 22,5% secara tahunan menjadi Rp1,2 triliun, laba operasional sebelum pencadangan sebesar Rp19,3 triliun memberi bank ruang yang sangat lega untuk menyerap normalisasi biaya kredit. Kehati-hatian itu diambil lewat laporan laba rugi, bukan ditunda, dan itulah perilaku yang seharusnya ingin dilihat pemegang saham jangka panjang.",
                "Tidak satu pun angka ini, jika dilihat sendiri, adalah ceritanya. Ceritanya adalah konsistensinya: BCA menghasilkan profil seperti ini tahun demi tahun, di sektor yang hasil kebanyakan banknya naik turun mengikuti siklus kredit."
            ]
        },
        {
            sectionTitle: "Analisis Risiko",
            paragraphs: [
                "Setiap keunggulan ada harganya, dan harga BCA itu harfiah: valuasi premium. Sahamnya terus diperdagangkan pada rasio harga terhadap nilai buku yang jauh di atas bank-bank Indonesia dan kawasan. Valuasi premium berarti ekspektasi sudah tinggi: ketika pertumbuhan hanya sesuai harapan, imbal hasilnya bisa biasa saja, dan sedikit saja tersandung bisa menekan valuasi dengan menyakitkan meskipun bisnisnya tetap sehat. Risiko terbesar bagi pemegang saham BCA jarang datang dari banknya; risikonya datang dari harga yang dibayar untuk membelinya.",
                "Risiko kedua adalah pertumbuhan kredit yang melambat, yang kini bukan lagi hipotesis, tetapi sudah terlihat di angka. Pertumbuhan kredit melambat dari 7,6% pada 2025 menjadi 5,6% pada awal 2026, dengan kredit konsumer dan kendaraan yang jelas melemah. Sebagai pemberi kredit swasta terbesar di Indonesia, BCA makin menjadi cerminan ekonomi itu sendiri. Kalau permintaan kredit nasional tetap lemah, BCA tidak bisa terus tumbuh melampaui sistem tanpa melonggarkan standar yang sama sekali tidak ingin ia longgarkan.",
                "Ketiga adalah sensitivitas terhadap kondisi likuiditas. Keunggulan pendanaan BCA paling bernilai saat likuiditas sistem ketat dan pesaing harus membayar mahal untuk mendapatkan dana. Saat likuiditas melimpah dan suku bunga turun, selisih biaya dana BCA dengan bank lain menyempit, dan sebagian keunggulan marginnya ikut hilang. Perubahan kebijakan Bank Indonesia, pengelolaan kas pemerintah, dan siklus suku bunga global semuanya memengaruhi jalur ini.",
                "Ada satu risiko yang bergerak lebih lambat tetapi layak disebut: persaingan digital. Pemain fintech dan bank digital menyerang lapisan pembayaran yang menjadi penahan loyalitas dana di BCA. Sejauh ini eksekusi digital BCA sendiri berhasil menetralkan ancaman itu, tetapi parit di sini harus dipertahankan secara aktif, bukan dianggap pasti."
            ]
        },
        {
            sectionTitle: "Yang Saya Pantau",
            paragraphs: [
                "Lima indikator, diurutkan dari yang paling penting. Rasio CASA, karena rasio ini adalah parit yang bisa diukur: penurunan yang terus-menerus akan menjadi peringatan struktural paling awal. Pertumbuhan kredit dibandingkan pertumbuhan sistem, untuk memastikan ekspansi tidak macet dan tidak dibeli dengan standar yang lebih longgar. Margin bunga bersih, sebagai cerminan gabungan dari keunggulan pendanaan dan disiplin harga. Kualitas aset (rasio NPL dan loan-at-risk beserta cakupan pencadangan) karena kegagalan bank selalu diawali kegagalan kredit. Dan pertumbuhan pendapatan berbasis komisi, yang menunjukkan apakah ekosistem transaksinya makin dalam atau sekadar bertahan."
            ]
        },
        {
            sectionTitle: "Kesimpulan",
            paragraphs: [
                "BCA adalah bank langka yang analisisnya bukan soal menemukan nilai tersembunyi, melainkan memastikan keunggulan yang terlihat tetap utuh. Basis dana murah adalah paritnya, ROE adalah mesinnya, dan disiplin adalah budayanya. Catatan jujurnya adalah harga masuk dan batas pertumbuhan akibat ukurannya yang sudah besar. Selama rasio CASA bertahan, kualitas aset tetap bersih, dan margin tetap di kisaran historisnya, tesis ini tetap berlaku, dan sikap yang tepat adalah sabar, bukan banyak bergerak."
            ]
        }
    ]
},

DKFT: {
    sector: "Pertambangan",
    allocation: "Pertumbuhan dan pendapatan",
    horizon: "Jangka menengah",
    thesis: "Produsen bijih nikel berbiaya rendah dengan margin yang membaik, neraca yang makin kuat, dan paparan langsung terhadap kebijakan hilirisasi nikel Indonesia.",
    risk: "Gejolak harga nikel, ketergantungan pada kuota produksi (RKAB), konsentrasi pada satu komoditas, dan keekonomian smelter.",
    monitor: "Harga nikel, persetujuan kuota RKAB, volume produksi dan penjualan, margin laba bersih, dan utilisasi smelter.",
    analysis: [
        {
            sectionTitle: "Gambaran Bisnis",
            paragraphs: [
                "Central Omega Resources adalah grup tambang nikel Indonesia dengan operasi yang terpusat di Sulawesi Tengah dan Sulawesi Tenggara, jantung sabuk nikel negeri ini. Melalui anak usahanya, perusahaan menambang dan menjual bijih nikel ke pasar domestik serta mengoperasikan fasilitas pengolahan feronikel, sehingga punya pijakan di dua segmen rantai nilai nikel Indonesia: pasokan bijih mentah dan pengolahan hilir.",
                "Latar belakang strategis lebih menentukan bagi DKFT dibandingkan kebanyakan perusahaan. Sejak Indonesia melarang ekspor bijih nikel mentah, semua bijih harus dijual ke smelter dalam negeri, kebijakan yang mengubah Indonesia menjadi pusat pengolahan nikel dunia. Bagi penambang seperti DKFT, ini berarti basis pelanggan domestik yang terjamin dan terus tumbuh di dekat tambangnya, dengan permintaan yang secara struktural didukung rantai pasok baja nirkarat dan baterai kendaraan listrik yang sedang dibangun di dalam negeri.",
                "DKFT adalah pemain kecil dibandingkan raksasa seperti Antam atau ekosistem IMIP, tetapi kecil juga ada untungnya: tambahan produksi sedikit saja sudah berdampak besar, dan perbaikan operasional cepat terlihat di laba bersih."
            ]
        },
        {
            sectionTitle: "Kenapa Saya Memilikinya",
            paragraphs: [
                "Alasan investasinya adalah gabungan angin pendorong makro dan eksekusi mikro. Angin pendorong makronya adalah kebijakan hilirisasi Indonesia: permintaan nikel domestik dari smelter membuat bijih terserap di dalam negeri, dan setiap fasilitas pengolahan baru memperketat pasar bijih yang digali DKFT. Perusahaan berada tepat di tempat kebijakan industri nasional mendorong penciptaan nilai.",
                "Eksekusi mikronya terlihat di angka. Ini perusahaan yang labanya tumbuh jauh lebih cepat daripada pendapatannya, ciri margin yang melebar, bukan sekadar volume yang bertambah. Manajemen disiplin soal biaya, dan perusahaan sedang bersiap tumbuh: mengajukan revisi RKAB (rencana kerja dan anggaran yang disetujui pemerintah) untuk menaikkan kuota produksi, dan mendapatkan fasilitas kredit Rp245 miliar untuk membiayai ekspansi, jumlah yang cukup kecil sehingga neraca tetap nyaman.",
                "Prinsip waktu dari Warren Buffett paling berlaku untuk saham siklikal: “Takutlah ketika orang lain serakah, dan serakahlah ketika orang lain takut.”",
                "Nikel adalah komoditas yang sangat siklikal, dan waktu untuk mempelajari perusahaan tambang justru saat pasar memperlakukan seluruh sektor dengan acuh. Posisi ini adalah taruhan bahwa disiplin biaya DKFT memungkinkannya berjaya sepanjang siklus, bukan hanya di puncaknya."
            ]
        },
        {
            sectionTitle: "Sorotan Keuangan",
            paragraphs: [
                "Setahun penuh 2025 memperlihatkan leverage operasional dengan jelas: pendapatan naik 7,9% secara tahunan menjadi Rp1,58 triliun, sementara laba bersih melonjak 56,9% menjadi Rp574,4 miliar. Laba yang tumbuh tujuh kali lebih cepat daripada penjualan adalah tanda margin yang melebar: harga yang lebih baik, pengendalian biaya yang lebih baik, atau keduanya.",
                "Kuartal pertama 2026 mempercepat pola itu. Pendapatan tumbuh 20,2% secara tahunan menjadi Rp506 miliar, didorong penjualan bijih nikel domestik yang naik 17,9%, sementara laba bersih melonjak sekitar 73% menjadi Rp238,5 miliar. Margin laba bersih mencapai sekitar 47% yang luar biasa, level yang jarang dicapai perusahaan tambang mana pun, dan menandakan DKFT berada di posisi bawah kurva biaya industri. Yang menarik, analis mencatat laba melonjak meskipun volume produksi turun, menegaskan bahwa efisiensi dan harga, bukan tonase, yang mendorong hasilnya.",
                "Untuk setahun penuh 2026, manajemen menargetkan pendapatan sekitar Rp1,6 triliun dan laba bersih Rp628,9 miliar. Kalau kuartal pertama bisa dijadikan patokan (laba Rp238 miliar hanya dalam satu kuartal), target itu bisa jadi terlalu konservatif, meskipun bisnis komoditas punya cara sendiri untuk mempermalukan proyeksi."
            ]
        },
        {
            sectionTitle: "Analisis Risiko",
            paragraphs: [
                "Setiap daya tarik di sini punya risiko cerminannya. Yang pertama dan paling dominan: harga nikel. DKFT tidak menentukan harga barang yang dijualnya; pasar global yang menentukan. Margin 47% pada harga saat ini bisa tertekan habis-habisan kalau nikel memasuki salah satu periode kelebihan pasokannya, dan pertumbuhan pasokan besar-besaran dari Indonesia sendiri biasanya menjadi tersangka di balik kelebihan pasokan itu. Kebijakan yang menjamin pelanggan DKFT juga membanjiri dunia dengan nikel Indonesia.",
                "Kedua, ketergantungan pada regulasi. Produksi dibatasi oleh kuota RKAB yang disetujui pemerintah. Rencana kenaikan kuota adalah peluang, tetapi juga pengingat bahwa pertumbuhan DKFT membutuhkan izin negara secara berkala. Penundaan atau penolakan persetujuan RKAB (keluhan yang terus berulang di industri ini) langsung membatasi pendapatan.",
                "Ketiga, konsentrasi. Ini perusahaan dengan satu komoditas, satu negara, dan sedikit aset. Tidak ada arus kas dari bisnis lain yang bisa menjadi bantalan saat nikel sedang buruk, dan operasi tambang di Sulawesi membawa risiko cuaca, logistik, dan hubungan dengan masyarakat yang lebih mudah diserap oleh perusahaan tambang besar yang terdiversifikasi.",
                "Keempat, keekonomian smelter. Pengolahan feronikel boros energi dan marginnya bergejolak; fasilitas hilir bisa memberi nilai tambah di masa baik dan menguras kas ketika selisih harga pengolahan anjlok. Smelter perlu dinilai terpisah dari bisnis tambangnya, bukan sekadar ikut dipuji dalam angka gabungan."
            ]
        },
        {
            sectionTitle: "Yang Saya Pantau",
            paragraphs: [
                "Lima hal, berurutan. Harga nikel dan dinamika pasokan Indonesia, karena keduanya menentukan batas atas segalanya. Persetujuan kuota RKAB, karena kuota menentukan volume yang secara hukum boleh dijual DKFT. Volume produksi dan penjualan setiap kuartal dibandingkan kuota tersebut, untuk memisahkan hasil yang didorong harga dari pertumbuhan operasional yang nyata. Margin laba bersih, karena level sekitar 47% itu luar biasa dan penurunannya akan menjadi tanda pertama bahwa siklus sudah berbalik. Dan utilisasi serta profitabilitas smelter, untuk memastikan operasi hilir menambah nilai, bukan menghabiskan kas dari tambang."
            ]
        },
        {
            sectionTitle: "Kesimpulan",
            paragraphs: [
                "DKFT adalah produsen nikel berbiaya rendah yang fokus dan sedang menunggangi angin pendorong kebijakan industri terkuat di Indonesia, dengan kinerja keuangan (pertumbuhan laba yang makin cepat, margin premium, utang yang moderat) yang menunjukkan manajemen mampu mengubah angin pendorong itu menjadi nilai bagi pemegang saham. Namun DKFT tetaplah perusahaan siklikal kecil dengan satu komoditas, yang nasibnya disewa dari harga nikel dan diizinkan oleh negara. Ukuran posisinya perlu disesuaikan, dipantau setiap kuartal, dan dinilai sepanjang satu siklus penuh, bukan satu tahun yang bagus. Tesis ini berlaku selama biaya tetap rendah, kuota terus keluar, dan margin tetap jauh di atas rata-rata industri. Begitu ketiganya melemah bersamaan, yang memegang kendali adalah siklusnya, bukan perusahaannya."
            ]
        }
    ]
},

ADRO: {
    sector: "Energi",
    allocation: "Pendapatan defensif",
    horizon: "Jangka menengah hingga panjang",
    thesis: "Grup energi terdiversifikasi yang sedang beralih dari batu bara termal ke batu bara metalurgi, pembangkit listrik, aluminium, dan energi terbarukan, dengan kemampuan menghasilkan kas yang kuat dan kebijakan dividen yang murah hati.",
    risk: "Gejolak harga batu bara, risiko eksekusi dalam transisi hijau, penurunan laba setelah pemisahan usaha, dan kebutuhan modal besar untuk usaha baru.",
    monitor: "Harga batu bara, volume batu bara metalurgi (ADMR), keberlanjutan dividen, kemajuan smelter dan energi terbarukan, serta disiplin biaya.",
    analysis: [
        {
            sectionTitle: "Gambaran Bisnis",
            paragraphs: [
                "Alamtri Resources Indonesia adalah perusahaan yang dulu dikenal sebagai Adaro Energy (salah satu grup energi terbesar di Indonesia) yang kini berada di tengah perubahan paling menentukan dalam sejarahnya. Pada akhir 2024, perusahaan memisahkan mesin batu bara termalnya, Adaro Andalan Indonesia (AADI), menjadi emiten tersendiri, lalu mengganti nama grup yang tersisa menjadi Alamtri. Yang tersisa adalah perusahaan yang sengaja dibuat berbeda: batu bara metalurgi (kokas) melalui Adaro Minerals (ADMR), salah satu kontraktor jasa pertambangan terbesar di Indonesia (SIS), pembangkit listrik, proyek smelter aluminium di Kalimantan Utara, dan portofolio energi terbarukan yang terus berkembang, mencakup tenaga air dan surya.",
                "Logika pemisahan ini adalah memisahkan bisnis batu bara termal yang kaya kas tetapi sedang menuju senja dari aset-aset pertumbuhan, sehingga Alamtri bisa mengejar usaha yang lebih hijau dan berorientasi pengolahan (serta citra ESG yang lebih bersih) tanpa diskon batu bara termal membebani seluruh grup.",
                "Aturan tertua Peter Lynch berlaku dengan sangat kuat di sini: “Ketahui apa yang kamu miliki, dan ketahui kenapa kamu memilikinya.”",
                "Siapa pun yang memegang ADRO hari ini memiliki perusahaan yang pada dasarnya berbeda dari Adaro dua tahun lalu. Analisisnya harus dimulai dari fakta itu."
            ]
        },
        {
            sectionTitle: "Kenapa Saya Memilikinya",
            paragraphs: [
                "Alasannya bertumpu pada tiga kaki. Pertama, kemampuan menghasilkan kas dan memberi imbal hasil kepada pemegang saham yang sudah terbukti: bahkan di tahun transisi, Alamtri membagikan hampir seluruh laba 2025 (US$447,5 juta, atau 99,96% dari laba bersih) sebagai dividen, senilai Rp3,40 triliun (Rp118,26 per saham, dibayarkan Mei 2026). Hanya sedikit perusahaan Indonesia yang punya rekam jejak mengembalikan kas seperti ini, dan hal itu mencerminkan keluarga pengendali yang sejak lama sejalan dengan pemegang saham minoritas soal pembagian dividen.",
                "Kedua, cerita pertumbuhan batu bara metalurgi. Batu bara kokas ADMR dipakai untuk pembuatan baja, bukan pembangkit listrik, yaitu komoditas dengan kurva permintaan yang berbeda dan basis pasokan yang lebih langka daripada batu bara termal, serta cocok dengan strategi smelter aluminium: grup ini pada dasarnya sedang membangun rantai energi dan material yang terintegrasi di Kalimantan.",
                "Ketiga, opsi pada transisi energi. Smelter aluminium Kaltara, rencana pembangkit tenaga air, dan proyek tenaga surya masih di tahap awal, tetapi didanai oleh neraca dan arus kas operasi yang hanya bisa diimpikan kebanyakan perusahaan bercerita transisi. Kalau sebagian saja dari portofolio ini berhasil, valuasi hari ini (yang sebagian besar menilainya sebagai perusahaan batu bara yang menyusut) akan dinilai ulang."
            ]
        },
        {
            sectionTitle: "Sorotan Keuangan",
            paragraphs: [
                "Angka 2025 harus dibaca dengan kacamata pemisahan usaha. Pendapatan turun 9,9% menjadi US$1,87 miliar, dan laba bersih yang dapat diatribusikan kepada pemegang saham anjlok 68% menjadi US$447,7 juta, penurunan yang didorong oleh dekonsolidasi bisnis batu bara termal dan harga komoditas yang lebih lemah sepanjang tahun. Dalam basis pendapatan yang lebih kecil itu, pertambangan menyumbang US$966 juta dan jasa pertambangan US$865 juta, menegaskan bahwa mesin laba grup kini terbagi antara batu bara ADMR dan pekerjaan kontraktor SIS.",
                "Sinyal yang menggembirakan datang pada kuartal pertama 2026: laba bersih melonjak 67% secara tahunan menjadi US$128,1 juta. Jika disetahunkan, laju itu akan dengan nyaman melampaui seluruh tahun 2025, bukti bahwa basis setelah pemisahan usaha mulai stabil dan bisnis yang tersisa mulai mendapat daya tarik, bukan sekadar menyusut dengan anggun.",
                "Dividennya layak mendapat paragraf tersendiri. Membagikan 99,96% laba itu luar biasa, sekaligus pedang bermata dua. Hal itu menunjukkan keyakinan dan disiplin, tetapi rasio pembayaran setinggi itu tidak menyisakan laba ditahan; dividen sebesar itu hanya bisa dipertahankan kalau arus kas operasi terus menutupi dividen sekaligus rencana belanja modal grup yang ambisius. Tarik-menarik antara kemurahan hati dan investasi pertumbuhan itulah pertanyaan alokasi modal yang paling utama bagi perusahaan ini."
            ]
        },
        {
            sectionTitle: "Analisis Risiko",
            paragraphs: [
                "Risiko pertama tetaplah harga komoditas. Batu bara metalurgi tidak menghadapi tekanan struktural sebesar batu bara termal, tetapi tetap siklikal, tetap tersandera permintaan baja Tiongkok dan India, dan anjloknya laba 68% pada 2025 menunjukkan betapa cepat air bisa surut.",
                "Kedua, risiko eksekusi dalam transformasi. Peleburan aluminium dan energi terbarukan adalah bisnis yang haus modal dan Alamtri punya pengalaman operasional yang terbatas di dalamnya. Smelter terkenal sering melampaui anggaran dan terlambat; energi terbarukan di Indonesia menghadapi ketidakpastian tarif dan pembeli listrik. Cerita hijau ini saat ini masih berupa janji, dan janji menghabiskan kas sebelum menghasilkannya.",
                "Ketiga, tekanan antara dividen dan belanja modal yang dijelaskan di atas. Kalau manajemen tetap membagikan dividen jumbo sambil membiayai pembangunan smelter, utang harus menutup selisihnya, dan leverage yang ditumpuk di atas laba siklikal adalah cara perusahaan bagus menciptakan tahun-tahun buruk.",
                "Keempat, kerumitan struktur. Setelah pemisahan usaha, nilai tersebar di beberapa lapis entitas yang tercatat di bursa (ADRO, ADMR, dan perusahaan terkait), dengan diskon perusahaan induk, transaksi pihak berelasi, dan keselarasan dengan pemegang saham minoritas yang semuanya perlu terus diawasi."
            ]
        },
        {
            sectionTitle: "Yang Saya Pantau",
            paragraphs: [
                "Harga batu bara (terutama batu bara metalurgi) karena harga itu masih menentukan cuaca laba. Volume produksi dan biaya ADMR, sebagai mesin laba utama grup. Rasio pembayaran dividen dibandingkan arus kas operasi dan belanja modal, karena pembayaran 99,96% itu bisa berarti pernyataan kekuatan atau tanda bahaya, dan laporan arus kas akan menunjukkan yang mana. Pencapaian di smelter Kaltara dan proyek energi terbarukan (anggaran, jadwal, produksi pertama) untuk menilai apakah transisinya nyata. Dan neracanya: utang bersih yang merambat naik sementara dividen tetap jumbo akan menjadi sinyal paling awal bahwa ada yang harus dikorbankan."
            ]
        },
        {
            sectionTitle: "Kesimpulan",
            paragraphs: [
                "Alamtri adalah taruhan bahwa salah satu grup energi yang paling baik dikelola di Indonesia bisa melakukan hal yang jarang berhasil dilakukan perusahaan komoditas: memindahkan kekayaan yang diperoleh dari batu bara ke aset tahan lama yang berada di sisi yang benar dari transisi energi, sambil tetap memberi imbal hasil besar kepada pemegang saham di sepanjang jalan. Penurunan laba 2025 adalah biaya akuntansi dari pilihan itu; lonjakan 67% di awal 2026 adalah bukti pertama bahwa mesin yang tersisa bekerja. Tesis ini berlaku selama kas yang dihasilkan cukup untuk dividen sekaligus pembangunan, dan begitu keduanya mulai saling berebut, dividen, proyek, atau neracanya akan bercerita lebih dulu sebelum berita utama."
            ]
        }
    ]
}

};

if (typeof getLang === "function" && getLang() === "id") {
    Object.assign(stockPageText, stockPageTextID);
    Object.assign(portfolioText, portfolioTextID);
    Object.assign(portfolioFieldLabels, portfolioFieldLabelsID);

    portfolioHoldings.forEach(function (holding) {
        const t = portfolioHoldingsID[holding.ticker];
        if (!t) return;
        const { analysis, ...fields } = t;
        Object.assign(holding, fields);
        if (analysis && holding.analysis) {
            holding.analysis.forEach(function (section, i) {
                if (analysis[i]) {
                    section.sectionTitle = analysis[i].sectionTitle;
                    section.paragraphs = analysis[i].paragraphs;
                }
            });
        }
    });
}
