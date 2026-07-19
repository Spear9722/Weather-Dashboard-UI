import { createTheme, alpha } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1976d2" },
    background: {
      default: "hsl(210, 14%, 7%)",
      paper: "hsl(220, 14%, 10%)",
    },
    divider: "hsla(220, 20%, 25%, 0.6)",
    text: {
      primary: "hsl(0, 0%, 100%)",
      secondary: "hsl(220, 20%, 65%)",
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
          backgroundImage:
            `radial-gradient(ellipse at 50% 50%, ` +
            `${alpha("#1976d2", 0.05)}, hsl(210, 14%, 7%) 100%)`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "hsl(220, 14%, 10%)",
          backgroundImage: "none",
          border: "1px solid hsla(220, 20%, 25%, 0.6)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid hsla(220, 20%, 25%, 0.6)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "hsl(220, 14%, 10%)",
          border: "none",
          borderRight: "1px solid hsla(220, 20%, 25%, 0.6)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "hsl(220, 14%, 10%)",
          backgroundImage: "none",
          borderBottom: "1px solid hsla(220, 20%, 25%, 0.6)",
          boxShadow: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 6 },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
    MuiTextField: {
      defaultProps: { size: "small" },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&.Mui-selected": {
            backgroundColor: alpha("#1976d2", 0.2),
            "&:hover": { backgroundColor: alpha("#1976d2", 0.25) },
          },
        },
      },
    },
  },
});
