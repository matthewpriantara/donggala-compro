import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  HEALTH_CHECKS,
  HEALTH_UI,
  type HealthSlug,
} from "@/constants/health-checks";
import { HealthChecker } from "./health-checker";
import styles from "./health.module.css";
export function HealthDetail({ slug }: { slug: HealthSlug }) {
  const config = HEALTH_CHECKS[slug];
  return (
    <div className={styles.page}>
      <header className={`wrap ${styles.hero}`}>
        <Link className={styles.back} href="/kesehatan">
          <ArrowLeft size={18} />
          {HEALTH_UI.back}
        </Link>
        <p className="eyebrow">{HEALTH_UI.eyebrow}</p>
        <h1>{config.label}</h1>
        <p>{config.description}</p>
        <p className={styles.scope}>{HEALTH_UI.scope}</p>
      </header>
      <section className={styles.surface}>
        <div className={`wrap ${styles.body}`}>
          <HealthChecker slug={slug} />
          <aside className={styles.reference}>
            <h2>{HEALTH_UI.sources}</h2>
            <p>{config.reference}</p>
            <ul>
              {config.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.label}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <small>{HEALTH_UI.checked}</small>
          </aside>
          <p className={styles.safety}>{HEALTH_UI.severe}</p>
        </div>
      </section>
      <nav className={`wrap ${styles.more}`} aria-label={HEALTH_UI.more}>
        <h2>{HEALTH_UI.more}</h2>
        {Object.entries(HEALTH_CHECKS)
          .filter(([key]) => key !== slug)
          .map(([key, item]) => (
            <Link key={key} href={`/kesehatan/${key}`}>
              {item.label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
      </nav>
    </div>
  );
}
