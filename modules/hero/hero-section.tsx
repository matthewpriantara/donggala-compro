import { HeroCarousel } from "./hero-carousel";
import { ArrowDown, MapPin } from "lucide-react";
import { PORTAL } from "@/constants/helper";
import { WaveDivider } from "@/components/ui/wave-divider";
import { ExternalLink } from "@/components/ui/external-link";
export function HeroSection() {
  return (
    <>
      <section id="beranda" className="hero">
        <HeroCarousel />
        <div className="hero-shade" />
        <div className="hero-inner wrap">
          <div className="hero-card">
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
          </div>
          <span className="hero-coordinate">
            <MapPin size={16} aria-hidden="true" />
            <span>{PORTAL.location}</span>
          </span>
        </div>
        <a href="#tentang" className="scroll-cue">
          <ArrowDown size={14} />
          {PORTAL.scroll}
        </a>
      </section>
      <WaveDivider className="hero-wave" />
    </>
  );
}
