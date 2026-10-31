import type { Metadata } from "next";
import { TOPIC_PAGES, COMPANY_NAME } from "@/constants/helper";
import { TopicHero } from "@/modules/details/topic-hero";
import { TopicIntroduction } from "@/modules/details/topic-introduction";
import { TopicGuide } from "@/modules/details/topic-guide";
import { RelatedTopics } from "@/modules/details/related-topics";
import { WordDictionary } from "@/modules/details/word-dictionary";
export const metadata: Metadata = {
  title: `${TOPIC_PAGES.bahasa.label} | ${COMPANY_NAME}`,
  description: TOPIC_PAGES.bahasa.description,
  openGraph: {
    title: TOPIC_PAGES.bahasa.title,
    description: TOPIC_PAGES.bahasa.description,
    locale: "id_ID",
    type: "website",
  },
};
export default function Page() {
  return (
    <>
      <TopicHero topic="bahasa" />
      <TopicIntroduction topic="bahasa" />
      <WordDictionary />
      <TopicGuide topic="bahasa" />
      <RelatedTopics topic="bahasa" />
    </>
  );
}
