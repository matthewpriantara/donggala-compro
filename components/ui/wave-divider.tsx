"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface WaveDividerProps {
  className?: string;
  shouldRevealOnEnter?: boolean;
}

/** One decorative wave, moving upward with scroll rather than an autoplay loop. */
export function WaveDivider({
  className,
  shouldRevealOnEnter = false,
}: WaveDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wave = waveRef.current;
    if (!container || !wave) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    const trigger = shouldRevealOnEnter
      ? container
      : container.previousElementSibling;
    if (!trigger) return;
    media.add(
      {
        shouldAnimate: "(prefers-reduced-motion: no-preference)",
        shouldReduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const settings = {
          trigger: shouldRevealOnEnter ? container : trigger,
          start: shouldRevealOnEnter ? "top bottom" : "top top",
          end: () =>
            shouldRevealOnEnter
              ? "bottom center"
              : `+=${Math.max(260, trigger.getBoundingClientRect().height * 0.55)}`,
          invalidateOnRefresh: true,
        };
        if (context.conditions?.shouldReduce) {
          const handleProgress = (self: ScrollTrigger) => {
            wave.style.transform =
              self.progress > 0 ? "translateY(0%)" : "translateY(100%)";
          };
          ScrollTrigger.create({
            ...settings,
            onUpdate: handleProgress,
            onRefresh: handleProgress,
          });
          return () => {
            wave.style.removeProperty("transform");
          };
        }
        gsap.fromTo(
          wave,
          { y: 0, yPercent: 100 },
          {
            y: 0,
            yPercent: 0,
            ease: "none",
            scrollTrigger: { ...settings, scrub: 0.8 },
          },
        );
      },
    );

    return () => media.revert();
  }, [shouldRevealOnEnter]);

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
