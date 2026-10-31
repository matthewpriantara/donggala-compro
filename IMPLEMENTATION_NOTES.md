# Implementasi Jelajah Donggala

Implementasi mengikuti PRD_WEBSITE_COMPRO_DONGGALA.md dan ARCHITECTURE.md pada branch `feat/jelajah-donggala-profile` (berasal dari `dev`).

## Cakupan

- Dua belas bagian PRD, ditambah akses ke peta platform, dengan halaman SSR yang mengorkestrasi enam modul.
- Konten portal aktif terpusat di `constants/helper.ts`; komponen interaktif hanya pada daun UI.
- Deep link platform membuka tab baru dengan `noopener noreferrer`.
- Foto menggunakan aset lokal dan `next/image`; hero menggunakan `preload` sesuai dokumentasi Next.js terpasang, menggantikan properti `priority` yang deprecated.
- Fraunces disajikan lokal dengan lisensi SIL di `public/fonts/OFL.txt`.
- Lenis, tilt, cursor ambient, dan marquee menghormati reduced motion; tilt dan cursor visual dinonaktifkan di perangkat sentuh.
- Konfigurasi Tailwind/PostCSS diperbaiki untuk pemrosesan CSS webpack dan Turbopack.

## Verifikasi

- `pnpm build`: berhasil, route utama diprarender statis.
- `pnpm lint`, `pnpm exec tsc --noEmit`, `git diff --check`: berhasil.
- Chromium headless: 1440, 390, dan 320 px tanpa overflow horizontal, gambar gagal dimuat, anchor internal rusak, atau error runtime.
- Menu mobile: buka/tutup, Escape dengan pemulihan fokus, dan tutup setelah navigasi berhasil.
- Marquee reduced motion: computed animation `none`.
- Screenshot pemeriksaan tersedia sementara di `/tmp/donggala-1440.png`, `/tmp/donggala-390.png`, dan `/tmp/donggala-320.png`.

## Data dan audit lanjutan sebelum publikasi

- Statistik dan harga adalah data perencanaan dari PRD, diberi keterangan menunggu validasi. Konfirmasi nama pengrajin, ketersediaan paket, kosakata/dialek, dan harga bersama warga.
- Belum tersedia foto produk/penenun asli; ilustrasi motif digunakan tanpa mengklaimnya sebagai foto produk.
- Nomor Puskesmas dan peta evakuasi tidak direkayasa. Peta eksplorasi diarahkan ke platform; tidak dilabeli sebagai peta evakuasi.
- Target LCP, CLS, INP, audit aksesibilitas lengkap, dan ketersediaan semua rute platform tujuan belum diverifikasi pada deployment produksi. Fase 7 PRD tetap terbuka.
- Referensi: dokumen kajian serta screenshot desktop/mobile semua 11 portal dalam `referensi_benchmark/`, dilengkapi penelusuran situs yang dapat diakses. Sebagian situs benchmark tidak dapat diakses saat pengerjaan.

## Halaman detail topik

- Navbar desktop, menu mobile, dan navigasi footer menuju `/desa`, `/kriya-kuliner`, `/budaya`, `/bahasa`, dan `/kedaruratan`. Beranda dan logo menuju `/`.
- Setiap halaman mempunyai metadata, breadcrumb, pengantar khusus, konten topik, panduan berkunjung, dan tautan ke topik lainnya. Menu aktif menggunakan `aria-current="page"`.
- Kamus Bahasa Kaili menyediakan pencarian kata, arti, serta situasi dan keadaan hasil kosong. Entri tetap memerlukan validasi penutur lokal.
- Halaman serta section tetap Server Component; navigasi aktif dan pencarian diisolasi pada komponen interaktif kecil.
- Referensi struktur: https://www.pesonakei.com/budaya, https://www.pesonakei.com/bahasa, dan https://www.pesonakei.com/kedaruratan. Konten budaya Kei tidak disalin menjadi klaim mengenai Donggala.
- Build, lint, TypeScript, dan pemeriksaan diff berhasil. Pengujian Chromium mencakup enam rute pada 1440/768/390/320 px, klik navbar, reset scroll, menu mobile, metadata, gambar, anchor, pencarian kamus, serta tautan telepon. Tidak ditemukan error runtime.

## Navbar liquid glass

- Permukaan navbar memakai komponen generik `components/ui/liquid-weather-glass.tsx`, diadaptasi dari referensi pengguna dengan tipe TypeScript, ID filter unik, dukungan reduced motion, dan lapisan dekoratif tanpa intersepsi pointer.
- `SiteHeader` tetap Server Component. Komponen kecil `HeaderScrollEffect` memperbarui atribut presentasi berdasarkan scroll melalui listener pasif dan requestAnimationFrame.
- Navbar lebar penuh berubah menjadi panel membulat saat scroll melewati 64 px dan kembali penuh di bawah 32 px. Drag/ekspansi dinonaktifkan pada navbar. Tinggi shell tetap untuk menghindari layout bergeser.
- Dropdown mobile berada di luar permukaan glass tanpa terpotong dan membatasi tinggi sesuai viewport. Browser tanpa backdrop-filter memakai latar lebih pekat.
- Build produksi, lint, TypeScript, serta diff check berhasil. Chromium memverifikasi penyusutan lebar, radius, blur, ketiadaan overflow, kestabilan layout, klik navigasi, menu mobile/Escape, reset saat kembali ke atas, dan reduced motion pada 1920/1440/1366/1280/768/390/320 px. Tidak ada error runtime.

## Wave hero dengan GSAP

