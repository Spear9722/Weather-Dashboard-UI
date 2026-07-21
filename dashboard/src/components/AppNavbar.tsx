import React from "react";
import { AppBar, Toolbar, Box, IconButton, Tooltip } from "@mui/material";
import DarkModeIcon   from "@mui/icons-material/DarkMode";
import LightModeIcon  from "@mui/icons-material/LightMode";
import LocationSearchDropdown from "./ui/LocationSearchDropdown";
import GeolocateButton        from "./ui/GeolocateButton";
import ConnectionStatusChip   from "./ui/ConnectionStatusChip";
import { useWeather }         from "../context/WeatherContext";
import type { ConnectionState, Location } from "../types/weather";

interface AppNavbarProps {
  onLocationSelect: (loc: Location) => void;
  connectionState:  ConnectionState;
  lastUpdatedAt:    number | null;
}

/**
 * AppNavbar — arranges the toolbar shell and slots in the independently-
 * testable UI atoms. The theme toggle button calls updateSettings directly
 * so the user can flip dark/light from any view without going to Settings.
 */
export default function AppNavbar({
  onLocationSelect,
  connectionState,
  lastUpdatedAt,
}: AppNavbarProps): React.ReactElement {
  const { settings, updateSettings } = useWeather();
  const isDark = settings.themeMode === "dark";

  function toggleTheme() {
    updateSettings({ themeMode: isDark ? "light" : "dark" });
  }

  return (
    <AppBar position="fixed" sx={{ left: { md: 240 }, width: { md: "calc(100% - 240px)" } }}>
      <Toolbar sx={{ gap: 2, minHeight: 64 }}>
        <LocationSearchDropdown onSelect={onLocationSelect} />
        <GeolocateButton onSuccess={onLocationSelect} />

        <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}>
          <Tooltip title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
            <IconButton
              onClick={toggleTheme}
              size="small"
              sx={{ border: "1px solid", borderColor: "divider" }}
              aria-label="toggle theme"
            >
              {isDark
                ? <LightModeIcon fontSize="small" />
                : <DarkModeIcon  fontSize="small" />}
            </IconButton>
          </Tooltip>

          <ConnectionStatusChip
            connectionState={connectionState}
            lastUpdatedAt={lastUpdatedAt}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
