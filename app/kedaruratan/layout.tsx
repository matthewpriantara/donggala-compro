import type { ReactNode } from "react";
import { DetailLayout } from "@/modules/details/detail-layout";
export default function Layout({ children }: { children: ReactNode }) {
  return <DetailLayout>{children}</DetailLayout>;
}
