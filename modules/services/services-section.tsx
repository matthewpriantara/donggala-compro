import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PORTAL, PRODUCTS, MOTIF_PATH, TOPIC_PAGES } from "@/constants/helper";
import { TiltCard } from "@/components/motion/tilt-card";
import { ExternalLink } from "@/components/ui/external-link";
export function ServicesSection({ isDetail = false }: { isDetail?: boolean }) {
  return (
    <section id="karya" className="sand-section products-section">
      <div className="wrap section">
        <div className="section-heading products-heading">
          <h2>{PORTAL.productsTitle}</h2>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((p, index) => (
            <TiltCard className="product-card" key={p.name}>
              <div className={`product-art product-art-${index}`}>
                <Image
                  src={`${MOTIF_PATH}${p.motif}.png`}
                  alt=""
                  width={130}
                  height={130}
                />
                <span className="product-category">{p.tag}</span>
                <span className="product-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="product-content">
                <p className="maker">{p.maker}</p>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ExternalLink
                  href={`${PORTAL.url}#karya`}
                  className="text-link"
                >
                  {PORTAL.productCta}
                </ExternalLink>
              </div>
            </TiltCard>
          ))}
        </div>
        {!isDetail && (
          <div className="products-action">
            <Link className="button" href={TOPIC_PAGES.karya.path}>
              {PORTAL.productsCta}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
