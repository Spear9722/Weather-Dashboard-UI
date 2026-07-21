import React, { useMemo } from "react";
import { Outlet } from "react-router";
import { Box, alpha } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SideMenu    from "./SideMenu";
import AppNavbar   from "./AppNavbar";
import { createDashboardTheme } from "../themes/dashboardTheme";
import { useWeather } from "../context/WeatherContext";

/**
 * AppShell — only responsibility: render the permanent chrome and slot
 * the active route view via <Outlet />.
 *
 * Reads settings.themeMode from WeatherContext and rebuilds the MUI theme
 * whenever the user toggles dark / light in Settings. useMemo ensures the
 * theme object is only recreated when mode actually changes.
 */
export default function AppShell(): React.ReactElement {
  const { location, setLocation, connectionState, lastUpdatedAt, settings } = useWeather();

  const theme = useMemo(
    () => createDashboardTheme(settings.themeMode),
    [settings.themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
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
          sx={(t) => ({
            flexGrow: 1,
            backgroundColor: alpha(t.palette.background.default, 1),
            overflow: "auto",
            minHeight: "100vh",
          })}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
