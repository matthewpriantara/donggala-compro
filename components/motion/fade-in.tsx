"use client";
import { motion, useReducedMotion } from "motion/react";
import { Children, type ReactNode } from "react";
export function FadeIn({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={shouldReduceMotion ? undefined : { y: [16, 0] }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
export function StaggerGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  return <div className={className}>{Children.toArray(children).map((child, index) => <motion.div key={index} initial={false} whileInView={shouldReduceMotion ? undefined : { y: [12, 0] }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}>{child}</motion.div>)}</div>;
}
