import type { Metadata } from "next";
import { VillageDetailView } from "@/modules/villages/village-detail-view";
import { COMPANY_NAME, VILLAGE_DETAILS } from "@/constants/helper";

export const metadata: Metadata = {
  title: `${VILLAGE_DETAILS.towale.name} | ${COMPANY_NAME}`,
  description: VILLAGE_DETAILS.towale.description,
  openGraph: {
    title: `${VILLAGE_DETAILS.towale.name} - ${VILLAGE_DETAILS.towale.title}`,
    description: VILLAGE_DETAILS.towale.description,
    locale: "id_ID",
    type: "website",
    images: [{ url: VILLAGE_DETAILS.towale.image }],
  },
};

export default function TowalePage() {
  return <VillageDetailView slug="towale" />;
}
