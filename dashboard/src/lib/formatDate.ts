/** Format an ISO datetime string as a short hour label, e.g. "2 PM" */
export function formatHour(isoTime: string): string {
  return new Date(isoTime).toLocaleTimeString([], { hour: "numeric" });
}

/** Format an ISO date string as a short weekday label, e.g. "Mon" */
export function formatDay(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString([], { weekday: "short" });
}

/** Format a time-of-day ISO string as "9:30 AM" */
export function formatClockTime(isoTime: string): string {
  return new Date(isoTime).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

/** Format a timestamp as a human-readable elapsed string, e.g. "42s ago" */
export function formatElapsed(sinceMs: number): string {
  const s = Math.max(0, Math.floor((Date.now() - sinceMs) / 1000));
  if (s < 5) return "just now";
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  return `${m}m ${s % 60}s ago`;
}

/** Format today's full date for display, e.g. "Thursday, July 17, 2026" */
export function formatFullDate(date: Date = new Date()): string {
  return date.toLocaleDateString([], { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}
