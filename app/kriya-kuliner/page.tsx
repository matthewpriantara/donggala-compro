import { TopicDeepDive } from "@/modules/details/topic-deep-dive";
import type { Metadata } from "next";
import { TOPIC_PAGES, COMPANY_NAME } from "@/constants/helper";
import { TopicHero } from "@/modules/details/topic-hero";
import { TopicIntroduction } from "@/modules/details/topic-introduction";
import { TopicGuide } from "@/modules/details/topic-guide";
import { RelatedTopics } from "@/modules/details/related-topics";
import { ServicesSection } from "@/modules/services";
export const metadata: Metadata = {
  title: `${TOPIC_PAGES.karya.label} | ${COMPANY_NAME}`,
  description: TOPIC_PAGES.karya.description,
  openGraph: {
    title: TOPIC_PAGES.karya.title,
    description: TOPIC_PAGES.karya.description,
    locale: "id_ID",
    type: "website",
  },
};
export default function Page() {
  return (
    <>
      <TopicHero topic="karya" />
      <TopicIntroduction topic="karya" />
      <ServicesSection isDetail />
      <TopicDeepDive topic="karya" />
      <TopicGuide topic="karya" />
      <RelatedTopics topic="karya" />
    </>
  );
}
