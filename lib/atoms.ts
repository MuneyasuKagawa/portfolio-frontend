import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export type PortfolioMode = "developer" | "designer"
export type Theme = "light" | "dark" | "system"

export const portfolioModeAtom = atomWithStorage<PortfolioMode>("portfolioMode", "developer")
export const themeAtom = atomWithStorage<Theme>("theme", "system")