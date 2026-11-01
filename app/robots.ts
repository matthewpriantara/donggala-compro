import type { MetadataRoute } from "next";
import { SITE_ORIGIN, SHOULD_INDEX_SITE } from "@/constants/seo";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: SHOULD_INDEX_SITE
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: new URL("/sitemap.xml", SITE_ORIGIN).href,
  };
}
