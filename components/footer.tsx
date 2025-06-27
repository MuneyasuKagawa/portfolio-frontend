"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { useTranslation } from "@/lib/use-translation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

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
              Mun&apos;s<span className="text-primary">{t("footer.portfolio")}</span>
            </Link>
            <p className="mt-2 text-foreground/70">
              {t("footer.tagline")}
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
              <span className="sr-only">{t("footer.linkedin_label")}</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-background/80 p-2 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <FaXTwitter className="h-5 w-5" />
              <span className="sr-only">{t("footer.x_label")}</span>
            </a>
            <a
              href="mailto:muneyasu.kagawa@gmail.com"
              className="rounded-full bg-background/80 p-2 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">{t("footer.email_label")}</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 border-t border-border pt-8 text-center text-sm text-foreground/60"
        >
          <p className="mb-2">
            {t("footer.copyright").replace("{year}", currentYear.toString())}
          </p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Next.js
            </a>
            {" • "}
            <a
              href="https://github.com/MuneyasuKagawa/portfolio-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              View Source
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
