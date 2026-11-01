# Product Requirement Document (PRD)
# Website Company Profile: Jelajah Donggala (Desa Towale & Desa Limboro)

> **Status:** Approved / Ready for Implementation  
> **Versi:** 1.0.0  
> **Target Rilis:** 2026  
> **Penyusun:** Tim KKN-PPM UGM bersama Tim Rekayasa Perangkat Lunak  
> **Dokumen Terkait:**  
> - [`ARCHITECTURE.md`](./ARCHITECTURE.md)  
> - [`PESONA_KEI_COMPONENT_GUIDE.md`](./PESONA_KEI_COMPONENT_GUIDE.md)  
> - [`DESIGN_BENCHMARK_ANALYSIS.md`](./DESIGN_BENCHMARK_ANALYSIS.md)  
> - [`REFERENSI.md`](./REFERENSI.md)  

---

## 1. Ringkasan Eksekutif & Visi Produk

### 1.1 Visi Produk
Membangun portal profil wilayah dan etalase budaya digital berstandar internasional untuk **Desa Towale** dan **Desa Limboro** (Kecamatan Banawa Tengah, Kabupaten Donggala, Sulawesi Tengah). Portal ini memadukan kemegahan visual maritim dan kelembutan interaksi mikro dari **Pesona Kei (`pesonakei.com`)** dengan kejernihan arsitektur informasi satu pintu dan kekuatan konversi dari **Komodo Digital Hub**.

### 1.2 Ekosistem Dua Website (Dual-System Architecture)
Website **`compro/`** tidak berdiri sendiri, melainkan berperan sebagai gerbang depan (*flagship brand portal*) yang terhubung harmonis dengan aplikasi web interaktif **`donggala/` (`https://jelajah-donggala.vercel.app`)**:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   WEBSITE COMPRO (compro/)                             │
│   • Impresi Pertama & Storytelling Budaya Maritim                      │
│   • Komparasi Karakter Dua Desa (Kriya Towale & Bahari Limboro)        │
│   • Preview Koleksi Kriya, Hasil Bumi, dan Paket Wisata                │
│   • Kamus Sapaan Bahasa Kaili & Panduan Keselamatan Pesisir            │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Redirect & Deep-link (Tab Baru)
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│             JELAJAH DONGGALA WEB APP (jelajah-donggala.vercel.app)     │
│   • Sistem Pemesanan Open Trip & Konfirmasi Kuota Keberangkatan        │
│   • Katalog Lengkap UMKM dengan Kontak Person Langsung / WhatsApp      │
│   • Peta Geospasial Interaktif Full-Screen dengan Layer Survei         │
│   • Dashboard Pengelola Desa & Formulir Reservasi Pelancong            │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Palet Warna & Identitas Visual Terpadu
*(Diekstraksi dari Aset Budaya Kaili `@folder:compro/public/images/elements/` & Harmonisasi Kanvas Bahari)*

Aset visual `kotak 4 [warna].png` merepresentasikan **Motif Empat Daun Bunga Bomba (Quatrefoil Rosette)** khas tenun Kaili yang dirender dalam gaya *pixel-art ethereal*. Warna-warna ini diintegrasikan sebagai aksen dinamis di atas kanvas laut dalam (*Deep Ocean Canvas*):

```
                                  [PALET KANVAS DASAR]
                 #041D2A (Ocean-950) ─── #0A2C3E (Ocean-900) ─── #F5F3ED (Sand-100)
                                            │
               ┌────────────────────────────┼────────────────────────────┐
               ▼                            ▼                            ▼
      [ELEMEN BIRU]                [ELEMEN KUNING]               [ELEMEN PINK]
    #55BBDD / #66BBDD            #EEFF99 / #FFFFAA            #FFCCDD / #FFDDEE
   (Air Toska Limboro)          (Kilau Benang Emas)          (Terumbu & Sutra Alami)
   kotak 4 biru.png             kotak 4 kuning.png           kotak 4 pink.png
               │                            │                            │
               └────────────────────────────┼────────────────────────────┘
                                            ▼
                                     [ELEMEN PUTIH]
                                  #FFFFFF (Pure Pearl)
                               (Pasir Putih Pantai Kaluku)
                                  kotak 4 putih.png
```

