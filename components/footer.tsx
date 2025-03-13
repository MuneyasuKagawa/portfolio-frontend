"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <Link href="/" className="text-xl font-bold">
              Mun's<span className="text-primary">Portfolio</span>
            </Link>
            <p className="mt-2 text-foreground/70">
              Building exceptional digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex gap-4 md:mt-0"
          >
            <a
              href="https://www.linkedin.com/in/muneyasu-kagawa/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-background/80 p-2 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <FiLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-background/80 p-2 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <FaXTwitter className="h-5 w-5" />
              <span className="sr-only">X</span>
            </a>
            <a
              href="mailto:muneyasu.kagawa@gmail.com"
              className="rounded-full bg-background/80 p-2 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 border-t border-border pt-8 text-center text-sm text-foreground/60"
        >
          © {currentYear} Muneyasu Kagawa. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
