"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Decorative scroll motion; the section and all statistics remain server rendered. */
export function VillageStatsParallax() {
  const markerRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const section = markerRef.current?.closest("section");
    if (!section) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const settings = {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
        invalidateOnRefresh: true,
      };
      gsap.fromTo(
        section.querySelector("img"),
        { yPercent: -16 },
        {
          yPercent: 16,
          ease: "none",
          scrollTrigger: settings,
        },
      );
      gsap.fromTo(
        section.querySelector(".stats"),
        { y: 16 },
        {
          y: -16,
          ease: "none",
          scrollTrigger: settings,
        },
      );
    });
    return () => media.revert();
  }, []);
  return <span hidden aria-hidden="true" ref={markerRef} />;
}
