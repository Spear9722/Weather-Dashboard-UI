import type { WeatherPayload } from "../../types/weather";

/**
 * Mock weather payload representing New Orleans, LA.
 *
 * Mirrors the FastAPI WeatherPayload response so the frontend can
 * seamlessly transition to live backend data without code changes.
 */
export const NEW_ORLEANS_MOCK: WeatherPayload = {
  latitude: 29.9511,
  longitude: -90.0715,
  timezone: "America/Chicago",
  fetched_at: new Date().toISOString(),

  current: {
    temperature: 33.5,
    apparent_temperature: 41.2, // High heat index due to intense Southern humidity
    humidity: 78,
    precipitation: 0.0,
    weather_code: 2, // Partly cloudy
    wind_speed: 10.4,
    wind_direction: 160, // Warm, moist flow off the Gulf
    pressure: 1014.2,
    is_day: true,
    time: "2026-07-20T14:00",
  },

  hourly: [
    { time: "2026-07-20T14:00", temperature: 33.5, precipitation_probability: 25, wind_speed: 10.4, weather_code: 2 },
    { time: "2026-07-20T15:00", temperature: 34.1, precipitation_probability: 45, wind_speed: 12.0, weather_code: 3 },
    { time: "2026-07-20T16:00", temperature: 31.4, precipitation_probability: 65, wind_speed: 18.5, weather_code: 80 }, // Afternoon pop-up thunderstorm
    { time: "2026-07-20T17:00", temperature: 29.8, precipitation_probability: 50, wind_speed: 14.2, weather_code: 61 }, // Light rain/clearing
    { time: "2026-07-20T18:00", temperature: 29.2, precipitation_probability: 30, wind_speed: 9.8, weather_code: 2 },
    { time: "2026-07-20T19:00", temperature: 28.7, precipitation_probability: 15, wind_speed: 8.1, weather_code: 1 },
    { time: "2026-07-20T20:00", temperature: 27.9, precipitation_probability: 10, wind_speed: 7.2, weather_code: 1 },
    { time: "2026-07-20T21:00", temperature: 27.3, precipitation_probability: 8, wind_speed: 6.5, weather_code: 1 },
    { time: "2026-07-20T22:00", temperature: 26.8, precipitation_probability: 5, wind_speed: 5.9, weather_code: 0 },
    { time: "2026-07-20T23:00", temperature: 26.4, precipitation_probability: 5, wind_speed: 5.4, weather_code: 0 },
    { time: "2026-07-21T00:00", temperature: 26.1, precipitation_probability: 4, wind_speed: 5.0, weather_code: 0 },
    { time: "2026-07-21T01:00", temperature: 25.8, precipitation_probability: 4, wind_speed: 4.8, weather_code: 0 },
    { time: "2026-07-21T02:00", temperature: 25.6, precipitation_probability: 5, wind_speed: 4.5, weather_code: 0 },
    { time: "2026-07-21T03:00", temperature: 25.3, precipitation_probability: 8, wind_speed: 4.2, weather_code: 1 },
    { time: "2026-07-21T04:00", temperature: 25.1, precipitation_probability: 12, wind_speed: 4.6, weather_code: 1 },
    { time: "2026-07-21T05:00", temperature: 24.9, precipitation_probability: 15, wind_speed: 5.1, weather_code: 2 },
    { time: "2026-07-21T06:00", temperature: 25.4, precipitation_probability: 15, wind_speed: 5.8, weather_code: 2 },
    { time: "2026-07-21T07:00", temperature: 27.0, precipitation_probability: 20, wind_speed: 6.8, weather_code: 2 },
    { time: "2026-07-21T08:00", temperature: 29.1, precipitation_probability: 20, wind_speed: 7.5, weather_code: 2 },
    { time: "2026-07-21T09:00", temperature: 30.8, precipitation_probability: 25, wind_speed: 8.4, weather_code: 2 },
    { time: "2026-07-21T10:00", temperature: 32.2, precipitation_probability: 30, wind_speed: 9.2, weather_code: 3 },
    { time: "2026-07-21T11:00", temperature: 33.4, precipitation_probability: 35, wind_speed: 9.9, weather_code: 3 },
    { time: "2026-07-21T12:00", temperature: 34.2, precipitation_probability: 40, wind_speed: 10.5, weather_code: 3 },
    { time: "2026-07-21T13:00", temperature: 34.6, precipitation_probability: 45, wind_speed: 11.2, weather_code: 3 },
  ],

  daily: [
    {
      date: "2026-07-20",
      weather_code: 80, // Heavy rain showers / thunderstorm
      temperature_max: 34.1,
      temperature_min: 24.9,
      precipitation_probability_max: 65,
      sunrise: "2026-07-20T06:12",
      sunset: "2026-07-20T20:00",
    },
    {
      date: "2026-07-21",
      weather_code: 61, // Scatted rain showers
      temperature_max: 34.6,
      temperature_min: 24.8,
      precipitation_probability_max: 55,
      sunrise: "2026-07-21T06:13",
      sunset: "2026-07-21T20:00",
    },
    {
      date: "2026-07-22",
      weather_code: 80, // High chance of afternoon storms
      temperature_max: 33.2,
      temperature_min: 24.4,
      precipitation_probability_max: 75,
      sunrise: "2026-07-22T06:13",
      sunset: "2026-07-22T19:59",
    },
    {
      date: "2026-07-23",
      weather_code: 2, // Marginally drier day, mostly cloudy
      temperature_max: 35.0,
      temperature_min: 25.1,
      precipitation_probability_max: 35,
      sunrise: "2026-07-23T06:14",
      sunset: "2026-07-23T19:59",
    },
    {
      date: "2026-07-24",
      weather_code: 1, // Mainly clear and hot
      temperature_max: 35.8,
      temperature_min: 25.6,
      precipitation_probability_max: 20,
      sunrise: "2026-07-24T06:14",
      sunset: "2026-07-24T19:58",
    },
    {
      date: "2026-07-25",
      weather_code: 2, // Return of scattered coastal showers
      temperature_max: 34.4,
      temperature_min: 25.2,
      precipitation_probability_max: 45,
      sunrise: "2026-07-25T06:15",
      sunset: "2026-07-25T19:57",
    },
    {
      date: "2026-07-26",
      weather_code: 80,
      temperature_max: 33.9,
      temperature_min: 24.7,
      precipitation_probability_max: 60,
      sunrise: "2026-07-26T06:15",
      sunset: "2026-07-26T19:57",
    },
  ],
};