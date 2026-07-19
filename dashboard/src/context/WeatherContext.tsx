import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
// TODO: swap these two lines when the FastAPI backend is running
import { useMockWeather as useWeatherSocket } from "../hooks/useMockWeather";
// import { useWeatherSocket } from "../hooks/useWeatherSocket";
import type { AppSettings } from "../types/settings";
import type { ConnectionState, Location, WeatherPayload } from "../types/weather";
import { DEFAULT_SETTINGS } from "../types/settings";
import { DEFAULT_LOCATION } from "../constants/defaultLocation";

// ── types ──────────────────────────────────────────────────────────────────

interface WeatherContextValue {
  // location
  location: Location | null;
  setLocation: (loc: Location) => void;
  // live weather
  data: WeatherPayload | null;
  connectionState: ConnectionState;
  isConnecting: boolean;
  lastUpdatedAt: number | null;
  errorMessage: string | null;
  // settings
  settings: AppSettings;
  updateSettings: (patch: Partial<AppSettings>) => void;
}

// ── context ────────────────────────────────────────────────────────────────

const WeatherContext = createContext<WeatherContextValue | null>(null);

// ── provider ───────────────────────────────────────────────────────────────

/**
 * WeatherProvider — single responsibility: own all shared app state
 * (location, live weather data, user settings) and expose it via context.
 * Lives above the router so every route can consume it without prop-drilling.
 */
export function WeatherProvider({ children }: { children: ReactNode }): React.ReactElement {
  // TODO: replace DEFAULT_LOCATION with cached/DB location once backend is ready
  const [location, setLocation] = useState<Location | null>(DEFAULT_LOCATION);
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);

  const { data, connectionState, isConnecting, lastUpdatedAt, errorMessage } =
    useWeatherSocket(location);

  function updateSettings(patch: Partial<AppSettings>) {
    setSettings((prev) => ({ ...prev, ...patch }));
  }

  return (
    <WeatherContext.Provider
      value={{
        location,
        setLocation,
        data,
        connectionState,
        isConnecting,
        lastUpdatedAt,
        errorMessage,
        settings,
        updateSettings,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

// ── hook ───────────────────────────────────────────────────────────────────

/**
 * useWeather — consume the shared weather context from any route component.
 * Throws if used outside <WeatherProvider>.
 */
export function useWeather(): WeatherContextValue {
  const ctx = useContext(WeatherContext);
  if (!ctx) {
    throw new Error("useWeather must be used inside <WeatherProvider>");
  }
  return ctx;
}