### 2.1 Spesifikasi Token Warna CSS

| Nama Token | Nilai Hex | Sumber Ekstraksi | Makna Filosofis & Penerapan UI |
| :--- | :--- | :--- | :--- |
| `--color-ocean-950` | `#041D2A` | Background Pesona Kei | **Kanvas Utama Laut Dalam**: Navbar, Hero, Budaya, dan Footer. Memberikan kontras tinggi dan kesan mewah. |
| `--color-ocean-900` | `#0A2C3E` | Background Pesona Kei | **Kanvas Sekunder**: Background kartu, Marquee strip, dan Kamus Bahasa Kaili. |
| `--color-motif-blue` | `#55BBDD` | `kotak 4 biru.png` | **Bahari & Teluk Limboro**: Aksen badge pesisir, border aktif kartu laut, dan link navigasi aktif. |
| `--color-motif-yellow` | `#EEFF99` | `kotak 4 kuning.png` | **Benang Emas Buya Bomba**: Highlight teks headline, slide indicator hero, dan tag potensi unggulan. |
| `--color-motif-pink` | `#FFCCDD` | `kotak 4 pink.png` | **Terumbu Karang & Kriya**: Badge produk UMKM kriya tenun, ornamen aksen budaya, dan hover glow. |
| `--color-motif-white` | `#FFFFFF` | `kotak 4 putih.png` | **Pasir Putih Pantai Kaluku**: Warna teks primer pada kanvas gelap dan latar kartu terang. |
| `--color-sand-100` | `#F5F3ED` | Canvas Pesona Kei | **Kanvas Bagian Terang**: Latar belakang section Cita Rasa Kuliner dan Kedaruratan Pesisir. |
| `--color-lagoon-600` | `#0D8D82` | Action Color Kei | **Tombol Aksi Utama (CTA)**: Pill button "Jelajahi Sekarang", tombol pesan trip, dan border kartu fokus. |
| `--color-coral-danger`| `#B91C1C` | Accent Alert | **Kedaruratan & Peringatan**: Badge mitigasi gempa/tsunami dan kontak SAR/Ambulans. |

---

## 3. Struktur Modul & Tata Letak Halaman (Visual Flow)

Halaman utama dirancang sebagai pengalaman satu halaman terorkestrasi (*single-page storytelling experience*) dengan urutan section sebagai berikut:

### Section 1: Header / Navigation Bar *(Sticky Dark Ocean)*
* **Visual:** Latar `#041D2AF2` dengan *backdrop-blur*, border bawah halus `#1A4D68`.
* **Elemen:**
  * Logo `JD` bergradasi toska-biru + Judul *"Jelajah Donggala"*, subjudul *"Towale & Limboro"*.
  * Ornamen motif `kotak 4 kuning.png` mini (20x20px) di samping logo sebagai penanda kriya tenun.
  * Tautan Navigasi: Beranda, Profil Desa, Kriya & Kuliner, Budaya, Bahasa Kaili, Kedaruratan.
  * Tombol Aksi Kanan: `"Platform Jelajah ↗"` *(link ke `https://jelajah-donggala.vercel.app`)*.

### Section 2: Hero Section Cinematic *(Pesona Kei × Foto Limboro)*
* **Visual:** Background gambar panorama pesisir teluk berpasir putih melengkung (`/images/hero_limboro_coastal.png`) dengan overlay gradien lembut laut dalam.
* **Elemen:**
  * **Floating Frosted Card** (`#041D2AF0`) di sisi kiri dengan border `#1A4D68`:
    * Badge lokasi beraksen dot toska menyala (`#55BBDD`): *"KECAMATAN BANAWA TENGAH · DONGGALA"*.
    * Headline Display (`Fraunces`): *"Mengenal Towale dan Limboro dari Dekat"*.
    * Subteks: *"Peta koridor geospasial, pusaka kriya tenun Kaili, bentang teluk bahari, dan ketahanan pangan sagu dalam satu pintu."*
    * Tombol Aksi Ganda:
      * Primary: `"Buka Platform Jelajah Donggala ↗"` *(redirect ke `jelajah-donggala.vercel.app`)*.
      * Secondary: `"Kenali Dua Desa ↓"` *(smooth scroll ke section tentang)*.
  * **Hero Slide Progress Indicator** di pojok kanan bawah: `01 / 03 · TELUK LIMBORO`.

