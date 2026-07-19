/** Classify a wind speed (km/h) as a human-readable label. */
export function windSpeedLabel(kmh: number): string {
  if (kmh < 20) return "Calm";
  if (kmh < 50) return "Breezy";
  return "Strong";
}

/** Return true if the wind speed is considered safe/comfortable. */
export function isWindComfortable(kmh: number): boolean {
  return kmh < 50;
}
