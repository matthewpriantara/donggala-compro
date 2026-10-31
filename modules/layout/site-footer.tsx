import Link from "next/link";
import { NavigationLink } from "@/components/ui/navigation-link";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_NAME, PORTAL, NAV_LINKS } from "@/constants/helper";
import { ExternalLink } from "@/components/ui/external-link";
export function SiteFooter() {
  return (
    <footer className="wrap site-footer">
      <div className="footer-grid">
        <div>
          <Link className="brand" href="/">
            <span className="brand-mark">{PORTAL.initials}</span>
            <span>
              <strong>{COMPANY_NAME}</strong>
              <small>{PORTAL.subtitle}</small>
            </span>
          </Link>
          <p>{PORTAL.footerText}</p>
        </div>
        <div>
          <p className="eyebrow">{PORTAL.footerNav}</p>
          <nav>
            {NAV_LINKS.slice(1).map((link) => (
              <NavigationLink href={link.href} key={link.href}>
                {link.title}
                <ArrowUpRight size={13} />
              </NavigationLink>
            ))}
          </nav>
        </div>
        <div>
          <p className="eyebrow">{PORTAL.footerContact}</p>
          <p>{PORTAL.footerPartners}</p>
          <p className="address">{PORTAL.footerAddress}</p>
          <ExternalLink href={PORTAL.url} className="text-link">
            {PORTAL.platform}
          </ExternalLink>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{PORTAL.copyright}</span>
        <Link href="/desa">
          {PORTAL.villageCta}
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </footer>
  );
}
