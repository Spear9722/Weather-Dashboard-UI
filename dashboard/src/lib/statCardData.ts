import { degreesToCompass } from "./wind";
import { humidityLabel, isHumidityComfortable } from "./humidityLabel";
import { windSpeedLabel, isWindComfortable } from "./windLabel"
import { pressureLabel, isPressureHigh } from "./pressure";
import type { CurrentConditions, DailyPoint } from "../types/weather";

export interface StatCardData {
  title: string;
  value: string;
  unit: string;
  subtitle: string;
  iconName: string;
  trend: { label: string; positive: boolean };
}

export function buildStatCards(current: CurrentConditions, today: DailyPoint): StatCardData[] {
  return [
    {
      title: "Temperature",
      value: String(Math.round(current.temperature)),
      unit: "°C",
      subtitle: `Feels like ${Math.round(current.apparent_temperature)}°C`,
      iconName: "WbSunny",
      trend: {
        label: `${Math.round(today.temperature_max)}° / ${Math.round(today.temperature_min)}°`,
        positive: current.temperature >= today.temperature_min,
      },
    },
    {
      title: "Humidity",
      value: String(Math.round(current.humidity)),
      unit: "%",
      subtitle: "Relative humidity",
      iconName: "WaterDrop",
      trend: {
        label: humidityLabel(current.humidity),
        positive: isHumidityComfortable(current.humidity),
      },
    },
    {
      title: "Wind Speed",
      value: String(Math.round(current.wind_speed)),
      unit: "km/h",
      subtitle: `Direction: ${degreesToCompass(current.wind_direction)}`,
      iconName: "Air",
      trend: {
        label: windSpeedLabel(current.wind_speed),
        positive: isWindComfortable(current.wind_speed),
      },
    },
    {
      title: "Pressure",
      value: String(Math.round(current.pressure)),
      unit: "hPa",
      subtitle: "Surface pressure",
      iconName: "Compress",
      trend: {
        label: pressureLabel(current.pressure),
        positive: isPressureHigh(current.pressure),
      },
    },
  ];
}
