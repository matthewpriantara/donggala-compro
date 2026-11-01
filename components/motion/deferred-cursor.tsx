"use client";
import { useEffect, useState, type ComponentType } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

/** Load the pointer ornament only after a real mouse is used, never on touch-only devices. */
export function DeferredCursor() {
  const shouldEnable = useMediaQuery(
    "(pointer: fine) and (prefers-reduced-motion: no-preference)",
  );
  const [Follower, setFollower] = useState<ComponentType | null>(null);
  useEffect(() => {
    if (!shouldEnable || Follower) return;
    const query = window.matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let isActive = true;
    function handlePointerMove() {
      if (!query.matches) return;
      window.removeEventListener("pointermove", handlePointerMove);
      void import("./cursor-follower").then((module) => {
        if (isActive) setFollower(() => module.CursorFollower);
      });
    }
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => {
      isActive = false;
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [shouldEnable, Follower]);
  return shouldEnable && Follower ? <Follower /> : null;
}
