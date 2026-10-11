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
  { id: "advance", title: "Advance tax", day: 15, months: [5, 8, 11, 2] },
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
  const dueMonth = deadline.months
    ? deadline.months.find((month) => month >= ist.month) ?? deadline.months[0]
    : ist.month;
  let year = ist.year;
  if (deadline.months && dueMonth < ist.month) year += 1;
  let dueAt = utcFromIst(year, dueMonth, deadline.day);
  if (dueAt <= timestamp) {
    if (deadline.months) {
      const nextIndex = deadline.months.indexOf(dueMonth) + 1;
      const nextMonth = deadline.months[nextIndex % deadline.months.length];
      year += nextIndex >= deadline.months.length ? 1 : 0;
      dueAt = utcFromIst(year, nextMonth, deadline.day);
    } else {
      dueAt = utcFromIst(year, dueMonth + 1, deadline.day);
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
