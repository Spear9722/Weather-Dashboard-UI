export interface WeatherCodeInfo {
  label: string;
  muiIcon: string;
}

const DAY: Record<number, WeatherCodeInfo> = {
  0:  { label: "Clear sky",            muiIcon: "WbSunny" },
  1:  { label: "Mostly clear",         muiIcon: "WbSunny" },
  2:  { label: "Partly cloudy",        muiIcon: "WbCloudy" },
  3:  { label: "Overcast",             muiIcon: "Cloud" },
  45: { label: "Fog",                  muiIcon: "DeblurOutlined" },
  48: { label: "Rime fog",             muiIcon: "DeblurOutlined" },
  51: { label: "Light drizzle",        muiIcon: "Grain" },
  53: { label: "Drizzle",              muiIcon: "Grain" },
  55: { label: "Dense drizzle",        muiIcon: "Grain" },
  61: { label: "Light rain",           muiIcon: "Umbrella" },
  63: { label: "Rain",                 muiIcon: "Umbrella" },
  65: { label: "Heavy rain",           muiIcon: "Umbrella" },
  71: { label: "Light snow",           muiIcon: "AcUnit" },
  73: { label: "Snow",                 muiIcon: "AcUnit" },
  75: { label: "Heavy snow",           muiIcon: "AcUnit" },
  80: { label: "Showers",              muiIcon: "Thunderstorm" },
  81: { label: "Showers",              muiIcon: "Thunderstorm" },
  82: { label: "Violent showers",      muiIcon: "Thunderstorm" },
  95: { label: "Thunderstorm",         muiIcon: "Thunderstorm" },
  96: { label: "Thunderstorm + hail",  muiIcon: "Thunderstorm" },
  99: { label: "Thunderstorm + hail",  muiIcon: "Thunderstorm" },
};

const NIGHT: Record<number, WeatherCodeInfo> = {
  ...DAY,
  0: { label: "Clear sky",    muiIcon: "Nightlight" },
  1: { label: "Mostly clear", muiIcon: "Nightlight" },
};

export function describeWeatherCode(code: number, isDay: boolean): WeatherCodeInfo {
  return (isDay ? DAY : NIGHT)[code] ?? { label: "Unknown", muiIcon: "Cloud" };
}
