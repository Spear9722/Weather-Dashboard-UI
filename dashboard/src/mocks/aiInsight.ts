/**
 * Static mock AI insight for Fort Worth, TX.
 *
 * TODO: Replace by calling the FastAPI /api/ai-insight endpoint once
 * the backend is wired to a free LLM (Gemini Flash / Groq).
 * The backend will receive the WeatherPayload, call the LLM, and return
 * a plain-text or markdown summary string.
 */
export interface AiInsight {
  summary: string;
  highlights: string[];
  recommendation: string;
  generatedAt: string;
}

export const FORT_WORTH_AI_INSIGHT: AiInsight = {
  summary:
    "Fort Worth is experiencing a classic mid-July Texas heat event. " +
    "Temperatures are running 3–4°C above the seasonal average, driven by a " +
    "strong high-pressure dome sitting over the Southern Plains. Expect peak " +
    "heat stress between 2–6 PM with feels-like temperatures above 42°C.",

  highlights: [
    "Heat index reaching 42°C — heat advisory conditions",
    "South winds at 18 km/h providing little relief",
    "Humidity at 34% — low for DFW, slightly easing discomfort",
    "Storm chance rises Tuesday–Wednesday as a cold front approaches",
    "Pressure at 1008 hPa — slight drop signalling incoming system",
  ],

  recommendation:
    "Limit outdoor activity to before 10 AM or after 7 PM today. " +
    "Stay hydrated and watch for the midweek rain event — conditions " +
    "look favourable for 15–25mm of rainfall, which will break the heat " +
    "and bring temperatures back closer to seasonal norms by Thursday.",

  generatedAt: new Date().toISOString(),
};
