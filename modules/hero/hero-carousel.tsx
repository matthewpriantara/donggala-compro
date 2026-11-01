"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { HERO_CAROUSEL, HERO_SLIDES } from "@/constants/helper";
import { useMediaQuery } from "@/hooks/use-media-query";

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [preparedIndices, setPreparedIndices] = useState([0]);
  const loadedIndices = useRef(new Set<number>());
  const requestedIndex = useRef(0);
  const [hasFocus, setHasFocus] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const handleSelectSlide = useCallback((index: number) => {
    requestedIndex.current = index;
    setPreparedIndices((indices) =>
      indices.includes(index) ? indices : [...indices, index],
    );
    if (loadedIndices.current.has(index)) setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (hasFocus || isHovered || shouldReduceMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden)
        handleSelectSlide((requestedIndex.current + 1) % HERO_SLIDES.length);
    }, HERO_CAROUSEL.interval);
    return () => window.clearInterval(timer);
  }, [hasFocus, isHovered, shouldReduceMotion, handleSelectSlide]);

  function handleImageReady(index: number) {
    loadedIndices.current.add(index);
    if (requestedIndex.current === index) setActiveIndex(index);
  }

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = window.setTimeout(() => {
      if (document.hidden) return;
      const next = (activeIndex + 1) % HERO_SLIDES.length;
      setPreparedIndices((indices) =>
        indices.includes(next) ? indices : [...indices, next],
      );
    }, HERO_CAROUSEL.interval - 1500);
    return () => window.clearTimeout(timer);
  }, [activeIndex, shouldReduceMotion]);

  return (
    <>
      <div className="hero-carousel-images" aria-hidden="true">
        {HERO_SLIDES.map((slide, index) =>
          preparedIndices.includes(index) ? (
            <Image
              key={slide.image}
              src={slide.image}
              alt=""
              fill
              sizes="100vw"
              preload={index === 0}
              loading={index === 0 ? undefined : "eager"}
              onLoad={() => handleImageReady(index)}
              className={`hero-image hero-slide${activeIndex === index ? " is-active" : ""}`}
            />
          ) : null,
        )}
      </div>
      <div
        className="hero-carousel-controls"
        role="region"
        aria-roledescription={HERO_CAROUSEL.roleDescription}
        aria-label={HERO_CAROUSEL.label}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocusCapture={() => setHasFocus(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setHasFocus(false);
        }}
      >
        <div className="hero-carousel-buttons">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              className="hero-slide-dot"
              aria-label={`${HERO_CAROUSEL.choose}: ${slide.alt}`}
              aria-pressed={activeIndex === index}
              onClick={() => handleSelectSlide(index)}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
