import type { Metadata } from "next";
import { VillageDetailView } from "@/modules/villages/village-detail-view";
import { COMPANY_NAME, VILLAGE_DETAILS } from "@/constants/helper";

export const metadata: Metadata = {
  title: `${VILLAGE_DETAILS.limboro.name} | ${COMPANY_NAME}`,
  description: VILLAGE_DETAILS.limboro.description,
  openGraph: {
    title: `${VILLAGE_DETAILS.limboro.name} - ${VILLAGE_DETAILS.limboro.title}`,
    description: VILLAGE_DETAILS.limboro.description,
    locale: "id_ID",
    type: "website",
    images: [{ url: VILLAGE_DETAILS.limboro.image }],
  },
};

export default function LimboroPage() {
  return <VillageDetailView slug="limboro" />;
}
