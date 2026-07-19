import { useState, useEffect } from "react";
import { FORT_WORTH_MOCK } from "../mocks/fortWorthWeather";
import type { UseWeatherSocketResult } from "./useWeatherSocket";
import type { Location } from "../types/weather";

/**
 * useMockWeather — drop-in replacement for useWeatherSocket.
 *
 * Returns the static Fort Worth mock payload immediately so every view
 * renders with real-looking data while the FastAPI backend is not yet
 * running.
 *
 * Swap out in WeatherContext.tsx:
 *
 *   // Mock (current)
 *   import { useMockWeather as useWeatherSocket } from "../hooks/useMockWeather";
 *
 *   // Live (when backend is ready)
 *   import { useWeatherSocket } from "../hooks/useWeatherSocket";
 *
 * The hook signature is identical to useWeatherSocket so no other files
 * need to change.
 */
export function useMockWeather(_location: Location | null): UseWeatherSocketResult {
  // Simulate a brief "connecting" state so the UI transitions look right
  const [isConnecting, setIsConnecting] = useState(true);
  const [lastUpdatedAt, setLastUpdatedAt] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConnecting(false);
      setLastUpdatedAt(Date.now());
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return {
    data: isConnecting ? null : FORT_WORTH_MOCK,
    connectionState: isConnecting ? "connecting" : "open",
    isConnecting,
    lastUpdatedAt,
    errorMessage: null,
  };
}
