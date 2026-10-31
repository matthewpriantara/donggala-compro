"use client";

import {
  useId,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

type Intensity = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
  draggable?: boolean;
  expandable?: boolean;
  width?: string;
  height?: string;
  expandedWidth?: string;
  expandedHeight?: string;
  blurIntensity?: "sm" | "md" | "lg" | "xl";
  shadowIntensity?: Intensity;
  borderRadius?: string;
  glowIntensity?: Intensity;
}
const BLUR = { sm: "8px", md: "12px", lg: "18px", xl: "26px" } as const;
const EDGE = { none: 0, xs: 1, sm: 2, md: 3, lg: 4, xl: 6 } as const;
const GLOW = { none: 0, xs: 16, sm: 24, md: 32, lg: 40, xl: 48 } as const;

/** Domain-agnostic liquid-glass surface; navigation should disable dragging and expansion. */
export function LiquidGlassCard({
  children,
  className,
  draggable = true,
  expandable = false,
  width,
  height,
  expandedWidth,
  expandedHeight,
  blurIntensity = "xl",
  shadowIntensity = "md",
  borderRadius = "32px",
  glowIntensity = "sm",
}: LiquidGlassCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const filterId = `liquid-glass-${useId().replace(/:/g, "")}`;
  const shouldReduceMotion = useReducedMotion();
  function handleToggleExpansion(event: MouseEvent<HTMLDivElement>) {
    if (
      !expandable ||
      !(event.target instanceof Element) ||
      event.target.closest("a, button, input, select, textarea, label")
    )
      return;
    setIsExpanded((value) => !value);
  }
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (
      !expandable ||
      event.target !== event.currentTarget ||
      !["Enter", " "].includes(event.key)
    )
      return;
    event.preventDefault();
    setIsExpanded((value) => !value);
  }
  const variants: Variants = {
    collapsed: { width: width || "auto", height: height || "auto" },
    expanded: {
      width: expandedWidth || "auto",
      height: expandedHeight || "auto",
    },
  };
  const edge = EDGE[shadowIntensity];
  const styles: CSSProperties = {
    borderRadius,
    ...(!expandable && { width, height }),
  };
  const content = (
    <>
      <svg
        aria-hidden="true"
        focusable="false"
        className="glass-filter-definitions"
      >
        <defs>
          <filter id={filterId} x="0" y="0" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.003 0.007"
              numOctaves={1}
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale={12}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div
        aria-hidden="true"
        className="glass-bend"
        style={{
          borderRadius: "inherit",
          backdropFilter: `blur(${BLUR[blurIntensity]}) saturate(150%)`,
          WebkitBackdropFilter: `blur(${BLUR[blurIntensity]}) saturate(150%)`,
          filter: shouldReduceMotion ? undefined : `url(#${filterId})`,
        }}
      />
      <div
        aria-hidden="true"
        className="glass-face"
        style={{
          borderRadius: "inherit",
          boxShadow: `0 12px 32px rgba(0, 0, 0, 0.18), 0 0 ${GLOW[glowIntensity]}px rgba(130, 222, 210, 0.1)`,
        }}
      />
      <div
        aria-hidden="true"
        className="glass-edge"
        style={{
          borderRadius: "inherit",
          boxShadow: edge
            ? `inset ${edge}px ${edge}px ${edge}px rgba(255,255,255,.22), inset -${edge}px -${edge}px ${edge}px rgba(255,255,255,.1)`
            : undefined,
        }}
      />
      <div className="glass-content">{children}</div>
    </>
  );
  if (!draggable && !expandable)
    return (
      <div className={cn("liquid-glass", className)} style={styles}>
        {content}
      </div>
    );
  return (
    <motion.div
      className={cn("liquid-glass", draggable && "glass-draggable", className)}
      style={styles}
      variants={expandable ? variants : undefined}
      animate={expandable ? (isExpanded ? "expanded" : "collapsed") : undefined}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={expandable ? handleToggleExpansion : undefined}
      onKeyDown={expandable ? handleKeyDown : undefined}
      role={expandable ? "button" : undefined}
      tabIndex={expandable ? 0 : undefined}
      aria-expanded={expandable ? isExpanded : undefined}
      drag={draggable && !shouldReduceMotion}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.3}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 10, power: 0.3 }}
      whileDrag={shouldReduceMotion ? undefined : { scale: 1.02 }}
    >
      {content}
    </motion.div>
  );
}
