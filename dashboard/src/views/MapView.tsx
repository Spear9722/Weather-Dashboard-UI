import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import PlaceIcon        from "@mui/icons-material/Place";
import PublicIcon       from "@mui/icons-material/Public";
import { useWeather }   from "../context/WeatherContext"
import EmptyState       from "../components/ui/EmptyState";

/**
 * MapView — shows a static map placeholder centred on the selected location.
 * Once the backend is live, this is where you'd embed a real map tile
 * (e.g. Leaflet + OpenStreetMap, which is free and keyless).
 */
export default function MapView(): React.ReactElement {
  const { location, data } = useWeather();

  if (!location) {
    return (
      <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 3 } }}>
        <EmptyState />
      </Container>
    );
  }

  const { latitude, longitude, label } = location;
  const mapsUrl = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}&zoom=10`;
  const embedUrl =
    `https://www.openstreetmap.org/export/embed.html` +
    `?bbox=${longitude - 1},${latitude - 1},${longitude + 1},${latitude + 1}` +
    `&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 3 }, pb: 6 }}>
      <Stack spacing={0.5} sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Map
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {label}
        </Typography>
      </Stack>

      {/* Coordinate chips */}
      <Stack sx={{ flexDirection: "row", gap: "12px", flexWrap: "wrap", mb: 2 }}>
        <Chip icon={<PlaceIcon fontSize="small" />} label={`${latitude.toFixed(4)}° N`} variant="outlined" size="small" />
        <Chip icon={<PlaceIcon fontSize="small" />} label={`${longitude.toFixed(4)}° E`} variant="outlined" size="small" />
        {data && (
          <Chip icon={<PublicIcon fontSize="small" />} label={data.timezone} variant="outlined" size="small" sx={{ color: "primary.main", borderColor: "primary.main" }} />
        )}
      </Stack>

      {/* OpenStreetMap embed — free, no API key */}
      <Card variant="outlined" sx={{ overflow: "hidden" }}>
        <Box
          component="iframe"
          src={embedUrl}
          title={`Map of ${label}`}
          sx={{
            display: "block",
            width: "100%",
            height: { xs: 320, md: 520 },
            border: "none",
          }}
          loading="lazy"
        />
        <CardContent sx={{ py: 1.25, px: 2 }}>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Map data ©{" "}
            <Box component="a" href={mapsUrl} target="_blank" rel="noreferrer" sx={{ color: "primary.main" }}>
              OpenStreetMap
            </Box>{" "}
            contributors. Open in OpenStreetMap for full interactivity.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
