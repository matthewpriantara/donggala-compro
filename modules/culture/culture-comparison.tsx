import Image from "next/image";
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
          <h2>{PORTAL.cultureTitle}</h2>
        </header>
        <div className={styles.grid}>
          {CULTURE_STORIES.map((story, index) => (
            <article className={styles.story} key={story.tag}>
              <figure className={styles.photo}>
                <Image src={STORY_IMAGES[index]} alt={story.title} fill sizes="(max-width: 900px) 90vw, 44vw" />
              </figure>
              <div className={styles.copy}>
                <p className={styles.label}>{story.tag}</p>
                <h3>{story.title}</h3>
                <p className={styles.description}>{story.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
