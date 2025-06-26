"use client"

import { useAtom } from "jotai"
import { motion, AnimatePresence } from "framer-motion"
import { portfolioModeAtom } from "@/lib/atoms"

interface PortfolioContentContainerProps {
  developerContent: React.ReactNode
  designerContent: React.ReactNode
}

export function PortfolioContentContainer({
  developerContent,
  designerContent,
}: PortfolioContentContainerProps) {
  const [mode] = useAtom(portfolioModeAtom)

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ x: mode === "developer" ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: mode === "developer" ? -100 : 100, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            opacity: { duration: 0.2 }
          }}
          className="w-full"
        >
          {mode === "developer" ? developerContent : designerContent}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}