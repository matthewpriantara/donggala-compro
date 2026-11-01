"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";

const emptySubscribe = () => () => {};

export function CursorFollower() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [isFacingRight, setIsFacingRight] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const facingRightRef = useRef(false);
  const hasMovedRef = useRef(false);
  const prevPosRef = useRef({ x: 0, y: 0 });
  const stopTimerRef = useRef<number | undefined>(undefined);
  const idleTimerRef = useRef<number | undefined>(undefined);

  // Position springs (smooth water trailing physics)
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  // Pitch / tilt spring (swimming angle)
  const rotation = useMotionValue(0);
  const springRotation = useSpring(rotation, { stiffness: 180, damping: 22 });

  // Opacity spring (fade-in, idle dimming, leave fade-out)
  const opacity = useMotionValue(0);
  const springOpacity = useSpring(opacity, { stiffness: 220, damping: 26 });

  useEffect(() => {

    const mediaQuery = window.matchMedia(
      "(pointer: coarse), (prefers-reduced-motion: reduce)"
    );
    if (mediaQuery.matches) {
      return;
    }

    function handleMove(event: MouseEvent) {
      const currentX = event.clientX;
      const currentY = event.clientY;

      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        x.jump(currentX);
        y.jump(currentY);
        prevPosRef.current = { x: currentX, y: currentY };
        opacity.set(0.95);
        return;
      }

      x.set(currentX);
      y.set(currentY);
      opacity.set(0.95);

      const dx = currentX - prevPosRef.current.x;
      const dy = currentY - prevPosRef.current.y;
      const speed = Math.hypot(dx, dy);

      if (speed > 1.2) {
        let facingRight = facingRightRef.current;
        if (Math.abs(dx) > 1.2) {
          facingRight = dx > 0;
          facingRightRef.current = facingRight;
          setIsFacingRight(facingRight);
        }

        // Calculate pitch angle: diving down tilts nose down, climbing up tilts nose up
        const rawAngle =
          (Math.atan2(dy, Math.max(Math.abs(dx), 0.1)) * 180) / Math.PI;
        const clampedAngle = Math.max(-22, Math.min(22, rawAngle));
        // Source fish faces left: when facing right, positive pitch is nose down; when facing left, negative pitch is nose down
        const targetRotation = facingRight ? clampedAngle : -clampedAngle;
        rotation.set(targetRotation);
      }

      prevPosRef.current = { x: currentX, y: currentY };

      // Return body to horizontal when movement pauses
      clearTimeout(stopTimerRef.current);
      stopTimerRef.current = window.setTimeout(() => {
        rotation.set(0);
      }, 120);

      // Softly dim fish when user stops moving for 2 seconds
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = window.setTimeout(() => {
        opacity.set(0.5);
      }, 2000);

      // Detect hover on clickable elements
      const target = event.target as HTMLElement | null;
      const isClickable = Boolean(
        target?.closest(
          "a, button, [role='button'], input, select, textarea, summary, label"
        )
      );
      setIsHovering(isClickable);
    }

    function handleLeave() {
      opacity.set(0);
    }

    function handleEnter() {
      opacity.set(0.95);
    }

    function handleDown() {
      setIsClicking(true);
    }

    function handleUp() {
      setIsClicking(false);
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      clearTimeout(stopTimerRef.current);
      clearTimeout(idleTimerRef.current);
    };
  }, [opacity, rotation, x, y]);

  if (!mounted) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="cursor-follower"
      style={{
        x: springX,
        y: springY,
        opacity: springOpacity,
      }}
    >
      <motion.div
        style={{
          rotate: springRotation,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scaleX: isFacingRight ? -1 : 1,
            scale: isClicking ? 0.88 : isHovering ? 1.12 : 1,
          }}
          transition={{
            scaleX: { duration: 0.2, ease: "easeOut" },
            scale: { duration: 0.16, ease: "easeOut" },
          }}
        >
          <div className="cursor-follower-wiggle">
            <Image
              src="/images/fish-follower.png"
              alt=""
              width={52}
              height={28}
              priority
              unoptimized
              draggable={false}
              className="cursor-follower-fish"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
