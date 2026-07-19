export interface GeocodeResult {
  name: string;
  country: string | null;
  admin1: string | null;
  latitude: number;
  longitude: number;
  timezone: string | null;
}

export interface CurrentConditions {
  temperature: number;
  apparent_temperature: number;
  humidity: number;
  precipitation: number;
  weather_code: number;
  wind_speed: number;
  wind_direction: number;
  pressure: number;
  is_day: boolean;
  time: string;
}

export interface HourlyPoint {
  time: string;
  temperature: number;
  precipitation_probability: number | null;
  weather_code: number;
}

export interface DailyPoint {
  date: string;
  weather_code: number;
  temperature_max: number;
  temperature_min: number;
  precipitation_probability_max: number | null;
  sunrise: string;
  sunset: string;
}

export interface WeatherPayload {
  latitude: number;
  longitude: number;
  timezone: string;
  fetched_at: string;
  current: CurrentConditions;
  hourly: HourlyPoint[];
  daily: DailyPoint[];
}

export interface Location {
  label: string;
  latitude: number;
  longitude: number;
}

export type SocketMessage =
  | { type: "update"; data: WeatherPayload }
  | { type: "error"; message: string };

export type ConnectionState = "idle" | "connecting" | "open" | "reconnecting" | "closed";
