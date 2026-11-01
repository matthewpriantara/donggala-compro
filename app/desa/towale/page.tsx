import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { VillageDetailView } from "@/modules/villages/village-detail-view";
import { COMPANY_NAME, VILLAGE_DETAILS } from "@/constants/helper";

export const metadata: Metadata = createPageMetadata({
  title: `${VILLAGE_DETAILS.towale.name} | ${COMPANY_NAME}`,
  description: VILLAGE_DETAILS.towale.description,
  path: "/desa/towale",
  image: VILLAGE_DETAILS.towale.image,
});

export default function TowalePage() {
  return <VillageDetailView slug="towale" />;
}
