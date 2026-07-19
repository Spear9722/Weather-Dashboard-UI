import type { WeatherPayload } from "../types/weather";

/**
 * Static mock payload representing typical Fort Worth, TX conditions
 * for a mid-July afternoon.
 *
 * TODO: Replace by wiring WeatherContext back to useWeatherSocket once
 * the FastAPI backend is running and returning live Open-Meteo data.
 *
 * Shape must stay in sync with WeatherPayload in types/weather.ts,
 * which mirrors the backend's FastAPI response schema.
 */
export const FORT_WORTH_MOCK: WeatherPayload = {
  latitude: 32.7555,
  longitude: -97.3308,
  timezone: "America/Chicago",
  fetched_at: new Date().toISOString(),

  current: {
    temperature: 38.2,
    apparent_temperature: 42.1,
    humidity: 34,
    precipitation: 0.0,
    weather_code: 1,        // Mostly clear
    wind_speed: 18.4,
    wind_direction: 185,    // South
    pressure: 1008.6,
    is_day: true,
    time: "2026-07-19T14:00",
  },

  // 24 hourly points starting at 14:00 (current hour)
  hourly: [
    { time: "2026-07-19T14:00", temperature: 38.2, precipitation_probability: 3,  weather_code: 1  },
    { time: "2026-07-19T15:00", temperature: 39.0, precipitation_probability: 3,  weather_code: 1  },
    { time: "2026-07-19T16:00", temperature: 39.4, precipitation_probability: 5,  weather_code: 2  },
    { time: "2026-07-19T17:00", temperature: 38.8, precipitation_probability: 8,  weather_code: 2  },
    { time: "2026-07-19T18:00", temperature: 37.5, precipitation_probability: 10, weather_code: 2  },
    { time: "2026-07-19T19:00", temperature: 36.1, precipitation_probability: 12, weather_code: 2  },
    { time: "2026-07-19T20:00", temperature: 34.2, precipitation_probability: 8,  weather_code: 1  },
    { time: "2026-07-19T21:00", temperature: 32.6, precipitation_probability: 5,  weather_code: 1  },
    { time: "2026-07-19T22:00", temperature: 31.3, precipitation_probability: 3,  weather_code: 0  },
    { time: "2026-07-19T23:00", temperature: 30.1, precipitation_probability: 2,  weather_code: 0  },
    { time: "2026-07-20T00:00", temperature: 29.4, precipitation_probability: 2,  weather_code: 0  },
    { time: "2026-07-20T01:00", temperature: 28.8, precipitation_probability: 2,  weather_code: 0  },
    { time: "2026-07-20T02:00", temperature: 28.2, precipitation_probability: 2,  weather_code: 0  },
    { time: "2026-07-20T03:00", temperature: 27.7, precipitation_probability: 2,  weather_code: 0  },
    { time: "2026-07-20T04:00", temperature: 27.2, precipitation_probability: 3,  weather_code: 0  },
    { time: "2026-07-20T05:00", temperature: 27.0, precipitation_probability: 3,  weather_code: 0  },
    { time: "2026-07-20T06:00", temperature: 27.4, precipitation_probability: 4,  weather_code: 1  },
    { time: "2026-07-20T07:00", temperature: 28.9, precipitation_probability: 4,  weather_code: 1  },
    { time: "2026-07-20T08:00", temperature: 30.8, precipitation_probability: 5,  weather_code: 1  },
    { time: "2026-07-20T09:00", temperature: 32.7, precipitation_probability: 5,  weather_code: 1  },
    { time: "2026-07-20T10:00", temperature: 34.4, precipitation_probability: 5,  weather_code: 2  },
    { time: "2026-07-20T11:00", temperature: 36.0, precipitation_probability: 8,  weather_code: 2  },
    { time: "2026-07-20T12:00", temperature: 37.3, precipitation_probability: 10, weather_code: 2  },
    { time: "2026-07-20T13:00", temperature: 38.1, precipitation_probability: 10, weather_code: 2  },
  ],

  // 7-day daily forecast
  daily: [
    {
      date: "2026-07-19",
      weather_code: 1,
      temperature_max: 39.4,
      temperature_min: 27.0,
      precipitation_probability_max: 12,
      sunrise: "2026-07-19T06:28",
      sunset:  "2026-07-19T20:34",
    },
    {
      date: "2026-07-20",
      weather_code: 2,
      temperature_max: 38.8,
      temperature_min: 26.6,
      precipitation_probability_max: 18,
      sunrise: "2026-07-20T06:29",
      sunset:  "2026-07-20T20:33",
    },
    {
      date: "2026-07-21",
      weather_code: 61,       // Light rain
      temperature_max: 34.2,
      temperature_min: 25.1,
      precipitation_probability_max: 55,
      sunrise: "2026-07-21T06:30",
      sunset:  "2026-07-21T20:32",
    },
    {
      date: "2026-07-22",
      weather_code: 63,       // Rain
      temperature_max: 30.8,
      temperature_min: 23.4,
      precipitation_probability_max: 75,
      sunrise: "2026-07-22T06:31",
      sunset:  "2026-07-22T20:31",
    },
    {
      date: "2026-07-23",
      weather_code: 80,       // Showers
      temperature_max: 32.1,
      temperature_min: 23.9,
      precipitation_probability_max: 60,
      sunrise: "2026-07-23T06:32",
      sunset:  "2026-07-23T20:30",
    },
    {
      date: "2026-07-24",
      weather_code: 2,
      temperature_max: 36.5,
      temperature_min: 25.3,
      precipitation_probability_max: 20,
      sunrise: "2026-07-24T06:33",
      sunset:  "2026-07-24T20:29",
    },
    {
      date: "2026-07-25",
      weather_code: 0,        // Clear sky
      temperature_max: 38.9,
      temperature_min: 26.1,
      precipitation_probability_max: 5,
      sunrise: "2026-07-25T06:34",
      sunset:  "2026-07-25T20:28",
    },
  ],
};
