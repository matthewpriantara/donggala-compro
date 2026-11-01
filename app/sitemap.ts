import type { MetadataRoute } from "next";
import { SITE_ORIGIN, SITE_ROUTES } from "@/constants/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_ROUTES.map((path) => ({ url: new URL(path, SITE_ORIGIN).href }));
}
