import { createPageMetadata } from "@/lib/seo";
import { TopicDeepDive } from "@/modules/details/topic-deep-dive";
import type { Metadata } from "next";
import { TOPIC_PAGES, COMPANY_NAME } from "@/constants/helper";
import { TopicHero } from "@/modules/details/topic-hero";
import { TopicIntroduction } from "@/modules/details/topic-introduction";
import { TopicGuide } from "@/modules/details/topic-guide";
import { RelatedTopics } from "@/modules/details/related-topics";
import { DetailCollection } from "@/modules/details/detail-collection";
export const metadata: Metadata = createPageMetadata({
  title: `${TOPIC_PAGES.karya.label} | ${COMPANY_NAME}`,
  description: TOPIC_PAGES.karya.description,
  path: TOPIC_PAGES.karya.path,
});
export default function Page() {
  return (
    <>
      <TopicHero topic="karya" />
      <TopicIntroduction topic="karya" />
      <DetailCollection topic="karya" />
      <TopicDeepDive topic="karya" />
      <TopicGuide topic="karya" />
      <RelatedTopics topic="karya" />
    </>
  );
}
