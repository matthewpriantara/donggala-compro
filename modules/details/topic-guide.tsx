import { Card, CardHeader, CardTitle, CardPanel } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/ui/accordion";
import { GuideSurface } from "./guide-surface";
import { TOPIC_PAGES, TOPIC_UI, type TopicKey } from "@/constants/helper";
import styles from "./topic-guide.module.css";

export function TopicGuide({ topic }: { topic: TopicKey }) {
  const page = TOPIC_PAGES[topic];
  const shouldCollapse = topic === "bahasa" || topic === "kesehatan";
  return (
    <GuideSurface>
      <section
        className={`wrap section ${styles.guide}`}
        data-guide-topic={topic}
      >
        <header className={styles.heading}>
          <p className="eyebrow">{TOPIC_UI.guide}</p>
          <h2>{TOPIC_UI.guideTitle}</h2>
        </header>
        {shouldCollapse ? (
          <Accordion
            className={styles.accordion}
            defaultValue={[page.guide[0].title]}
          >
            {page.guide.map((item) => (
              <AccordionItem key={item.title} value={item.title}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionPanel>{item.text}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className={styles.items}>
            {page.guide.map((item) => (
              <Card
                render={<article />}
                className={styles.item}
                key={item.title}
              >
                <CardHeader>
                  <CardTitle render={<h3 />}>{item.title}</CardTitle>
                </CardHeader>
                <CardPanel>
                  <p>{item.text}</p>
                </CardPanel>
              </Card>
            ))}
          </div>
        )}
      </section>
    </GuideSurface>
  );
}
