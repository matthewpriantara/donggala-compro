import {
  COMPANY_NAME,
  COMPANY_DESCRIPTION,
  TOPIC_PAGES,
  VILLAGE_DETAILS,
} from "./helper";
import { HEALTH_CHECKS } from "./health-checks";
export const SITE_ORIGIN = new URL(
  process.env.SITE_URL ?? "https://donggala-hub.vercel.app",
);
export const SHOULD_INDEX_SITE = process.env.VERCEL_ENV !== "preview";
export const SITE_DESCRIPTION = COMPANY_DESCRIPTION;
export const SITE_NAME = COMPANY_NAME;
export const SITE_ROUTES = [
  "/",
  ...Object.values(TOPIC_PAGES).map((page) => page.path),
  ...Object.keys(VILLAGE_DETAILS).map((slug) => `/desa/${slug}`),
  ...Object.keys(HEALTH_CHECKS).map((slug) => `/kesehatan/${slug}`),
];
