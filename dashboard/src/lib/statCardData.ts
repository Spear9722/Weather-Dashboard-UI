import { degreesToCompass } from "./wind";
import { humidityLabel, isHumidityComfortable } from "./humidityLabel";
import { windSpeedLabel, isWindComfortable } from "./windLabel";
import { pressureLabel, isPressureHigh } from "./pressure";
import { convertTemp, convertWind, tempUnitLabel, windUnitLabel } from "./units";
import type { AppSettings } from "../types/settings";
import type { CurrentConditions, DailyPoint } from "../types/weather";

export interface StatCardData {
  title: string;
  value: string;
  unit: string;
  subtitle: string;
  iconName: string;
  trend: { label: string; positive: boolean };
}

export function buildStatCards(
  current: CurrentConditions,
  today: DailyPoint,
  settings: AppSettings
): StatCardData[] {
  const { temperatureUnit, windUnit } = settings;
  const tempUnit  = tempUnitLabel(temperatureUnit);
  const windLabel = windUnitLabel(windUnit);

  return [
    {
      title: "Temperature",
      value: String(convertTemp(current.temperature, temperatureUnit)),
      unit: tempUnit,
      subtitle: `Feels like ${convertTemp(current.apparent_temperature, temperatureUnit)}${tempUnit}`,
      iconName: "WbSunny",
      trend: {
        label: `${convertTemp(today.temperature_max, temperatureUnit)}° / ${convertTemp(today.temperature_min, temperatureUnit)}°`,
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
      value: String(convertWind(current.wind_speed, windUnit)),
      unit: windLabel,
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
