import type React from "react";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";

import { NAV_ITEMS } from "../../constants/navigation";

const ICON_MAP: Record<string, React.ReactElement> = {
  Dashboard: <DashboardIcon fontSize="small" />,
  WbSunny: <WbSunnyIcon fontSize="small" />,
  Map: <MapIcon fontSize="small" />,
  Settings: <SettingsIcon fontSize="small" />,
  Info: <InfoIcon fontSize="small" />,
};

export default function SideNavList(): React.JSX.Element {
  return (
    <List
      sx={{
        px: 1.5,
        pt: 1.5,
      }}
    >
      {NAV_ITEMS.map((item) => (
        <ListItem
          key={item.label}
          disablePadding
          sx={{
            mb: 0.5,
          }}
        >
          <ListItemButton
            selected={item.active}
          >
            <ListItemIcon
              sx={{
                minWidth: 36,
                color: item.active
                  ? "primary.main"
                  : "text.secondary",
              }}
            >
              {ICON_MAP[item.iconName]}
            </ListItemIcon>

            <ListItemText
              primary={item.label}
              slotProps={{
                primary: {
                  sx: {
                    fontSize: 14,
                    fontWeight: item.active ? 600 : 400,
                  },
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}