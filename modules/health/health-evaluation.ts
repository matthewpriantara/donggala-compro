import type { HEALTH_RESULTS, HealthSlug } from "@/constants/health-checks";
export type HealthResultKey = keyof typeof HEALTH_RESULTS;
export type Measurement = {
  value: number;
  second?: number;
  mode?: string;
  lower?: number;
  upper?: number;
};
export function evaluateMeasurement(
  slug: HealthSlug,
  input: Measurement,
): HealthResultKey {
  const { value: v, second: d, mode, lower, upper } = input;
  if (!Number.isFinite(v) || v <= 0) throw new Error("value");
  if (slug === "tekanan-darah") {
    if (d === undefined || !Number.isFinite(d) || d <= 0 || v <= d)
      throw new Error("pressure");
    if (v >= 180 || d >= 120) return "bpUrgent";
    if (v >= 140 || d >= 90) return "bpStage2";
    if (v >= 130 || d >= 80) return "bpStage1";
    if (v < 90 || d < 60) return "bpLow";
    return v >= 120 ? "bpElevated" : "bpNormal";
  }
  if (slug === "gula-darah") {
    if (mode !== "fasting" && mode !== "random") throw new Error("mode");
    if (v < 55) return "glucoseSevereLow";
    if (v < 70) return "glucoseLow";
    if (v >= 300) return "glucoseUrgent";
    if (mode === "random") return v >= 200 ? "glucoseHigh" : "glucoseRandom";
    return v >= 126
      ? "glucoseHigh"
      : v >= 100
        ? "glucoseRaised"
        : "glucoseNormal";
  }
  if (slug === "kolesterol")
    return v >= 240
      ? "cholesterolHigh"
      : v >= 200
        ? "cholesterolBorder"
        : "cholesterolNormal";
  if (
    lower === undefined ||
    upper === undefined ||
    !Number.isFinite(lower) ||
    !Number.isFinite(upper) ||
    lower < 0 ||
    upper <= lower
  )
    throw new Error("range");
  return v < lower ? "uricLow" : v > upper ? "uricHigh" : "uricNormal";
}
