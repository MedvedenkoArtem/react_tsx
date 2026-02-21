export const WEATHER_CODES = {
  SQ: "SQ",
  PO: "PO",
  FC: "FC",
  BR: "BR",
  HZ: "HZ",
  FU: "FU",
  DS: "DS",
  SS: "SS"
} as const;

export type WeatherCode =
  typeof WEATHER_CODES[keyof typeof WEATHER_CODES];