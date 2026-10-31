import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export function PatternDivider({
  imageUrl,
  className,
}: {
  imageUrl: string;
  className?: string;
}) {
  const style: CSSProperties = { backgroundImage: `url("${imageUrl}")` };
  return (
    <div
      className={cn("pattern-divider", className)}
      style={style}
      aria-hidden="true"
    />
  );
}
