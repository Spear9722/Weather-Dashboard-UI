import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Chip,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import PlaceIcon       from "@mui/icons-material/Place";
import PublicIcon      from "@mui/icons-material/Public";
import RadarIcon       from "@mui/icons-material/Radar";
import UpdateIcon      from "@mui/icons-material/Update";
import { useWeather }  from "../context/WeatherContext";
import EmptyState      from "../components/ui/EmptyState";

// ── RainViewer API ──────────────────────────────────────────────────────────

const RAINVIEWER_API = "https://api.rainviewer.com/public/weather-maps.json";
const RADAR_REFRESH_MS = 10 * 60 * 1000; // RainViewer updates every ~10 min

interface RainViewerFrame {
  time: number;
  path: string;
}

interface RainViewerData {
  host: string;
  radar: { past: RainViewerFrame[]; nowcast: RainViewerFrame[] };
}

function useRainViewerFrames() {
  const [frames, setFrames] = useState<RainViewerFrame[]>([]);
  const [host, setHost] = useState("");
  const [fetchedAt, setFetchedAt] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchFrames() {
    try {
      const res = await fetch(RAINVIEWER_API);
      const data: RainViewerData = await res.json();
      // Use the 2 most recent past frames + 1 nowcast so the animation
      // loops over the last ~20 minutes of radar data
      const recent = data.radar.past.slice(-2);
      const nowcast = data.radar.nowcast.slice(0, 1);
      setFrames([...recent, ...nowcast]);
      setHost(data.host);
      setFetchedAt(new Date());
    } catch {
      // Silently keep showing the last good frame if fetch fails
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFrames();
    const id = setInterval(fetchFrames, RADAR_REFRESH_MS);
    return () => clearInterval(id);
  }, []);

  return { frames, host, fetchedAt, loading };
}

// ── Inline HTML for the Leaflet + RainViewer iframe ─────────────────────────

function buildMapHtml(
  latitude: number,
  longitude: number,
  radarHost: string,
  radarFrames: RainViewerFrame[],
  colorScheme: number = 2,
  opacity: number = 0.6,
): string {
  const framesJson = JSON.stringify(radarFrames);

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body, #map { width: 100%; height: 100%; }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    const map = L.map('map', { zoomControl: true }).setView([${latitude}, ${longitude}], 6);

    // Base tile — OpenStreetMap (free, no key)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);

    // Location marker
    L.circleMarker([${latitude}, ${longitude}], {
      radius: 8,
      color: '#1976d2',
      fillColor: '#1976d2',
      fillOpacity: 0.9,
      weight: 2,
    }).addTo(map);

    // RainViewer radar overlay
    const radarHost   = ${JSON.stringify(radarHost)};
    const radarFrames = ${framesJson};
    const colorScheme = ${colorScheme};
    const opacity     = ${opacity};

    let currentLayer = null;
    let frameIndex   = radarFrames.length - 1; // start on most recent

    function showFrame(index) {
      if (!radarFrames.length) return;
      const frame = radarFrames[index];
      const url =
        radarHost + frame.path +
        '/256/{z}/{x}/{y}/' + colorScheme + '/1_1.png';

      if (currentLayer) map.removeLayer(currentLayer);
      currentLayer = L.tileLayer(url, { opacity, tileSize: 256, maxZoom: 6, maxNativeZoom: 6 });
      currentLayer.addTo(map);
    }

    // Show the most recent frame immediately
    if (radarFrames.length) showFrame(frameIndex);

    // Animate through frames every 600ms then pause on the latest
    let animating = true;
    function animate() {
      if (!animating) return;
      frameIndex = (frameIndex + 1) % radarFrames.length;
      showFrame(frameIndex);
      if (frameIndex === radarFrames.length - 1) {
        animating = false;
        setTimeout(() => {
          animating = true;
          frameIndex = 0;
          animate();
        }, 3000); // pause 3s on the latest frame before looping
      } else {
        setTimeout(animate, 600);
      }
    }

    if (radarFrames.length > 1) setTimeout(animate, 1500);
  </script>
</body>
</html>`;
}

// ── MapView ──────────────────────────────────────────────────────────────────

export default function MapView(): React.ReactElement {
  const { location, data } = useWeather();
  const { frames, host, fetchedAt, loading } = useRainViewerFrames();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Rebuild the iframe srcdoc whenever location or radar frames change
  useEffect(() => {
    if (!location || !iframeRef.current) return;
    const html = buildMapHtml(location.latitude, location.longitude, host, frames);
    iframeRef.current.srcdoc = html;
  }, [location, host, frames]);

  if (!location) {
    return (
      <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 3 } }}>
        <EmptyState />
      </Container>
    );
  }

  const { latitude, longitude, label } = location;
  const mapsUrl = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}&zoom=10`;

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 3 }, pb: 6 }}>

      {/* Header */}
      <Stack spacing={0.5} sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>Map</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {label} · Live rain radar overlay
        </Typography>
      </Stack>

      {/* Info chips */}
      <Stack sx={{ flexDirection: "row", gap: "10px", flexWrap: "wrap", mb: 2 }}>
        <Chip
          icon={<PlaceIcon fontSize="small" />}
          label={`${latitude.toFixed(4)}°N, ${longitude.toFixed(4)}°E`}
          variant="outlined"
          size="small"
        />
        {data && (
          <Chip
            icon={<PublicIcon fontSize="small" />}
            label={data.timezone}
            variant="outlined"
            size="small"
            sx={{ color: "primary.main", borderColor: "primary.main" }}
          />
        )}
        <Chip
          icon={loading
            ? <CircularProgress size={12} sx={{ mr: 0.5 }} />
            : <RadarIcon fontSize="small" />}
          label={loading
            ? "Loading radar…"
            : frames.length
            ? `Radar · ${frames.length} frames`
            : "Radar unavailable"}
          variant="outlined"
          size="small"
          color={frames.length ? "success" : "default"}
        />
        {fetchedAt && (
          <Chip
            icon={<UpdateIcon fontSize="small" />}
            label={`Radar updated ${fetchedAt.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`}
            variant="outlined"
            size="small"
            sx={{ color: "text.secondary" }}
          />
        )}
      </Stack>

      {/* Leaflet + RainViewer iframe */}
      <Card variant="outlined" sx={{ overflow: "hidden" }}>
        <Box
          ref={iframeRef}
          component="iframe"
          title={`Weather map of ${label}`}
          sandbox="allow-scripts"
          sx={{
            display: "block",
            width: "100%",
            height: { xs: 340, md: 540 },
            border: "none",
          }}
        />
        <CardContent sx={{ py: 1.25, px: 2 }}>
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: 1 }}>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Map ©{" "}
              <Box component="a" href={mapsUrl} target="_blank" rel="noreferrer" sx={{ color: "primary.main" }}>
                OpenStreetMap
              </Box>
              {" "}contributors · Rain radar ©{" "}
              <Box component="a" href="https://www.rainviewer.com" target="_blank" rel="noreferrer" sx={{ color: "primary.main" }}>
                RainViewer
              </Box>
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              Radar refreshes every 10 minutes · Animation loops last ~20 min of data
            </Typography>
          </Stack>
        </CardContent>
      </Card>

    </Container>
  );
}
