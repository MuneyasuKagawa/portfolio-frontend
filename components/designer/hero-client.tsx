"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "@/lib/use-translation";

// Simple static shapes for elegant background
function StaticShape({ className = "" }) {
  return <div className={`absolute ${className}`} style={{ opacity: 0.1 }} />;
}

// Simple text component
function SimpleText({ text }: { text: string }) {
  return <span>{text}</span>;
}

export default function DesignerHeroClient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const { t } = useTranslation();

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >

      {/* Elegant Background Shapes */}
      <div className="absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => (
          <StaticShape
            key={i}
            className={`${
              i % 4 === 0
                ? "left-10 top-20 h-32 w-32 rounded-full border border-primary/5 bg-gradient-to-br from-primary/5 to-transparent"
                : i % 4 === 1
                  ? "right-20 top-32 h-24 w-24 rounded-lg border border-purple-500/5 bg-gradient-to-tr from-purple-500/5 to-transparent"
                  : i % 4 === 2
                    ? "bottom-20 left-1/4 h-20 w-20 rounded-full border border-blue-500/5 bg-gradient-to-bl from-blue-500/5 to-transparent"
                    : "bottom-32 right-1/3 h-16 w-48 rounded-full border border-pink-500/5 bg-gradient-to-r from-pink-500/5 to-transparent"
            }`}
          />
        ))}
      </div>

      {/* Subtle Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(147, 51, 234, 0.02) 50%, rgba(236, 72, 153, 0.02) 100%)",
              "linear-gradient(135deg, rgba(147, 51, 234, 0.02) 0%, rgba(236, 72, 153, 0.02) 50%, rgba(59, 130, 246, 0.02) 100%)",
              "linear-gradient(135deg, rgba(236, 72, 153, 0.02) 0%, rgba(59, 130, 246, 0.02) 50%, rgba(147, 51, 234, 0.02) 100%)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)] opacity-[0.02]" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center px-4 text-center">
        <motion.h1
          className="mb-6 text-4xl font-light md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 80,
            damping: 20,
          }}
        >
          <motion.span
            className="block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {t("hero.greeting")}{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text font-medium text-transparent">
              Mun
            </span>
          </motion.span>
          <motion.span
            className="mt-3 block font-extralight"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <SimpleText text={t("hero.designer_role")} />
          </motion.span>
        </motion.h1>

        <motion.div
          className="mb-8 max-w-3xl text-lg leading-relaxed text-foreground/70 md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            delay: 2.5,
            type: "spring",
            stiffness: 60,
          }}
        >
          <motion.p
            className="mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              background:
                "linear-gradient(90deg, var(--foreground) 0%, var(--primary) 50%, var(--foreground) 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.8,
            }}
          >
            {t("hero.designer_description_1")}
          </motion.p>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.7 } : {}}
            transition={{ delay: 3, duration: 1 }}
          >
            {t("hero.designer_description_2")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.7 } : {}}
            transition={{ delay: 3.5, duration: 1 }}
          >
            {t("hero.designer_description_3")}
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 4,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/90 via-purple-500/90 to-pink-500/90"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <span className="relative z-10">{t("hero.view_work")}</span>
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Button
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-2 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">{t("hero.contact_me")}</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 4.5, duration: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-3"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <motion.div
            className="flex h-12 w-6 justify-center rounded-full border border-primary/30"
            whileHover={{
              scale: 1.1,
              borderColor: "rgb(var(--primary) / 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mt-2 h-3 w-1 rounded-full bg-primary/60"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                y: [0, 6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, y: 2 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowDown className="h-4 w-4 text-primary/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}