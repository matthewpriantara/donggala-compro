"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Compass, X } from "lucide-react";

// Dynamically import Leaflet map component with ssr: false to prevent "window is not defined" error
const DonggalaLeafletMap = dynamic(
  () =>
    import("./donggala-leaflet-map").then((mod) => mod.DonggalaLeafletMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex flex-col items-center justify-center min-h-[420px] w-full bg-slate-50 text-slate-400 gap-3">
        <div className="w-8 h-8 border-2 border-slate-700 border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-medium text-slate-600">Memuat peta OpenStreetMap...</span>
      </div>
    ),
  }
);

interface DonggalaMapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DonggalaMapModal({ isOpen, onClose }: DonggalaMapModalProps) {
  // Lock background scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // 1. Pause Lenis smooth scrolling if active
    const lenis = window.__lenis;
    lenis?.stop();

    // 2. Prevent layout shift caused by scrollbar disappearing
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevBodyPaddingRight = document.body.style.paddingRight;
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    // 3. Lock native scrolling on both documentElement (html) and body
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.paddingRight = prevBodyPaddingRight;
      lenis?.start();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="donggala-map-title"
      data-lenis-prevent
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 md:p-8 animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity touch-none"
        onClick={onClose}
        aria-hidden="true"
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
      />

      {/* Modal Card - Clean Neutral Design (No Neon) */}
      <div
        data-lenis-prevent
        className="relative w-full max-w-5xl h-[88vh] max-h-[780px] bg-white border border-slate-200 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in zoom-in-95 duration-200"
      >
        {/* Header - Clean, No Neon, No Badges */}
        <div className="px-5 py-4 border-b border-slate-200 bg-white flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
              <Compass size={20} strokeWidth={1.8} />
            </div>
            <div>
              <h3 id="donggala-map-title" className="text-base md:text-lg font-bold text-slate-900 leading-tight">
                Peta Wilayah Donggala
              </h3>
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup peta"
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Interactive Map Body */}
        <div className="flex-1 w-full relative overflow-hidden bg-slate-100">
          <DonggalaLeafletMap />
        </div>
      </div>
    </div>
  );
}
