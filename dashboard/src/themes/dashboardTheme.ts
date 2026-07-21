import { createTheme, alpha } from "@mui/material/styles";
import type { ThemeMode } from "../types/settings";

/**
 * createDashboardTheme — factory that returns a full MUI theme for the
 * given mode. Called in AppShell whenever settings.themeMode changes.
 *
 * Dark palette: deep navy backgrounds, blue primary.
 * Light palette: white/grey backgrounds, same blue primary so the brand
 * colour stays consistent across both modes.
 */
export function createDashboardTheme(mode: ThemeMode) {
  const isDark = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: { main: "#1976d2" },
      background: {
        default: isDark ? "hsl(210, 14%, 7%)"  : "hsl(210, 20%, 97%)",
        paper:   isDark ? "hsl(220, 14%, 10%)" : "hsl(0, 0%, 100%)",
      },
      divider: isDark
        ? "hsla(220, 20%, 25%, 0.6)"
        : "hsla(220, 20%, 80%, 0.8)",
      text: {
        primary:   isDark ? "hsl(0, 0%, 100%)"     : "hsl(220, 15%, 15%)",
        secondary: isDark ? "hsl(220, 20%, 65%)"   : "hsl(220, 10%, 45%)",
      },
    },

    typography: {
      fontFamily: '"Inter", "Roboto", sans-serif',
      h1: { fontWeight: 600 },
      h2: { fontWeight: 600 },
      h3: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      button: { textTransform: "none", fontWeight: 500 },
    },

    shape: { borderRadius: 8 },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
            backgroundImage: isDark
              ? `radial-gradient(ellipse at 50% 50%, ${alpha("#1976d2", 0.05)}, hsl(210, 14%, 7%) 100%)`
              : `radial-gradient(ellipse at 50% 50%, ${alpha("#1976d2", 0.03)}, hsl(210, 20%, 97%) 100%)`,
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? "hsl(220, 14%, 10%)" : "hsl(0, 0%, 100%)",
            backgroundImage: "none",
            border: `1px solid ${isDark ? "hsla(220, 20%, 25%, 0.6)" : "hsla(220, 20%, 80%, 0.8)"}`,
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            border: `1px solid ${isDark ? "hsla(220, 20%, 25%, 0.6)" : "hsla(220, 20%, 80%, 0.8)"}`,
          },
        },
      },

      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: isDark ? "hsl(220, 14%, 10%)" : "hsl(0, 0%, 100%)",
            border: "none",
            borderRight: `1px solid ${isDark ? "hsla(220, 20%, 25%, 0.6)" : "hsla(220, 20%, 80%, 0.8)"}`,
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? "hsl(220, 14%, 10%)" : "hsl(0, 0%, 100%)",
            backgroundImage: "none",
            borderBottom: `1px solid ${isDark ? "hsla(220, 20%, 25%, 0.6)" : "hsla(220, 20%, 80%, 0.8)"}`,
            boxShadow: "none",
            color: isDark ? "hsl(0, 0%, 100%)" : "hsl(220, 15%, 15%)",
          },
        },
      },

      MuiChip: {
        styleOverrides: { root: { borderRadius: 6 } },
      },

      MuiButton: {
        styleOverrides: { root: { borderRadius: 8 } },
      },

      MuiTextField: {
        defaultProps: { size: "small" },
      },

      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            "&.Mui-selected": {
              backgroundColor: alpha("#1976d2", isDark ? 0.2 : 0.1),
              "&:hover": { backgroundColor: alpha("#1976d2", isDark ? 0.25 : 0.15) },
            },
          },
        },
      },
    },
  });
}
