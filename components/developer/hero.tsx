"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Particle component
function FloatingParticle({
  delay = 0,
  duration = 4,
  className = "",
  index = 0,
}) {
  const [isClient, setIsClient] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  // Create deterministic "random" values using index
  const seedX1 = ((index * 47) % 100) / 100;
  const seedY1 = ((index * 83) % 100) / 100;
  const seedX2 = ((index * 127) % 100) / 100;
  const seedY2 = ((index * 173) % 100) / 100;
  const seedDuration = ((index * 23) % 20) / 10;

  useEffect(() => {
    setIsClient(true);
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (!isClient) {
    return (
      <div
        className={`absolute rounded-full ${className}`}
        style={{ opacity: 0 }}
      />
    );
  }

  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      initial={{
        x: seedX1 * dimensions.width,
        y: seedY1 * dimensions.height,
        opacity: 0.3,
      }}
      animate={{
        x: seedX2 * dimensions.width,
        y: seedY2 * dimensions.height,
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: duration + seedDuration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
}

// Typewriter effect component
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, delay + 100);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 inline-block h-8 w-0.5 bg-primary align-middle"
      />
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle
            key={i}
            index={i}
            delay={i * 0.2}
            duration={3 + (i % 5) * 0.3}
            className={`h-2 w-2 ${
              i % 3 === 0
                ? "bg-primary/30"
                : i % 3 === 1
                  ? "bg-blue-500/30"
                  : "bg-purple-500/30"
            }`}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <FloatingParticle
            key={`large-${i}`}
            index={i + 20}
            delay={i * 0.5}
            duration={5 + (i % 3) * 0.2}
            className={`h-4 w-4 ${
              i % 2 === 0
                ? "bg-gradient-to-r from-primary/20 to-blue-500/20"
                : "bg-gradient-to-r from-purple-500/20 to-pink-500/20"
            }`}
          />
        ))}
      </div>

      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{ y, opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            background: [
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)",
              "linear-gradient(45deg, rgba(99, 102, 241, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)",
              "linear-gradient(45deg, rgba(37, 99, 235, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
            ],
          }}
          transition={{ 
            opacity: { duration: 0.8, ease: "easeOut" },
            background: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
          }}
        />
        <motion.div 
          className="bg-grid-pattern absolute inset-0 opacity-[0.1] dark:opacity-[0.2]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center px-4 text-center">
        <motion.h1
          className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.span
            className="block"
            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
            transition={{ duration: 0.3 }}
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Mun
            </span>
          </motion.span>
          <motion.span
            className="mt-2 block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {isInView && (
              <TypewriterText text="Frontend Developer" delay={100} />
            )}
          </motion.span>
        </motion.h1>

        <motion.p
          className="mb-8 max-w-2xl text-lg text-foreground/80 md:text-xl"
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8, delay: 2, type: "spring" }}
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="bg-gradient-to-r from-foreground/80 via-primary to-foreground/80 bg-[length:200%_100%] bg-clip-text text-transparent"
          >
            I build exceptional and accessible digital experiences for the web.
          </motion.span>
        </motion.p>

        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: 2.5,
            type: "spring",
            stiffness: 200,
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden"
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
                  className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">View My Work</span>
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="group relative overflow-hidden border-2"
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
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10">Contact Me</span>
              </a>
            </Button>
          </motion.div>
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

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <motion.div
            className="flex h-12 w-8 justify-center rounded-full border-2 border-primary/50"
            whileHover={{ scale: 1.2, borderColor: "rgb(var(--primary))" }}
          >
            <motion.div
              className="mt-2 h-3 w-1 rounded-full bg-primary"
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowDown className="h-4 w-4 text-primary/70" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
