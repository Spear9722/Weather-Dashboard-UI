import { useEffect, useRef, useState } from "react";
import { WS_WEATHER_ENDPOINT, WS_UPDATE_INTERVAL_SECONDS, WS_MAX_BACKOFF_MS } from "../config/api";
import type { ConnectionState, Location, SocketMessage, WeatherPayload } from "../types/weather";

export interface UseWeatherSocketResult {
  data: WeatherPayload | null;
  connectionState: ConnectionState;
  /** True while the socket is performing its initial connection or reconnecting. */
  isConnecting: boolean;
  lastUpdatedAt: number | null;
  errorMessage: string | null;
}

export function useWeatherSocket(location: Location | null): UseWeatherSocketResult {
  const [data, setData] = useState<WeatherPayload | null>(null);
  const [connectionState, setConnectionState] = useState<ConnectionState>("idle");
  const [lastUpdatedAt, setLastUpdatedAt] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const socketRef = useRef<WebSocket | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const attemptRef = useRef(0);
  const closedRef = useRef(false);

  useEffect(() => {
    if (!location) {
      setData(null);
      setConnectionState("idle");
      setLastUpdatedAt(null);
      setErrorMessage(null);
      return;
    }

    closedRef.current = false;
    attemptRef.current = 0;

    function connect() {
      if (!location) return;
      setConnectionState(attemptRef.current === 0 ? "connecting" : "reconnecting");

      const params = new URLSearchParams({
        lat: String(location.latitude),
        lon: String(location.longitude),
        interval: String(WS_UPDATE_INTERVAL_SECONDS),
      });

      const ws = new WebSocket(`${WS_WEATHER_ENDPOINT}?${params}`);
      socketRef.current = ws;

      ws.onopen = () => {
        attemptRef.current = 0;
        setConnectionState("open");
        setErrorMessage(null);
      };

      ws.onmessage = (e) => {
        try {
          const msg: SocketMessage = JSON.parse(e.data);
          if (msg.type === "update") {
            setData(msg.data);
            setLastUpdatedAt(Date.now());
            setErrorMessage(null);
          } else {
            setErrorMessage(msg.message);
          }
        } catch { /* ignore malformed frames */ }
      };

      ws.onclose = () => {
        socketRef.current = null;
        if (closedRef.current) { setConnectionState("closed"); return; }
        setConnectionState("reconnecting");
        const backoff = Math.min(WS_MAX_BACKOFF_MS, 1000 * 2 ** attemptRef.current++);
        timerRef.current = setTimeout(connect, backoff);
      };

      ws.onerror = () => ws.close();
    }

    connect();

    return () => {
      closedRef.current = true;
      if (timerRef.current) clearTimeout(timerRef.current);
      socketRef.current?.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.latitude, location?.longitude]);

  const isConnecting =
    connectionState === "connecting" || connectionState === "reconnecting";

  return { data, connectionState, isConnecting, lastUpdatedAt, errorMessage };
}
