import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { lineChartSx } from "../lib/chartStyles";
import { formatHour } from "../lib/formatDate";
import type { HourlyPoint } from "../types/weather";

interface HourlyChartProps {
  hourly: HourlyPoint[];
}

export default function HourlyChart({ hourly }: HourlyChartProps): React.ReactElement {
  const labels = hourly.map((h) => formatHour(h.time));
  const temps  = hourly.map((h) => Math.round(h.temperature));
  const precip = hourly.map((h) => Math.round(h.precipitation_probability ?? 0));

  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500, mb: 0.5 }}>
          24-hour Forecast
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Temperature & Precipitation Chance
        </Typography>
        <Box sx={{ width: "100%", height: 220 }}>
          <LineChart
            xAxis={[{ scaleType: "point", data: labels, tickLabelInterval: (_v, i) => i % 3 === 0, tickLabelStyle: { fontSize: 11 } }]}
            yAxis={[
              { id: "temp",  label: "°C",       labelStyle: { fontSize: 11 } },
              { id: "rain",  label: "% chance",  min: 0, max: 100, labelStyle: { fontSize: 11 } },
            ]}
            series={[
              { id: "temperature",   label: "Temp (°C)", data: temps,  yAxisId: "temp", color: "#f59e0b", showMark: false, curve: "natural" },
              { id: "precipitation", label: "Precip %",  data: precip, yAxisId: "rain", color: "#38bdf8", showMark: false, curve: "natural" },
            ]}
            height={220}
            margin={{ top: 10, right: 50, bottom: 30, left: 50 }}
            sx={lineChartSx}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
