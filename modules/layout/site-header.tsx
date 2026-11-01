import styles from "./site-header.module.css";
import { BrandLogo } from "./brand-logo";
import { LiquidGlassCard } from "@/components/ui/liquid-weather-glass";
import { HeaderScrollEffect } from "./header-scroll-effect";
import Link from "next/link";
import {
  COMPANY_NAME,
  NAV_LINKS,
  PORTAL,
} from "@/constants/helper";
import { ExternalLink } from "@/components/ui/external-link";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className={`site-header ${styles.header}`} data-scrolled="false">
      <HeaderScrollEffect />
      <LiquidGlassCard
        className={`header-surface ${styles.surface}`}
        draggable={false}
        expandable={false}
        borderRadius="var(--header-radius, 0px)"
        shadowIntensity="xs"
        glowIntensity="sm"
      >
        <div className="header-inner">
          <Link href="/" className="brand" aria-label={`${COMPANY_NAME} Beranda`}>
            <BrandLogo />
          </Link>
          <DesktopNav items={NAV_LINKS} />
          <ExternalLink href={PORTAL.url} className="button header-cta">
            {PORTAL.platform}
          </ExternalLink>
          <MobileNav />
        </div>
      </LiquidGlassCard>
    </header>
  );
}
