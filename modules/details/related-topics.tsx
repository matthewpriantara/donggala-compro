import { RevealTitle } from "@/components/ui/reveal-title";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TOPIC_PAGES, TOPIC_UI, type TopicKey } from "@/constants/helper";
export function RelatedTopics({ topic }: { topic: TopicKey }) {
  return (
    <section className="related-topics">
      <div className="wrap section">
        <p className="eyebrow">{TOPIC_UI.related}</p>
        <RevealTitle as="h2">{TOPIC_UI.relatedTitle}</RevealTitle>
        <div className="related-grid">
          {Object.entries(TOPIC_PAGES)
            .filter(([key]) => key !== topic)
            .map(([key, page]) => (
              <Link href={page.path} key={key}>
                <span>{page.label}</span>
                <ArrowUpRight size={21} />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
