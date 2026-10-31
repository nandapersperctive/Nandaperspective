/* =====================================================================
   HALAMAN TENTANG (BAHASA INDONESIA)
   Versi Indonesia dari content/about-content.js. Hanya dipakai saat
   pengunjung memilih bahasa ID. Baris baru di dalam bio ditulis \n,
   sama seperti versi bahasa Inggris.
   ===================================================================== */

if (typeof getLang === "function" && getLang() === "id") {
    Object.assign(aboutText, {
        heading: "Hanya mahasiswa Akuntansi yang sangat tertarik pada investasi.",

        bio: "Saya Nanda Mulia, mahasiswa Akuntansi di Universitas Syiah Kuala. Saya mulai penasaran dengan investasi pada 2024, waktu masih duduk di bangku SMA. Awalnya saya sama sekali tidak paham. Saya cuma ingin tahu bagaimana uang bisa tumbuh dari waktu ke waktu dan kenapa sebagian perusahaan bisa lebih berhasil daripada yang lain. Jadi saya mulai membaca dan belajar sendiri, sedikit demi sedikit.\nPada 2025 saya mulai kuliah di program studi Akuntansi Universitas Syiah Kuala. Yang saya suka dari akuntansi adalah ilmunya bukan cuma soal angka. Akuntansi membantu menjelaskan bagaimana sebuah bisnis benar-benar berjalan dan tumbuh. Soal investasi dan keuangan, saya masih di tahap awal; masih banyak yang belum saya pahami sepenuhnya, dan itu tidak apa-apa. Saya lebih memilih pelan-pelan dan membangun fondasi yang kuat.\nWebsite ini adalah tempat saya mendokumentasikan perjalanan itu: apa yang sedang saya baca, pelajari, dan pelan-pelan pahami sebagai mahasiswa yang penasaran dengan bisnis dan investasi."
    });
}
