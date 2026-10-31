import Link from "next/link"
import { COMPANY_NAME, NAV_LINKS } from "@/constants/helper"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#beranda" className="flex items-center gap-2 font-bold tracking-tight text-lg text-neutral-900 dark:text-neutral-50">
          <span className="flex size-8 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-neutral-50 dark:text-neutral-900 font-extrabold text-sm">
            DK
          </span>
          <span>{COMPANY_NAME}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm">
            <Link href="#kontak">Konsultasi Sekarang</Link>
          </Button>
        </div>

        {/* Mobile Navigation (Leaf CSR) */}
        <MobileNav />
      </div>
    </header>
  )
}
