/** Return true if pressure indicates high-pressure (generally fair) conditions. */
export function isPressureHigh(hPa: number): boolean {
  return hPa >= 1013;
}

/** Classify surface pressure as a short label. */
export function pressureLabel(hPa: number): string {
  return hPa >= 1013 ? "High" : "Low";
}
