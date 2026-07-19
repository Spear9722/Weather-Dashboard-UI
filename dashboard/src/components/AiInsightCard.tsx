import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import AutoAwesomeIcon  from "@mui/icons-material/AutoAwesome";
import LightbulbIcon    from "@mui/icons-material/Lightbulb";
import CheckCircleIcon  from "@mui/icons-material/CheckCircle";
import { FORT_WORTH_AI_INSIGHT } from "../mocks/aiInsight";

/**
 * AiInsightCard — displays an AI-generated weather summary.
 *
 * Currently renders static mock data from mocks/aiInsight.ts.
 *
 * TODO: replace FORT_WORTH_AI_INSIGHT with a fetch to the FastAPI
 * /api/ai-insight endpoint once the LLM integration is in place.
 * The card's props interface is already shaped to accept a real AiInsight
 * object, so no JSX changes will be needed at swap-out time.
 */
export default function AiInsightCard(): React.ReactElement {
  const insight = FORT_WORTH_AI_INSIGHT;
  const formattedTime = new Date(insight.generatedAt).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        borderColor: "primary.main",
        position: "relative",
        overflow: "hidden",
        // subtle glow along the top edge to distinguish this card
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          bgcolor: "primary.main",
          opacity: 0.9,
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>

        {/* Header */}
        <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: 1.5,
                bgcolor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "primary.contrastText",
                flexShrink: 0,
              }}
            >
              <AutoAwesomeIcon sx={{ fontSize: 18 }} />
            </Box>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600, color: "text.primary", lineHeight: 1 }}>
                AI Weather Insight
              </Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                Generated at {formattedTime} · Mock data
              </Typography>
            </Box>
          </Stack>
          <Chip
            label="Coming soon"
            size="small"
            variant="outlined"
            sx={{ fontSize: 11, borderColor: "primary.main", color: "primary.main" }}
          />
        </Stack>

        {/* Summary */}
        <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.8, mb: 2.5 }}>
          {insight.summary}
        </Typography>

        <Divider sx={{ mb: 2.5 }} />

        {/* Highlights */}
        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "6px", mb: 1.5 }}>
          <LightbulbIcon sx={{ fontSize: 15, color: "warning.main" }} />
          <Typography variant="overline" sx={{ color: "warning.main", lineHeight: 1 }}>
            Key highlights
          </Typography>
        </Stack>
        <Stack spacing={1} sx={{ mb: 2.5 }}>
          {insight.highlights.map((h) => (
            <Stack key={h} sx={{ flexDirection: "row", gap: "8px", alignItems: "flex-start" }}>
              <CheckCircleIcon sx={{ fontSize: 15, color: "primary.main", mt: "2px", flexShrink: 0 }} />
              <Typography variant="body2" sx={{ color: "text.secondary", fontSize: 13 }}>
                {h}
              </Typography>
            </Stack>
          ))}
        </Stack>

        <Divider sx={{ mb: 2 }} />

        {/* Recommendation */}
        <Box
          sx={{
            p: 1.75,
            borderRadius: 1.5,
            bgcolor: "rgba(25, 118, 210, 0.06)",
            border: "1px solid",
            borderColor: "rgba(25, 118, 210, 0.2)",
          }}
        >
          <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 600, display: "block", mb: 0.5 }}>
            Recommendation
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", fontSize: 13, lineHeight: 1.7 }}>
            {insight.recommendation}
          </Typography>
        </Box>

      </CardContent>
    </Card>
  );
}
