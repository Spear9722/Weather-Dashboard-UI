import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { chartAxisSx } from "../lib/chartStyles";
import { formatDay } from "../lib/formatDate";
import type { DailyPoint } from "../types/weather";

interface DailyForecastProps {
  daily: DailyPoint[];
}

export default function DailyForecast({ daily }: DailyForecastProps): React.ReactElement {
  const labels = daily.map((d) => formatDay(d.date));
  const highs  = daily.map((d) => Math.round(d.temperature_max));
  const lows   = daily.map((d) => Math.round(d.temperature_min));

  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500, mb: 0.5 }}>
          7-day Forecast
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Daily High / Low
        </Typography>
        <Box sx={{ width: "100%", height: 220 }}>
          <BarChart
            xAxis={[{ scaleType: "band", data: labels, tickLabelStyle: { fontSize: 12 } }]}
            series={[
              { label: "High (°C)", data: highs, color: "#f59e0b" },
              { label: "Low (°C)",  data: lows,  color: "#38bdf8" },
            ]}
            height={220}
            margin={{ top: 10, right: 20, bottom: 30, left: 40 }}
            sx={chartAxisSx}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
