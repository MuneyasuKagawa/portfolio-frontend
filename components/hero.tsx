"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <Header />

      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background/80" />
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.1] dark:opacity-[0.2]" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center px-4 text-center">
        <motion.h1
          className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="block">
            Hi, I'm <span className="text-primary">Mun</span>
          </span>
          <span className="mt-2 block">Frontend Developer</span>
        </motion.h1>

        <motion.p
          className="mb-8 max-w-2xl text-lg text-foreground/80 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build exceptional and accessible digital experiences for the web.
        </motion.p>

        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </a>
          </Button>
        </motion.div>
        {/* 
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/muneyasu-kagawa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:muneyasu.kagawa@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </motion.div> */}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
