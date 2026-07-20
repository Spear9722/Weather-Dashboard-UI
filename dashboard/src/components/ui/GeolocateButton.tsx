import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import type { Location } from "../../types/weather";

interface GeolocateButtonProps {
  onSuccess: (loc: Location) => void;
}

/**
 * GeolocateButton — "Use my location" button.
 *
 * MOCK MODE: bypasses navigator.geolocation entirely and returns the
 * Fort Worth, TX coordinates so the label resolves correctly and
 * useMockWeather picks up the right payload.
 *
 * TODO: when the backend is ready, delete the mock block and uncomment
 * the real geolocation call below.
 */
export default function GeolocateButton({ onSuccess }: GeolocateButtonProps): React.ReactElement {
  function handleClick() {
    // ── MOCK ──────────────────────────────────────────────────────────
    onSuccess({
      label: "Fort Worth, Texas, United States",
      latitude: 32.7555,
      longitude: -97.3308,
    });

    // ── LIVE (uncomment when backend is running) ───────────────────────
    // if (!navigator.geolocation) return;
    // navigator.geolocation.getCurrentPosition((pos) => {
    //   onSuccess({
    //     label: "My location",
    //     latitude: pos.coords.latitude,
    //     longitude: pos.coords.longitude,
    //   });
    // });
  }

  return (
    <Tooltip title="Use my location">
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ border: "1px solid", borderColor: "divider" }}
      >
        <MyLocationIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}
