import { RevealTitle } from "@/components/ui/reveal-title";
import styles from "./showcase-ornaments.module.css";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PORTAL, PRODUCTS, MOTIF_PATH, TOPIC_PAGES } from "@/constants/helper";
import { TiltCard } from "@/components/motion/tilt-card";
import { ExternalLink } from "@/components/ui/external-link";
export function ServicesSection({ isDetail = false }: { isDetail?: boolean }) {
  return (
    <section
      id="karya"
      className={`sand-section products-section ${styles.section}`}
    >
      <div className={styles.ornaments} aria-hidden="true">
        {(
          ["biru", "pink", "kuning", "biru", "pink", "kuning", "biru"] as const
        ).map((color, index) => (
          <Image
            key={`${color}-${index}`}
            src={`${MOTIF_PATH}${color}.png`}
            width={190}
            height={190}
            alt=""
            className={styles.motif}
            sizes="190px"
          />
        ))}
      </div>
      <div className={`wrap section ${styles.content}`}>
        <div className="section-heading products-heading">
          <RevealTitle as="h2">{PORTAL.productsTitle}</RevealTitle>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <TiltCard className="product-card" key={p.name}>
              <div className="product-art">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  className="product-photo"
                />
                <span className="product-category">{p.tag}</span>
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
