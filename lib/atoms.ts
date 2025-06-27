import { atomWithStorage } from "jotai/utils";

export type PortfolioMode = "developer" | "designer";
export type Theme = "light" | "dark" | "system";
export type Language = "en" | "ja";

export const portfolioModeAtom = atomWithStorage<PortfolioMode>(
  "portfolioMode",
  "developer"
);
export const themeAtom = atomWithStorage<Theme>("theme", "light");
export const languageAtom = atomWithStorage<Language>("language", "en");
