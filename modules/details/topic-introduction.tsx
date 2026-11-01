import { RevealTitle } from "@/components/ui/reveal-title";
import { TOPIC_PAGES, type TopicKey } from "@/constants/helper";
export function TopicIntroduction({ topic }: { topic: TopicKey }) {
  const page = TOPIC_PAGES[topic];
  return (
    <section className="wrap section topic-introduction">
      <RevealTitle as="h2">{page.introTitle}</RevealTitle>
      <div>
        {page.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </section>
  );
}
