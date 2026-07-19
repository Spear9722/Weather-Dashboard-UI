import type React from "react";

import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";
import UmbrellaIcon from "@mui/icons-material/Umbrella";

import { describeWeatherCode } from "../lib/weatherCodes";
import { degreesToCompass } from "../lib/wind";
import { formatClockTime } from "../lib/formatDate";

import type { CurrentConditions } from "../types/weather";

interface CurrentConditionsCardProps {
  current: CurrentConditions;
  locationLabel: string;
}

interface DetailRow {
  icon: React.ReactElement;
  label: string;
  value: string;
}

function buildDetailRows(current: CurrentConditions): DetailRow[] {
  return [
    {
      icon: <WaterDropIcon fontSize="small" />,
      label: "Humidity",
      value: `${Math.round(current.humidity)}%`,
    },
    {
      icon: <AirIcon fontSize="small" />,
      label: "Wind",
      value: `${Math.round(current.wind_speed)} km/h ${degreesToCompass(
        current.wind_direction
      )}`,
    },
    {
      icon: <CompressIcon fontSize="small" />,
      label: "Pressure",
      value: `${Math.round(current.pressure)} hPa`,
    },
    {
      icon: <UmbrellaIcon fontSize="small" />,
      label: "Precipitation",
      value: `${current.precipitation} mm`,
    },
  ];
}

export default function CurrentConditionsCard({
  current,
  locationLabel,
}: CurrentConditionsCardProps): React.JSX.Element {
  const { label } = describeWeatherCode(
    current.weather_code,
    current.is_day
  );

  const detailRows = buildDetailRows(current);

  return (
    <Card variant="outlined">
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                mb: 0.5,
              }}
            >
              Current Conditions · {locationLabel}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  color: current.is_day
                    ? "warning.main"
                    : "info.main",
                  display: "flex",
                }}
              >
                {current.is_day ? (
                  <WbSunnyIcon sx={{ fontSize: 52 }} />
                ) : (
                  <NightlightIcon sx={{ fontSize: 52 }} />
                )}
              </Box>

              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {Math.round(current.temperature)}°C
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mt: 0.5,
                  }}
                >
                  {label} · Feels like{" "}
                  {Math.round(current.apparent_temperature)}°C
                </Typography>
              </Box>
            </Box>
          </Box>

          <Grid
            container
            spacing={2}
            sx={{ maxWidth: 360 }}
          >
            {detailRows.map((row) => (
              <Grid
                key={row.label}
                size={6}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      color: "primary.main",
                      display: "flex",
                    }}
                  >
                    {row.icon}
                  </Box>

                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        display: "block",
                      }}
                    >
                      {row.label}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      {row.value}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mt: 2.5, mb: 2 }} />

        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
          }}
        >
          Last updated: {formatClockTime(current.time)}
        </Typography>
      </CardContent>
    </Card>
  );
}