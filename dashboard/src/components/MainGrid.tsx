import React from "react";
import { Grid } from "@mui/material";
import CurrentConditionsCard from "./CurrentConditionsCard";
import StatCard from "./StatCard";
import HourlyChart from "./HourlyChart";
import DailyForecast from "./DailyForecast";
import SunriseSunset from "./SunriseSunset";
import EmptyState from "./ui/EmptyState";
import ConnectingState from "./ui/ConnectingState";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import CompressIcon from "@mui/icons-material/Compress";
import { buildStatCards } from "../lib/statCardData";
import type { Location, WeatherPayload } from "../types/weather";

interface MainGridProps {
  data: WeatherPayload | null;
  location: Location | null;
  isConnecting: boolean;
}

const STAT_ICONS: Record<string, React.ReactElement> = {
  WbSunny:   <WbSunnyIcon fontSize="small" />,
  WaterDrop: <WaterDropIcon fontSize="small" />,
  Air:       <AirIcon fontSize="small" />,
  Compress:  <CompressIcon fontSize="small" />,
};

/**
 * MainGrid — only responsibility: decide which top-level state to render
 * (empty / connecting / data) and lay out the data cards in the MUI grid.
 * All business logic (labels, trends) lives in lib/statCardData.ts.
 */
export default function MainGrid({ data, location, isConnecting }: MainGridProps): React.ReactElement {
  if (!location) return <EmptyState />;
  if (isConnecting && !data) return <ConnectingState />;
  if (!data) return <></>;

  const { current, hourly, daily } = data;
  const today = daily[0];
  const statCards = buildStatCards(current, today);

  return (
    <Grid container spacing={3} sx={{ width: "100%" }}>
      {statCards.map((card) => (
        <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={card.title}>
          <StatCard {...card} icon={STAT_ICONS[card.iconName]} />
        </Grid>
      ))}

      <Grid size={{ xs: 12 }}>
        <CurrentConditionsCard current={current} locationLabel={location.label} />
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <HourlyChart hourly={hourly} />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <SunriseSunset today={today} />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <DailyForecast daily={daily} />
      </Grid>
    </Grid>
  );
}
