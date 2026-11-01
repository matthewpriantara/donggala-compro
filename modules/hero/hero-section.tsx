import styles from "./hero-location.module.css";
import { RevealTitle } from "@/components/ui/reveal-title";
import { HeroCarousel } from "./hero-carousel";
import { ArrowDown, MapPin } from "lucide-react";
import { PORTAL } from "@/constants/helper";
import { WaveDivider } from "@/components/ui/wave-divider";
import { ExternalLink } from "@/components/ui/external-link";
import { LiquidGlassCard } from "@/components/ui/liquid-weather-glass";
export function HeroSection() {
  return (
    <>
      <section id="beranda" className="hero">
        <HeroCarousel />
        <div className="hero-shade" />
        <div className="hero-inner wrap">
          <div className="hero-card">
            <RevealTitle as="h1">
              {PORTAL.headline}
              <br />
              {PORTAL.headlineSecond}
              <br />
              <em>{PORTAL.headlineAccent}</em>
            </RevealTitle>
            <p className="hero-description">{PORTAL.description}</p>
            <div className="hero-actions">
              <ExternalLink href={PORTAL.url}>{PORTAL.heroCta}</ExternalLink>
              <a href="#tentang" className="text-link">
                {PORTAL.villageCta}
                <ArrowDown size={16} />
              </a>
            </div>
          </div>
          <LiquidGlassCard
            className={`hero-coordinate ${styles.badge}`}
            draggable={false}
            expandable={false}
            borderRadius="999px"
            blurIntensity="sm"
            shadowIntensity="xs"
            glowIntensity="none"
          >
            <MapPin size={16} aria-hidden="true" />
            <span>{PORTAL.location}</span>
          </LiquidGlassCard>
        </div>
      </section>
      <WaveDivider className="hero-wave" />
    </>
  );
}
