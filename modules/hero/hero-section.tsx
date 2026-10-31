import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  COMPANY_TAGLINE,
  COMPANY_SUBTITLE,
  COMPANY_STATS,
} from "@/constants/helper"

export function HeroSection() {
  return (
    <section id="beranda" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-6 px-3.5 py-1 text-xs sm:text-sm font-medium">
            <span className="flex size-2 rounded-full bg-emerald-500 mr-2" />
            Solusi Rekayasa Perangkat Lunak & Inovasi Komunitas
          </Badge>

          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl dark:text-neutral-50">
            {COMPANY_TAGLINE}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-600 sm:text-xl dark:text-neutral-300">
            {COMPANY_SUBTITLE}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="h-12 px-7 text-base">
              <Link href="#layanan">
                Jelajahi Layanan <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-7 text-base">
              <Link href="#tentang">Tentang Perusahaan</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-600" />
              <span>Next.js App Router Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-600" />
              <span>Pemisahan SSR & CSR Ketat</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-600" />
              <span>High Performance & SEO Optimized</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 gap-4 border-y border-neutral-200 py-10 sm:grid-cols-4 dark:border-neutral-800">
          {COMPANY_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                {stat.label}
              </p>
              {stat.description && (
                <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
