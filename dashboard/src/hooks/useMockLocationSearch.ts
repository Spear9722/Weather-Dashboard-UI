import { useEffect, useState } from "react";
import type { GeocodeResult } from "../types/weather";
import type { UseLocationSearchResult } from "./useLocationSearch";

/**
 * Static geocode results for all supported mock cities.
 * Coordinates match the latitude/longitude values in each mock payload
 * exactly — this is what useMockWeather uses to look up the right city.
 *
 * TODO: delete this file once useLocationSearch is pointed at the real
 * FastAPI /api/geocode endpoint.
 */
const MOCK_CITIES: GeocodeResult[] = [
  {
    name: "Fort Worth",
    admin1: "Texas",
    country: "United States",
    latitude: 32.7555,
    longitude: -97.3308,
    timezone: "America/Chicago",
  },
  {
    name: "New Orleans",
    admin1: "Louisiana",
    country: "United States",
    latitude: 29.9511,
    longitude: -90.0715,
    timezone: "America/Chicago",
  },
  {
    name: "Portland",
    admin1: "Oregon",
    country: "United States",
    latitude: 45.5152,
    longitude: -122.6784,
    timezone: "America/Los_Angeles",
  },
  {
    name: "Los Angeles",
    admin1: "California",
    country: "United States",
    latitude: 34.0522,
    longitude: -118.2437,
    timezone: "America/Los_Angeles",
  },
  {
    name: "Orlando",
    admin1: "Florida",
    country: "United States",
    latitude: 28.5384,
    longitude: -81.3789,
    timezone: "America/New_York",
  },
  {
    name: "New York City",
    admin1: "New York",
    country: "United States",
    latitude: 40.7128,
    longitude: -74.0060,
    timezone: "America/New_York",
  },
];

/**
 * useMockLocationSearch — drop-in replacement for useLocationSearch.
 *
 * Filters MOCK_CITIES client-side against the query string so the search
 * bar works without the FastAPI backend running. Matches against city name,
 * state, and country — so "fort", "texas", "TX", "new", "LA" etc. all work.
 *
 * Swap in LocationSearchDropdown.tsx when the backend is ready:
 *   // Mock  → import { useMockLocationSearch as useLocationSearch } ...
 *   // Live  → import { useLocationSearch } ...
 */
export function useMockLocationSearch(query: string): UseLocationSearchResult {
  const [results, setResults] = useState<GeocodeResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = query.trim().toLowerCase();

    if (q.length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);

    // Small delay so the "Searching…" state is visible
    const timer = setTimeout(() => {
      setResults(
        MOCK_CITIES.filter(
          (city) =>
            city.name.toLowerCase().includes(q) ||
            (city.admin1 ?? "").toLowerCase().includes(q) ||
            (city.country ?? "").toLowerCase().includes(q)
        )
      );
      setLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  return { results, loading };
}
