import { SITE_ORIGIN, SITE_NAME, SITE_DESCRIPTION } from "@/constants/seo";
export function SiteStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN.origin}/#website`,
    url: SITE_ORIGIN.href,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "id-ID",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
