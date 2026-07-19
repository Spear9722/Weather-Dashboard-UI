import React from "react";
import { Chip } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { CONNECTION_COLOR, CONNECTION_LABEL } from "../../constants/connectionStatus";
import { formatElapsed } from "../../lib/formatDate";
import { useTick } from "../../hooks/useTick";
import type { ConnectionState } from "../../types/weather";

interface ConnectionStatusChipProps {
  connectionState: ConnectionState;
  lastUpdatedAt: number | null;
}

export default function ConnectionStatusChip({ connectionState, lastUpdatedAt }: ConnectionStatusChipProps): React.ReactElement {
  useTick();

  const label =
    connectionState === "open" && lastUpdatedAt
      ? `Updated ${formatElapsed(lastUpdatedAt)}`
      : CONNECTION_LABEL[connectionState];

  return (
    <Chip
      icon={<FiberManualRecordIcon sx={{ fontSize: "10px !important" }} />}
      label={label}
      color={CONNECTION_COLOR[connectionState]}
      size="small"
      variant="outlined"
      sx={{ fontSize: 12 }}
    />
  );
}
