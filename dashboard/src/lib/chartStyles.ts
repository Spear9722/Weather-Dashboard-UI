import type { SxProps } from "@mui/material";

/**
 * Shared sx prop for MUI X-Charts that tones down axis chrome
 * to match the dark dashboard theme.
 */
export const chartAxisSx: SxProps = {
  ".MuiChartsAxis-tickLabel": { fill: "rgba(255,255,255,0.6)", fontSize: 11 },
  ".MuiChartsAxis-line":      { stroke: "rgba(255,255,255,0.15)" },
  ".MuiChartsAxis-tick":      { stroke: "rgba(255,255,255,0.15)" },
};

/** Additional overrides for line chart strokes. */
export const lineChartSx: SxProps = {
  ...chartAxisSx,
  ".MuiLineElement-root": { strokeWidth: 2 },
};
