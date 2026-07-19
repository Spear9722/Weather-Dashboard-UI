import type React from "react";
import {
  Avatar,
  Box,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import type { Location } from "../../types/weather";

interface SideMenuFooterProps {
  location: Location | null;
}

export default function SideMenuFooter({
  location,
}: SideMenuFooterProps): React.JSX.Element {
  return (
    <Box
      sx={{
        mt: "auto",
        px: 2.5,
        pb: 3,
      }}
    >
      <Divider sx={{ mb: 2 }} />

    <Stack
    direction="row"
    spacing={1.5}
    sx={{
    alignItems: "center",
    }}
    >
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: "primary.main",
            fontSize: 13,
          }}
        >
          W
        </Avatar>

        <Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            {location
              ? location.label.split(",")[0]
              : "No location"}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
            }}
          >
            {location ? "Live data" : "Search above"}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}