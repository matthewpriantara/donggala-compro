import type { ReactNode } from "react";
import { WaveDivider } from "@/components/ui/wave-divider";
import styles from "./guide-surface.module.css";
export function GuideSurface({ children }: { children: ReactNode }) {
  return (
    <div className={styles.surface}>
      <WaveDivider className={styles.edge} shouldRevealOnEnter />
      {children}
      <WaveDivider
        className={`${styles.edge} ${styles.bottom}`}
        shouldRevealOnEnter
      />
    </div>
  );
}
