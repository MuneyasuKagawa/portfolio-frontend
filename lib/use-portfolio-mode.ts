"use client";

import { useAtom } from "jotai";
import { useEffect, useCallback, useState } from "react";
import { portfolioModeAtom, type PortfolioMode } from "./atoms";

export function usePortfolioMode() {
  const [portfolioMode, setPortfolioModeAtom] = useAtom(portfolioModeAtom);
  const [isClient, setIsClient] = useState(false);

  // クライアントサイドでのみ実行
  useEffect(() => {
    setIsClient(true);
  }, []);

  // クエリパラメータから初期モードを設定（クライアントサイドのみ）
  useEffect(() => {
    if (!isClient) return;

    const urlParams = new URLSearchParams(window.location.search);
    const wantParam = urlParams.get("want");

    if (wantParam === "developer" || wantParam === "designer") {
      if (portfolioMode !== wantParam) {
        setPortfolioModeAtom(wantParam);
      }
    }
  }, [portfolioMode, setPortfolioModeAtom, isClient]);

  // ポートフォリオモードを変更し、URLも更新
  const setPortfolioMode = useCallback(
    (mode: PortfolioMode) => {
      setPortfolioModeAtom(mode);

      if (!isClient) return;

      // URLクエリパラメータを更新
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("want", mode);

      // 現在のページパスを維持しながらクエリパラメータのみ更新
      const currentPath = window.location.pathname;
      const newUrl = `${currentPath}?${urlParams.toString()}`;

      // ブラウザの履歴を更新（router.replaceの代わり）
      window.history.replaceState({}, "", newUrl);
    },
    [setPortfolioModeAtom, isClient]
  );

  return {
    portfolioMode,
    setPortfolioMode,
  };
}
