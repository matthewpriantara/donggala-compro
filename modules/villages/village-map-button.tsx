"use client";

import { useState } from "react";
import { Compass } from "lucide-react";
import { DonggalaMapModal } from "@/modules/journey/donggala-map-modal";

export function VillageMapButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="button village-cta"
        aria-haspopup="dialog"
      >
        <Compass size={17} aria-hidden="true" />
        Buka Peta Eksplorasi
      </button>

      <DonggalaMapModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
