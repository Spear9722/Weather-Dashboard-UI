import React from "react";
import { Card, CardContent, Typography, Stack, Box, LinearProgress } from "@mui/material";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import { daylightProgress } from "../lib/sunlight";
import { formatClockTime } from "../lib/formatDate";
import type { DailyPoint } from "../types/weather";

interface SunriseSunsetProps {
  today: DailyPoint;
}

export default function SunriseSunset({ today }: SunriseSunsetProps): React.ReactElement {
  const progress = daylightProgress(today.sunrise, today.sunset);

  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardContent>
        <Stack spacing={1} sx={{mb: 2, flexDirection: "row", alignItems: "center",}}>
          <WbTwilightIcon sx={{ color: "warning.main" }} />
          <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500 }}>
            Sun
          </Typography>
        </Stack>

        <Stack sx={{mb: 1.5, flexDirection: "row", justifyContent: "space-between",}}>
          <Box>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>Sunrise</Typography>
            <Typography variant="body1" sx={{ fontWeight: 700 }}>{formatClockTime(today.sunrise)}</Typography>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>Sunset</Typography>
            <Typography variant="body1" sx={{ fontWeight: 700 }}>{formatClockTime(today.sunset)}</Typography>
          </Box>
        </Stack>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: 6, borderRadius: 3, bgcolor: "divider", "& .MuiLinearProgress-bar": { bgcolor: "warning.main" } }}
        />
        <Typography variant="caption" sx={{ color: "text.secondary", mt: 0.5, display: "block", textAlign: "center" }}>
          {progress}% of daylight passed
        </Typography>
      </CardContent>
    </Card>
  );
}
