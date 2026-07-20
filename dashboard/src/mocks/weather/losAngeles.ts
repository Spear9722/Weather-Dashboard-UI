import type { WeatherPayload } from "../../types/weather";

/**
 * Mock weather payload representing Los Angeles, CA.
 *
 * Mirrors the FastAPI WeatherPayload response so the frontend can
 * seamlessly transition to live backend data without code changes.
 */
export const LOS_ANGELES_MOCK: WeatherPayload = {
  latitude: 34.0522,
  longitude: -118.2437,
  timezone: "America/Los_Angeles",
  fetched_at: new Date().toISOString(),

  current: {
    temperature: 28.5,
    apparent_temperature: 29.2,
    humidity: 52,
    precipitation: 0.0,
    weather_code: 1, // Mainly clear
    wind_speed: 12.6,
    wind_direction: 240, // Classic westerly sea breeze
    pressure: 1012.4,
    is_day: true,
    time: "2026-07-19T14:00",
  },

  hourly: [
    { time: "2026-07-19T14:00", temperature: 28.5, precipitation_probability: 0, wind_speed: 12.6, weather_code: 1 },
    { time: "2026-07-19T15:00", temperature: 29.1, precipitation_probability: 0, wind_speed: 14.1, weather_code: 1 },
    { time: "2026-07-19T16:00", temperature: 28.8, precipitation_probability: 0, wind_speed: 15.0, weather_code: 0 },
    { time: "2026-07-19T17:00", temperature: 27.4, precipitation_probability: 0, wind_speed: 13.8, weather_code: 0 },
    { time: "2026-07-19T18:00", temperature: 25.6, precipitation_probability: 0, wind_speed: 11.5, weather_code: 0 },
    { time: "2026-07-19T19:00", temperature: 23.9, precipitation_probability: 0, wind_speed: 9.2, weather_code: 0 },
    { time: "2026-07-19T20:00", temperature: 22.1, precipitation_probability: 0, wind_speed: 7.4, weather_code: 0 },
    { time: "2026-07-19T21:00", temperature: 20.8, precipitation_probability: 0, wind_speed: 6.1, weather_code: 0 },
    { time: "2026-07-19T22:00", temperature: 19.7, precipitation_probability: 0, wind_speed: 5.5, weather_code: 1 }, // Marine layer starting to form
    { time: "2026-07-19T23:00", temperature: 18.9, precipitation_probability: 0, wind_speed: 4.8, weather_code: 2 }, // Partly cloudy / fog
    { time: "2026-07-20T00:00", temperature: 18.2, precipitation_probability: 0, wind_speed: 4.2, weather_code: 3 }, // Overcast marine layer
    { time: "2026-07-20T01:00", temperature: 17.8, precipitation_probability: 1, wind_speed: 3.9, weather_code: 3 },
    { time: "2026-07-20T02:00", temperature: 17.5, precipitation_probability: 1, wind_speed: 3.5, weather_code: 3 },
    { time: "2026-07-20T03:00", temperature: 17.1, precipitation_probability: 2, wind_speed: 3.4, weather_code: 3 },
    { time: "2026-07-20T04:00", temperature: 16.8, precipitation_probability: 2, wind_speed: 3.2, weather_code: 3 },
    { time: "2026-07-20T05:00", temperature: 16.5, precipitation_probability: 2, wind_speed: 3.6, weather_code: 3 },
    { time: "2026-07-20T06:00", temperature: 17.0, precipitation_probability: 1, wind_speed: 4.5, weather_code: 3 },
    { time: "2026-07-20T07:00", temperature: 18.5, precipitation_probability: 1, wind_speed: 5.8, weather_code: 2 }, // Marine layer burning off
    { time: "2026-07-20T08:00", temperature: 20.9, precipitation_probability: 0, wind_speed: 7.2, weather_code: 1 }, 
    { time: "2026-07-20T09:00", temperature: 23.2, precipitation_probability: 0, wind_speed: 8.9, weather_code: 1 },
    { time: "2026-07-20T10:00", temperature: 25.1, precipitation_probability: 0, wind_speed: 10.1, weather_code: 0 }, // Clear skies
    { time: "2026-07-20T11:00", temperature: 26.8, precipitation_probability: 0, wind_speed: 11.4, weather_code: 0 },
    { time: "2026-07-20T12:00", temperature: 27.9, precipitation_probability: 0, wind_speed: 12.3, weather_code: 0 },
    { time: "2026-07-20T13:00", temperature: 28.4, precipitation_probability: 0, wind_speed: 12.8, weather_code: 0 },
  ],

  daily: [
    {
      date: "2026-07-19",
      weather_code: 1,
      temperature_max: 29.1,
      temperature_min: 16.5,
      precipitation_probability_max: 0,
      sunrise: "2026-07-19T05:54",
      sunset: "2026-07-19T20:04",
    },
    {
      date: "2026-07-20",
      weather_code: 1,
      temperature_max: 28.7,
      temperature_min: 16.2,
      precipitation_probability_max: 2,
      sunrise: "2026-07-20T05:55",
      sunset: "2026-07-20T20:03",
    },
    {
      date: "2026-07-21",
      weather_code: 0,
      temperature_max: 30.4,
      temperature_min: 17.1,
      precipitation_probability_max: 0,
      sunrise: "2026-07-21T05:55",
      sunset: "2026-07-21T20:02",
    },
    {
      date: "2026-07-22",
      weather_code: 0,
      temperature_max: 32.1,
      temperature_min: 18.5,
      precipitation_probability_max: 0,
      sunrise: "2026-07-22T05:56",
      sunset: "2026-07-22T20:02",
    },
    {
      date: "2026-07-23",
      weather_code: 1,
      temperature_max: 31.5,
      temperature_min: 18.0,
      precipitation_probability_max: 0,
      sunrise: "2026-07-23T05:57",
      sunset: "2026-07-23T20:01",
    },
    {
      date: "2026-07-24",
      weather_code: 2, // Slight cooling trend, more AM clouds
      temperature_max: 28.2,
      temperature_min: 16.8,
      precipitation_probability_max: 5,
      sunrise: "2026-07-24T05:58",
      sunset: "2026-07-24T20:00",
    },
    {
      date: "2026-07-25",
      weather_code: 1,
      temperature_max: 27.9,
      temperature_min: 16.3,
      precipitation_probability_max: 0,
      sunrise: "2026-07-25T05:58",
      sunset: "2026-07-25T19:59",
    },
  ],
};