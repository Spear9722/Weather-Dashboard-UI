import type { Location } from "../types/weather";

/**
 * Hardcoded default location — Fort Worth, TX.
 *
 * TODO: Replace with one of the following once the backend is ready:
 *   - Scraped/cached location data pulled from the FastAPI backend
 *   - User's last-selected location stored in a DB or localStorage
 *   - Browser geolocation (already wired up in GeolocateButton)
 */
export const DEFAULT_LOCATION: Location = {
  label: "Fort Worth, Texas, US",
  latitude: 32.7555,
  longitude: -97.3308,
};
