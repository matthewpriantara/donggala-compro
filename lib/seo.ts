import type { Metadata } from "next";
import { SITE_NAME, SITE_ORIGIN } from "@/constants/seo";
export function createPageMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = new URL(path, SITE_ORIGIN).href;
  const imageUrl = new URL(image, SITE_ORIGIN).href;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "id_ID",
      type: "website",
      images: [{ url: imageUrl, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
