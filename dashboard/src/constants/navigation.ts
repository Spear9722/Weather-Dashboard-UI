export interface NavItem {
  label: string;
  iconName: string; // @mui/icons-material name — resolved in SideNavList
  active: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", iconName: "Dashboard", active: true },
  { label: "Forecast", iconName: "WbSunny", active: false },
  { label: "Map", iconName: "Map", active: false },
  { label: "Settings", iconName: "Settings", active: false },
  { label: "About", iconName: "Info", active: false },
];

export const DRAWER_WIDTH = 240;
