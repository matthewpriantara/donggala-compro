import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { TOPIC_DETAILS, DETAIL_UI, type TopicKey } from "@/constants/helper";
import { ExternalLink } from "@/components/ui/external-link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

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
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="deep-dive-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Badge variant="outline" size="sm" className="border-[#335564] text-[#82ded2]">
                  Parameter {index + 1}
                </Badge>
              </div>
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
          <div className="coss-faq-wrapper">
            <Accordion className="w-full space-y-2">
              {content.questions.map((item, qIdx) => (
                <AccordionItem
                  key={item.question}
                  value={`q-${qIdx}`}
                  className="border border-[#40606d] rounded-xl px-4 py-1 bg-[#051c27]/60"
                >
                  <AccordionTrigger className="text-left font-medium text-base text-white hover:text-[#82ded2] transition-colors py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#b6cbd2] text-sm leading-relaxed pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
