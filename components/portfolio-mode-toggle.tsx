"use client"

import { useAtom } from "jotai"
import { motion } from "framer-motion"
import { portfolioModeAtom } from "@/lib/atoms"

export function PortfolioModeToggle() {
  const [mode, setMode] = useAtom(portfolioModeAtom)

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-background/80 backdrop-blur-md border border-border rounded-full shadow-lg p-1"
      >
        <div className="relative flex items-center">
          {/* Background slider */}
          <motion.div
            className="absolute h-10 bg-primary rounded-full"
            initial={false}
            animate={{
              x: mode === "developer" ? 0 : 120,
              width: mode === "developer" ? 115 : 100,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          {/* Developer button */}
          <button
            onClick={() => setMode("developer")}
            className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              mode === "developer" 
                ? "text-primary-foreground" 
                : "text-foreground/60 hover:text-foreground/80"
            }`}
          >
            Developer
          </button>
          
          {/* Designer button */}
          <button
            onClick={() => setMode("designer")}
            className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              mode === "designer" 
                ? "text-primary-foreground" 
                : "text-foreground/60 hover:text-foreground/80"
            }`}
          >
            Designer
          </button>
        </div>
      </motion.div>
    </div>
  )
}