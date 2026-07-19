import {
  Stack,
  Typography,
  Box,
  Breadcrumbs,
  Link,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import type { Location } from "../types/weather";

interface HeaderProps {
  location: Location | null;
}

export default function Header({ location }: HeaderProps) {
  const locationName = location?.label.split(",")[0] ?? null;

  const formattedDate = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <Stack
      sx={{
        width: "100%",
      }}
      spacing={4}
    >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        sx={{
          "& .MuiBreadcrumbs-separator": {
            color: "text.secondary",
          },
        }}
      >
        <Link
          href="#"
          underline="hover"
          color="text.secondary"
          variant="body2"
        >
          Dashboard
        </Link>

        <Typography
          color="text.secondary"
          variant="body2"
        >
          Home
        </Typography>

        {locationName && (
          <Typography
            color="text.primary"
            variant="body2"
          >
            {locationName}
          </Typography>
        )}
      </Breadcrumbs>

      <Stack
        spacing={1}
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
          {locationName
            ? `${locationName} Weather`
            : "Weather Dashboard"}
        </Typography>

        <Box>
          <Typography
            variant="caption"
            color="text.secondary"
          >
            {formattedDate}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}