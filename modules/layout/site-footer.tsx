import Link from "next/link"
import {
  COMPANY_NAME,
  COMPANY_DESCRIPTION,
  NAV_LINKS,
  CONTACT_INFO,
  SOCIAL_LINKS,
  COPYRIGHT_YEAR,
} from "@/constants/helper"

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-bold tracking-tight text-lg text-neutral-900 dark:text-neutral-50">
              <span className="flex size-7 items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-neutral-50 dark:text-neutral-900 text-xs font-bold">
                DK
              </span>
              <span>{COMPANY_NAME}</span>
            </div>
            <p className="max-w-md text-sm text-neutral-600 dark:text-neutral-400">
              {COMPANY_DESCRIPTION}
            </p>
            <div className="pt-2 text-xs text-neutral-500">
              <p>{CONTACT_INFO.address}</p>
              <p className="mt-1">Jam Operasional: {CONTACT_INFO.operatingHours}</p>
            </div>
          </div>

          {/* Navigasi Cepat */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Tautan Cepat
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-neutral-950 dark:hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak & Media Sosial */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Hubungi Kami
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-4 text-neutral-500">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200/80 pt-8 text-center text-xs text-neutral-500 dark:border-neutral-800">
          <p>
            &copy; {COPYRIGHT_YEAR} {COMPANY_NAME}. Hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  )
}
