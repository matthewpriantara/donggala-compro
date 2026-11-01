"use client";

import { useState } from "react";
import { Compass, ArrowUpRight } from "lucide-react";
import { PORTAL } from "@/constants/helper";
import { DonggalaMapModal } from "./donggala-map-modal";

export function InteractiveMapCallout() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <>
      <div className="map-callout">
        <Compass size={60} strokeWidth={1} aria-hidden="true" />
        <div>
          <p className="eyebrow">{PORTAL.mapEyebrow}</p>
          <h3>{PORTAL.mapTitle}</h3>
          <p>{PORTAL.mapText}</p>
        </div>
        <button
          type="button"
          onClick={() => setIsMapOpen(true)}
          className="button map-callout-btn"
          aria-haspopup="dialog"
        >
          {PORTAL.mapCta}
          <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </div>

      <DonggalaMapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
      />
    </>
  );
}
