import { describe, expect, it } from "vitest";
import { complianceDeadlines, nextDeadlineAt } from "@/lib/compliance-deadlines";

const byId = (id: string) => {
  const deadline = complianceDeadlines.find((item) => item.id === id);
  if (!deadline) throw new Error(`Missing compliance rule: ${id}`);
  return deadline;
};

describe("Indian compliance deadline calculations", () => {
  it("moves a deadline at midnight IST to the next monthly filing date", () => {
    const atMarch20MidnightIst = Date.UTC(2026, 2, 19, 18, 0, 0);
    expect(nextDeadlineAt(byId("gst"), atMarch20MidnightIst)).toBe(Date.UTC(2026, 3, 19, 18, 0, 0));
  });

  it("includes the 30 April TDS deposit date for March deductions", () => {
    const afterApril7Ist = Date.UTC(2026, 3, 7, 12, 0, 0);
    expect(nextDeadlineAt(byId("tds"), afterApril7Ist)).toBe(Date.UTC(2026, 3, 29, 18, 0, 0));
  });

  it("uses 15 June as the next advance-tax installment after 15 March", () => {
    const afterMarch15Ist = Date.UTC(2026, 2, 15, 12, 0, 0);
    expect(nextDeadlineAt(byId("advance"), afterMarch15Ist)).toBe(Date.UTC(2026, 5, 14, 18, 0, 0));
  });
});