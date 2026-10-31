"use client";
import { useEffect, useRef } from "react";

/** Updates only the header's presentation; its content remains server-rendered. */
export function HeaderScrollEffect() {
  const markerRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const header = markerRef.current?.closest("header");
    if (!header) return;
    let frameId = 0;
    function handleUpdate() {
      frameId = 0;
      // Hysteresis avoids flicker when scrolling close to the transition point.
      const threshold = header!.dataset.scrolled === "true" ? 32 : 64;
      header!.dataset.scrolled = String(window.scrollY > threshold);
    }
    function handleScroll() {
      if (!frameId) frameId = requestAnimationFrame(handleUpdate);
    }
    handleUpdate();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pageshow", handleUpdate);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pageshow", handleUpdate);
    };
  }, []);
  return <span ref={markerRef} hidden aria-hidden="true" />;
}
