import { LiquidGlassCard } from "@/components/ui/liquid-weather-glass";
import { HeaderScrollEffect } from "./header-scroll-effect";
import Link from "next/link";
import { NavigationLink } from "@/components/ui/navigation-link";
import Image from "next/image";
import {
  COMPANY_NAME,
  NAV_LINKS,
  PORTAL,
  MOTIF_PATH,
} from "@/constants/helper";
import { ExternalLink } from "@/components/ui/external-link";
import { MobileNav } from "./mobile-nav";
export function SiteHeader() {
  return (
    <header className="site-header" data-scrolled="false">
      <HeaderScrollEffect />
      <LiquidGlassCard
        className="header-surface"
        draggable={false}
        expandable={false}
        borderRadius="var(--header-radius, 0px)"
        shadowIntensity="xs"
        glowIntensity="sm"
      >
        <div className="header-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">{PORTAL.initials}</span>
            <span>
              <strong>{COMPANY_NAME}</strong>
              <small>{PORTAL.subtitle}</small>
            </span>
            <Image
              src={`${MOTIF_PATH}kuning.png`}
              width={23}
              height={23}
              alt=""
            />
          </Link>
          <nav className="desktop-nav" aria-label={PORTAL.navigation}>
            {NAV_LINKS.map((item) => (
              <NavigationLink key={item.href} href={item.href}>
                {item.title}
              </NavigationLink>
            ))}
          </nav>
          <ExternalLink href={PORTAL.url} className="button header-cta">
            {PORTAL.platform}
          </ExternalLink>
          <MobileNav />
        </div>
      </LiquidGlassCard>
    </header>
  );
}
