export interface Location {
    label: string;
    latitude: number;
    longitude: number;
}

export const DEFAULT_LOCATION: Location = {
  label: "Fort Worth, Texas, US",
  latitude: 32.7555,
  longitude: -97.3308,
};