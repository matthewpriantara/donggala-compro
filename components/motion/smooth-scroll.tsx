"use client";
import { useEffect } from "react";
import Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function SmoothScroll() {
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    function handlePreference() {
      lenis?.destroy();
      lenis = undefined;
      window.__lenis = undefined;
      if (!query.matches) {
        lenis = new Lenis({
          duration: 1.2,
          autoRaf: true,
          anchors: { offset: -90 },
        });
        window.__lenis = lenis;
      }
    }
    handlePreference();
    query.addEventListener("change", handlePreference);
    return () => {
      query.removeEventListener("change", handlePreference);
      lenis?.destroy();
      window.__lenis = undefined;
    };
  }, []);
  return null;
}
