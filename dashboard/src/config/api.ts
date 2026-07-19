export const API_BASE_URL: string =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000";

export const WS_BASE_URL: string =
  import.meta.env.VITE_WS_BASE_URL ?? "ws://localhost:8000";

export const GEOCODE_ENDPOINT = `${API_BASE_URL}/api/geocode`;
export const WEATHER_ENDPOINT = `${API_BASE_URL}/api/weather`;
export const WS_WEATHER_ENDPOINT = `${WS_BASE_URL}/ws/weather`;

export const WS_UPDATE_INTERVAL_SECONDS = 60;
export const WS_MAX_BACKOFF_MS = 20_000;

export const GEOCODE_DEBOUNCE_MS = 350;
export const GEOCODE_MIN_QUERY_LENGTH = 2;
