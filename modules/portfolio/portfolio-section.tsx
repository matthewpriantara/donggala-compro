import { RevealTitle } from "@/components/ui/reveal-title";
import { Badge } from "@/components/ui/badge";
import { PortfolioGrid } from "./portfolio-grid";

export function PortfolioSection() {
  return (
    <section
      id="portofolio"
      className="bg-neutral-50/50 py-20 sm:py-28 dark:bg-neutral-900/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-3">
            Portofolio Unggulan
          </Badge>
          <RevealTitle
            as="h2"
            className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-neutral-50"
          >
            Karya & Implementasi Nyata
          </RevealTitle>
          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600 dark:text-neutral-400">
            Beberapa inisiatif dan platform perangkat lunak yang telah kami
            rancang dan bangun dengan arsitektur modern.
          </p>
        </div>

        <PortfolioGrid />
      </div>
    </section>
  );
}
