import React from "react";
import { Card, CardContent, Stack, Typography, Box, Chip } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

interface StatCardProps {
  title: string;
  value: string;
  unit?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: { label: string; positive: boolean };
}

export default function StatCard({ title, value, unit, subtitle, icon, trend }: StatCardProps): React.ReactElement {
  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardContent>
        <Stack sx={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start",}}>
          <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500, mb: 1 }}>
            {title}
          </Typography>
          {icon && (
            <Box sx={{ color: "text.secondary", display: "flex" }}>{icon}</Box>
          )}
        </Stack>

        <Stack spacing={0.5} sx={{flexDirection: "row", alignItems: "baseline",}}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: "text.primary", lineHeight: 1 }}>
            {value}
          </Typography>
          {unit && (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>{unit}</Typography>
          )}
        </Stack>

        <Stack
        spacing={1}
        sx={{
            mt: 1,
            flexDirection: "row",
            alignItems: "center",
        }}
        >
        {trend && (
            <Chip
            icon={
                trend.positive ? (
                <TrendingUpIcon sx={{ fontSize: "14px !important" }} />
                ) : (
                <TrendingDownIcon sx={{ fontSize: "14px !important" }} />
                )
            }
            label={trend.label}
            size="small"
            color={trend.positive ? "success" : "error"}
            variant="outlined"
            sx={{
                fontSize: 11,
                height: 22,
            }}
            />
        )}
          {subtitle && (
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {subtitle}
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
