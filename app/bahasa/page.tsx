import { createPageMetadata } from "@/lib/seo";
import { TopicDeepDive } from "@/modules/details/topic-deep-dive";
import type { Metadata } from "next";
import { TOPIC_PAGES, COMPANY_NAME } from "@/constants/helper";
import { TopicHero } from "@/modules/details/topic-hero";
import { TopicIntroduction } from "@/modules/details/topic-introduction";
import { TopicGuide } from "@/modules/details/topic-guide";
import { RelatedTopics } from "@/modules/details/related-topics";
import { WordDictionary } from "@/modules/details/word-dictionary";
export const metadata: Metadata = createPageMetadata({
  title: `${TOPIC_PAGES.bahasa.label} | ${COMPANY_NAME}`,
  description: TOPIC_PAGES.bahasa.description,
  path: TOPIC_PAGES.bahasa.path,
});
export default function Page() {
  return (
    <>
      <TopicHero topic="bahasa" />
      <TopicIntroduction topic="bahasa" />
      <WordDictionary />
      <TopicDeepDive topic="bahasa" />
      <TopicGuide topic="bahasa" />
      <RelatedTopics topic="bahasa" />
    </>
  );
}
