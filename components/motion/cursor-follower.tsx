"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
export function CursorFollower() {
  const x = useMotionValue(-100),
    y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 160, damping: 22 }),
    springY = useSpring(y, { stiffness: 160, damping: 22 });
  useEffect(() => {
    function handleMove(event: MouseEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
    }
    function handleLeave() {
      x.set(-100);
      y.set(-100);
    }
    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y]);
  return (
    <motion.div
      aria-hidden="true"
      className="cursor-follower"
      style={{ x: springX, y: springY }}
    />
  );
}
