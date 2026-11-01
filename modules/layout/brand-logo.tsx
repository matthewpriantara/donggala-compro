import Image from "next/image";
import { COMPANY_NAME } from "@/constants/helper";
import styles from "./brand-logo.module.css";

export function BrandLogo({ isFooter = false }: { isFooter?: boolean }) {
  return (
    <Image
      src="/donggala_logo.png"
      alt={COMPANY_NAME}
      width={1536}
      height={1024}
      sizes={isFooter ? "240px" : "78px"}
      className={isFooter ? styles.footer : styles.navbar}
    />
  );
}
