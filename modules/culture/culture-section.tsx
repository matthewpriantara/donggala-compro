import Image from "next/image";
import {
  PORTAL,
  CULTURE_STORIES,
  KAILI_WORDS,
  MOTIF_PATH,
} from "@/constants/helper";
import { FadeIn } from "@/components/motion/fade-in";
export function CultureStories() {
  return (
    <section id="budaya" className="culture-section">
      <div className="wrap section">
        <p className="eyebrow">{PORTAL.cultureEyebrow}</p>
        <h2>{PORTAL.cultureTitle}</h2>
        {CULTURE_STORIES.map((story) => (
          <FadeIn className="culture-row" key={story.tag}>
            <div className={`culture-art ${story.motif}`}>
              <Image
                src={`${MOTIF_PATH}${story.motif}.png`}
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div>
              <p className="eyebrow">{story.tag}</p>
              <h3>{story.title}</h3>
              <p className="body-copy">{story.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
export function LanguageSection() {
  return (
    <section id="bahasa" className="language-section">
      <div className="wrap section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">{PORTAL.languageEyebrow}</p>
            <h2>{PORTAL.languageTitle}</h2>
          </div>
          <p>{PORTAL.languageText}</p>
        </div>
        <div className="language-grid">
          {KAILI_WORDS.map((word, i) => (
            <article key={word.word}>
              <span className="word-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{word.word}</h3>
              <strong>{word.meaning}</strong>
              <p>{word.context}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function CultureSection() {
  return (
    <>
      <CultureStories />
      <LanguageSection />
    </>
  );
}
