import type { WeatherPayload } from "../../types/weather";

/**
 * Mock weather payload representing Portland, OR.
 *
 * Mirrors the FastAPI WeatherPayload response so the frontend can
 * seamlessly transition to live backend data without code changes.
 */
export const PORTLAND_MOCK: WeatherPayload = {
  latitude: 45.5152,
  longitude: -122.6784,
  timezone: "America/Los_Angeles",
  fetched_at: new Date().toISOString(),

  current: {
    temperature: 26.8,
    apparent_temperature: 26.4,
    humidity: 43,
    precipitation: 0.0,
    weather_code: 0, // Clear sky
    wind_speed: 8.5,
    wind_direction: 310, // Northwest breeze channeling down the Columbia Gorge
    pressure: 1016.5,
    is_day: true,
    time: "2026-07-20T14:00",
  },

  hourly: [
    { time: "2026-07-20T14:00", temperature: 26.8, precipitation_probability: 0, wind_speed: 8.5, weather_code: 0 },
    { time: "2026-07-20T15:00", temperature: 27.9, precipitation_probability: 0, wind_speed: 9.2, weather_code: 0 },
    { time: "2026-07-20T16:00", temperature: 28.4, precipitation_probability: 0, wind_speed: 10.0, weather_code: 0 }, // Peak daily warmth
    { time: "2026-07-20T17:00", temperature: 28.1, precipitation_probability: 0, wind_speed: 9.8, weather_code: 0 },
    { time: "2026-07-20T18:00", temperature: 27.0, precipitation_probability: 0, wind_speed: 9.1, weather_code: 0 },
    { time: "2026-07-20T19:00", temperature: 25.3, precipitation_probability: 0, wind_speed: 7.8, weather_code: 0 },
    { time: "2026-07-20T20:00", temperature: 23.2, precipitation_probability: 0, wind_speed: 6.5, weather_code: 0 },
    { time: "2026-07-20T21:00", temperature: 21.4, precipitation_probability: 0, wind_speed: 5.8, weather_code: 0 },
    { time: "2026-07-20T22:00", temperature: 19.8, precipitation_probability: 0, wind_speed: 5.2, weather_code: 0 },
    { time: "2026-07-20T23:00", temperature: 18.5, precipitation_probability: 0, wind_speed: 4.8, weather_code: 0 },
    { time: "2026-07-21T00:00", temperature: 17.6, precipitation_probability: 0, wind_speed: 4.5, weather_code: 0 },
    { time: "2026-07-21T01:00", temperature: 16.9, precipitation_probability: 0, wind_speed: 4.2, weather_code: 0 },
    { time: "2026-07-21T02:00", temperature: 16.3, precipitation_probability: 0, wind_speed: 4.0, weather_code: 0 },
    { time: "2026-07-21T03:00", temperature: 15.8, precipitation_probability: 0, wind_speed: 3.8, weather_code: 0 },
    { time: "2026-07-21T04:00", temperature: 15.4, precipitation_probability: 0, wind_speed: 3.6, weather_code: 0 },
    { time: "2026-07-21T05:00", temperature: 15.1, precipitation_probability: 1, wind_speed: 3.5, weather_code: 1 }, // Patchy morning clouds
    { time: "2026-07-21T06:00", temperature: 15.9, precipitation_probability: 1, wind_speed: 4.2, weather_code: 1 },
    { time: "2026-07-21T07:00", temperature: 17.5, precipitation_probability: 0, wind_speed: 5.0, weather_code: 0 }, // Quick burn off to sun
    { time: "2026-07-21T08:00", temperature: 19.6, precipitation_probability: 0, wind_speed: 6.1, weather_code: 0 },
    { time: "2026-07-21T09:00", temperature: 21.8, precipitation_probability: 0, wind_speed: 7.2, weather_code: 0 },
    { time: "2026-07-21T10:00", temperature: 23.7, precipitation_probability: 0, wind_speed: 8.0, weather_code: 0 },
    { time: "2026-07-21T11:00", temperature: 25.2, precipitation_probability: 0, wind_speed: 8.7, weather_code: 0 },
    { time: "2026-07-21T12:00", temperature: 26.6, precipitation_probability: 0, wind_speed: 9.3, weather_code: 0 },
    { time: "2026-07-21T13:00", temperature: 27.5, precipitation_probability: 0, wind_speed: 9.9, weather_code: 0 },
  ],

  daily: [
    {
      date: "2026-07-20",
      weather_code: 0, // Clear and sunny
      temperature_max: 28.4,
      temperature_min: 15.1,
      precipitation_probability_max: 0,
      sunrise: "2026-07-20T05:39",
      sunset: "2026-07-20T20:53",
    },
    {
      date: "2026-07-21",
      weather_code: 0,
      temperature_max: 27.8,
      temperature_min: 14.8,
      precipitation_probability_max: 0,
      sunrise: "2026-07-21T05:40",
      sunset: "2026-07-21T20:52",
    },
    {
      date: "2026-07-22",
      weather_code: 1, // Mainly clear
      temperature_max: 29.5,
      temperature_min: 15.4,
      precipitation_probability_max: 0,
      sunrise: "2026-07-22T05:41",
      sunset: "2026-07-22T20:51",
    },
    {
      date: "2026-07-23",
      weather_code: 0, // Heat building slightly
      temperature_max: 31.2,
      temperature_min: 16.3,
      precipitation_probability_max: 0,
      sunrise: "2026-07-23T05:42",
      sunset: "2026-07-23T20:50",
    },
    {
      date: "2026-07-24",
      weather_code: 0,
      temperature_max: 32.7,
      temperature_min: 17.1,
      precipitation_probability_max: 0,
      sunrise: "2026-07-24T05:43",
      sunset: "2026-07-24T20:49",
    },
    {
      date: "2026-07-25",
      weather_code: 1, // Slight cooling marine air pushes in
      temperature_max: 28.1,
      temperature_min: 15.9,
      precipitation_probability_max: 2,
      sunrise: "2026-07-25T05:44",
      sunset: "2026-07-25T20:47",
    },
    {
      date: "2026-07-26",
      weather_code: 2, // Partly cloudy morning
      temperature_max: 26.4,
      temperature_min: 14.6,
      precipitation_probability_max: 5,
      sunrise: "2026-07-26T05:45",
      sunset: "2026-07-26T20:46",
    },
  ],
};