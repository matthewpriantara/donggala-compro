"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";
import styles from "./feature-with-image-comparison.module.css";

interface ComparisonImage { src: string; alt: string; }
interface FeatureProps {
  before: ComparisonImage;
  after: ComparisonImage;
  beforeContent: ReactNode;
  afterContent: ReactNode;
  label: string;
}

export function Feature({ before, after, beforeContent, afterContent, label }: FeatureProps) {
  const [inset, setInset] = useState(50);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInset(Math.max(0, Math.min(100, Number(event.target.value))));
  }
  return <div className={styles.comparison} data-side={inset >= 50 ? "before" : "after"}>
      <Image src={before.src} alt={before.alt} fill sizes="(max-width: 900px) 90vw, 80vw" className={styles.image} draggable={false}/>
      <div className={styles.overlay} style={{ clipPath: `inset(0 0 0 ${inset}%)` }}>
        <Image src={after.src} alt={after.alt} fill sizes="(max-width: 900px) 90vw, 80vw" className={styles.image} draggable={false}/>
      </div>
      <div className={styles.shade} aria-hidden="true"/>
      <div className={styles.beforeText} style={{ width: `${inset}%` }} hidden={inset < 25}>{beforeContent}</div>
      <div className={styles.afterText} style={{ width: `${100-inset}%` }} hidden={inset > 75}>{afterContent}</div>
      <div className={styles.line} style={{ left: `${inset}%` }} aria-hidden="true"/>
      <div className={styles.handle} style={{ left: `clamp(22px, ${inset}%, calc(100% - 22px))` }} aria-hidden="true"><GripVertical size={20}/></div>
      <input className={styles.range} type="range" min={0} max={100} value={inset} onChange={handleChange} aria-label={label} aria-valuetext={inset >= 95 ? before.alt : inset <= 5 ? after.alt : `${before.alt} / ${after.alt}`}/>
  </div>;
}
