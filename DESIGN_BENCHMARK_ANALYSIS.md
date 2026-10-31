# Analisis Benchmark Portal Wisata & Desa KKN-PPM UGM
## Acuan & Desain Master Jelajah Donggala (Desa Towale & Desa Limboro)

Dokumen ini memuat hasil *scraping*, dekonstruksi arsitektur informasi, studi tipografi, dan analisis desain dari 8 website referensi portal desa binaan KKN-PPM UGM sesuai `@file:donggala/REFERENSI.md`. Hasil kajian ini menjadi fondasi kurasi desain (*design intelligence*) untuk website **Jelajah Donggala (Towale & Limboro)**.

---

## 1. Hasil Scraping & Rekayasa Balik 8 Website Benchmark

### 1. Saga Mandar (`www.sagamandar.com`)
- **Wilayah**: Kec. Campalagian, Polewali Mandar, Sulawesi Barat (Desa Laliko & Katumbangan Lemo)
- **Tech Stack**: Next.js App Router, Tailwind CSS, Webpack
- **Identitas Visual**: Perpaduan Maritim & Agraris. Warna dominan Deep Ocean Blue, Sunset Orange, dan Tropical Green.
- **Karakter Desain**:
  - Hero dengan tajuk puitis: *"The Odyssey of Saga Mandar"*.
  - Interaksi *Filosofi Logo*: Pengguna mengarahkan kursor ke elemen logo untuk mengungkap narasi di balik setiap lengkungan motif.
  - Pembagian tegas dua desa: Laliko (pesisir & pariwisata bahari) vs Katumbangan Lemo (pertanian, perkebunan, perikanan darat).
  - Kartu eksplorasi tematik: *Mangrove Explorer*, *Ocean Dive*, *Baby Turtle*, dan *Tenun Heritage*.

### 2. Muna Merona (`munamerona.site`)
- **Wilayah**: Kec. Kabangka, Kab. Muna, Sulawesi Tenggara (Desa Komba-Komba & Wakobalu Agung)
- **Tech Stack**: Next.js App Router, Tailwind CSS
- **Identitas Visual**: Etnik Modern. Warna Teal (`#008080`), Warm Cream, dan Gold.
- **Karakter Desain**:
  - Metrik kuantitatif di hero: *28 Mahasiswa · 100+ Program Kerja · 2 Desa Binaan · 50 Hari Pengabdian*.
  - Struktur 4 Program Unggulan berakronim kuat dengan pemetaan **SDG Badges**:
    - **MANIS**: Mandiri Inovatif melalui Olahan Komoditas Pangan Lokal (SDG 2, 8, 9, 12)
    - **TIBA**: Tanggap Bencana dan Infrastruktur Berbasis Teknologi Terpadu (SDG 9, 11, 13)
    - **SANTUN**: Sosialisasi Anti Stunting untuk Remaja & Ibu (SDG 2, 3, 4, 5)
    - **LAMBU MUNA**: Ruang Belajar Berbasis Komunitas Lintas Generasi (SDG 4, 10)
  - Dokumentasi festival puncak (*Sora Muna*) dan artikel riset monografis per desa.

### 3. Manguyung Maratua (`manguyungmaratua.com`)
- **Wilayah**: Pulau Maratua, Kab. Berau, Kalimantan Timur (Desa Teluk Harapan & Payung-Payung)
- **Tech Stack**: Next.js App Router, Tailwind CSS
- **Identitas Visual**: Pesisir Bahari Konservasi. Warna Deep Marine, Aqua Cyan, dan Sand.
- **Karakter Desain**:
  - Penekanan status kawasan: Kawasan Strategis Pariwisata Nasional (KSPN) dan *Sustainable Marine Ecotourism*.
  - Ornamen vektor khas: `hero-wave.svg` dan `about-aura.svg` yang menyatukan transisi antar-bagian secara organik.
  - Peta interaktif penunjuk dot lokasi program kerja per desa dengan tooltip interaktif.

