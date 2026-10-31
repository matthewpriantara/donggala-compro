import { HeroSection } from "@/modules/hero"
import { AboutSection } from "@/modules/about"
import { ServicesSection } from "@/modules/services"
import { PortfolioSection } from "@/modules/portfolio"
import { ContactSection } from "@/modules/contact"

/**
 * Halaman Utama (Home Route Page)
 * Pure Server Component (SSR Orchestrator)
 * Mengorkestrasi modul-modul independen dari `@/modules/<feature>/`
 */
export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  )
}
