"use client";
import { useCallback, useSyncExternalStore } from "react";
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (handleChange: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", handleChange);
      return () => media.removeEventListener("change", handleChange);
    },
    [query],
  );
  const getSnapshot = useCallback(
    () => window.matchMedia(query).matches,
    [query],
  );
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
