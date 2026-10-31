"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { KAILI_WORDS, TOPIC_UI, PORTAL } from "@/constants/helper";
export function WordDictionary() {
  const [search, setSearch] = useState("");
  const query = search.trim().toLocaleLowerCase("id");
  const words = KAILI_WORDS.filter((item) =>
    `${item.word} ${item.meaning} ${item.context}`
      .toLocaleLowerCase("id")
      .includes(query),
  );
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }
  return (
    <section className="language-section">
      <div className="wrap section">
        <div className="section-heading">
          <p className="eyebrow">{PORTAL.languageEyebrow}</p>
          <h2>{PORTAL.languageTitle}</h2>
        </div>
        <label className="dictionary-label" htmlFor="word-search">
          {TOPIC_UI.searchLabel}
        </label>
        <div className="dictionary-search">
          <Search size={20} aria-hidden="true" />
          <input
            id="word-search"
            type="search"
            placeholder={TOPIC_UI.searchPlaceholder}
            value={search}
            onChange={handleSearch}
          />
        </div>
        <p className="dictionary-count" role="status" aria-live="polite">
          {words.length} {TOPIC_UI.wordsUnit}
        </p>
        {words.length ? (
          <div className="language-grid">
            {words.map((word) => (
              <article key={word.word}>
                <h3>{word.word}</h3>
                <strong>{word.meaning}</strong>
                <p>{word.context}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="dictionary-empty">{TOPIC_UI.noWords}</p>
        )}
        <p className="fine-print">{PORTAL.languageText}</p>
      </div>
    </section>
  );
}
