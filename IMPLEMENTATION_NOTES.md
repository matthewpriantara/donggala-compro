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