### Section 3: Marquee Running Ribbon Budaya *(Pesona Kei)*
* **Visual:** Pita horizontal berjalan tanpa henti (*infinite loop ticker*) dengan latar `#0A2C3E` dan garis batas `#1A4D68`.
* **Teks Berjalan:**
  `❖ AIR TOSKA TELUK LIMBORO · TENUN IKAT BUYA BOMBA · GEOWISATA PUSENTASI · KETAHANAN PANGAN SAGU · KKN-PPM UGM ❖`. Dihiasi motif `kotak 4 biru.png` dan `kotak 4 kuning.png` sebagai pembatas ikon.

### Section 4: Sambutan Dua Desa *(Editorial 2-Column Grid)*
* **Visual:** Latar gelap `#041D2A`. Kolom kiri teks naratif, kolom kanan foto berbingkai melengkung.
* **Konten:**
  * Eyebrow: `SELAMAT DATANG DI DONGGALA`.
  * Headline: *"Dua desa pesisir, denyut kearifan yang terjaga"*.
  * Narasi integrasi karakter Towale (kriya tenun tertua & Pusentasi) berdampingan dengan Limboro (pasir putih Kaluku & sentra sagu).
  * Tag Badges: `Desa Towale` dan `Desa Limboro`.

### Section 5: Dua Desa dalam Angka (Key Metrics Bar) *(Komodo Hub)*
* **Visual:** Grid 4 kolom kartu metrik modern berlatar `#0A2C3E` dengan aksen border `#1A4D68`.
* **Metrik:**
  1. **4.820** Jiwa Penduduk Terdata.
  2. **1.240** Kepala Keluarga.
  3. **64,2 km²** Luas Wilayah Pesisir & Daratan.
  4. **8** Dusun Binaan di Banawa Tengah.

### Section 6: Dual-Village Spotlight (Towale vs Limboro) *(Komodo Hub)*
* **Visual:** 2 Kartu besar berdampingan dengan perbandingan visual yang kuat:
  * **Kartu Towale**: Latar hangat, foto penenun & cagar Pusentasi. Fokus: Kriya tenun sutra Buya Bomba, sumur air laut alami, dan Pantai Bonebula.
  * **Kartu Limboro**: Latar bahari toska, foto teluk pasir putih & kebun sagu. Fokus: Snorkeling terumbu karang Kaluku, pengolahan tepung sagu, dan tradisi nelayan.
* **Aksi:** Tombol di masing-masing kartu: `"Lihat Detail Aktivitas Desa di Jelajah Donggala ↗"`.

### Section 7: Cita Rasa & Hasil Bumi (3D TiltCard Grid) *(Pesona Kei)*
* **Visual:** Latar terang hangat `#F5F3ED` (`sand-100`).
* **Fitur:** 4 Kartu interaktif berbalut komponen `TiltCard` (efek miring 3D saat disentuh mouse):
  1. *Kain Tenun Buya Bomba* (Penenun Subaer Towale — Rp450.000). Badge: `kotak 4 pink` (Kriya).
  2. *Keripik Sagu Gurih* (KWT Sejahtera Limboro — Rp20.000). Badge: `kotak 4 kuning` (Pangan).
  3. *Cookies Sagu Rendah Gula* (Sentra Pangan Limboro — Rp25.000). Badge: `kotak 4 biru` (Sehat).
  4. *Ikan Bakar Selat Makassar* (Nelayan Pesisir Kaluku — Segar Harian). Badge: `kotak 4 putih` (Bahari).
* **Aksi Redirection:** Tombol *"Beli / Hubungi Pengrajin ↗"* mengarahkan pengguna ke katalog lengkap di `https://jelajah-donggala.vercel.app#karya`.

### Section 8: Showcase Paket Wisata Komunitas (Open Trip Spotlight) *(Komodo Hub)*
* **Visual:** Kartu highlight perjalanan dengan rincian durasi dan kuota:
  * *Paket 2D1N Jelajah Tanah Kaili*: Menginap di rumah warga, susur teluk, dan workshop menenun.
  * *Snorkeling Pantai Kaluku*: Eksplorasi terumbu karang dangkal dan pantai berpasir melengkung.
  * *Kelas Olahan Sagu*: Praktik langsung memanen dan mengolah sagu tradisional bersama warga.
