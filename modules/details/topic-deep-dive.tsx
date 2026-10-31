import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { TOPIC_DETAILS, DETAIL_UI, type TopicKey } from "@/constants/helper";
import { ExternalLink } from "@/components/ui/external-link";

export function TopicDeepDive({ topic }: { topic: TopicKey }) {
  const content = TOPIC_DETAILS[topic];
  return (
    <section className="topic-deep-dive">
      <div className="wrap section">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <div className="deep-dive-grid">
          {content.cards.map((card, index) => (
            <article className="deep-dive-card" key={card.title}>
              <span className="deep-dive-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>
                    <Check size={16} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="topic-faq">
          <div>
            <p className="eyebrow">{DETAIL_UI.questions}</p>
            <h2>{DETAIL_UI.questionsTitle}</h2>
          </div>
          <div>
            {content.questions.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="topic-detail-action">
          {content.isExternal ? (
            <ExternalLink href={content.actionHref}>
              {content.actionLabel}
            </ExternalLink>
          ) : (
            <Link className="button" href={content.actionHref}>
              {content.actionLabel}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
