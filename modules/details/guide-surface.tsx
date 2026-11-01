import type { ReactNode } from "react";
import { WaveDivider } from "@/components/ui/wave-divider";
import styles from "./guide-surface.module.css";
interface GuideSurfaceProps {
  children: ReactNode;
  bottomBgColor?: string;
}

export function GuideSurface({
  children,
  bottomBgColor,
}: GuideSurfaceProps) {
  return (
    <div
      className={styles.surface}
      style={
        bottomBgColor
          ? ({ "--guide-bottom-bg": bottomBgColor } as React.CSSProperties)
          : undefined
      }
    >
      <WaveDivider className={styles.edge} shouldRevealOnEnter />
      {children}
      <WaveDivider
        className={`${styles.edge} ${styles.bottom}`}
        shouldRevealOnEnter
      />
    </div>
  );
}
