import React from "react";
import { Drawer, Stack, Typography, Divider } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SideNavList from "./ui/SideNavList";
import SideMenuFooter from "./ui/SideMenuFooter";
import { DRAWER_WIDTH } from "../constants/navigation";
import type { Location } from "../types/weather";

interface SideMenuProps {
  location: Location | null;
}

/**
 * SideMenu — only responsibility: compose the drawer shell and slot in
 * the independently-testable nav list and footer atoms.
 */
export default function SideMenu({ location }: SideMenuProps): React.ReactElement {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: DRAWER_WIDTH, boxSizing: "border-box", pt: 2 },
      }}
    >
      <Stack spacing={1.5} sx={{px: 2.5, pb: 2, flexDirection: "row", alignItems: "center",}}>
        <WbSunnyIcon sx={{ color: "warning.main", fontSize: 28 }} />
        <Typography variant="h6" sx={{ fontSize: 15, fontWeight: 700, letterSpacing: 0.5 }}>
          WeatherBoard
        </Typography>
      </Stack>

      <Divider />
      <SideNavList />
      <SideMenuFooter location={location} />
    </Drawer>
  );
}
