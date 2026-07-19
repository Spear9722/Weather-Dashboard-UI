import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import type { Location } from "../../types/weather";

interface GeolocateButtonProps {
  onSuccess: (loc: Location) => void;
}

export default function GeolocateButton({ onSuccess }: GeolocateButtonProps): React.ReactElement {
  function handleClick() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      onSuccess({
        label: "My location",
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }

  return (
    <Tooltip title="Use my location">
      <IconButton onClick={handleClick} size="small" sx={{ border: "1px solid", borderColor: "divider" }}>
        <MyLocationIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}
