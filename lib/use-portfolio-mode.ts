"use client";

import { useAtom } from "jotai";
import { useEffect, useCallback, useState } from "react";
import { portfolioModeAtom, type PortfolioMode } from "./atoms";

export function usePortfolioMode() {
  const [portfolioMode, setPortfolioModeAtom] = useAtom(portfolioModeAtom);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize from URL params only after mounting
  useEffect(() => {
    if (!mounted) return;

    const urlParams = new URLSearchParams(window.location.search);
    const wantParam = urlParams.get("want");

    if (wantParam === "developer" || wantParam === "designer") {
      if (portfolioMode !== wantParam) {
        setPortfolioModeAtom(wantParam);
      }
    }
  }, [mounted, portfolioMode, setPortfolioModeAtom]);

  const setPortfolioMode = useCallback(
    (mode: PortfolioMode) => {
      setPortfolioModeAtom(mode);

      if (!mounted) return;

      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("want", mode);

      const currentPath = window.location.pathname;
      const newUrl = `${currentPath}?${urlParams.toString()}`;

      window.history.replaceState({}, "", newUrl);
    },
    [setPortfolioModeAtom, mounted]
  );

  return {
    portfolioMode,
    setPortfolioMode,
  };
}
