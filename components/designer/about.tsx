"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { FileText, Lightbulb, Palette, Users } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useTranslation } from "@/lib/use-translation";

// Floating design elements
function DesignElement({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function DesignerAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="about" className="relative overflow-hidden bg-muted/30 py-20">
      {/* Subtle background design elements */}
      <DesignElement delay={0} className="left-10 top-20 text-primary/5">
        <Palette className="h-24 w-24" />
      </DesignElement>
      <DesignElement delay={1} className="right-20 top-32 text-purple-500/5">
        <Users className="h-32 w-32" />
      </DesignElement>
      <DesignElement delay={2} className="bottom-20 left-1/4 text-pink-500/5">
        <Lightbulb className="h-20 w-20" />
      </DesignElement>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-12 md:flex-row"
        >
          <motion.div
            className="md:w-1/2"
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.h2
              className="mb-6 text-3xl font-light md:text-4xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
{t("about.title")}
            </motion.h2>
            <div className="space-y-6 leading-relaxed text-foreground/75">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {t("about.designer_intro")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {t("about.designer_process")}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {t("about.designer_personal")}
              </motion.p>
            </div>
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    {/* <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button className="bg-gradient-to-r from-primary to-purple-500 shadow-lg transition-all duration-300 hover:cursor-default hover:from-primary/90 hover:to-purple-500/90 hover:shadow-xl">
                        <FileText className="mr-2 h-4 w-4" />
                        Download Resume
                      </Button>
                    </motion.div> */}
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button className="bg-neutral-500 hover:cursor-default hover:bg-neutral-500">
                        <FileText className="mr-2 h-4 w-4" />
                        {t("common.download_resume")}
                      </Button>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black text-white dark:bg-white dark:text-black">
                    <p>{t("common.coming_soon")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative md:w-1/2"
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative mx-auto aspect-square w-full max-w-md">
              {/* Floating design accent elements */}
              <motion.div
                className="absolute -left-4 -top-4 h-8 w-8 rounded-full border border-primary/30 bg-gradient-to-br from-primary/20 to-purple-500/20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 h-12 w-12 rounded-lg border border-purple-500/30 bg-gradient-to-tr from-purple-500/20 to-pink-500/20"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              {/* Main photo container with elegant hover effect */}
              <motion.div
                className="absolute inset-0 rotate-2 transform rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 backdrop-blur-sm"
                whileHover={{ rotate: 1, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 overflow-hidden rounded-2xl border border-primary/20 bg-background shadow-xl"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/profile.webp"
                  alt="Muneyasu Kagawa - UI/UX Designer"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Subtle overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
