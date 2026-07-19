import React from "react";
import {
  Card,
  CardContent,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  Chip,
} from "@mui/material";
import CheckCircleIcon   from "@mui/icons-material/CheckCircle";
import { useWeather }    from "../context/WeatherContext";
import type { AppSettings, TemperatureUnit, UpdateInterval, WindUnit } from "../types/settings";

// ── sub-components ─────────────────────────────────────────────────────────

interface SettingsSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function SettingsSection({ title, description, children }: SettingsSectionProps): React.ReactElement {
  return (
    <Card variant="outlined">
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2.5 }}>
          {description}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
}

// ── view ───────────────────────────────────────────────────────────────────

export default function SettingsView(): React.ReactElement {
  const { settings, updateSettings } = useWeather();

  function handleChange<K extends keyof AppSettings>(key: K) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      // UpdateInterval values are numbers
      const value = key === "updateInterval" ? (Number(raw) as UpdateInterval) : raw;
      updateSettings({ [key]: value } as Pick<AppSettings, K>);
    };
  }

  return (
    <Container maxWidth="sm" sx={{ pt: { xs: 10, md: 3 }, pb: 6 }}>
      <Stack spacing={0.5} sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Settings
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Preferences are saved for this session.
        </Typography>
      </Stack>

      <Stack spacing={3}>
        {/* Temperature unit */}
        <SettingsSection title="Temperature" description="Choose the unit displayed across all views.">
          <FormControl>
            <FormLabel sx={{ fontSize: 13, color: "text.secondary", mb: 1 }}>Unit</FormLabel>
            <RadioGroup
              value={settings.temperatureUnit}
              onChange={handleChange("temperatureUnit")}
              row
            >
              {(["celsius", "fahrenheit"] as TemperatureUnit[]).map((u) => (
                <FormControlLabel
                  key={u}
                  value={u}
                  label={u === "celsius" ? "Celsius (°C)" : "Fahrenheit (°F)"}
                  control={<Radio size="small" />}
                  sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </SettingsSection>

        {/* Wind unit */}
        <SettingsSection title="Wind speed" description="Unit for wind speed readings.">
          <FormControl>
            <FormLabel sx={{ fontSize: 13, color: "text.secondary", mb: 1 }}>Unit</FormLabel>
            <RadioGroup
              value={settings.windUnit}
              onChange={handleChange("windUnit")}
              row
            >
              {(["kmh", "mph"] as WindUnit[]).map((u) => (
                <FormControlLabel
                  key={u}
                  value={u}
                  label={u === "kmh" ? "km/h" : "mph"}
                  control={<Radio size="small" />}
                  sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </SettingsSection>

        {/* Update interval */}
        <SettingsSection title="Live update interval" description="How often the dashboard polls for new weather data.">
          <FormControl>
            <FormLabel sx={{ fontSize: 13, color: "text.secondary", mb: 1 }}>Interval</FormLabel>
            <RadioGroup
              value={String(settings.updateInterval)}
              onChange={handleChange("updateInterval")}
            >
              {([30, 60, 120, 300] as UpdateInterval[]).map((s) => (
                <FormControlLabel
                  key={s}
                  value={String(s)}
                  label={
                    s < 60
                      ? `${s} seconds`
                      : s === 60
                      ? "1 minute (default)"
                      : s === 120
                      ? "2 minutes"
                      : "5 minutes"
                  }
                  control={<Radio size="small" />}
                  sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 } }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </SettingsSection>

        <Divider />

        {/* Active summary */}
        <Stack spacing={1}>
          <Typography variant="overline" sx={{ color: "primary.main" }}>
            Active configuration
          </Typography>
          <Stack sx={{ flexDirection: "row", flexWrap: "wrap", gap: "8px" }}>
            <Chip
              icon={<CheckCircleIcon sx={{ fontSize: "14px !important" }} />}
              label={settings.temperatureUnit === "celsius" ? "°C" : "°F"}
              size="small"
              color="primary"
              variant="outlined"
            />
            <Chip
              icon={<CheckCircleIcon sx={{ fontSize: "14px !important" }} />}
              label={settings.windUnit}
              size="small"
              color="primary"
              variant="outlined"
            />
            <Chip
              icon={<CheckCircleIcon sx={{ fontSize: "14px !important" }} />}
              label={`every ${settings.updateInterval}s`}
              size="small"
              color="primary"
              variant="outlined"
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
