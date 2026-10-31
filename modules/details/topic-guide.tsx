import { TOPIC_PAGES, TOPIC_UI, type TopicKey } from "@/constants/helper";
export function TopicGuide({ topic }: { topic: TopicKey }) {
  const page = TOPIC_PAGES[topic];
  return (
    <section className="wrap section topic-guide">
      <p className="eyebrow">{TOPIC_UI.guide}</p>
      <h2>{TOPIC_UI.guideTitle}</h2>
      <div className="topic-guide-grid">
        {page.guide.map((item, index) => (
          <article key={item.title}>
            <span className="eyebrow">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
