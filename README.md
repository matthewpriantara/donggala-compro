# Company Profile (`compro`)

Website Company Profile modern berbasis **Next.js 16 (App Router)**, **React 19**, **TypeScript**, dan **Tailwind CSS v4** dengan arsitektur modular (*Feature-Driven Architecture*) dan regulasi pemisahan **SSR vs CSR** yang ketat.

---

## 🛠️ Menjalankan Proyek

Pastikan dependensi telah terpasang dengan **pnpm**:

```bash
pnpm install
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat website.

### Perintah Lainnya:
- `pnpm build`: Membangun build produksi Next.js.
- `pnpm start`: Menjalankan server hasil build produksi.
- `pnpm lint`: Menjalankan analisis linting kode.

---

## 🏛️ Arsitektur & Aturan Pemisahan SSR/CSR

Proyek ini menerapkan regulasi ketat:
1. **Thin SSR Route Pages:** `app/page.tsx` bertindak sebagai orkestrator murni (*Server Component*).
2. **Feature Modules:** Seluruh logika bisnis & tampilan per fitur terisolasi di `modules/<feature>/`.
3. **Leaf CSR Isolation:** Direktif `"use client"` hanya disematkan pada komponen daun interaktif (`mobile-nav.tsx`, `contact-form.tsx`).
4. **Single Source of Truth:** Semua metadata dan teks terpusat di `constants/helper.ts` (`UPPER_SNAKE_CASE`).

Panduan lengkap dapat dibaca pada file **`ARCHITECTURE.md`**.

---

## 🌿 Git Branch Convention

- Base branch untuk pengembangan adalah **`dev`** sebelum dimerge ke `main`.
