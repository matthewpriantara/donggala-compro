import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PORTAL, VILLAGES, VILLAGE_STATS } from "@/constants/helper";
import { FadeIn } from "@/components/motion/fade-in";
import { ExternalLink } from "@/components/ui/external-link";
export function AboutSection() {
  return (
    <section id="tentang" className="section wrap">
      <FadeIn className="about-grid">
        <div>
          <p className="eyebrow">{PORTAL.aboutEyebrow}</p>
          <h2>
            {PORTAL.aboutTitle}
            <br />
            <em>{PORTAL.aboutAccent}</em>
          </h2>
          <p className="body-copy">{PORTAL.aboutText}</p>
          <p className="body-copy">{PORTAL.aboutTextSecond}</p>
          <div className="village-tags">
            {VILLAGES.map((v) => (
              <span key={v.name}>
                {v.name}
                <ArrowUpRight size={14} />
              </span>
            ))}
          </div>
        </div>
        <figure className="about-photo">
          <Image
            src={PORTAL.aboutImage}
            alt={VILLAGES[0].alt}
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
          />
          <figcaption>{PORTAL.aboutCaption}</figcaption>
        </figure>
      </FadeIn>
      <div className="stats">
        {VILLAGE_STATS.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <p className="fine-print">{PORTAL.statsNote}</p>
      <div className="section-heading">
        <p className="eyebrow">{PORTAL.villagesEyebrow}</p>
        <h2>{PORTAL.villagesTitle}</h2>
      </div>
      <div className="village-grid">
        {VILLAGES.map((v) => (
          <article className="village-card" key={v.name}>
            <div className="village-photo">
              <Image
                src={v.image}
                alt={v.alt}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <span className="photo-index">{v.number}</span>
            </div>
            <div className="village-content">
              <p className="eyebrow">{v.tag}</p>
              <h3>{v.name}</h3>
              <p>{v.description}</p>
              <div className="highlights">
                {v.highlights.map((h) => (
                  <span key={h}>{h}</span>
                ))}
              </div>
              <ExternalLink href={`${PORTAL.url}/desa`} className="text-link">
                {v.cta}
              </ExternalLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
