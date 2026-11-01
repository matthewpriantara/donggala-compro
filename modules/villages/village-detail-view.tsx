import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowLeft, ArrowUpRight, Compass } from "lucide-react";
import {
  VILLAGE_DETAILS,
  PORTAL,
  TOPIC_UI,
  type VillageSlug,
} from "@/constants/helper";
import { ExternalLink } from "@/components/ui/external-link";
import styles from "./village-cover.module.css";
import { RelatedTopics } from "@/modules/details/related-topics";

export function VillageDetailView({ slug }: { slug: VillageSlug }) {
  const village = VILLAGE_DETAILS[slug];

  return (
    <div className="village-detail-page">
      {/* 1. Hero & Breadcrumbs Section */}
      <section className={styles.hero}>
        <Image
          src={village.image}
          alt={village.imageAlt}
          fill
          preload
          sizes="100vw"
          className={styles.background}
        />
        <div className={styles.shade} aria-hidden="true" />
        <div className={`wrap ${styles.content}`}>
          <nav className="breadcrumbs" aria-label={`Navigasi ${village.name}`}>
            <Link href="/">{TOPIC_UI.home}</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link href="/desa">Profil Desa</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">{village.name}</span>
          </nav>

          <div className={styles.text}>
            <div>
              <p className="eyebrow">{village.eyebrow}</p>
              <h1>{village.title}</h1>
              <p className="topic-description">{village.description}</p>
              <div className="village-hero-actions flex flex-wrap gap-4 items-center mt-6">
                <ExternalLink href={PORTAL.url} className="button village-cta">
                  <Compass size={17} aria-hidden="true" />
                  Buka Peta Eksplorasi
                </ExternalLink>
                <Link
                  className="text-link inline-flex items-center gap-1.5"
                  href="/desa"
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                  Kembali ke Ringkasan Koridor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Stats Bar */}
      <section className="wrap section village-stats-section pt-8 pb-12">
        <div className="stats">
          {village.stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Attractions & Highlights Grid */}
      <section className="wrap section village-attractions-section">
        <div className="section-heading">
          <p className="eyebrow">DAYA TARIK & PESONA WISATA</p>
          <h2>Titik Eksplorasi Unggulan {village.name}</h2>
          <p className="body-copy max-w-2xl mt-3 text-muted">
            {village.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {village.attractions.map((attraction, idx) => (
            <article
              key={attraction.title}
              className="village-attraction-card bg-[#092532] border border-[#1a4456] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-white/30"
            >
              <div className="relative h-56 w-full overflow-hidden bg-[#051c27]">
                <Image
                  src={attraction.image}
                  alt={attraction.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className={styles.badge}>{attraction.category}</span>
                <span className="absolute top-3 right-3 z-10 text-xs font-mono font-bold text-white/70 bg-[#041d2a]/60 px-2 py-0.5 rounded">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2.5">
                    {attraction.title}
                  </h3>
                  <p className="text-sm text-[#9ab0b8] leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Travel Guide Section */}
      <section className="wrap section topic-guide">
        <p className="eyebrow">{TOPIC_UI.guide}</p>
        <h2>Panduan Berkunjung ke {village.name}</h2>
        <div className="topic-guide-grid mt-8">
          {village.guide.map((item, index) => (
            <article key={item.title}>
              <span className="eyebrow">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 5. Cross-Village Navigation Banner */}
      <section className="wrap section pb-16">
        <div className="neighbor-banner bg-gradient-to-r from-[#062433] to-[#0d3b4e] border border-[#23586e] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-widest text-[#c7d6dc] uppercase">
              SATU KORIDOR · DESA TETANGGA
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
              Lanjutkan perjalanan ke {village.ctaOtherVillage.name}
            </h3>
            <p className="text-sm md:text-base text-[#b6cbd2] mt-2">
              {village.ctaOtherVillage.tagline}
            </p>
          </div>
          <Link
            href={village.ctaOtherVillage.href}
            className="button village-cta whitespace-nowrap"
          >
            Eksplorasi {village.ctaOtherVillage.name}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 6. Related Topics */}
      <RelatedTopics topic="desa" />
    </div>
  );
}
