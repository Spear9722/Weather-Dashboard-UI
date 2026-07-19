import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import CloudIcon         from "@mui/icons-material/Cloud";
import CodeIcon          from "@mui/icons-material/Code";
import FavoriteIcon      from "@mui/icons-material/Favorite";
import OpenInNewIcon     from "@mui/icons-material/OpenInNew";

interface TechRowProps {
  name: string;
  description: string;
  href: string;
  badge?: string;
}

function TechRow({ name, description, href, badge }: TechRowProps): React.ReactElement {
  return (
    <Stack
      sx={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", py: 1.5, borderBottom: "1px solid", borderColor: "divider" }}
    >
      <Box>
        <Link
          href={href}
          target="_blank"
          rel="noreferrer"
          underline="hover"
          sx={{ fontWeight: 600, fontSize: 14, color: "primary.main", display: "inline-flex", alignItems: "center", gap: 0.5 }}
        >
          {name}
          <OpenInNewIcon sx={{ fontSize: 13 }} />
        </Link>
        <Typography variant="body2" sx={{ color: "text.secondary", fontSize: 13 }}>
          {description}
        </Typography>
      </Box>
      {badge && (
        <Chip label={badge} size="small" variant="outlined" sx={{ fontSize: 11, flexShrink: 0, ml: 2 }} />
      )}
    </Stack>
  );
}

export default function AboutView(): React.ReactElement {
  return (
    <Container maxWidth="md" sx={{ pt: { xs: 10, md: 3 }, pb: 6 }}>
      <Stack spacing={0.5} sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          About
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          WeatherBoard — a real-time weather analytics dashboard.
        </Typography>
      </Stack>

      <Stack spacing={3}>
        {/* Overview */}
        <Card variant="outlined">
          <CardContent sx={{ p: 3 }}>
            <Stack sx={{ flexDirection: "row", gap: "12px", alignItems: "center", mb: 2 }}>
              <CloudIcon sx={{ color: "primary.main", fontSize: 28 }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                WeatherBoard
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              A live weather dashboard that connects to a FastAPI backend via WebSocket,
              streaming real-time conditions, hourly forecasts, and 7-day outlooks.
              Weather data is sourced from{" "}
              <Link href="https://open-meteo.com" target="_blank" rel="noreferrer" sx={{ color: "primary.main" }}>
                Open-Meteo
              </Link>
              {" "}— a free, keyless, open-source weather API.
            </Typography>
          </CardContent>
        </Card>

        {/* Tech stack */}
        <Card variant="outlined">
          <CardContent sx={{ p: 3 }}>
            <Stack sx={{ flexDirection: "row", gap: "8px", alignItems: "center", mb: 0.5 }}>
              <CodeIcon sx={{ color: "primary.main" }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Tech stack
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2, fontSize: 13 }}>
              Frontend
            </Typography>
            <TechRow name="React 19" description="UI component library" href="https://react.dev" badge="v19" />
            <TechRow name="TypeScript" description="Type-safe JavaScript" href="https://www.typescriptlang.org" badge="v6" />
            <TechRow name="Material UI" description="Component library and theming" href="https://mui.com" badge="v9" />
            <TechRow name="React Router" description="Client-side routing (Data Mode)" href="https://reactrouter.com" badge="v8" />
            <TechRow name="MUI X Charts" description="Line and bar charts" href="https://mui.com/x/react-charts/" badge="v9" />
            <TechRow name="Vite" description="Build tool and dev server" href="https://vitejs.dev" badge="v8" />

            <Divider sx={{ my: 2 }} />

            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2, fontSize: 13 }}>
              Backend
            </Typography>
            <TechRow name="FastAPI" description="Python async REST + WebSocket API" href="https://fastapi.tiangolo.com" badge="Python" />
            <TechRow name="Open-Meteo" description="Free weather API — no key required" href="https://open-meteo.com" badge="Free" />
            <TechRow name="Render" description="Backend hosting (free tier)" href="https://render.com" badge="Hosting" />
            <TechRow name="Cloudflare Pages" description="Frontend hosting with CDN" href="https://pages.cloudflare.com" badge="Hosting" />
          </CardContent>
        </Card>

        {/* Data sources */}
        <Card variant="outlined">
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Data sources
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.9 }}>
              All weather data is provided by{" "}
              <Link href="https://open-meteo.com" target="_blank" rel="noreferrer" sx={{ color: "primary.main" }}>
                Open-Meteo
              </Link>
              , an open-source weather API using data from national weather services (NOAA,
              Copernicus, DWD and others). No API key is required. Map tiles are provided by{" "}
              <Link href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer" sx={{ color: "primary.main" }}>
                OpenStreetMap
              </Link>{" "}
              contributors under the ODbL licence.
            </Typography>
          </CardContent>
        </Card>

        <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "6px", py: 2 }}>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Built with
          </Typography>
          <FavoriteIcon sx={{ fontSize: 13, color: "#ef5350" }} />
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            by Sean Pearce
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}