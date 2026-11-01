import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/modules/layout";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { CursorFollower } from "@/components/motion/cursor-follower";
import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  COMPANY_DESCRIPTION,
  PORTAL,
} from "@/constants/helper";
const PLUS_JAKARTA_SANS = localFont({
  src: "../public/fonts/plus-jakarta-sans.ttf",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | ${COMPANY_TAGLINE}`,
  description: COMPANY_DESCRIPTION,
  icons: {
    icon: "/images/donggala-logo-mark.png",
    apple: "/images/donggala-logo-mark.png",
  },
  openGraph: {
    title: COMPANY_NAME,
    description: COMPANY_DESCRIPTION,
    locale: "id_ID",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={PLUS_JAKARTA_SANS.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <a className="skip-link" href="#konten">
          {PORTAL.skip}
        </a>
        <SmoothScroll />
        <CursorFollower />
        <SiteHeader />
        <main id="konten">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
