import React, { useState } from "react";
import { Box, Stack, alpha } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SideMenu from "./SideMenu";
import AppNavbar from "./AppNavbar";
import Header from "./Header";
import MainGrid from "./MainGrid";
import { dashboardTheme } from "../themes/dashboardTheme";
import { useWeatherSocket } from "../hooks/useWeatherSocket";
import type { Location } from "../types/weather";

/**
 * Dashboard — only responsibility: own the location state, wire it to
 * the WebSocket hook, and compose the page shell.
 * No business logic lives here.
 */
export default function Dashboard(): React.ReactElement {
  const [location, setLocation] = useState<Location | null>(null);
  const { data, connectionState, isConnecting, lastUpdatedAt } = useWeatherSocket(location);

  return (
    <ThemeProvider theme={dashboardTheme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <SideMenu location={location} />
        <AppNavbar
          onLocationSelect={setLocation}
          connectionState={connectionState}
          lastUpdatedAt={lastUpdatedAt}
        />
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: alpha(theme.palette.background.default, 1),
            overflow: "auto",
            minHeight: "100vh",
          })}
        >
          <Stack spacing={2} sx={{ alignItems: "center", mx: 3, pb: 5, mt: { xs: 10, md: 2 } }}>
            <Header location={location} />
            <MainGrid data={data} location={location} isConnecting={isConnecting} />
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
