import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import LocationSearchDropdown from "./ui/LocationSearchDropdown";
import GeolocateButton from "./ui/GeolocateButton";
import ConnectionStatusChip from "./ui/ConnectionStatusChip";
import type { ConnectionState, Location } from "../types/weather";

interface AppNavbarProps {
  onLocationSelect: (loc: Location) => void;
  connectionState: ConnectionState;
  lastUpdatedAt: number | null;
}

/**
 * AppNavbar — only responsibility: arrange the toolbar shell and slot in
 * the three independently-testable UI atoms below it.
 */
export default function AppNavbar({ onLocationSelect, connectionState, lastUpdatedAt }: AppNavbarProps): React.ReactElement {
  return (
    <AppBar position="fixed" sx={{ left: { md: 240 }, width: { md: "calc(100% - 240px)" } }}>
      <Toolbar sx={{ gap: 2, minHeight: 64 }}>
        <LocationSearchDropdown onSelect={onLocationSelect} />
        <GeolocateButton onSuccess={onLocationSelect} />
        <Box sx={{ ml: "auto" }}>
          <ConnectionStatusChip connectionState={connectionState} lastUpdatedAt={lastUpdatedAt} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
