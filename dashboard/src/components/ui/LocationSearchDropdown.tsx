import { useState } from "react";
import {
  Box,
  ClickAwayListener,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// TODO: swap these two lines when the FastAPI backend is running
import { useMockLocationSearch as useLocationSearch } from "../../hooks/useMockLocationSearch";
// import { useLocationSearch } from "../../hooks/useLocationSearch";

import type { GeocodeResult, Location } from "../../types/weather";

interface LocationSearchDropdownProps {
  onSelect: (loc: Location) => void;
}

function buildLabel(r: GeocodeResult): string {
  return [r.name, r.admin1, r.country].filter(Boolean).join(", ");
}

export default function LocationSearchDropdown({
  onSelect,
}: LocationSearchDropdownProps): React.JSX.Element {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const { results, loading } = useLocationSearch(query);

  function handleSelect(r: GeocodeResult): void {
    const label = buildLabel(r);

    onSelect({
      label,
      latitude: r.latitude,
      longitude: r.longitude,
    });

    setQuery("");
    setOpen(false);
  }

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 380,
        }}
      >
        <TextField
          fullWidth
          placeholder="Search city…"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    fontSize="small"
                    sx={{ color: "text.secondary" }}
                  />
                </InputAdornment>
              ),
              sx: {
                bgcolor: "background.paper",
                borderRadius: 2,
                fontSize: 14,
              },
            },
          }}
        />

        {open && query.trim().length >= 2 && (
          <Paper
            variant="outlined"
            sx={{
              position: "absolute",
              top: "calc(100% + 4px)",
              left: 0,
              right: 0,
              zIndex: 1300,
              maxHeight: 260,
              overflowY: "auto",
            }}
          >
            {loading && (
              <Typography
                sx={{
                  px: 2,
                  py: 1.5,
                  fontSize: 13,
                  color: "text.secondary",
                }}
              >
                Searching…
              </Typography>
            )}

            {!loading && results.length === 0 && (
              <Typography
                sx={{
                  px: 2,
                  py: 1.5,
                  fontSize: 13,
                  color: "text.secondary",
                }}
              >
                No results
              </Typography>
            )}

            <List dense disablePadding>
              {results.map((r) => (
                <ListItemButton
                  key={`${r.latitude}-${r.longitude}`}
                  onClick={() => handleSelect(r)}
                >
                  <ListItemText
                    primary={r.name}
                    secondary={[r.admin1, r.country]
                      .filter(Boolean)
                      .join(", ")}
                    slotProps={{
                      primary: {
                        sx: {
                          fontSize: 14,
                          fontWeight: 500,
                        },
                      },
                      secondary: {
                        sx: {
                          fontSize: 12,
                          color: "text.secondary",
                        },
                      },
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        )}
      </Box>
    </ClickAwayListener>
  );
}
