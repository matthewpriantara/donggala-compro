import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HEALTH_CHECKS, type HealthSlug } from "@/constants/health-checks";
import { COMPANY_NAME } from "@/constants/helper";
import { HealthDetail } from "@/modules/health/health-detail";
const isHealthSlug = (slug: string): slug is HealthSlug =>
  Object.hasOwn(HEALTH_CHECKS, slug);
export function generateStaticParams() {
  return Object.keys(HEALTH_CHECKS).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isHealthSlug(slug)) notFound();
  return createPageMetadata({
    path: `/kesehatan/${slug}`,
    title: `${HEALTH_CHECKS[slug].label} | ${COMPANY_NAME}`,
    description: HEALTH_CHECKS[slug].description,
  });
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isHealthSlug(slug)) notFound();
  return <HealthDetail slug={slug} />;
}
