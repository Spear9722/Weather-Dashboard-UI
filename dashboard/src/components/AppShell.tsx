import React from "react";
import { Outlet } from "react-router";
import { Box, alpha } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SideMenu from "./SideMenu";
import AppNavbar from "./AppNavbar";
import { dashboardTheme } from "../themes/dashboardTheme";
import { useWeather } from "../context/WeatherContext";

/**
 * AppShell — only responsibility: render the permanent chrome
 * (drawer, top bar) and slot the active route view via <Outlet />.
 *
 * All shared state comes from WeatherContext — no props, no prop-drilling.
 */
export default function AppShell(): React.ReactElement {
  const { location, setLocation, connectionState, lastUpdatedAt } = useWeather();

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
          {/* Each route view is rendered here */}
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
