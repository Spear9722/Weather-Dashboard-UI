import React from "react";
import { Box, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function EmptyState(): React.ReactElement {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 400, gap: 2 }}>
      <WbSunnyIcon sx={{ fontSize: 64, color: "text.secondary", opacity: 0.4 }} />
      <Typography variant="h6" sx={{ color: "text.secondary" }}>
        Search for a city to see live weather
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        Use the search bar above or click the location button
      </Typography>
    </Box>
  );
}
