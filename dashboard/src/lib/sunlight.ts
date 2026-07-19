/**
 * Calculate what percentage of daylight has passed between sunrise and sunset.
 * Returns a clamped 0–100 value.
 */
export function daylightProgress(sunriseIso: string, sunsetIso: string): number {
  const now = Date.now();
  const rise = new Date(sunriseIso).getTime();
  const set = new Date(sunsetIso).getTime();
  return Math.min(100, Math.max(0, Math.round(((now - rise) / (set - rise)) * 100)));
}
