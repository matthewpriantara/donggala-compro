"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface WaveDividerProps {
  className?: string;
}

/** One decorative wave, moving upward with scroll rather than an autoplay loop. */
export function WaveDivider({ className }: WaveDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wave = waveRef.current;
    if (!container || !wave) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        wave,
        { y: 16 },
        {
          y: -28,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    return () => media.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("wave-divider", className)}
      aria-hidden="true"
    >
      <svg
        ref={waveRef}
        className="wave-surface"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path d="M0 96C250 48 430 26 680 84S1100 144 1440 28V240H0Z" />
      </svg>
    </div>
  );
}
