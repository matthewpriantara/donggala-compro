import { TopicDeepDive } from "@/modules/details/topic-deep-dive";
import type { Metadata } from "next";
import { TOPIC_PAGES, COMPANY_NAME } from "@/constants/helper";
import { TopicHero } from "@/modules/details/topic-hero";
import { TopicIntroduction } from "@/modules/details/topic-introduction";
import { TopicGuide } from "@/modules/details/topic-guide";
import { RelatedTopics } from "@/modules/details/related-topics";
import { ContactSection } from "@/modules/contact";

export const metadata: Metadata = {
  title: `${TOPIC_PAGES.mangrove.label} | ${COMPANY_NAME}`,
  description: TOPIC_PAGES.mangrove.description,
  openGraph: {
    title: TOPIC_PAGES.mangrove.title,
    description: TOPIC_PAGES.mangrove.description,
    locale: "id_ID",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <TopicHero topic="mangrove" />
      <TopicIntroduction topic="mangrove" />
      <ContactSection />
      <TopicDeepDive topic="mangrove" />
      <TopicGuide topic="mangrove" />
      <RelatedTopics topic="mangrove" />
    </>
  );
}
