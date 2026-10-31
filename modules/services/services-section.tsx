import { SERVICES } from "@/constants/helper"
import { Badge } from "@/components/ui/badge"
import { ServiceCard } from "./service-card"

export function ServicesSection() {
  return (
    <section id="layanan" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="outline" className="mb-3">
            Layanan Kami
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50">
            Solusi Rekayasa & Konsultasi Terpadu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600 dark:text-neutral-400">
            Kombinasi keahlian teknis modern dan pemahaman kebutuhan bisnis untuk menghasilkan luaran yang terukur.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
