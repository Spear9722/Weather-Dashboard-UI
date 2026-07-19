const COMPASS_POINTS = [
  "N", "NNE", "NE", "ENE",
  "E", "ESE", "SE", "SSE",
  "S", "SSW", "SW", "WSW",
  "W", "WNW", "NW", "NNW",
];

/** Convert a wind bearing in degrees to a compass point string, e.g. "SSW" */
export function degreesToCompass(degrees: number): string {
  return COMPASS_POINTS[Math.round(degrees / 22.5) % 16];
}
