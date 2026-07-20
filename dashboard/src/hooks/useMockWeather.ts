import { useEffect, useRef, useState } from "react";
import { WEATHER_MOCKS } from "../mocks/weather/index";
import type { UseWeatherSocketResult } from "./useWeatherSocket";
import type { Location, WeatherPayload } from "../types/weather";

/**
 * Maps "lat,lon" → WEATHER_MOCKS key.
 * Coordinates must match the latitude/longitude in each mock payload exactly.
 *
 * TODO: remove once the real backend WebSocket is wired up.
 */
const COORD_KEY_MAP: Record<string, keyof typeof WEATHER_MOCKS> = {
  "32.7555,-97.3308":  "fortworth",
  "29.9511,-90.0715":  "neworleans",
  "45.5152,-122.6784": "portland",
  "34.0522,-118.2437": "losangeles",
  "28.5384,-81.3789":  "orlando",
  "40.7128,-74.006":   "newyorkcity",
};

function pickPayload(location: Location): WeatherPayload | null {
  const key = `${location.latitude},${location.longitude}`;
  const mockKey = COORD_KEY_MAP[key];
  return mockKey ? WEATHER_MOCKS[mockKey] : null;
}

/**
 * useMockWeather — drop-in replacement for useWeatherSocket.
 *
 * - Returns null / "idle" when no location is set (shows EmptyState).
 * - Re-runs and simulates an 800ms "connecting" state every time the
 *   location changes — including switching from a searched city back
 *   to "Use my location". This is the fix for the bug where clicking
 *   "Use my location" after searching didn't re-render the payload.
 * - Looks up the correct city payload from WEATHER_MOCKS by coordinates.
 *
 * Swap out in WeatherContext.tsx when the backend is ready:
 *   // Mock  → import { useMockWeather as useWeatherSocket } from "../hooks/useMockWeather";
 *   // Live  → import { useWeatherSocket } from "../hooks/useWeatherSocket";
 */
export function useMockWeather(location: Location | null): UseWeatherSocketResult {
  const [isConnecting, setIsConnecting] = useState(false);
  const [data, setData] = useState<WeatherPayload | null>(null);
  const [lastUpdatedAt, setLastUpdatedAt] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // No location — reset everything, show EmptyState
    if (!location) {
      if (timerRef.current) clearTimeout(timerRef.current);
      setData(null);
      setIsConnecting(false);
      setLastUpdatedAt(null);
      return;
    }

    // Location changed — reset data and simulate connecting
    setIsConnecting(true);
    setData(null);
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setData(pickPayload(location));
      setIsConnecting(false);
      setLastUpdatedAt(Date.now());
    }, 800);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [location?.latitude, location?.longitude]); // re-runs on every location change

  return {
    data,
    connectionState: !location ? "idle" : isConnecting ? "connecting" : "open",
    isConnecting,
    lastUpdatedAt,
    errorMessage: null,
  };
}
