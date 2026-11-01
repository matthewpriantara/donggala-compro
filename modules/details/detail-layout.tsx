import type { ReactNode } from "react";
import styles from "./detail-layout.module.css";
export function DetailLayout({ children }: { children: ReactNode }) {
  return <div className={styles.shell}>{children}</div>;
}
