import { useEffect, useRef, useState } from "react";
import { GEOCODE_ENDPOINT, GEOCODE_DEBOUNCE_MS, GEOCODE_MIN_QUERY_LENGTH } from "../config/api";
import type { GeocodeResult } from "../types/weather";

export interface UseLocationSearchResult {
  results: GeocodeResult[];
  loading: boolean;
}

export function useLocationSearch(query: string): UseLocationSearchResult {
  const [results, setResults] = useState<GeocodeResult[]>([]);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (query.trim().length < GEOCODE_MIN_QUERY_LENGTH) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      abortRef.current?.abort();
      const ctrl = new AbortController();
      abortRef.current = ctrl;
      setLoading(true);
      try {
        const res = await fetch(`${GEOCODE_ENDPOINT}?q=${encodeURIComponent(query)}`, {
          signal: ctrl.signal,
        });
        if (res.ok) setResults(await res.json());
      } catch {
        // Silently ignore abort errors.
      } finally {
        setLoading(false);
      }
    }, GEOCODE_DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [query]);

  return { results, loading };
}
