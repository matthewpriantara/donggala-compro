# Panduan Komponen, Motion & Library UI: Pesona Kei untuk Donggala
## Panduan Implementasi Teknis & Arsitektur Frontend Next.js

Dokumen ini adalah **panduan resmi (coding guide & component blueprint)** untuk mengintegrasikan *tech stack*, pustaka UI, animasi, dan komponen interaktif hasil *reverse engineering* dari **Pesona Kei (`pesonakei.com`)** ke dalam website **Jelajah Donggala (Desa Towale & Desa Limboro)**.

---

## 1. Daftar Library & Ekosistem Teknologi

Berdasarkan hasil ekstraksi bundle *production* Pesona Kei, berikut dependensi yang menjadi standar implementasi:

| Kategori | Paket / Library | Peran & Fungsi Utama |
| :--- | :--- | :--- |
| **Framework** | `next` (App Router, Turbopack) | Server Components (SSR) sebagai orkestrator data dan SEO. |
| **Styling** | `tailwindcss` | Utilitas styling modern dengan token warna berbasis CSS variables. |
| **Motion Engine** | `motion` (atau `framer-motion` v11/v12) | *Core animation engine* untuk interaksi mikro, 3D parallax, dan transisi elemen. |
| **Smooth Scroll** | `lenis` (`@studio-freight/lenis`) | *Inertial smooth scrolling* mewah ala agensi Awwwards. |
| **UI Primitives** | `@radix-ui/react-slot`, `@radix-ui/react-dropdown-menu` | Komponen dasar aksesibel (*headless* tanpa gaya bawaan kaku). |
| **Varian & Utils** | `class-variance-authority` (`cva`), `clsx`, `tailwind-merge` | Pengelolaan varian tombol/badge dan penggabungan kelas dinamis. |
| **Icons** | `lucide-react` | Ikonografi SVG vektor bersih dan ringan. |
| **Toaster** | `sonner` | Notifikasi toast modern beranimasi halus (untuk form kontak/booking trip). |

### Perintah Instalasi Dependensi
```bash
npm install motion lenis sonner @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
# atau dengan pnpm:
pnpm add motion lenis sonner @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
```

---

## 2. Token Warna & Tema Bahari Donggala (Adaptasi Pesona Kei)

Tambahkan atau pastikan token warna berikut terdaftar di `app/globals.css` atau Tailwind config:

```css
@layer base {
  :root {
    /* 1. Ocean (Abyssal Navy) - Latar belakang canvas gelap & megah */
    --color-ocean-950: #041d2a;
    --color-ocean-900: #0a2c3e;
    --color-ocean-700: #1a4d68;

    /* 2. Lagoon (Turquoise Pesisir) - Air toska jernih teluk Limboro & aksen interaktif */
    --color-lagoon-600: #0d8d82;
    --color-lagoon-300: #82ded2;
    --color-lagoon-700: #166f66;

    /* 3. Sand (Pasir Putih Hangat) - Latar bagian terang Pantai Kaluku */
    --color-sand-100: #f5f3ed;

    /* 4. Coral & Gold (Aksen Tenun & Bahari) - Benang emas Buya Bomba & terumbu karang */
    --color-coral-600: #d9553f;
    --color-coral-700: #b24133;
    --color-amber-gold: #d97706;
  }
}
```

---

## 3. Resep Komponen Siap Pakai (*Component Recipes*)

Semua komponen animasi ini dirancang mengikuti **regulasi ketat isolasi CSR (`use client`)** pada leaf component, sehingga `app/page.tsx` tetap murni Server Component.

---

### Resep 1: `SmoothScroll.tsx` (Integrasi Lenis)
*Lokasi:* `components/motion/smooth-scroll.tsx`

Menghadirkan pergerakan scroll halaman yang meluncur lembut (*luxurious inertial scroll*). Komponen ini secara otomatis mengabaikan efek jika pengguna mengaktifkan mode hemat gerak (*prefers-reduced-motion*).

```tsx
"use client"

import { useEffect } from "react"
import Lenis from "lenis"

declare global {
  interface Window {
    __lenis?: Lenis
  }
}

export function SmoothScroll() {
  useEffect(() => {
    // Cek preferensi aksesibilitas pengguna
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    })

    window.__lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.__lenis = undefined
    }
  }, [])

  return null
}
```

---

### Resep 2: `TiltCard.tsx` (Efek Parallax 3D Fisika Pegas)
*Lokasi:* `components/motion/tilt-card.tsx`

Digunakan untuk membungkus kartu produk tenun Buya Bomba, olahan sagu, dan destinasi wisata. Saat kursor mouse digerakkan di atas kartu, kartu merespons dengan kemiringan perspektif 3D yang elastis.

```tsx
"use client"

import { useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

interface TiltCardProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function TiltCard({ children, className, intensity = 12 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  // Menggunakan pegas (spring) yang responsif dan halus
  const springRotateX = useSpring(rotateX, { stiffness: 220, damping: 18 })
  const springRotateY = useSpring(rotateY, { stiffness: 220, damping: 18 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    // Hitung persentase offset dari titik tengah (-0.5 s/d 0.5)
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    rotateX.set(-yPct * intensity)
    rotateY.set(xPct * intensity)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  )
}
```

