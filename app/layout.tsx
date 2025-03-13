import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mun's Portfolio",
  description:
    "Muneyasu's portfolio website showcasing projects, skills, and contact information.",
  generator: "muneyasu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
