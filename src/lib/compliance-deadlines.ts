export type ComplianceDeadline = {
  id: string;
  title: string;
  day: number;
  month?: number;
  months?: number[];
  label?: string;
};

export const complianceDeadlines: ComplianceDeadline[] = [
  { id: "gst", title: "GSTR-3B", day: 20 },
  { id: "tds", title: "TDS deposit", day: 7, label: "30 April for March deductions" },
  { id: "pf", title: "PF / ESI", day: 15 },
  { id: "advance", title: "Advance tax", day: 15, months: [2, 5, 8, 11] },
];

const IST_OFFSET_MINUTES = 330;
const IST_OFFSET_MS = IST_OFFSET_MINUTES * 60_000;

export function getIstParts(timestamp: number) {
  const date = new Date(timestamp + IST_OFFSET_MS);
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth(),
    day: date.getUTCDate(),
    hours: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
    milliseconds: date.getUTCMilliseconds(),
  };
}

function utcFromIst(year: number, month: number, day: number) {
  return Date.UTC(year, month, day) - IST_OFFSET_MS;
}

export function nextDeadlineAt(deadline: ComplianceDeadline, timestamp: number): number {
  const ist = getIstParts(timestamp);
  if (deadline.months) {
    let candidates = deadline.months
      .map((month) => utcFromIst(ist.year, month, deadline.day))
      .filter((dueAt) => dueAt > timestamp);
    if (candidates.length === 0) {
      candidates = deadline.months.map((month) => utcFromIst(ist.year + 1, month, deadline.day));
    }
    return Math.min(...candidates);
  }

  const dueDay = deadline.id === "tds" && ist.month === 3 ? 30 : deadline.day;
  let dueMonth = ist.month;
  let year = ist.year;
  let dueAt = utcFromIst(year, dueMonth, dueDay);
  if (dueAt <= timestamp) {
    dueMonth += 1;
    if (dueMonth > 11) {
      dueMonth = 0;
      year += 1;
    }
    const nextDay = deadline.id === "tds" && dueMonth === 3 ? 30 : deadline.day;
    dueAt = utcFromIst(year, dueMonth, nextDay);
    if (dueAt <= timestamp) {
      dueMonth += 1;
      if (dueMonth > 11) {
        dueMonth = 0;
        year += 1;
      }
      dueAt = utcFromIst(year, dueMonth, deadline.day);
    }
  }
  return dueAt;
}

export function formatCountdown(milliseconds: number) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const days = Math.floor(totalSeconds / 86_400);
  const hours = Math.floor((totalSeconds % 86_400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [days, hours, minutes, seconds].map((unit) => String(unit).padStart(2, "0"));
}

export function countdownTone(milliseconds: number) {
  const days = milliseconds / 86_400_000;
  if (days <= 2) return "danger" as const;
  if (days <= 7) return "warning" as const;
  return "primary" as const;
}
