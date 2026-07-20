import type { WeatherPayload } from "../../types/weather";

/**
 * Mock weather payload representing Orlando, FL.
 *
 * Mirrors the FastAPI WeatherPayload response so the frontend can
 * seamlessly transition to live backend data without code changes.
 */
export const ORLANDO_MOCK: WeatherPayload = {
  latitude: 28.5384,
  longitude: -81.3789,
  timezone: "America/New_York",
  fetched_at: new Date().toISOString(),

  current: {
    temperature: 33.8,
    apparent_temperature: 41.9, // Severe humidity pushing heat index past 40°C
    humidity: 76,
    precipitation: 0.0,
    weather_code: 2, // Partly cloudy / building clouds
    wind_speed: 11.2,
    wind_direction: 140, // Humid flow from the Atlantic side
    pressure: 1015.1,
    is_day: true,
    time: "2026-07-20T14:00",
  },

  hourly: [
    { time: "2026-07-20T14:00", temperature: 33.8, precipitation_probability: 20, wind_speed: 11.2, weather_code: 2 },
    { time: "2026-07-20T15:00", temperature: 34.4, precipitation_probability: 40, wind_speed: 12.5, weather_code: 3 }, // Towering cumulus clouds forming
    { time: "2026-07-20T16:00", temperature: 28.9, precipitation_probability: 85, wind_speed: 24.1, weather_code: 95 }, // Torrential afternoon downpour / storm
    { time: "2026-07-20T17:00", temperature: 26.5, precipitation_probability: 60, wind_speed: 14.8, weather_code: 63 }, // Continuous rain cooling things off
    { time: "2026-07-20T18:00", temperature: 27.2, precipitation_probability: 30, wind_speed: 9.2, weather_code: 2 },  // Clearing up, steamy air
    { time: "2026-07-20T19:00", temperature: 27.8, precipitation_probability: 15, wind_speed: 7.5, weather_code: 1 },
    { time: "2026-07-20T20:00", temperature: 27.1, precipitation_probability: 10, wind_speed: 6.8, weather_code: 1 },
    { time: "2026-07-20T21:00", temperature: 26.6, precipitation_probability: 5, wind_speed: 6.0, weather_code: 1 },
    { time: "2026-07-20T22:00", temperature: 26.2, precipitation_probability: 5, wind_speed: 5.4, weather_code: 0 },
    { time: "2026-07-20T23:00", temperature: 25.9, precipitation_probability: 4, wind_speed: 5.0, weather_code: 0 },
    { time: "2026-07-21T00:00", temperature: 25.6, precipitation_probability: 2, wind_speed: 4.8, weather_code: 0 },
    { time: "2026-07-21T01:00", temperature: 25.3, precipitation_probability: 2, wind_speed: 4.5, weather_code: 0 },
    { time: "2026-07-21T02:00", temperature: 25.1, precipitation_probability: 2, wind_speed: 4.2, weather_code: 0 },
    { time: "2026-07-21T03:00", temperature: 24.9, precipitation_probability: 5, wind_speed: 3.9, weather_code: 0 },
    { time: "2026-07-21T04:00", temperature: 24.7, precipitation_probability: 5, wind_speed: 4.0, weather_code: 1 },
    { time: "2026-07-21T05:00", temperature: 24.5, precipitation_probability: 8, wind_speed: 4.3, weather_code: 1 },
    { time: "2026-07-21T06:00", temperature: 25.2, precipitation_probability: 10, wind_speed: 5.2, weather_code: 2 },
    { time: "2026-07-21T07:00", temperature: 27.1, precipitation_probability: 12, wind_speed: 6.5, weather_code: 2 },
    { time: "2026-07-21T08:00", temperature: 29.4, precipitation_probability: 15, wind_speed: 7.8, weather_code: 2 },
    { time: "2026-07-21T09:00", temperature: 31.2, precipitation_probability: 15, wind_speed: 8.9, weather_code: 2 },
    { time: "2026-07-21T10:00", temperature: 32.5, precipitation_probability: 20, wind_speed: 9.8, weather_code: 2 },
    { time: "2026-07-21T11:00", temperature: 33.6, precipitation_probability: 25, wind_speed: 10.4, weather_code: 3 },
    { time: "2026-07-21T12:00", temperature: 34.3, precipitation_probability: 30, wind_speed: 11.0, weather_code: 3 },
    { time: "2026-07-21T13:00", temperature: 34.7, precipitation_probability: 35, wind_speed: 11.6, weather_code: 3 },
  ],

  daily: [
    {
      date: "2026-07-20",
      weather_code: 95, // Severe thunderstorms
      temperature_max: 34.4,
      temperature_min: 24.5,
      precipitation_probability_max: 85,
      sunrise: "2026-07-20T06:36",
      sunset: "2026-07-20T20:23",
    },
    {
      date: "2026-07-21",
      weather_code: 80, // Heavy scattered rain showers
      temperature_max: 34.9,
      temperature_min: 24.4,
      precipitation_probability_max: 70,
      sunrise: "2026-07-21T06:37",
      sunset: "2026-07-21T20:22",
    },
    {
      date: "2026-07-22",
      weather_code: 80,
      temperature_max: 34.1,
      temperature_min: 24.2,
      precipitation_probability_max: 75,
      sunrise: "2026-07-22T06:37",
      sunset: "2026-07-22T20:22",
    },
    {
      date: "2026-07-23",
      weather_code: 2, // Slightly lower storm coverage
      temperature_max: 35.2,
      temperature_min: 24.6,
      precipitation_probability_max: 45,
      sunrise: "2026-07-23T06:38",
      sunset: "2026-07-23T20:21",
    },
    {
      date: "2026-07-24",
      weather_code: 80,
      temperature_max: 34.6,
      temperature_min: 24.8,
      precipitation_probability_max: 60,
      sunrise: "2026-07-24T06:39",
      sunset: "2026-07-24T20:21",
    },
    {
      date: "2026-07-25",
      weather_code: 95,
      temperature_max: 33.9,
      temperature_min: 24.5,
      precipitation_probability_max: 80,
      sunrise: "2026-07-25T06:39",
      sunset: "2026-07-25T20:20",
    },
    {
      date: "2026-07-26",
      weather_code: 2,
      temperature_max: 35.0,
      temperature_min: 24.3,
      precipitation_probability_max: 50,
      sunrise: "2026-07-26T06:40",
      sunset: "2026-07-26T20:19",
    },
  ],
};