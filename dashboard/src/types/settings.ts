export type TemperatureUnit = "celsius" | "fahrenheit";
export type WindUnit        = "kmh" | "mph";
export type UpdateInterval  = 30 | 60 | 120 | 300;
export type ThemeMode       = "dark" | "light";

export interface AppSettings {
  temperatureUnit: TemperatureUnit;
  windUnit:        WindUnit;
  updateInterval:  UpdateInterval;
  themeMode:       ThemeMode;
}

export const DEFAULT_SETTINGS: AppSettings = {
  temperatureUnit: "celsius",
  windUnit:        "kmh",
  updateInterval:  60,
  themeMode:       "light",
};
