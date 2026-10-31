import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { PORTAL, MARQUEE_ITEMS, MOTIF_PATH } from "@/constants/helper";
import { ExternalLink } from "@/components/ui/external-link";
export function HeroSection() {
  return (
    <>
      <section id="beranda" className="hero">
        <Image
          src={PORTAL.heroImage}
          alt={PORTAL.heroAlt}
          fill
          preload
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="hero-inner wrap">
          <div className="hero-card">
            <p className="eyebrow location">
              <span />
              {PORTAL.location}
            </p>
            <h1>
              {PORTAL.headline}
              <br />
              {PORTAL.headlineSecond}
              <br />
              <em>{PORTAL.headlineAccent}</em>
            </h1>
            <p className="hero-description">{PORTAL.description}</p>
            <div className="hero-actions">
              <ExternalLink href={PORTAL.url}>{PORTAL.heroCta}</ExternalLink>
              <a href="#tentang" className="text-link">
                {PORTAL.villageCta}
                <ArrowDown size={16} />
              </a>
            </div>
            <div className="hero-card-bottom">
              <Image
                src={`${MOTIF_PATH}kuning.png`}
                alt=""
                width={26}
                height={26}
              />
              <span>{PORTAL.heroNote}</span>
            </div>
          </div>
          <span className="hero-coordinate">
            <MapPin size={14} />
            {PORTAL.edition}
          </span>
          <div className="hero-caption">
            <span className="caption-line" />
            <span>{PORTAL.heroCaption}</span>
          </div>
        </div>
        <a href="#tentang" className="scroll-cue">
          <ArrowDown size={14} />
          {PORTAL.scroll}
        </a>
      </section>
      <div className="marquee">
        {[0, 1].map((copy) => (
          <div
            className="marquee-track"
            aria-hidden={copy === 1 ? true : undefined}
            key={copy}
          >
            {MARQUEE_ITEMS.map((item, index) => (
              <span key={item}>
                <Image
                  src={`${MOTIF_PATH}${index % 2 ? "kuning" : "biru"}.png`}
                  width={22}
                  height={22}
                  alt=""
                />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
