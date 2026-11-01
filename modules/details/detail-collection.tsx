import { RevealTitle } from "@/components/ui/reveal-title";
import Image from "next/image";
import Link from "next/link";
import {
  VILLAGES,
  PRODUCTS,
  CULTURE_STORIES,
  PORTAL,
  MOTIF_PATH,
} from "@/constants/helper";
import { ExternalLink } from "@/components/ui/external-link";
import styles from "./detail-collection.module.css";
function getProductImage(product: { image?: string; motif: string }) {
  return product.image ?? `${MOTIF_PATH}${product.motif}.png`;
}

export function DetailCollection({
  topic,
}: {
  topic: "desa" | "karya" | "budaya";
}) {
  const items =
    topic === "desa"
      ? VILLAGES.map((v) => ({
          title: v.name,
          text: v.description,
          image: v.image,
          label: v.tag,
          href: v.href,
          id: v.href.split("/").pop(),
          external: false,
        }))
      : topic === "karya"
        ? PRODUCTS.map((p) => ({
            title: p.name,
            text: p.description,
            image: getProductImage(p),
            label: p.maker,
            href: `${PORTAL.url}#karya`,
            id: undefined,
            external: true,
          }))
        : CULTURE_STORIES.map((s, i) => ({
            title: s.title,
            text: s.description,
            image:
              i === 0
                ? "/images/destinasi/tenun-buya-sabe-proses.jpg"
                : "/images/destinasi/pusat-laut-pusentasi.jpg",
            label: s.tag,
            href: undefined,
            id: undefined,
            external: false,
          }));
  return (
    <section className="wrap section">
      <div className={styles.list}>
        {items.map((item) => (
          <article key={item.title} id={item.id} className={styles.row}>
            <figure className={styles.image}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width:900px) 90vw, 30vw"
              />
            </figure>
            <div className={styles.copy}>
              <p className={styles.label}>{item.label}</p>
              <RevealTitle as="h2">{item.title}</RevealTitle>
              <p>{item.text}</p>
              {item.href &&
                (item.external ? (
                  <ExternalLink href={item.href} className="text-link">
                    {PORTAL.productCta}
                  </ExternalLink>
                ) : (
                  <Link href={item.href} className="text-link">
                    {PORTAL.villageCta} ↗
                  </Link>
                ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
