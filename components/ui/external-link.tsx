import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
export function ExternalLink({
  href,
  children,
  className = "button",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}
