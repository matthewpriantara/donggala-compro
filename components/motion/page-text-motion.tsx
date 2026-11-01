"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Enhance server-rendered copy without hiding it when JavaScript is unavailable. */
export function PageTextMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const seen = new WeakSet<Element>();
      const context = gsap.context(() => {}, main);
      const handleDiscoverText = () =>
        context.add(() => {
          main.querySelectorAll<HTMLElement>("h1").forEach((element) => {
            if (
              seen.has(element) ||
              !element.getClientRects().length ||
              !element.offsetHeight ||
              element.closest(
                "form, [role=dialog], [role=region], .culture-comparison, .topic-faq",
              )
            )
              return;
            seen.add(element);
            if (
              element.querySelector(".title-reveal-word") &&
              !element.querySelector("a, button, input")
            ) {
              const words = element.querySelectorAll(".title-reveal-word");
              gsap.fromTo(
                words,
                {
                  opacity: 0,
                  yPercent: 65,
                  rotationX: -12,
                  filter: "blur(4px)",
                  transformOrigin: "50% 100%",
                },
                {
                  opacity: 1,
                  yPercent: 0,
                  rotationX: 0,
                  filter: "blur(0px)",
                  duration: 0.85,
                  stagger: { amount: 0.35, from: "start" },
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 94%",
                    end: "bottom top",
                    toggleActions: "play reverse play reverse",
                    invalidateOnRefresh: true,
                  },
                },
              );
              return;
            }
            gsap.fromTo(
              element,
              { opacity: 0, y: 18 },
              {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 94%",
                  end: "bottom top",
                  toggleActions: "play reverse play reverse",
                  invalidateOnRefresh: true,
                },
              },
            );
          });
        });
      const frame = requestAnimationFrame(handleDiscoverText);
      // Streamed sections can arrive after the route itself has mounted.
      const observer = new MutationObserver((records) => {
        if (records.some((record) => record.addedNodes.length))
          handleDiscoverText();
      });
      observer.observe(main, { childList: true, subtree: true });
      return () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        context.revert();
      };
    });
    return () => media.revert();
  }, [pathname]);
  return null;
}
