"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { GripVertical, Sparkles, Fish, ArrowRight } from "lucide-react";
import { PORTAL, CULTURE_STORIES } from "@/constants/helper";

export function CultureComparison() {
  const [inset, setInset] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const towaleStory = CULTURE_STORIES[0];
  const bahariStory = CULTURE_STORIES[1];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setInset(percentage);
  }, []);

  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    updatePosition(clientX);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, updatePosition]);

  return (
    <section
      id="budaya"
      ref={containerRef}
      className="relative w-full min-h-[100svh] overflow-hidden select-none bg-[#041d2a]"
      aria-label="Perbandingan Budaya & Kearifan Bahari"
    >
      {/* Floating Section Switcher / Control Bar */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-40 w-[min(92%,1180px)] flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 rounded-full bg-[#041d2a]/80 backdrop-blur-md border border-[#1a4d68]/60 shadow-2xl">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#82ded2] animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-[#82ded2] uppercase">
            {PORTAL.cultureEyebrow}
          </span>
        </div>

        {/* Quick presets buttons */}
        <div className="flex items-center gap-1.5 bg-[#0a2c3e]/80 p-1 rounded-full border border-[#1a4d68]/40">
          <button
            type="button"
            onClick={() => setInset(100)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              inset > 70
                ? "bg-[#ffccdd] text-[#041d2a] font-semibold shadow"
                : "text-[#c1ced1] hover:text-white"
            }`}
          >
            Warisan Towale
          </button>
          <button
            type="button"
            onClick={() => setInset(50)}
            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
              inset >= 35 && inset <= 65
                ? "bg-[#82ded2] text-[#041d2a] font-semibold shadow"
                : "text-[#c1ced1] hover:text-white"
            }`}
          >
            50 : 50
          </button>
          <button
            type="button"
            onClick={() => setInset(0)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
              inset < 30
                ? "bg-[#55bbdd] text-[#041d2a] font-semibold shadow"
                : "text-[#c1ced1] hover:text-white"
            }`}
          >
            Kearifan Bahari
          </button>
        </div>

        <p className="hidden md:block text-[11px] text-[#9ab0b8]">
          Geser tuas horizontal untuk menjelajahi dua dunia
        </p>
      </div>

      {/* LAYER 1 (Base): WARISAN TOWALE */}
      <div className="relative w-full min-h-[100svh] flex items-center justify-center">
        {/* Background photo & overlay */}
        <Image
          src="/images/destinasi/tenun-buya-sabe-proses.jpg"
          alt="Penenun perempuan merajut kain tenun Buya Sabe di Desa Towale"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041d2a]/95 via-[#041d2a]/85 to-[#041d2a]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,204,221,0.12),transparent_70%)]" />

        {/* Content Card (Warisan Towale - aligned left/center) */}
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 lg:px-16 py-28 flex flex-col justify-center">
          <div className="max-w-2xl flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="bg-[#ffccdd]/15 text-[#ffccdd] border-[#ffccdd]/30 font-mono tracking-wider px-3 py-1 text-xs uppercase"
              >
                <Sparkles className="size-3.5 mr-1 text-[#ffccdd]" />
                {towaleStory.tag}
              </Badge>
              <span className="text-xs text-[#ffccdd]/80 font-medium tracking-wide">
                Sentra Tenun Buya Sabe
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              {towaleStory.title}
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#c7d5db] leading-relaxed max-w-xl">
              {towaleStory.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#0a2c3e]/70 border border-[#1a4d68]/50 backdrop-blur-sm">
                <span className="text-[11px] font-bold text-[#ffccdd] uppercase block mb-1">
                  Pusaka Sakral
                </span>
                <p className="text-xs text-[#e1ebef]">
                  Bulava Mpongeo pusaka emas Raja Kaili
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#0a2c3e]/70 border border-[#1a4d68]/50 backdrop-blur-sm">
                <span className="text-[11px] font-bold text-[#ffccdd] uppercase block mb-1">
                  Tenun Gedongan
                </span>
                <p className="text-xs text-[#e1ebef]">
                  Buya Sabe benang sutra motif Bomba
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#0a2c3e]/70 border border-[#1a4d68]/50 backdrop-blur-sm">
                <span className="text-[11px] font-bold text-[#ffccdd] uppercase block mb-1">
                  Ritual Modiu
                </span>
                <p className="text-xs text-[#e1ebef]">
                  Upacara adat tahunan doa keselamatan
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/kriya-kuliner#tenun"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ffccdd] text-[#041d2a] text-sm font-semibold hover:bg-white transition-all shadow-lg hover:shadow-[#ffccdd]/20"
              >
                Jelajahi Pusaka Tenun Kaili <ArrowRight size={15} />
              </Link>
              <span className="text-xs text-[#9ab0b8]">
                Geser ke kanan untuk melihat penuh
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* LAYER 2 (Overlay Clipped): KEARIFAN BAHARI */}
      <div
        className="absolute inset-0 w-full min-h-[100svh] flex items-center justify-center z-20 pointer-events-none"
        style={{
          clipPath: `inset(0 0 0 ${inset}%)`,
        }}
      >
        {/* Background photo & overlay */}
        <Image
          src="/images/destinasi/pusat-laut-pusentasi.jpg"
          alt="Geowisata Pusentasi Pusat Laut dan bentang perairan bahari Donggala"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#041d2a]/95 via-[#041d2a]/85 to-[#041d2a]/60 pointer-events-auto" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(130,222,210,0.15),transparent_70%)] pointer-events-auto" />

        {/* Content Card (Kearifan Bahari - aligned right) */}
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 lg:px-16 py-28 flex flex-col justify-center items-end text-right pointer-events-auto">
          <div className="max-w-2xl flex flex-col items-end gap-5">
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#82ded2]/80 font-medium tracking-wide">
                Konservasi & Alam Pesisir
              </span>
              <Badge
                variant="outline"
                className="bg-[#0d8d82]/25 text-[#82ded2] border-[#82ded2]/40 font-mono tracking-wider px-3 py-1 text-xs uppercase"
              >
                <Fish className="size-3.5 mr-1 text-[#82ded2]" />
                {bahariStory.tag}
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              {bahariStory.title}
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#c7d5db] leading-relaxed max-w-xl">
              {bahariStory.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 w-full text-left">
              <div className="p-3 rounded-xl bg-[#0a2c3e]/70 border border-[#1a4d68]/50 backdrop-blur-sm">
                <span className="text-[11px] font-bold text-[#82ded2] uppercase block mb-1">
                  Sumur Pusentasi
                </span>
                <p className="text-xs text-[#e1ebef]">
                  Sumur karst alami air laut jernih toska
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#0a2c3e]/70 border border-[#1a4d68]/50 backdrop-blur-sm">
                <span className="text-[11px] font-bold text-[#82ded2] uppercase block mb-1">
                  Hiu Paus & Karang
                </span>
                <p className="text-xs text-[#e1ebef]">
                  Konservasi terumbu karang Karampuana
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#0a2c3e]/70 border border-[#1a4d68]/50 backdrop-blur-sm">
                <span className="text-[11px] font-bold text-[#82ded2] uppercase block mb-1">
                  Sabuk Mangrove
                </span>
                <p className="text-xs text-[#e1ebef]">
                  Pelindung abrasi pasang surut Selat Makassar
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <span className="text-xs text-[#9ab0b8]">
                Geser ke kiri untuk melihat penuh
              </span>
              <Link
                href="/mangrove"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#82ded2] text-[#041d2a] text-sm font-semibold hover:bg-white transition-all shadow-lg hover:shadow-[#82ded2]/20"
              >
                Pelajari Konservasi Bahari <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER LINE & DRAG HANDLE */}
      <div
        className="absolute top-0 bottom-0 w-1 z-30 select-none cursor-ew-resize"
        style={{
          left: `${inset}%`,
        }}
        onMouseDown={(e) => handlePointerDown(e.clientX)}
        onTouchStart={(e) => {
          if (e.touches.length > 0) handlePointerDown(e.touches[0].clientX);
        }}
      >
        {/* Glow Line */}
        <div className="w-full h-full bg-gradient-to-b from-[#ffccdd] via-[#82ded2] to-[#55bbdd] shadow-[0_0_16px_rgba(130,222,210,0.8)]" />

        {/* Center Pill Button */}
        <button
          type="button"
          aria-label="Geser untuk membandingkan Warisan Towale dan Kearifan Bahari"
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-10 h-14 rounded-2xl bg-[#041d2a] border-2 border-[#82ded2] text-white flex flex-col items-center justify-center gap-1 shadow-2xl hover:scale-110 active:scale-95 transition-transform"
          onMouseDown={(e) => {
            e.stopPropagation();
            handlePointerDown(e.clientX);
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            if (e.touches.length > 0) handlePointerDown(e.touches[0].clientX);
          }}
        >
          <GripVertical className="h-5 w-5 text-[#82ded2]" />
        </button>

        {/* Side Badge Pills near the handle */}
        <div className="hidden lg:flex absolute top-[calc(50%-55px)] -translate-x-full pr-3 items-center pointer-events-none">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono tracking-widest font-bold bg-[#ffccdd]/20 border border-[#ffccdd]/40 text-[#ffccdd] uppercase whitespace-nowrap backdrop-blur-md">
            ◀ Warisan Towale
          </span>
        </div>
        <div className="hidden lg:flex absolute top-[calc(50%-55px)] pl-3 items-center pointer-events-none">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono tracking-widest font-bold bg-[#82ded2]/20 border border-[#82ded2]/40 text-[#82ded2] uppercase whitespace-nowrap backdrop-blur-md">
            Kearifan Bahari ▶
          </span>
        </div>
      </div>
    </section>
  );
}
