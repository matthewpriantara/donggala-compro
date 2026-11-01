import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { VillageDetailView } from "@/modules/villages/village-detail-view";
import { COMPANY_NAME, VILLAGE_DETAILS } from "@/constants/helper";

export const metadata: Metadata = createPageMetadata({
  title: `${VILLAGE_DETAILS.limboro.name} | ${COMPANY_NAME}`,
  description: VILLAGE_DETAILS.limboro.description,
  path: "/desa/limboro",
  image: VILLAGE_DETAILS.limboro.image,
});

export default function LimboroPage() {
  return <VillageDetailView slug="limboro" />;
}
