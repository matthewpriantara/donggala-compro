import Image from "next/image";
import { Clock3 } from "lucide-react";
import { PORTAL, TRIPS, MOTIF_PATH } from "@/constants/helper";
import { ExternalLink } from "@/components/ui/external-link";
import { InteractiveMapCallout } from "./interactive-map-callout";

export function JourneySection() {
  return (
    <section id="aktivitas" className="section wrap">
      <div className="section-heading">
        <p className="eyebrow">{PORTAL.tripsEyebrow}</p>
        <h2>{PORTAL.tripsTitle}</h2>
      </div>
      <div className="trip-grid">
        {TRIPS.map((trip) => (
          <article className="trip-card" key={trip.title}>
            <div className="trip-photo">
              {trip.image ? (
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  sizes="(max-width:760px) 100vw, 33vw"
                />
              ) : (
                <div className="trip-pattern">
                  <Image
                    src={`${MOTIF_PATH}kuning.png`}
                    width={100}
                    height={100}
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="trip-content">
              <p className="eyebrow">
                <Clock3 size={13} />
                {trip.duration}
              </p>
              <h3>{trip.title}</h3>
              <p>{trip.description}</p>
              <ExternalLink
                href={`${PORTAL.url}#aktivitas`}
                className="text-link"
              >
                {PORTAL.tripCta}
              </ExternalLink>
            </div>
          </article>
        ))}
      </div>
      <p className="fine-print">{PORTAL.tripNote}</p>
      <InteractiveMapCallout />
    </section>
  );
}
