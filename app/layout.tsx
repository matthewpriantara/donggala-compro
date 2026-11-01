import { SITE_ORIGIN, SHOULD_INDEX_SITE } from "@/constants/seo";
import { createPageMetadata } from "@/lib/seo";
import { Suspense } from "react";
import { PageTextMotion } from "@/components/motion/page-text-motion";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./mobile-layout.css";
import { SiteHeader, SiteFooter } from "@/modules/layout";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { DeferredCursor } from "@/components/motion/deferred-cursor";
import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  COMPANY_DESCRIPTION,
  PORTAL,
} from "@/constants/helper";
const PLUS_JAKARTA_SANS = localFont({
  src: "../public/fonts/plus-jakarta-sans.woff2",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

const FRAUNCES = localFont({
  src: [
    {
      path: "../public/fonts/fraunces-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/fraunces-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: `${COMPANY_NAME} | ${COMPANY_TAGLINE}`,
    description: COMPANY_DESCRIPTION,
    path: "/",
  }),
  metadataBase: SITE_ORIGIN,
  robots: { index: SHOULD_INDEX_SITE, follow: SHOULD_INDEX_SITE },
};
export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${PLUS_JAKARTA_SANS.variable} ${FRAUNCES.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <a className="skip-link" href="#konten">
          {PORTAL.skip}
        </a>
        <SmoothScroll />
        <Suspense fallback={null}>
          <PageTextMotion />
        </Suspense>
        <DeferredCursor />
        <SiteHeader />
        <main id="konten">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
