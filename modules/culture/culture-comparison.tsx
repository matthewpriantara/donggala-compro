import { RevealTitle } from "@/components/ui/reveal-title";
import { Feature } from "@/components/ui/feature-with-image-comparison";
import { PORTAL, CULTURE_STORIES } from "@/constants/helper";
import styles from "./culture-editorial.module.css";

const STORY_IMAGES = [
  "/images/destinasi/tenun-buya-sabe-proses.jpg",
  "/images/destinasi/pusat-laut-pusentasi.jpg",
] as const;

export function CultureComparison() {
  return (
    <section id="budaya" className={styles.section}>
      <div className="wrap section">
        <header className={styles.heading}>
          <p className="eyebrow">{PORTAL.cultureEyebrow}</p>
          <RevealTitle as="h2">{PORTAL.cultureTitle}</RevealTitle>
        </header>
        <Feature
          before={{ src: STORY_IMAGES[0], alt: CULTURE_STORIES[0].tag }}
          after={{ src: STORY_IMAGES[1], alt: CULTURE_STORIES[1].tag }}
          label={PORTAL.cultureTitle}
          beforeContent={
            <article className={styles.copy}>
              <p className={styles.label}>{CULTURE_STORIES[0].tag}</p>
              <h3>{CULTURE_STORIES[0].title}</h3>
              <p className={styles.description}>
                {CULTURE_STORIES[0].description}
              </p>
            </article>
          }
          afterContent={
            <article className={styles.copy}>
              <p className={styles.label}>{CULTURE_STORIES[1].tag}</p>
              <h3>{CULTURE_STORIES[1].title}</h3>
              <p className={styles.description}>
                {CULTURE_STORIES[1].description}
              </p>
            </article>
          }
        />
      </div>
    </section>
  );
}
