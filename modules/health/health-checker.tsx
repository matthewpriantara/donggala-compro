"use client";
import { RevealTitle } from "@/components/ui/reveal-title";
import { useRef, useState, type FormEvent } from "react";
import { ArrowDown, RotateCcw, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  HEALTH_CHECKS,
  HEALTH_RESULTS,
  HEALTH_UI,
  type HealthSlug,
} from "@/constants/health-checks";
import { evaluateMeasurement, type HealthResultKey } from "./health-evaluation";
import styles from "./health.module.css";

export function HealthChecker({ slug }: { slug: HealthSlug }) {
  const config = HEALTH_CHECKS[slug];
  const [result, setResult] = useState<{
    key: HealthResultKey;
    reading: string;
  } | null>(null);
  const [error, setError] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);
  const isPressure = slug === "tekanan-darah";
  const isUric = slug === "asam-urat";
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const read = (name: string) =>
      String(data.get(name) ?? "").trim() === "" ? NaN : Number(data.get(name));
    try {
      const value = read("value");
      const key = evaluateMeasurement(slug, {
        value,
        second: read("second"),
        mode: String(data.get("mode")),
        lower: read("lower"),
        upper: read("upper"),
      });
      setResult({
        key,
        reading: `${value}${isPressure ? `/${read("second")}` : ""} ${config.unit}`,
      });
      setError("");
      requestAnimationFrame(() => {
        resultRef.current?.focus({ preventScroll: true });
        resultRef.current?.scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
          block: "start",
        });
      });
    } catch (cause) {
      setResult(null);
      setError(
        cause instanceof Error && cause.message === "pressure"
          ? HEALTH_UI.pressureError
          : cause instanceof Error && cause.message === "range"
            ? HEALTH_UI.rangeError
            : HEALTH_UI.error,
      );
    }
  }
  function handleClearResult() {
    setResult(null);
    setError("");
  }
  const details = result ? HEALTH_RESULTS[result.key] : null;
  return (
    <>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onChange={handleClearResult}
        onReset={handleClearResult}
      >
        <RevealTitle as="h2">{HEALTH_UI.formTitle}</RevealTitle>
        <p id="measurement-help">{config.preparation}</p>
        <label className={styles.confirm}>
          <input required type="checkbox" name="adult" />
          {HEALTH_UI.consent}
        </label>
        {slug === "gula-darah" && (
          <fieldset className={styles.context}>
            <legend>{HEALTH_UI.context}</legend>
            <label>
              <input type="radio" name="mode" value="fasting" required />
              {HEALTH_UI.fasting}
            </label>
            <label>
              <input type="radio" name="mode" value="random" required />
              {HEALTH_UI.random}
            </label>
          </fieldset>
        )}
        <div className={styles.fields}>
          <label>
            {isPressure ? HEALTH_UI.systolic : HEALTH_UI.value}
            <span className={styles.control}>
              <Input
                nativeInput
                name="value"
                required
                type="number"
                min={isPressure ? "1" : "0.000001"}
                step={isPressure ? "1" : "any"}
                aria-describedby="measurement-help"
              />
              <span>{config.unit}</span>
            </span>
          </label>
          {isPressure && (
            <label>
              {HEALTH_UI.diastolic}
              <span className={styles.control}>
                <Input
                  nativeInput
                  name="second"
                  required
                  type="number"
                  min="1"
                  step="1"
                />
                <span>{config.unit}</span>
              </span>
            </label>
          )}
        </div>
        {isUric && (
          <fieldset className={styles.context}>
            <legend>{HEALTH_UI.rangeHelp}</legend>
            <div className={styles.fields}>
              <label>
                {HEALTH_UI.lower}
                <Input
                  nativeInput
                  required
                  name="lower"
                  type="number"
                  min="0"
                  step="any"
                />
              </label>
              <label>
                {HEALTH_UI.upper}
                <Input
                  nativeInput
                  required
                  name="upper"
                  type="number"
                  min="0.01"
                  step="any"
                />
              </label>
            </div>
          </fieldset>
        )}
        {error && (
          <p role="alert" className={styles.error}>
            {error}
          </p>
        )}
        <div className={styles.actions}>
          <Button type="submit" className={styles.submit}>
            {HEALTH_UI.submit}
            <ArrowDown size={18} />
          </Button>
          <Button type="reset" variant="ghost" className={styles.reset}>
            <RotateCcw size={16} />
            {HEALTH_UI.reset}
          </Button>
        </div>
        <p className={styles.privacy}>{HEALTH_UI.privacy}</p>
      </form>
      {result && details && (
        <div
          ref={resultRef}
          tabIndex={-1}
          className={styles.result}
          role="region"
          aria-label={HEALTH_UI.result}
        >
          <p className={styles.reading}>
            {HEALTH_UI.result} · {result.reading}
          </p>
          <RevealTitle as="h2">{details.title}</RevealTitle>
          <p>{details.text}</p>
          <div className={styles.notice}>
            <AlertCircle size={22} aria-hidden="true" />
            <p>{HEALTH_UI.disclaimer}</p>
          </div>
          <h3>{HEALTH_UI.advice}</h3>
          <ol>
            {details.advice.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ol>
          {(result.key === "bpUrgent" ||
            result.key === "glucoseUrgent" ||
            result.key === "glucoseSevereLow") && (
            <a className={styles.emergencyLink} href="tel:119">
              {HEALTH_UI.call}
            </a>
          )}
        </div>
      )}
    </>
  );
}
