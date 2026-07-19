import React from 'react';
import { Stack } from '@mui/material';
import Header from '../components/Header';
import MainGrid from '../components/MainGrid';
import { useWeather } from '../context/WeatherContext';

/**
 * DashboardView — the home route ("/").
 * Consumes shared state from WeatherContext, passes it down to
 * the existing MainGrid and Header components unchanged.
 */
export default function DashboardView(): React.ReactElement {
  const { location, data, isConnecting } = useWeather();

  return (
    <Stack spacing={2} sx={{ alignItems: "center", mx: 3, pb: 5, mt: { xs: 10, md: 2 } }}>
      <Header location={location} />
      <MainGrid data={data} location={location} isConnecting={isConnecting} />
    </Stack>
  );
}