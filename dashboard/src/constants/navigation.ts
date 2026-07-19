export interface NavItem {
  label: string;
  path: string;
  iconName: string; // resolved to a MUI icon in SideNavList
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", path: "/",        iconName: "Dashboard" },
  { label: "Forecast",  path: "/forecast", iconName: "WbSunny"   },
  { label: "Map",       path: "/map",      iconName: "Map"        },
  { label: "Settings",  path: "/settings", iconName: "Settings"   },
  { label: "About",     path: "/about",    iconName: "Info"       },
];

export const DRAWER_WIDTH = 240;
