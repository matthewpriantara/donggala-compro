import Image from "next/image";
import { PORTAL, PRODUCTS, MOTIF_PATH } from "@/constants/helper";
import { TiltCard } from "@/components/motion/tilt-card";
import { ExternalLink } from "@/components/ui/external-link";
export function ServicesSection() {
  return (
    <section id="karya" className="sand-section">
      <div className="wrap section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">{PORTAL.productsEyebrow}</p>
            <h2>{PORTAL.productsTitle}</h2>
          </div>
          <p>{PORTAL.productsText}</p>
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
                <span>{p.tag}</span>
              </div>
              <div className="product-content">
                <p className="maker">{p.maker}</p>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <strong>{p.price}</strong>
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
        <p className="fine-print">{PORTAL.productNote}</p>
      </div>
    </section>
  );
}