* **Aksi Redirection:** Tombol *"Cek Jadwal & Kuota Keberangkatan ↗"* mengarahkan ke `https://jelajah-donggala.vercel.app#aktivitas`.

### Section 9: Budaya & Konservasi (Storytelling Bersilang) *(Pesona Kei)*
* **Visual:** Latar `#041D2A` dengan layout bersilang (*alternating rows*):
  * **Baris 1 (Towale)**: *Filosofi Tenun Buya Bomba* — mengisahkan doa keselamatan dan kehormatan pada motif bunga mekar empat penjuru Kaili.
  * **Baris 2 (Limboro)**: *Kearifan Konservasi Teluk Kaluku* — etika adat nelayan dalam menjaga terumbu karang dan sabuk pantai peredam abrasi Selat Makassar.

### Section 10: Kamus Sapaan Bahasa Kaili *(Pesona Kei)*
* **Visual:** Latar `#0A2C3E` dengan 4 kartu kosakata elegan beraksen toska `#82DED2`:
  * **Ndokumo**: Halo / Apa Kabar *(sapaan saat bertamu ke penenun)*.
  * **Tarimakasi**: Terima Kasih.
  * **Mabelo**: Indah / Elok / Bagus *(pujian keindahan tenun/pantai)*.
  * **Kande**: Ayo Makan *(ajakan santap bersama warga)*.

### Section 11: Kedaruratan & Keselamatan Pesisir *(Pesona Kei)*
* **Visual:** Latar `#F5F3ED` berbingkai peringatan halus `#B91C1C`.
* **Konten:** Panduan keselamatan pasang surut Selat Makassar, peta jalur evakuasi gempa/tsunami, dan 4 nomor darurat: **112** (Darurat Nasional), **115** (Basarnas SAR Palu), **119** (Ambulans), dan nomor kontak Puskesmas Banawa Tengah.

### Section 12: Footer Terpadu *(Pesona Kei Style)*
* **Visual:** Latar `#041D2A`, pembagi garis `#1A4D68`.
* **Konten:** 3 Kolom informasi (Identitas portal, Navigasi wilayah, Kontak bantuan KKN UGM & Pemdes), bar hak cipta legal, dan tautan langsung ke platform `jelajah-donggala.vercel.app`.

---

## 4. Arsitektur Komponen & Motion (Sesuai `PESONA_KEI_COMPONENT_GUIDE.md`)

Semua komponen animasi dan interaksi mikro diimplementasikan dengan mematuhi prinsip **Server Component by Default** di mana `'use client'` hanya diisolasi pada daun komponen:

```
app/page.tsx (Server Component - SSR Orchestrator)
 ├── HeroSection (Server Component)
 │    └── Button Link (Client Leaf / UI Primitive)
 ├── MarqueeStrip (Server Component + CSS Keyframes)
 ├── AboutSection (Server Component)
 │    └── FadeIn (Client Leaf Wrapper / motion)
 ├── ServicesSection / Cita Rasa (Server Component)
 │    └── TiltCard (Client Leaf Wrapper / useSpring 3D)
 ├── LanguageSection / Kamus (Server Component)
 ├── EmergencySection (Server Component)
 └── SiteFooter (Server Component)
```

### 4.1 Spesifikasi Komponen Pustaka
1. **`SmoothScroll` (Lenis)**: Terpasang di root `app/layout.tsx`. Durasi inersia 1.2s dengan kemudahan transisi *smooth*. Menghormati *prefers-reduced-motion*.
2. **`TiltCard` (`motion/react`)**: Efek kemiringan 3D interaktif pada 4 kartu UMKM dengan parameter fisik `stiffness: 220, damping: 18`.
3. **`FadeIn` & `StaggerGrid`**: Mengontrol efek muncul bertingkat elemen saat di-scroll ke viewport pengguna dengan `whileInView`.
4. **`CursorFollower`**: Dot ambient toska (`#82DED2`) yang melayang lembut mengikuti mouse di desktop (otomatis mati di layar sentuh).
5. **`MarqueeStrip`**: Animasi CSS murni `@keyframes marquee` 35s tanpa jeda.

