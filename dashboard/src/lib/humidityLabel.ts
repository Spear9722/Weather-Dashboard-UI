/** Classify a relative humidity percentage as a human-readable label. */
export function humidityLabel(pct: number): string {
  if (pct > 70) return "High";
  if (pct > 40) return "Moderate";
  return "Low";
}

/** Return true if humidity is within a comfortable range. */
export function isHumidityComfortable(pct: number): boolean {
  return pct <= 60;
}
