import type { ConnectionState } from "../types/weather";

export const CONNECTION_COLOR: Record<
  ConnectionState,
  "success" | "warning" | "error" | "default"
> = {
  open: "success",
  connecting: "warning",
  reconnecting: "warning",
  idle: "default",
  closed: "error",
};

export const CONNECTION_LABEL: Record<ConnectionState, string> = {
  open: "Live",
  connecting: "Connecting…",
  reconnecting: "Reconnecting…",
  idle: "No location",
  closed: "Disconnected",
};
