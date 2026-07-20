import type { WeatherPayload } from "../../types/weather";

/**
 * Mock weather payload representing New York City, NY.
 *
 * Mirrors the FastAPI WeatherPayload response so the frontend can
 * seamlessly transition to live backend data without code changes.
 */
export const NEW_YORK_CITY_MOCK: WeatherPayload = {
  latitude: 40.7128,
  longitude: -74.0060,
  timezone: "America/New_York",
  fetched_at: new Date().toISOString(),

  current: {
    temperature: 29.4,
    apparent_temperature: 31.8,
    humidity: 61,
    precipitation: 0.0,
    weather_code: 2, // Partly cloudy
    wind_speed: 14.5,
    wind_direction: 190, // South-southwesterly breeze
    pressure: 1011.2,
    is_day: true,
    time: "2026-07-20T14:00",
  },

  hourly: [
    { time: "2026-07-20T14:00", temperature: 29.4, precipitation_probability: 10, wind_speed: 14.5, weather_code: 2 },
    { time: "2026-07-20T15:00", temperature: 30.2, precipitation_probability: 15, wind_speed: 15.2, weather_code: 2 },
    { time: "2026-07-20T16:00", temperature: 30.5, precipitation_probability: 20, wind_speed: 16.0, weather_code: 3 }, // Increasing clouds
    { time: "2026-07-20T17:00", temperature: 29.8, precipitation_probability: 35, wind_speed: 14.8, weather_code: 3 },
    { time: "2026-07-20T18:00", temperature: 28.3, precipitation_probability: 45, wind_speed: 12.5, weather_code: 51 }, // Passing light shower
    { time: "2026-07-20T19:00", temperature: 26.7, precipitation_probability: 25, wind_speed: 10.2, weather_code: 2 },
    { time: "2026-07-20T20:00", temperature: 25.1, precipitation_probability: 15, wind_speed: 9.0, weather_code: 1 },
    { time: "2026-07-20T21:00", temperature: 24.2, precipitation_probability: 10, wind_speed: 8.4, weather_code: 1 },
    { time: "2026-07-20T22:00", temperature: 23.5, precipitation_probability: 5, wind_speed: 7.9, weather_code: 0 },
    { time: "2026-07-20T23:00", temperature: 22.9, precipitation_probability: 4, wind_speed: 7.5, weather_code: 0 },
    { time: "2026-07-21T00:00", temperature: 22.4, precipitation_probability: 2, wind_speed: 7.0, weather_code: 0 },
    { time: "2026-07-21T01:00", temperature: 22.0, precipitation_probability: 2, wind_speed: 6.8, weather_code: 0 },
    { time: "2026-07-21T02:00", temperature: 21.6, precipitation_probability: 2, wind_speed: 6.4, weather_code: 0 },
    { time: "2026-07-21T03:00", temperature: 21.3, precipitation_probability: 2, wind_speed: 6.2, weather_code: 0 },
    { time: "2026-07-21T04:00", temperature: 20.9, precipitation_probability: 2, wind_speed: 6.0, weather_code: 0 },
    { time: "2026-07-21T05:00", temperature: 20.6, precipitation_probability: 3, wind_speed: 6.3, weather_code: 0 },
    { time: "2026-07-21T06:00", temperature: 21.2, precipitation_probability: 5, wind_speed: 7.1, weather_code: 1 },
    { time: "2026-07-21T07:00", temperature: 22.8, precipitation_probability: 5, wind_speed: 8.4, weather_code: 1 },
    { time: "2026-07-21T08:00", temperature: 24.6, precipitation_probability: 5, wind_speed: 9.8, weather_code: 1 },
    { time: "2026-07-21T09:00", temperature: 26.3, precipitation_probability: 8, wind_speed: 11.0, weather_code: 1 },
    { time: "2026-07-21T10:00", temperature: 27.7, precipitation_probability: 10, wind_speed: 12.4, weather_code: 2 },
    { time: "2026-07-21T11:00", temperature: 28.9, precipitation_probability: 12, wind_speed: 13.5, weather_code: 2 },
    { time: "2026-07-21T12:00", temperature: 29.6, precipitation_probability: 15, wind_speed: 14.2, weather_code: 2 },
    { time: "2026-07-21T13:00", temperature: 30.1, precipitation_probability: 15, wind_speed: 14.9, weather_code: 2 },
  ],

  daily: [
    {
      date: "2026-07-20",
      weather_code: 51, // Light rain showers
      temperature_max: 30.5,
      temperature_min: 20.6,
      precipitation_probability_max: 45,
      sunrise: "2026-07-20T05:42",
      sunset: "2026-07-20T20:25",
    },
    {
      date: "2026-07-21",
      weather_code: 2, // Partly cloudy
      temperature_max: 30.3,
      temperature_min: 20.8,
      precipitation_probability_max: 15,
      sunrise: "2026-07-21T05:43",
      sunset: "2026-07-21T20:24",
    },
    {
      date: "2026-07-22",
      weather_code: 80, // Brief afternoon thunderstorm
      temperature_max: 31.7,
      temperature_min: 21.5,
      precipitation_probability_max: 60,
      sunrise: "2026-07-22T05:44",
      sunset: "2026-07-22T20:23",
    },
    {
      date: "2026-07-23",
      weather_code: 1, // Mostly clear, comfortable behind front
      temperature_max: 27.8,
      temperature_min: 18.9,
      precipitation_probability_max: 5,
      sunrise: "2026-07-23T05:45",
      sunset: "2026-07-23T20:22",
    },
    {
      date: "2026-07-24",
      weather_code: 0, // Clear and sunny
      temperature_max: 28.4,
      temperature_min: 18.2,
      precipitation_probability_max: 0,
      sunrise: "2026-07-24T05:46",
      sunset: "2026-07-24T20:21",
    },
    {
      date: "2026-07-25",
      weather_code: 1,
      temperature_max: 29.5,
      temperature_min: 19.4,
      precipitation_probability_max: 10,
      sunrise: "2026-07-25T05:47",
      sunset: "2026-07-25T20:20",
    },
    {
      date: "2026-07-26",
      weather_code: 2,
      temperature_max: 30.8,
      temperature_min: 20.5,
      precipitation_probability_max: 20,
      sunrise: "2026-07-26T05:48",
      sunset: "2026-07-26T20:19",
    },
  ],
};