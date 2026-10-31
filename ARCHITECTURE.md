# Architecture Guidelines & Engineering Regulations
## Project: Company Profile (`compro`)

Dokumen ini memuat standar arsitektur dan regulasi ketat pemisahan **Client-Side Rendering (CSR)** dan **Server-Side Rendering (SSR)** untuk proyek website Company Profile berbasis **Next.js App Router**.

---

### 1. Struktur Folder Modular (Feature-Driven Architecture)

Struktur folder mengadopsi prinsip domain-driven per modul, bukan flat monolithic component:

```text
compro/
├── app/                  # Route Pages (Thin SSR Orchestrators)
│   ├── layout.tsx        # Root shell layout (metadata, shell header & footer)
│   ├── page.tsx          # Pure server entry point (hanya mengorkestrasi modul)
│   ├── globals.css       # Tailwind CSS styling
│   └── loading.tsx       # Loading fallback boundary
├── modules/              # Feature-Driven Components (Domain UI & Logic)
│   ├── layout/           # site-header (SSR), site-footer (SSR), mobile-nav (Leaf CSR)
│   ├── hero/             # Hero banner & highlight metrik (SSR)
│   ├── about/            # Visi, misi, & core values profil perusahaan (SSR)
│   ├── services/         # Kartu layanan & keahlian teknis (SSR)
│   ├── portfolio/        # Grid proyek & portofolio unggulan (SSR)
│   └── contact/          # contact-section (SSR) & contact-form (Leaf CSR)
├── components/           # Global Shared Components
│   └── ui/               # Domain-agnostic atomic primitives (button, card, badge, input, textarea)
├── constants/            # Single Source of Truth (SSoT)
│   └── helper.ts         # Global UPPER_SNAKE_CASE constants
├── hooks/                # Feature-agnostic custom hooks (use-media-query, dll.)
├── lib/                  # Utilitas murni (utils.ts dengan cn())
├── types/                # Domain TypeScript contracts
└── public/               # Static assets & gambar
```

---

### 2. Aturan Mutlak Pemisahan SSR vs CSR

#### A. Thin SSR Route Pages (`app/**/page.tsx`)
- Setiap file `app/**/page.tsx` **WAJIB murni Server Component (SSR)** secara default.
- Dilarang menaruh ratusan baris JSX, hook browser (`useState`, `useEffect`), atau fetch langsung di dalam `page.tsx`.
- Fungsi `page.tsx` hanyalah sebagai konduktor/orkestrator tipis yang memanggil 3–6 modul tingkat tinggi dari `@/modules/<feature>/`.

#### B. Leaf CSR Isolation (`"use client"`)
- Direktif `"use client"` **HANYA** boleh disematkan pada komponen interaktif paling ujung (*leaf components*).
  - Contoh yang valid: `modules/contact/contact-form.tsx` (state input, onSubmit, validasi), `modules/layout/mobile-nav.tsx` (hamburger toggle).
- **DILARANG KERAS** mengubah container induk, layout, atau halaman utama menjadi CSR hanya demi satu tombol atau form.
- Komponen pembungkus (misal `contact-section.tsx` atau `site-header.tsx`) tetap bertindak sebagai SSR yang mengimpor komponen interaktif leaf tersebut.

#### C. Domain-Agnostic UI Primitives (`components/ui/`)
- Folder `components/ui/` hanya boleh memuat komponen atomik tanpa logika bisnis (`button.tsx`, `card.tsx`, `badge.tsx`, `input.tsx`, `textarea.tsx`).
- Tidak boleh ada data hardcode domain perusahaan di dalam `components/ui/`.

---

### 3. Konvensi Penamaan & Standar Kode

1. **Single Source of Truth (`constants/helper.ts`):**
   - Seluruh nama perusahaan, teks narasi, link navigasi, metrik statistik, layanan, visi misi, kontak, dan tautan sosial media wajib didefinisikan secara terpusat dalam format **`UPPER_SNAKE_CASE`**.
   - Dilarang menyebarkan *magic strings* atau data mentah di dalam file JSX.
2. **Event Handlers:**
   - Awali dengan `handle` + `Action` (contoh: `handleSubmitContact`, `handleToggleMenu`, `handleResetForm`). Hindari nama ambigu seperti `submit` atau `click`.
3. **Boolean States & Props:**
   - Awali dengan `is`, `has`, atau `should` (contoh: `isSubmitting`, `hasSubmitted`, `isOpen`).
4. **State Updaters:**
   - Berpasangan dengan `set` + `PascalCase` (`const [isSubmitting, setIsSubmitting] = useState(false)`).
5. **File Naming:**
   - Seluruh file di `modules/`, `components/`, dan `hooks/` wajib menggunakan format **`kebab-case.tsx`** atau **`kebab-case.ts`**.

---

### 4. Git Workflow Regulation

- Branch dasar pengembangan aktif adalah **`dev`** sebelum dimerge ke `main`.
- Setiap pengerjaan fitur baru dicabangkan dari branch `dev`.
