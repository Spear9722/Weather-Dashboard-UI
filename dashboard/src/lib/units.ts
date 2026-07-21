import type { AppSettings, TemperatureUnit, WindUnit } from "../types/settings";

// ── Temperature ─────────────────────────────────────────────────────────────

export function celsiusToFahrenheit(c: number): number {
  return (c * 9) / 5 + 32;
}

export function fahrenheitToCelsius(f: number): number {
  return ((f - 32) * 5) / 9;
}

/**
 * Convert a raw Celsius value (as returned by Open-Meteo) to the
 * user's preferred unit and round to the nearest integer.
 */
export function convertTemp(celsius: number, unit: TemperatureUnit): number {
  return Math.round(
    unit === "fahrenheit" ? celsiusToFahrenheit(celsius) : celsius
  );
}

export function tempUnitLabel(unit: TemperatureUnit): string {
  return unit === "fahrenheit" ? "°F" : "°C";
}

// ── Wind ────────────────────────────────────────────────────────────────────

export function kmhToMph(kmh: number): number {
  return kmh * 0.621371;
}

export function mphToKmh(mph: number): number {
  return mph / 0.621371;
}

/**
 * Convert a raw km/h value (as returned by Open-Meteo) to the
 * user's preferred unit and round to the nearest integer.
 */
export function convertWind(kmh: number, unit: WindUnit): number {
  return Math.round(unit === "mph" ? kmhToMph(kmh) : kmh);
}

export function windUnitLabel(unit: WindUnit): string {
  return unit === "mph" ? "mph" : "km/h";
}

// ── Convenience — convert using a full settings object ──────────────────────

export function formatTemp(celsius: number, settings: AppSettings): string {
  return `${convertTemp(celsius, settings.temperatureUnit)}${tempUnitLabel(settings.temperatureUnit)}`;
}

export function formatWind(kmh: number, settings: AppSettings): string {
  return `${convertWind(kmh, settings.windUnit)} ${windUnitLabel(settings.windUnit)}`;
}
