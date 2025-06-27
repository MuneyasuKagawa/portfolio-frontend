"use client";

import { portfolioModeAtom } from "@/lib/atoms";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function PortfolioModeToggle() {
  const [mode, setMode] = useAtom(portfolioModeAtom);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  // Only show on home page
  if (pathname !== "/") {
    return null;
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="fixed left-1/2 top-4 z-[100] -translate-x-1/2">
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
        whileHover={{
          scale: 1.05,
          y: -2,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        }}
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

        {/* Floating particles */}
        {isHovered && (
          <div className="pointer-events-none absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-primary/60"
                initial={{
                  x: `${50 + ((i * 15) % 100)}%`,
                  y: `${50}%`,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  x: `${50 + ((i * 15) % 100) + Math.sin(i) * 20}%`,
                  y: [`${50}%`, `${30 + ((i * 10) % 40)}%`, `${50}%`],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}

        <div className="relative flex items-center">
          {/* Enhanced Background slider with multiple effects */}
          <motion.div
            className="absolute h-12 overflow-hidden rounded-xl"
            initial={false}
            animate={{
              x: mode === "developer" ? 2 : 123,
              width: mode === "developer" ? 119 : 107,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              mass: 0.8,
            }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Primary gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              style={{ backgroundSize: "200% 100%" }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />

            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-white/20"
              animate={{
                opacity: [0, 0.3, 0],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Developer button with enhanced effects */}
          <motion.button
            onClick={() => setMode("developer")}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{ duration: 0.2 }}
            className={`relative z-10 rounded-xl px-7 py-3 text-sm font-bold transition-all duration-300 ${
              mode === "developer"
                ? "text-white shadow-lg"
                : "text-foreground/60 hover:scale-105 hover:text-foreground/90"
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
              Developer
            </motion.span>
          </motion.button>

          {/* Designer button with enhanced effects */}
          <motion.button
            onClick={() => setMode("designer")}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{ duration: 0.2 }}
            className={`relative z-10 rounded-xl px-[22px] py-3 text-sm font-bold transition-all duration-300 ${
              mode === "designer"
                ? "text-white shadow-lg"
                : "text-foreground/60 hover:scale-105 hover:text-foreground/90"
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
              Designer
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
    </div>
  );
}