---

### Resep 3: `FadeIn.tsx` & `StaggerGrid.tsx` (Animasi Muncul Bertahap)
*Lokasi:* `components/motion/fade-in.tsx`

Membuat section atau daftar kartu muncul mengalir lembut saat di-scroll ke dalam layar.

```tsx
"use client"

import { type ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  const offset = 24
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? offset : direction === "down" ? -offset : 0,
      x: direction === "left" ? offset : direction === "right" ? -offset : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerGridProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerGrid({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerGridProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

---

### Resep 4: `MarqueeStrip.tsx` (Pita Budaya Berjalan Tanpa Henti)
*Lokasi:* `components/motion/marquee-strip.tsx`

Pita teks dinamis pemisah ritme antar-section yang mengalir mulus (*infinite loop ticker*).

```tsx
import { cn } from "@/lib/utils"

interface MarqueeStripProps {
  items: readonly string[]
  className?: string
}

export function MarqueeStrip({ items, className }: MarqueeStripProps) {
  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden border-y border-[#1A4D68] bg-[#0A2C3E] py-3.5",
        className
      )}
    >
      <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap">
        {items.map((item, idx) => (
          <span
            key={`m1-${idx}`}
            className="flex items-center gap-4 text-xs sm:text-sm font-bold tracking-widest text-[#82DED2] uppercase"
          >
            <span>❖</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap"
      >
        {items.map((item, idx) => (
          <span
            key={`m2-${idx}`}
            className="flex items-center gap-4 text-xs sm:text-sm font-bold tracking-widest text-[#82DED2] uppercase"
          >
            <span>❖</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
```

*Tambahan di `globals.css` atau Tailwind config untuk `@keyframes marquee`:*
```css
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
.animate-marquee {
  animation: marquee 35s linear infinite;
}
```

---

### Resep 5: `CursorFollower.tsx` (Ambient Cursor Spring)
*Lokasi:* `components/motion/cursor-follower.tsx`

Elemen visual khas agensi di desktop berupa dot toska lembut yang melayang mengikuti pergerakan mouse pengguna. Otomatis tersembunyi pada perangkat *touchscreen* (mobile/tablet).

```tsx
"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react"

export function CursorFollower() {
  const shouldReduce = useReducedMotion()
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { stiffness: 160, damping: 22 })
  const springY = useSpring(mouseY, { stiffness: 160, damping: 22 })

  useEffect(() => {
    // Nonaktifkan pada layar sentuh
    if (window.matchMedia("(pointer: coarse)").matches || shouldReduce) return

    function handleMove(e: MouseEvent) {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      if (target?.closest("a, button, [role='button'], input, textarea")) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseover", handleOver)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseover", handleOver)
    }
  }, [isVisible, mouseX, mouseY, shouldReduce])

  if (!isVisible || shouldReduce) return null

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHovered ? 2 : 1,
        opacity: isHovered ? 0.35 : 0.6,
      }}
      transition={{ duration: 0.15 }}
      className="pointer-events-none fixed top-0 left-0 z-50 size-7 rounded-full bg-[#82DED2] mix-blend-screen blur-[1px]"
    />
  )
}
```

---

## 4. Cara Pemasangan di Root Layout (`app/layout.tsx`)

Pasang `SmoothScroll` dan `CursorFollower` tepat di dalam `<body>`:

```tsx
import type { Metadata } from "next"
import { SmoothScroll } from "@/components/motion/smooth-scroll"
import { CursorFollower } from "@/components/motion/cursor-follower"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jelajah Donggala — Wisata & Budaya Towale & Limboro",
  description: "Portal resmi pariwisata terpadu Desa Towale dan Desa Limboro, Kecamatan Banawa Tengah, Kabupaten Donggala.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#041D2A] text-neutral-100 antialiased selection:bg-[#0D8D82] selection:text-white">
        <SmoothScroll />
        <CursorFollower />
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
```

---

## 5. Ringkasan Prinsip Kunci (*Best Practices*)

1. **Server Component First**: Seluruh fetching data dan orkestrasi layout tetap berada di Server Components. Gunakan komponen `FadeIn`, `TiltCard`, dan `SmoothScroll` hanya sebagai pembungkus (*wrapper*) visual.
2. **Aksesibilitas (A11y)**: Selalu gunakan `useReducedMotion()` dari `motion/react` agar pengguna yang memiliki gangguan vestibular tidak terganggu oleh animasi parallax.
3. **No Magic Strings**: Semua teks, daftar nomor darurat, kata kamus Kaili, dan harga kriya tenun harus ditaruh di `constants/helper.ts`.
4. **Performa Gambar**: Gunakan `next/image` dengan properti `priority` untuk background hero dan `sizes` yang presisi untuk kartu produk, sehingga Cumulative Layout Shift (CLS) = 0.
