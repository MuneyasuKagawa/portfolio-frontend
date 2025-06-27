"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { FileText } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useTranslation } from "@/lib/use-translation";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-12 md:flex-row"
        >
          <motion.div
            className="md:w-1/2"
            initial={{ x: -50 }}
            animate={isInView ? { x: 0 } : { x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              {t("about.title")}
            </h2>
            <div className="space-y-4 text-foreground/80">
              <p>{t("about.developer_intro")}</p>
              <p>{t("about.developer_fullstack")}</p>
              <p>{t("about.developer_personal")}</p>
            </div>
            <div className="mt-8 flex justify-center">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="bg-neutral-500 hover:cursor-default hover:bg-neutral-500">
                      {/* <a
                  href="/resume_developer.pdf"
                  target="_blank"
                  download
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </a> */}
                      <FileText className="mr-2 h-4 w-4" />
                      {t("common.download_resume")}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-black text-white dark:bg-white dark:text-black">
                    <p>{t("common.coming_soon")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </motion.div>

          <motion.div
            className="relative md:w-1/2"
            initial={{ x: 50 }}
            animate={isInView ? { x: 0 } : { x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rotate-3 transform rounded-2xl bg-neutral-300"></div>
              <div className="absolute inset-0 overflow-hidden rounded-2xl border border-primary/20 bg-background">
                <Image
                  src="/profile.webp"
                  alt="Muneyasu Kagawa"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
