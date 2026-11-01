import { createPageMetadata } from "@/lib/seo";
import { TopicDeepDive } from "@/modules/details/topic-deep-dive";
import type { Metadata } from "next";
import { TOPIC_PAGES, COMPANY_NAME } from "@/constants/helper";
import { TopicHero } from "@/modules/details/topic-hero";
import { TopicIntroduction } from "@/modules/details/topic-introduction";
import { TopicGuide } from "@/modules/details/topic-guide";
import { RelatedTopics } from "@/modules/details/related-topics";

export const metadata: Metadata = createPageMetadata({
  title: `${TOPIC_PAGES.mangrove.label} | ${COMPANY_NAME}`,
  description: TOPIC_PAGES.mangrove.description,
  path: TOPIC_PAGES.mangrove.path,
});

export default function Page() {
  return (
    <>
      <TopicHero topic="mangrove" />
      <TopicIntroduction topic="mangrove" />
      <TopicDeepDive topic="mangrove" />
      <TopicGuide topic="mangrove" />
      <RelatedTopics topic="mangrove" />
    </>
  );
}
