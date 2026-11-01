import { HEALTH_CHECKS, HEALTH_UI } from "@/constants/health-checks";
import { Card } from "@/components/ui/card";
import styles from "./detail-content.module.css";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import {
  TOPIC_DETAILS,
  TOPIC_PAGES,
  NAV_LINKS,
  DETAIL_UI,
  type TopicKey,
} from "@/constants/helper";
import { ExternalLink } from "@/components/ui/external-link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { EmergencyDirectory } from "./emergency-directory";

export function TopicDeepDive({ topic }: { topic: TopicKey }) {
  const content = TOPIC_DETAILS[topic];
  const healthChecks = Object.values(HEALTH_CHECKS);
  const cards = content.cards.map((card, index) =>
    topic === "kesehatan"
      ? {
          ...card,
          text: healthChecks[index].description,
          points: [
            healthChecks[index].reference,
            healthChecks[index].preparation,
          ],
        }
      : card,
  );
  return (
    <section
      className={`topic-deep-dive ${styles.detail}`}
      data-detail-topic={topic}
    >
      <div className="wrap section">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        {topic === "kedaruratan" && <EmergencyDirectory />}
        <div className="deep-dive-grid">
          {cards.map((card, index) => (
            <Card
              render={<article />}
              className={`deep-dive-card ${styles.card}`}
              key={card.title}
              id={
                topic === "kesehatan"
                  ? NAV_LINKS.find(
                      (item) => item.href === TOPIC_PAGES[topic].path,
                    )?.items?.[index]?.href.split("#")[1]
                  : undefined
              }
              style={{ scrollMarginTop: 120 }}
            >
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
              {topic === "kesehatan" && (
                <Link
                  className="text-link"
                  href={`/kesehatan/${Object.keys(HEALTH_CHECKS)[index]}`}
                >
                  {
                    HEALTH_CHECKS[
                      Object.keys(HEALTH_CHECKS)[
                        index
                      ] as keyof typeof HEALTH_CHECKS
                    ].label
                  }{" "}
                  · {HEALTH_UI.open} <ArrowUpRight size={16} />
                </Link>
              )}
            </Card>
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
                  className={styles.faqItem}
                >
                  <AccordionTrigger className={styles.faqTrigger}>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className={styles.faqContent}>
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