### 4. Cakrawala Rote (`cakrawalarote.vercel.app`)
- **Wilayah**: Kec. Rote Barat, Kab. Rote Ndao, NTT (Desa Bo’a & Nemberala)
- **Tech Stack**: Next.js App Router, Tailwind CSS
- **Identitas Visual**: Editorial Heritage & Fotografi Humanis. Palet kontras tinggi: Hitam, Putih, Merah Tenun (`#1E3A8A` dark blue base).
- **Karakter Desain**:
  - **Arsip Sejarah Lisan**: Modul dokumenter suara tetua adat (*3 Kepala Suku, 5 Tetua Adat, 8 Cerita Tradisional*).
  - **UMKM dalam Bingkai (Esai Foto)**: *"Benang-Benang Kehidupan dari Rote: Dari Tangan ke Warisan"*. Tidak sekadar toko online, melainkan kurasi visual kerajinan (Tenun Lambi Tei, Topi Ti'i Langga, Anyaman Lontar, Wadah Sirih Beto) dengan nama narasumber dan filosofi warna.
  - Pendekatan editorial berbasis narasi yang mengangkat martabat kriya lokal.

### 5. Cerita Neira (`ceritaneira.com`)
- **Wilayah**: Kec. Banda, Kab. Maluku Tengah (Desa Rajawali & TanaRatah)
- **Tech Stack**: Next.js App Router, Tailwind CSS
- **Identitas Visual**: Klasik Historis & Kepulauan Rempah. Dominasi Earthy Cream, Deep Slate, dan Forest Moss.
- **Karakter Desain**:
  - Copywriting puitis dalam dialek lokal: *"Katong Bacarita Par Banda Neira"*.
  - Narasi kepulauan rempah, tata kelola pemerintahan desa berbasis digital, dan konservasi alam.
  - Layout minimalis dengan hierarki tipografi serif elegan dan ruang bernapas lega (*generous whitespace*).

### 6. Visit Belok Pelaga (`www.visitbelokpelaga.com`)
- **Wilayah**: Kec. Petang, Kab. Badung, Bali (Desa Pelaga & Desa Belok/Sidan)
- **Tech Stack**: Next.js App Router, Tailwind CSS, Custom Sanggar Font
- **Identitas Visual**: Agrowisata Dataran Tinggi Berkelas. Earthy Terracotta, Pine Green, dan Warm Beige.
- **Karakter Desain**:
  - Tagline & Konsep Utama: *"Dua Desa, Satu Perjalanan, Dataran Tinggi"*.
  - Narasi koridor spasial: Desa Pelaga sebagai gerbang (700 mdpl) menuju Desa Belok/Sidan sebagai puncak (1500 mdpl).
  - Jembatan Tukad Bangkung sebagai *landmark* penghubung fisik sekaligus pemersatu narasi dua desa.
  - Struktur modul terarah: *Yang Paling Layak Disinggahi*, *Dua Wajah Dataran Tinggi*, *Peta Koridor*, *Gastronomi*, dan *Panduan Perjalanan*.

### 7. MedangUp! (`medangup.com`)
- **Wilayah**: Pulau Medang, Kab. Sumbawa, NTB (Desa Bajo Medang & Bugis Medang)
- **Tech Stack**: Nuxt.js, Tailwind CSS, Font Young Serif
- **Identitas Visual**: Kepulauan Pesisir Tropis. Navy Blue (`#1A2332`), Soft Peach (`#F8C99D`), Cyan (`#007AFF`).
- **Karakter Desain**:
  - **Komparasi Kultural Dua Desa**: Desa Bajo Medang (tradisi melaut suku Bajo) berdampingan dengan Desa Bugis Medang (perbukitan & niaga Bugis).
  - Slider horizontal destinasi (01/11) dengan indikator visual dinamis.
  - Katalog potensi maritim lokal spesifik (*Sisok/siput laut, Tetehe/bulu babi, Mangrove, Perikanan*).
  - Pemisah visual ombak halus (*Wave Dividers*).

### 8. Merawi Pangeran (`merawi-pangeran.vercel.app`)
- **Wilayah**: Kec. Bandungan, Kab. Semarang, Jawa Tengah (Desa Sidomukti & Jetis)
- **Tech Stack**: Next.js App Router, Tailwind CSS
- **Identitas Visual**: Sains Terbuka & Geospasial. Emerald Green, Soft Neutral, dan Slate.
- **Karakter Desain**:
  - Penekanan kuat pada **Inovasi Tata Kelola Digital & Geospasial**: *1220+ Titik Terpetakan*.
  - Integrasi 4 klaster keilmuan (Saintek, Agro, Soshum, Medika) dalam bingkai kemandirian ekonomi desa.

### 9. Jelajah Kei Kecil / Pesona Kei (`www.pesonakei.com`)
- **Wilayah**: Kepulauan Kei Kecil, Kab. Maluku Tenggara, Maluku
- **Tech Stack**: Next.js (Turbopack, App Router), Tailwind CSS v4, Montserrat & Caveat Font
- **Identitas Visual**: Pesisir Bahari Kelas Dunia (*World-Class Marine Ecotourism*).
- **Color System Canggih (CSS Variables & LAB)**:
  - **Ocean**: `--color-ocean-950` (`#041D2A`), `--color-ocean-900` (`#0A2C3E`), `--color-ocean-700` (`#1A4D68`) untuk canvas gelap yang dalam dan mewah.
  - **Lagoon**: `--color-lagoon-600` (`#0D8D82`), `--color-lagoon-300` (`#82DED2`), `--color-lagoon-700` (`#166F66`) untuk aksen air toska, terumbu karang, dan tombol interaktif.
  - **Sand**: `--color-sand-100` (`#F5F3ED`) untuk latar bagian terang bernuansa pasir putih halus.
  - **Coral**: `--color-coral-600` (`#D9553F`), `--color-coral-700` (`#B24133`) untuk aksen hangat terumbu karang hidup.
- **Micro-Interactions & Komponen Modern**:
  - `SplashScreen`: Transisi pembuka yang mulus dan memikat.
  - `TiltCard`: Efek tilt 3D interaktif pada kartu kuliner dan destinasi.
  - `MarqueeStrip`: Teks berjalan horizontal sebagai pemisah ritme section (*"Pasir terhalus di Asia · Laguna sebening kristal · Budaya yang menjaga laut"*).
  - `Hero Slider`: Progress slide dinamis `01 / 03` dengan headline puitis.
  - `StaggerGrid` & `FadeIn`: Animasi masuk bertingkat yang halus.
- **Inovasi Modul Konten**:
  - **Kamus Bahasa Lokal (`/bahasa`)**: *"Sapa warga dengan bahasanya sendiri"*. Kosakata dasar bahasa daerah untuk pelancong.
  - **Modul Kedaruratan Pesisir (`/kedaruratan`)**: Peringatan kondisi laut pasang surut ekstrem (*meti*), daftar nomor darurat terpadu (112, 115, 119, 110, puskesmas), dan panduan pertolongan pertama kecelakaan pantai.
  - **Budaya Konservasi Adat (`/budaya`)**: Dokumentasi hukum adat *Sasi Laut* (larangan memanen laut berkala demi kelestarian karang) dan konstitusi adat *Larvul Ngabal*.
  - **Multibahasa**: Komponen `<Tr id="..." en="..." zh="..." />` untuk wisatawan nusantara dan mancanegara.

---

## 2. Matriks Pembelajaran untuk Jelajah Donggala

| Aspek Desain | Referensi Terbaik | Penerapan pada Jelajah Donggala (Towale & Limboro) |
| :--- | :--- | :--- |
| **Konsep Koridor** | *Visit Belok Pelaga* & *MedangUp* | **"Dari Benang Sutra ke Birunya Samudra"**: Menyatukan Desa Towale (sentra kriya tenun tua Kaili & Pusat Laut) dan Desa Limboro (pantai pasir putih Kaluku & sentra sagu) menjadi satu paket jelajah 2D1N terpadu. |
| **Storytelling Kriya** | *Cakrawala Rote* & *Saga Mandar* | **Esai Foto Tenun Donggala**: Mengangkat profil perajin sepuh Buya Bomba & Subaer, filosofi motif bunga mekar kemakmuran, dan proses ATBM (Alat Tenun Bukan Mesin) tradisional. |
| **Geospasial & Peta** | *Merawi Pangeran* & *Manguyung Maratua* | **Peta Koridor Banawa Tengah**: Pin GPS interaktif untuk spot snorkeling Pantai Kaluku, sumur laut alami Pusentasi, sentra tenun Towale, dan jalur evakuasi pesisir. |
| **Klaster Program** | *Muna Merona* | **4 Klaster Pengabdian KKN UGM**: Agro-Maritim (Sagu & Perikanan), Saintek (WebGIS & Mitigasi Bencana), Soshum (Branding Tenun & Ekowisata), dan Medika (Posyandu & Stunting). |
| **Branding & Visual** | *Cerita Neira*, *Pesona Kei* & *Komodo Hub* | **Editorial Maritim-Heritage**: Tipografi Display Serif (`Fraunces`), Selat Makassar Deep Ocean (`#041D2A` / `#0C2340`), Lagoon Turquoise (`#0D8D82`), Aksen Emas Buya Bomba (`#D97706`), dan Warm Sand (`#F5F3ED`). |
| **Micro-Interactions** | *Pesona Kei* | **Animasi & Rhythm Section**: Efek `TiltCard` interaktif pada showcase tenun & olahan pangan, serta `Marquee Running Strip` pembatas ritme dinamis antar-section. |
| **Kamus Sapaan Lokal** | *Pesona Kei* | **Kamus Sapaan Bahasa Kaili**: Kosakata percakapan praktis (Ledo/Tara) agar pengunjung dapat menyapa warga penenun Towale dan nelayan Limboro secara santun. |
| **Keselamatan Pesisir** | *Pesona Kei* & *Muna Merona* | **Modul Kedaruratan & Mitigasi**: Peringatan ombak Selat Makassar, kontak darurat terpadu (112, Basarnas 115, Puskesmas, Posko Bencana), dan pertolongan pertama kecelakaan pantai. |
| **Etika Komunitas** | *Prinsip KKN UGM* | **Community-Based Tourism**: Tidak ada pemesanan otomatis tanpa konfirmasi warga. Call to action diarahkan langsung ke narahubung pemuda/Pokdarwis via WhatsApp. |

---

## 3. Pedoman Implementasi Desain Website Donggala

### A. Hirarki Halaman Utama (One-Page Experience)
1. **Header / Navbar**:
   - Logo `DH` (Donggala Hub) dengan ikon stilasi tenun dan ombak maritim.
   - Menu Cepat: Profil Towale, Profil Limboro, Peta Koridor, Kriya Tenun, Olahan Sagu, Kontak Pengelola.
2. **Hero Section dengan Foto Pesisir Limboro**:
   - Background: Foto panorama teluk pantai Limboro dengan air toska jernih dan pasir putih melengkung.
   - *Translucent Frosted Card* di sisi kiri/tengah untuk memastikan keterbacaan teks 100% (kontras WCAG AA/AAA).
   - Headline: *"Mengenal Towale dan Limboro dari dekat"* dengan subteks koridor perjalanan.
   - Tombol Aksi: *"Buka Peta Desa"* (Primary) dan *"Pesan Open Trip ↗"* (Secondary).
3. **Pita Ornamen Tenun Buya Bomba**:
   - Pita Navy gelap dengan motif sulur geometris Kaili beraksen emas-kuning sebagai pembatas kultural yang kuat.
4. **Dua Desa dalam Angka (Key Metrics)**:
   - 4 Kartu KPI: Jiwa Penduduk (4.820), Kepala Keluarga (1.240), Luas Wilayah (64,2 km²), Dusun Terdata (8).
5. **Dua Wajah Pesisir Donggala (Towale vs Limboro)**:
   - Kartu Split berdampingan dengan foto resolusi tinggi, poin keunggulan desa, dan tombol profil desa.
6. **Satu Pintu Layanan Terpadu (Hub 5 Layanan)**:
   - Lanskap & Peta, Katalog UMKM Kriya, Lensa Donggala (Dokumentasi), Kesehatan Warga, dan Kontak Darurat.
7. **Produk dari Tangan Warga (Showcase UMKM)**:
   - Kain Tenun Buya Bomba, Keripik Sagu Gurih, Cookies Sagu Rendah Gula, dan Bawang Goreng Palu-Donggala dengan tombol langsung ke WhatsApp pengrajin.
8. **Ekowisata Berbasis Komunitas (Open Trip)**:
   - Paket trip 2D1N *"Jelajah Tanah Kaili & Pesisir Limboro"* dengan transparansi etika lokal.
9. **Footer Terpadu**:
   - 3 Kolom informasi, legalitas KKN-PPM UGM bersama Pemdes Towale & Limboro, serta rute dari Kota Palu/Donggala.

---

Dokumen ini menjadi standar acuan resmi (SSoT) untuk iterasi desain di `design_pendev/kkn.pen` maupun penulisan komponen Next.js pada repositori proyek.
