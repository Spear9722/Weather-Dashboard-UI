import React from "react";
import { NavLink, useLocation } from "react-router";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WbSunnyIcon   from "@mui/icons-material/WbSunny";
import MapIcon        from "@mui/icons-material/Map";
import SettingsIcon   from "@mui/icons-material/Settings";
import InfoIcon       from "@mui/icons-material/Info";
import { NAV_ITEMS } from "../../constants/navigation";

const ICON_MAP: Record<string, React.ReactElement> = {
  Dashboard: <DashboardIcon fontSize="small" />,
  WbSunny:   <WbSunnyIcon fontSize="small" />,
  Map:       <MapIcon fontSize="small" />,
  Settings:  <SettingsIcon fontSize="small" />,
  Info:      <InfoIcon fontSize="small" />,
};

/**
 * SideNavList — renders nav items as native NavLink elements styled to
 * match the MUI list aesthetic.
 *
 * MUI v9 removed the `component` prop from ListItemButton, so we render
 * NavLink directly and apply the MUI styles via sx + className instead.
 */
export default function SideNavList(): React.JSX.Element {
  const { pathname } = useLocation();

  return (
    <List sx={{ px: 1.5, pt: 1.5 }}>
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);

        return (
          <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              style={{ width: "100%", textDecoration: "none" }}
            >
              {/* styled to look like a MUI ListItemButton */}
              <ListItemIcon
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  width: "100%",
                  px: 1.5,
                  py: 1,
                  borderRadius: 2,
                  gap: 1.5,
                  cursor: "pointer",
                  bgcolor: isActive ? "rgba(25, 118, 210, 0.12)" : "transparent",
                  "&:hover": { bgcolor: isActive ? "rgba(25, 118, 210, 0.18)" : "action.hover" },
                  transition: "background-color 0.15s",
                  minWidth: 0,
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: 0, color: isActive ? "primary.main" : "text.secondary" }}
                >
                  {ICON_MAP[item.iconName]}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: 14,
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? "primary.main" : "text.primary",
                      },
                    },
                  }}
                />
              </ListItemIcon>
            </NavLink>
          </ListItem>
        );
      })}
    </List>
  );
}
