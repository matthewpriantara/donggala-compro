"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HERO_CAROUSEL, HERO_SLIDES } from "@/constants/helper";
import { useMediaQuery } from "@/hooks/use-media-query";

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    if (hasFocus || isHovered || shouldReduceMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden)
        setActiveIndex((index) => (index + 1) % HERO_SLIDES.length);
    }, HERO_CAROUSEL.interval);
    return () => window.clearInterval(timer);
  }, [hasFocus, isHovered, shouldReduceMotion]);

  function handleSelectSlide(index: number) {
    setActiveIndex(index);
  }

  return (
    <>
      <div className="hero-carousel-images" aria-hidden="true">
        {HERO_SLIDES.map((slide, index) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt=""
            fill
            sizes="100vw"
            preload={index === 0}
            loading={index === 0 ? undefined : "eager"}
            className={`hero-image hero-slide${activeIndex === index ? " is-active" : ""}`}
          />
        ))}
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
