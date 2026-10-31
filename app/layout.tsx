import type { Metadata } from "next"
import "./globals.css"
import { SiteHeader, SiteFooter } from "@/modules/layout"
import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  COMPANY_DESCRIPTION,
} from "@/constants/helper"

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | ${COMPANY_TAGLINE}`,
  description: COMPANY_DESCRIPTION,
  keywords: [
    "Company Profile",
    "Rekayasa Perangkat Lunak",
    "Digitalisasi UMKM",
    "Next.js App Router",
    "Konsultasi Teknologi",
    "Donggala",
  ],
}

interface RootLayoutProps {
  readonly children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-50 flex flex-col justify-between">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
