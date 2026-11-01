import { Footer7 } from "@/components/ui/footer-7";
import { COMPANY_NAME, PORTAL, NAV_LINKS } from "@/constants/helper";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export function SiteFooter() {
  const sections = [
    {
      title: "Desa Wisata",
      links: [
        { name: "Desa Towale", href: "/desa#towale" },
        { name: "Desa Limboro", href: "/desa#limboro" },
        { name: "Geowisata Pusentasi", href: "/desa" },
        { name: "Pantai Bonebula & Kaluku", href: "/desa" },
      ],
    },
    {
      title: "Kriya & Budaya",
      links: [
        { name: "Tenun Buya Sabe", href: "/kriya-kuliner#tenun" },
        { name: "Kuliner Sagu Tradisional", href: "/kriya-kuliner#kuliner" },
        { name: "Pusaka Bulava Mpongeo", href: "/budaya#ritual" },
        { name: "Kamus Bahasa Kaili", href: "/bahasa" },
      ],
    },
    {
      title: "Layanan & Ekologi",
      links: [
        { name: "Standar Kesehatan CHSE", href: "/kesehatan" },
        { name: "Kontak Darurat Pesisir", href: "/kedaruratan" },
        { name: "Konservasi Mangrove", href: "/mangrove" },
        { name: "Kemitraan KKN-PPM UGM", href: "/#tentang" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram className="size-5" />,
      href: "https://instagram.com/pokdarwis_towale",
      label: "Instagram",
    },
    {
      icon: <FaGithub className="size-5" />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="size-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  const legalLinks = [
    { name: "Panduan Pengunjung", href: "/desa" },
    { name: "Protokol Darurat", href: "/kedaruratan" },
    { name: "Konservasi Pesisir", href: "/mangrove" },
  ];

  return (
    <footer className="site-footer">
      <Footer7
        logo={{
          url: "/",
          src: "/images/tenun-donggala-motif.png",
          alt: `Logo ${COMPANY_NAME}`,
          title: COMPANY_NAME,
        }}
        description={PORTAL.footerText}
        sections={sections}
        socialLinks={socialLinks}
        copyright={PORTAL.copyright}
        legalLinks={legalLinks}
      />
    </footer>
  );
}
