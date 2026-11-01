import { RevealTitle } from "@/components/ui/reveal-title";
import { PORTAL, KAILI_WORDS } from "@/constants/helper";
import { CultureComparison } from "./culture-comparison";

export function CultureStories() {
  return <CultureComparison />;
}
export function LanguageSection() {
  return (
    <section id="bahasa" className="language-section">
      <div className="wrap section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">{PORTAL.languageEyebrow}</p>
            <RevealTitle as="h2">{PORTAL.languageTitle}</RevealTitle>
          </div>
          <p>{PORTAL.languageText}</p>
        </div>
        <div className="language-grid">
          {KAILI_WORDS.map((word) => (
            <article key={word.word}>
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
