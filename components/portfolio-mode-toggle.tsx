"use client";

import { usePortfolioMode } from "@/lib/use-portfolio-mode";
import { useTranslation } from "@/lib/use-translation";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

export function PortfolioModeToggle() {
  const { portfolioMode: mode, setPortfolioMode: setMode } = usePortfolioMode();
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const { t, language } = useTranslation();

  // Only show on home page
  if (pathname !== "/") {
    return null;
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const xPosition = useMemo(() => {
    if (mode === "developer") {
      return 2;
    }
    return language === "ja" ? 125 : 119;
  }, [mode, language]);

  const buttonWidth = useMemo(() => {
    if (mode === "developer") {
      return language === "ja" ? 125 : 119;
    }
    return language === "ja" ? 112 : 107;
  }, [mode, language]);

  return (
    <div className="fixed bottom-4 left-1/2 top-auto z-[100] -translate-x-1/2 md:bottom-auto md:top-4">
      <motion.div
        initial={{ y: -100, opacity: 0, scale: 0.8, rotateX: -90 }}
        animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.2,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="rounded-2xl border border-border/50 bg-background/90 p-1.5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:shadow-primary/20"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0"
          animate={{
            opacity: isHovered ? 0.1 : 0,
            background: [
              "linear-gradient(45deg, #3b82f6, #8b5cf6)",
              "linear-gradient(45deg, #8b5cf6, #ec4899)",
              "linear-gradient(45deg, #ec4899, #3b82f6)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <div className="relative flex items-center">
          {/* Enhanced Background slider with multiple effects */}
          <motion.div
            className="h-12 overflow-hidden rounded-xl"
            initial={false}
            animate={{
              x: xPosition,
              width: buttonWidth,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              mass: 0.8,
            }}
            style={{
              position: "absolute",
              zIndex: 0,
            }}
          >
            {/* Primary gradient background */}
            <div
              className="h-full w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary via-blue-500 to-purple-500"
              style={{
                backgroundSize: "200% 100%",
                animation: "gradientShift 4s ease-in-out infinite",
              }}
            >
              {/* Shimmer effect */}
              <div
                className="h-full w-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                  animation: "shimmer 1.5s linear infinite",
                }}
              />

              {/* Pulse effect overlay */}
              <div
                className="h-full w-full rounded-xl bg-white/20"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  animation: "pulseGlow 2s ease-in-out infinite",
                }}
              />
            </div>
          </motion.div>

          {/* Developer button with enhanced effects */}
          <motion.button
            onClick={() => setMode("developer")}
            whileTap={{
              scale: 0.95,
            }}
            transition={{ duration: 0.2 }}
            className={`relative z-10 rounded-xl px-7 py-3 text-sm font-bold transition-all duration-300 ${
              mode === "developer"
                ? "text-white shadow-lg"
                : "text-foreground/60 hover:text-foreground/90"
            }`}
          >
            <motion.span
              animate={
                mode === "developer"
                  ? {
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 5px rgba(255,255,255,0.8)",
                        "0 0 0px rgba(255,255,255,0)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {t("common.developer")}
            </motion.span>
          </motion.button>

          {/* Designer button with enhanced effects */}
          <motion.button
            onClick={() => setMode("designer")}
            whileTap={{
              scale: 0.95,
            }}
            transition={{ duration: 0.2 }}
            className={`relative z-10 rounded-xl px-[22px] py-3 text-sm font-bold transition-all duration-300 ${
              mode === "designer"
                ? "text-white shadow-lg"
                : "text-foreground/60 hover:text-foreground/90"
            }`}
          >
            <motion.span
              animate={
                mode === "designer"
                  ? {
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0)",
                        "0 0 5px rgba(255,255,255,0.8)",
                        "0 0 0px rgba(255,255,255,0)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {t("common.designer")}
            </motion.span>
          </motion.button>
        </div>

        {/* Enhanced glow effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0"
          animate={{
            opacity: isHovered ? 0.6 : 0,
            boxShadow: isHovered
              ? "0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.2)"
              : "0 0 0px rgba(59, 130, 246, 0)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* CSS animations for effects */}
      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(100%) skewX(-12deg);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
