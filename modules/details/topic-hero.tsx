import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight } from "lucide-react";
import {
  TOPIC_PAGES,
  TOPIC_UI,
  MOTIF_PATH,
  type TopicKey,
} from "@/constants/helper";
export function TopicHero({ topic }: { topic: TopicKey }) {
  const page = TOPIC_PAGES[topic];
  return (
    <section className="topic-hero">
      <div className="wrap">
        <nav className="breadcrumbs" aria-label={page.label}>
          <Link href="/">{TOPIC_UI.home}</Link>
          <ChevronRight size={14} />
          <span aria-current="page">{page.label}</span>
        </nav>
        <div className="topic-hero-grid">
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="topic-description">{page.description}</p>
            <Link className="text-link" href="/">
              <ArrowLeft size={16} />
              {TOPIC_UI.back}
            </Link>
          </div>
          <div
            className={`topic-visual ${page.image ? "topic-photo" : "topic-motif"}`}
          >
            {page.image ? (
              <Image
                src={page.image}
                alt={page.imageAlt}
                fill
                preload
                sizes="(max-width: 900px) 100vw, 35vw"
              />
            ) : (
              <Image
                src={`${MOTIF_PATH}${topic === "budaya" ? "pink" : topic === "kedaruratan" ? "putih" : "biru"}.png`}
                alt=""
                width={180}
                height={180}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
