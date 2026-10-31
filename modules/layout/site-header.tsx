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
    <header className="site-header">
      <div className="header-inner">
        <a href="#beranda" className="brand">
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
        </a>
        <nav className="desktop-nav" aria-label={PORTAL.navigation}>
          {NAV_LINKS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.title}
            </a>
          ))}
        </nav>
        <ExternalLink href={PORTAL.url} className="button header-cta">
          {PORTAL.platform}
        </ExternalLink>
        <MobileNav />
      </div>
    </header>
  );
}
