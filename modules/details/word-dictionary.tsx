"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { KAILI_WORDS, TOPIC_UI, PORTAL } from "@/constants/helper";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

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
        <label className="dictionary-label font-medium mb-3 block" htmlFor="word-search">
          {TOPIC_UI.searchLabel}
        </label>
        <div className="relative max-w-[620px]">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground z-10" aria-hidden="true" />
          <Input
            id="word-search"
            type="search"
            placeholder={TOPIC_UI.searchPlaceholder}
            value={search}
            onChange={handleSearch}
            className="pl-10 h-12 bg-[#041d2a] border-[#52727e] text-white placeholder:text-[#a3b9c2] focus-visible:ring-[#55bbdd]"
          />
        </div>
        <div className="my-5 flex items-center gap-2">
          <Badge variant="outline" size="sm" className="border-[#355563] text-[#82ded2] bg-[#0a2c3e]">
            {words.length} {TOPIC_UI.wordsUnit}
          </Badge>
        </div>
        {words.length ? (
          <div className="language-grid">
            {words.map((word) => (
              <article key={word.word} className="border border-[#355260] rounded-2xl p-6 bg-[#092532]/60 hover:border-[#82ded2]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl text-white">{word.word}</h3>
                  <Badge variant="secondary" size="sm" className="text-[10px] font-mono bg-[#163e52] text-[#82ded2]">
                    Kaili
                  </Badge>
                </div>
                <strong className="block text-sm text-[#eeff99] mb-3">{word.meaning}</strong>
                <p className="text-sm text-[#c0d0d5] leading-relaxed">{word.context}</p>
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
