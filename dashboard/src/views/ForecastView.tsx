import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import WbSunnyIcon     from "@mui/icons-material/WbSunny";
import UmbrellaIcon    from "@mui/icons-material/Umbrella";
import AirIcon         from "@mui/icons-material/Air";
import NorthIcon       from "@mui/icons-material/North";
import SouthIcon       from "@mui/icons-material/South";
import { useWeather }  from "../context/WeatherContext";
import { describeWeatherCode } from "../lib/weatherCodes";
import { formatDay, formatHour } from "../lib/formatDate";
import EmptyState      from "../components/ui/EmptyState";
import ConnectingState from "../components/ui/ConnectingState";

// ── helpers ────────────────────────────────────────────────────────────────

function tempColor(temp: number): string {
  if (temp >= 35) return "#ef5350";
  if (temp >= 25) return "#f59e0b";
  if (temp >= 10) return "#38bdf8";
  return "#90caf9";
}

// ── sub-components ─────────────────────────────────────────────────────────

interface HourRowProps {
  time: string;
  temp: number;
  precip: number | null;
  code: number;
}

function HourRow({ time, temp, precip, code }: HourRowProps): React.ReactElement {
  const { label } = describeWeatherCode(code, true);
  return (
    <Stack
      sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", py: 1, borderBottom: "1px solid", borderColor: "divider" }}
    >
      <Typography variant="caption" sx={{ width: 52, fontFamily: "monospace", color: "text.secondary" }}>
        {formatHour(time)}
      </Typography>
      <Typography variant="body2" sx={{ flex: 1, color: "text.secondary", fontSize: 12 }}>
        {label}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 600, color: tempColor(temp), width: 50, textAlign: "right" }}>
        {Math.round(temp)}°C
      </Typography>
      {precip !== null && (
        <Chip
          icon={<UmbrellaIcon sx={{ fontSize: "12px !important" }} />}
          label={`${Math.round(precip)}%`}
          size="small"
          variant="outlined"
          sx={{ ml: 1.5, fontSize: 11, height: 22, borderColor: "#38bdf8", color: "#38bdf8" }}
        />
      )}
    </Stack>
  );
}

interface DayCardProps {
  date: string;
  code: number;
  max: number;
  min: number;
  precipMax: number | null;
}

function DayCard({ date, code, max, min, precipMax }: DayCardProps): React.ReactElement {
  const { label } = describeWeatherCode(code, true);
  const range = max - min;
  return (
    <Card variant="outlined">
      <CardContent sx={{ p: 2 }}>
        <Typography variant="overline" sx={{ color: "text.secondary", display: "block", mb: 0.5 }}>
          {formatDay(date)}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", fontSize: 12, mb: 1.5 }}>
          {label}
        </Typography>
        <Stack sx={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "4px" }}>
            <NorthIcon sx={{ fontSize: 14, color: "#ef5350" }} />
            <Typography variant="body2" sx={{ fontWeight: 700, color: "#ef5350" }}>
              {Math.round(max)}°
            </Typography>
          </Stack>
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "4px" }}>
            <SouthIcon sx={{ fontSize: 14, color: "#38bdf8" }} />
            <Typography variant="body2" sx={{ color: "#38bdf8" }}>
              {Math.round(min)}°
            </Typography>
          </Stack>
        </Stack>
        {/* Temp range bar */}
        <Box sx={{ mt: 1, height: 4, borderRadius: 2, bgcolor: "divider", overflow: "hidden" }}>
          <Box sx={{ height: "100%", width: `${Math.min(100, (range / 20) * 100)}%`, bgcolor: "#f59e0b", borderRadius: 2 }} />
        </Box>
        {precipMax !== null && (
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "4px", mt: 1 }}>
            <UmbrellaIcon sx={{ fontSize: 13, color: "#38bdf8" }} />
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {Math.round(precipMax)}%
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}

// ── view ───────────────────────────────────────────────────────────────────

export default function ForecastView(): React.ReactElement {
  const { location, data, isConnecting } = useWeather();

  if (!location) return <Box sx={{ mt: 10 }}><EmptyState /></Box>;
  if (isConnecting && !data) return <Box sx={{ mt: 10 }}><ConnectingState /></Box>;

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 3 }, pb: 6 }}>
      <Stack spacing={0.5} sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Forecast
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {location.label} · 7-day outlook + 24-hour hourly breakdown
        </Typography>
      </Stack>

      {/* 7-day daily cards */}
      <Typography variant="overline" sx={{ color: "primary.main", display: "block", mb: 1.5 }}>
        7-day daily
      </Typography>
      {data ? (
        <Grid container spacing={2} sx={{ mb: 5 }}>
          {data.daily.map((d) => (
            <Grid key={d.date} size={{ xs: 6, sm: 4, md: 3, lg: 12/7 }}>
              <DayCard
                date={d.date}
                code={d.weather_code}
                max={d.temperature_max}
                min={d.temperature_min}
                precipMax={d.precipitation_probability_max}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2} sx={{ mb: 5 }}>
          {Array.from({ length: 7 }).map((_, i) => (
            <Grid key={i} size={{ xs: 6, sm: 4, md: 3 }}>
              <Skeleton variant="rounded" height={130} />
            </Grid>
          ))}
        </Grid>
      )}

      <Divider sx={{ mb: 4 }} />

      {/* 24-hour hourly breakdown */}
      <Stack sx={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
        <Typography variant="overline" sx={{ color: "primary.main" }}>
          24-hour hourly
        </Typography>
        <Stack sx={{ flexDirection: "row", gap: "8px" }}>
          <Chip icon={<WbSunnyIcon sx={{ fontSize: "13px !important" }} />} label="Temp" size="small" sx={{ bgcolor: "transparent", border: "1px solid", borderColor: "#f59e0b", color: "#f59e0b", fontSize: 11 }} />
          <Chip icon={<AirIcon sx={{ fontSize: "13px !important" }} />} label="Wind" size="small" sx={{ bgcolor: "transparent", border: "1px solid", borderColor: "divider", color: "text.secondary", fontSize: 11 }} />
        </Stack>
      </Stack>
      <Card variant="outlined">
        <CardContent sx={{ px: 2.5, py: 1.5 }}>
          {data ? (
            data.hourly.map((h) => (
              <HourRow
                key={h.time}
                time={h.time}
                temp={h.temperature}
                precip={h.precipitation_probability}
                code={h.weather_code}
              />
            ))
          ) : (
            Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} height={40} sx={{ my: 0.5 }} />
            ))
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
