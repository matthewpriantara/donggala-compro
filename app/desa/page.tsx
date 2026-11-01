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
  title: `${TOPIC_PAGES.desa.label} | ${COMPANY_NAME}`,
  description: TOPIC_PAGES.desa.description,
  path: TOPIC_PAGES.desa.path,
});
export default function Page() {
  return (
    <>
      <TopicHero topic="desa" />
      <TopicIntroduction topic="desa" />
      <DetailCollection topic="desa" />
      <TopicDeepDive topic="desa" />
      <TopicGuide topic="desa" />
      <RelatedTopics topic="desa" />
    </>
  );
}