---

## 5. Matriks Redirection & Deep-Linking ke `jelajah-donggala.vercel.app`

Untuk mencegah disorientasi pengunjung, semua tombol diarahkan ke rute atau anchor yang tepat:

| Elemen di `compro/` | Teks Tombol | Target URL di `jelajah-donggala` | Perilaku Buka |
| :--- | :--- | :--- | :--- |
| **Header Navbar** | `Platform Jelajah ↗` | `https://jelajah-donggala.vercel.app` | Tab Baru (`_blank`) |
| **Hero Section** | `Buka Platform Jelajah Donggala ↗` | `https://jelajah-donggala.vercel.app` | Tab Baru (`_blank`) |
| **Spotlight Towale** | `Eksplorasi Towale ↗` | `https://jelajah-donggala.vercel.app/desa` | Tab Baru (`_blank`) |
| **Spotlight Limboro** | `Eksplorasi Limboro ↗` | `https://jelajah-donggala.vercel.app/desa` | Tab Baru (`_blank`) |
| **Produk UMKM (TiltCard)** | `Lihat Detail & Hubungi Pengrajin ↗` | `https://jelajah-donggala.vercel.app#karya` | Tab Baru (`_blank`) |
| **Open Trip Spotlight** | `Pesan & Cek Kuota Keberangkatan ↗` | `https://jelajah-donggala.vercel.app#aktivitas` | Tab Baru (`_blank`) |
| **Peta Section** | `Buka Peta Interaktif Lengkap ↗` | `https://jelajah-donggala.vercel.app/cari` | Tab Baru (`_blank`) |

---

## 6. Persyaratan Non-Fungsional (NFR)

1. **Performa Web Vitals**:
   - Largest Contentful Paint (LCP) < 1.5 detik (didukung oleh `next/image` dengan `priority` pada gambar hero Limboro).
   - Cumulative Layout Shift (CLS) = 0.
   - First Input Delay (FID) / Interaction to Next Paint (INP) < 100ms.
2. **Aksesibilitas (WCAG 2.1 Level AA)**:
   - Kontras warna teks putih di atas latar `#041D2A` mencapai rasio > 14:1 (jauh melampaui standar minimal 4.5:1).
   - Semua elemen interaktif memiliki `focus-visible` ring.
   - Komponen gerak (`TiltCard`, `SmoothScroll`, `CursorFollower`) otomatis tidak aktif jika sistem pengguna mendeteksi `prefers-reduced-motion: reduce`.
3. **Standar Kode & Zero Magic Strings**:
   - Semua teks, tautan eksternal, nomor darurat, dan daftar metrik wajib tersentralisasi di `constants/helper.ts` dalam format `UPPER_SNAKE_CASE`.
   - Tidak diperkenankan meletakkan hardcoded string langsung di dalam file komponen JSX/TSX.

---

## 7. Roadmap Implementasi Teknis

- [x] **Fase 1: Riset & Benchmarking** — Scraping dan dekonstruksi 8 portal KKN UGM + Pesona Kei.
- [x] **Fase 2: Kanvas Desain** — Perancangan artboard Desktop (1440) dan Mobile (390) di `compro/design_pendev/kkn.pen`.
- [x] **Fase 3: Panduan Coding & PRD** — Pembuatan `PESONA_KEI_COMPONENT_GUIDE.md` dan `PRD_WEBSITE_COMPRO_DONGGALA.md`.
- [x] **Fase 4: Instalasi Dependensi** — Memasang `motion`, `lenis`, `sonner` pada proyek `compro/`.
- [x] **Fase 5: Pembaharuan Konstanta** — Menyelaraskan `constants/helper.ts` dengan data Towale, Limboro, dan deep-link `jelajah-donggala.vercel.app`.
- [x] **Fase 6: Komponen Motion & Section Refactor** — Menerapkan `SmoothScroll`, `TiltCard`, `MarqueeStrip`, serta section baru (Kamus Kaili & Kedaruratan).
- [ ] **Fase 7: Verifikasi & Audit Produksi** — Menjalankan `next build`, pengujian responsif, dan audit linting.
