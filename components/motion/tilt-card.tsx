"use client";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import type { ReactNode, MouseEvent } from "react";
export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 220, damping: 18 });
  const rotateY = useSpring(y, { stiffness: 220, damping: 18 });
  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (
      shouldReduceMotion ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((-(event.clientY - rect.top - rect.height / 2) / rect.height) * 7);
    y.set(((event.clientX - rect.left - rect.width / 2) / rect.width) * 7);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }
  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformPerspective: 900,
      }}
    >
      {children}
    </motion.div>
  );
}
