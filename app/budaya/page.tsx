import { TopicDeepDive } from "@/modules/details/topic-deep-dive";
import type { Metadata } from "next";
import { TOPIC_PAGES, COMPANY_NAME } from "@/constants/helper";
import { TopicHero } from "@/modules/details/topic-hero";
import { TopicIntroduction } from "@/modules/details/topic-introduction";
import { TopicGuide } from "@/modules/details/topic-guide";
import { RelatedTopics } from "@/modules/details/related-topics";
import { CultureStories } from "@/modules/culture/culture-section";
export const metadata: Metadata = {
  title: `${TOPIC_PAGES.budaya.label} | ${COMPANY_NAME}`,
  description: TOPIC_PAGES.budaya.description,
  openGraph: {
    title: TOPIC_PAGES.budaya.title,
    description: TOPIC_PAGES.budaya.description,
    locale: "id_ID",
    type: "website",
  },
};
export default function Page() {
  return (
    <>
      <TopicHero topic="budaya" />
      <TopicIntroduction topic="budaya" />
      <CultureStories />
      <TopicDeepDive topic="budaya" />
      <TopicGuide topic="budaya" />
      <RelatedTopics topic="budaya" />
    </>
  );
}
