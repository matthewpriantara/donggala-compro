import Link from "next/link"
import Image from "next/image"
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
    <section id="beranda" className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      {/* Background Hero Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero_limboro_coastal.png"
          alt="Panorama Pesisir Bahari Limboro Donggala"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-neutral-950/25 backdrop-blur-[1.5px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/70 bg-[#FDFBF7]/90 p-8 shadow-2xl backdrop-blur-md sm:p-12 lg:p-14 dark:border-neutral-800/80 dark:bg-neutral-900/90">
          <div className="flex flex-col items-center text-center">
            <Badge variant="secondary" className="mb-6 px-3.5 py-1 text-xs sm:text-sm font-medium bg-amber-100/90 text-amber-900 border border-amber-200">
              <span className="flex size-2 rounded-full bg-emerald-500 mr-2" />
              Kecamatan Banawa Tengah, Kabupaten Donggala · Sulawesi Tengah
            </Badge>

            <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-50 font-serif">
              {COMPANY_TAGLINE}
            </h1>

            <p className="mt-5 max-w-2xl text-base text-neutral-700 sm:text-lg dark:text-neutral-300">
              {COMPANY_SUBTITLE}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-7 text-base rounded-full bg-[#0C2340] hover:bg-[#0C2340]/90 text-white shadow-lg">
                <Link href="#layanan">
                  Jelajahi Potensi Desa <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-7 text-base rounded-full border-[#0C2340] text-[#0C2340] hover:bg-neutral-100">
                <Link href="#tentang">Kenali Dua Desa</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-neutral-600">
              <span className="rounded-full bg-white/80 px-3 py-1 border border-neutral-200">Desa Towale</span>
              <span className="rounded-full bg-white/80 px-3 py-1 border border-neutral-200">Desa Limboro</span>
              <span className="rounded-full bg-white/80 px-3 py-1 border border-neutral-200">Tenun Buya Bomba</span>
              <span className="rounded-full bg-white/80 px-3 py-1 border border-neutral-200">Sentra Sagu & Pesisir</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md sm:grid-cols-4 dark:bg-neutral-900/90 dark:border-neutral-800">
          {COMPANY_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold tracking-tight text-[#0C2340] sm:text-4xl dark:text-emerald-400">
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