- Pita marquee di bawah hero diganti dengan satu SVG wave yang menyatu dengan warna section berikutnya, mengikuti referensi bentuk transisi Cerita Neira (https://ceritaneira.com).
- GSAP ScrollTrigger menggerakkan wave dari bawah ke atas sesuai posisi scroll dengan scrub 0.8; tidak menggunakan animasi loop atau beberapa layer. Komponen interaktif diisolasi pada `components/ui/wave-divider.tsx`, hero dan halaman tetap Server Component.
- `gsap.matchMedia` menonaktifkan parallax saat reduced motion aktif dan melakukan cleanup ketika preferensi berubah atau komponen dilepas. Panduan API: https://gsap.com/docs/v3/GSAP/gsap.matchMedia/ dan https://gsap.com/docs/v3/Plugins/ScrollTrigger/.
- Build, lint, TypeScript, serta pemeriksaan diff berhasil. Chromium memverifikasi satu wave, gerakan naik saat scroll, tidak ada celah antarsection, teks/CTA bebas tumpang tindih, tanpa overflow pada 1440/768/390/320 px, reduced motion, dan perpindahan rute tanpa error runtime.

## Hero layar penuh dan carousel

- Viewport awal terdiri dari navbar dan hero setinggi `100svh`; wave ditempatkan setelah hero tanpa margin negatif, sehingga tidak muncul pada layar awal.
- Ketiga foto pengguna ditampilkan berurutan dengan crossfade otomatis setiap 6 detik. Foto pertama identik dengan `design_pendev/assets/hero_limboro_coastal.png` dan sudah tersedia di public. Hanya foto pertama dipreload.
- Kontrol kanan bawah memakai pill/titik putih dan counter `01 / 03`, disertai pemilihan gambar dan tombol jeda. Autoplay dijeda ketika kontrol mendapat fokus/hover atau tab tersembunyi, dan dinonaktifkan untuk reduced motion.
- Carousel diisolasi pada leaf `modules/hero/hero-carousel.tsx`; headline dan container hero tetap SSR. Konten serta konfigurasi carousel tersentralisasi pada constants.
- Wave GSAP tersembunyi awalnya dan naik setelah scroll; foto diteruskan ke area transisi agar tidak menyisakan latar kosong. Reduced motion menggunakan pergantian keadaan tanpa animasi.
- Build, lint, dan TypeScript berhasil. Chromium menguji viewport 1440×900, 768×1024, 390×844, dan 320×720: batas hero tepat pada tinggi layar, wave di luar viewport awal dan muncul setelah scroll, tiga foto valid, indikator serta CTA tidak bertumpuk, tanpa overflow/runtime error. Autoplay sampai foto ketiga, jeda, pemilihan manual, dan reduced motion berhasil.

## Penyederhanaan kontrol dan penyelarasan navbar

- CTA gulir dihapus. Carousel menyisakan tombol pill/titik di tengah bawah tanpa counter atau tombol pause/play sesuai permintaan; autoplay tetap berhenti saat kontrol difokuskan/di-hover, tab tersembunyi, atau reduced motion aktif.
- Navbar default tidak memiliki background maupun backdrop blur. Di beranda, navbar menumpang pada foto hero tanpa mengurangi tinggi satu viewport. Saat scroll, panel glass menggunakan rumus lebar dan gutter yang sama dengan `.wrap`.
- Build, lint, dan TypeScript berhasil. Chromium memeriksa enam ukuran layar 320–1920 px: indikator berada di tengah, elemen yang diminta dihapus tidak dirender, navbar awal transparan, hero tepat satu layar, tepi navbar compact sama dengan konten, tautan/menu berfungsi, dan tidak ada overflow/runtime error.

## Pita motif antarsection

- Pita tenun ditambahkan pada batas Profil Desa → Kriya & Kuliner serta Kriya & Kuliner → Perjalanan di beranda.
- `public/images/tenun-donggala-border.svg` adalah tile horizontal 560 byte yang diturunkan dari segmen sulur/eyelet tepi SVG pengguna. Aset asli tetap dipertahankan. Tile dipakai ulang sebagai background repeat-x, bukan merasterkan atau memuat ulang keseluruhan kain.
- Tinggi pita 80 px desktop dan 60 px mobile, memakai kanvas biru tua dengan motif asli berwarna putih, koral, dan emas. Komponen `PatternDivider` murni SSR dan dekoratif (`aria-hidden`).
- Build, lint, TypeScript, dan diff check berhasil; browser memverifikasi dua batas section, pemuatan SVG, repeat horizontal, dan ketiadaan overflow pada desktop/mobile.

## Pendalaman lima halaman navbar

- `/desa`: karakter dua desa, potensi kunjungan, akses peta, dan status validasi statistik.
- `/kriya-kuliner`: mengenal motif/bahan/perawatan tenun, informasi komposisi dan penyimpanan pangan yang perlu ditanyakan kepada pembuat, serta alur kontak pengrajin tanpa harga tetap.
- `/budaya`: etika dokumentasi, penghormatan ruang kerja warga, dan kepedulian lingkungan.
- `/bahasa`: konteks kosakata awal, perbedaan dialek, penggunaan pencarian, dan keterangan bahwa rekaman audio belum tersedia.
- `/kedaruratan`: persiapan kontak lokal serta informasi lokasi/kejadian untuk disampaikan kepada operator, tanpa mengarang nomor lokal atau peta evakuasi.
- Setiap halaman mendapat dua kartu informasi khusus, tiga FAQ native yang bisa dioperasikan dengan keyboard, dan CTA yang sesuai konteks. Teks terpusat dalam constants; route tetap SSR dengan enam modul.
- Build, lint, TypeScript, dan diff check berhasil. Chromium memeriksa kelima rute pada 1440/390/320 px, metadata, menu aktif, jumlah konten, keyboard FAQ, overflow, dan error runtime; semuanya lolos.
