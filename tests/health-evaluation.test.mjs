import { test } from "node:test";
import assert from "node:assert/strict";
import { evaluateMeasurement as evaluate } from "../modules/health/health-evaluation.ts";
const bp = (s, d) => evaluate("tekanan-darah", { value: s, second: d });
test("blood pressure follows the higher category and critical boundaries", () => {
  for (const [s, d, result] of [
    [119, 79, "bpNormal"],
    [120, 79, "bpElevated"],
    [129, 79, "bpElevated"],
    [120, 80, "bpStage1"],
    [130, 79, "bpStage1"],
    [139, 89, "bpStage1"],
    [140, 60, "bpStage2"],
    [100, 90, "bpStage2"],
    [180, 80, "bpUrgent"],
    [160, 120, "bpUrgent"],
    [89, 59, "bpLow"],
    [100, 50, "bpLow"],
  ])
    assert.equal(bp(s, d), result);
  assert.throws(() => bp(80, 120));
  assert.throws(() => bp(0, 0));
});
test("glucose depends on context and never calls random below 200 normal", () => {
  for (const [value, mode, result] of [
    [54, "fasting", "glucoseSevereLow"],
    [55, "fasting", "glucoseLow"],
    [69, "random", "glucoseLow"],
    [70, "fasting", "glucoseNormal"],
    [99.9, "fasting", "glucoseNormal"],
    [100, "fasting", "glucoseRaised"],
    [125.9, "fasting", "glucoseRaised"],
    [126, "fasting", "glucoseHigh"],
    [199, "random", "glucoseRandom"],
    [200, "random", "glucoseHigh"],
    [300, "random", "glucoseUrgent"],
  ])
    assert.equal(evaluate("gula-darah", { value, mode }), result);
  assert.throws(() => evaluate("gula-darah", { value: 100 }));
});
test("total cholesterol boundaries", () => {
  for (const [value, key] of [
    [199.9, "cholesterolNormal"],
    [200, "cholesterolBorder"],
    [239.9, "cholesterolBorder"],
    [240, "cholesterolHigh"],
  ])
    assert.equal(evaluate("kolesterol", { value }), key);
});
test("uric acid uses lab range including endpoints and rejects missing/inverted ranges", () => {
  for (const [value, key] of [
    [3.4, "uricLow"],
    [3.5, "uricNormal"],
    [7.2, "uricNormal"],
    [7.3, "uricHigh"],
  ])
    assert.equal(evaluate("asam-urat", { value, lower: 3.5, upper: 7.2 }), key);
  for (const input of [
    { value: 6 },
    { value: 6, lower: 7, upper: 3 },
    { value: 6, lower: NaN, upper: 7 },
  ])
    assert.throws(() => evaluate("asam-urat", input));
});
test("reject nonfinite or nonpositive readings", () => {
  for (const value of [NaN, Infinity, -1, 0])
    assert.throws(() => evaluate("kolesterol", { value }));
});
