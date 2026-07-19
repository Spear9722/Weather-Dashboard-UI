import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function ConnectingState(): React.ReactElement {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 400, gap: 2 }}>
      <CircularProgress size={32} />
      <Typography sx={{ color: "text.secondary" }}>
        Connecting to weather service…
      </Typography>
    </Box>
  );
}
