import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PortfolioModeToggle } from "@/components/portfolio-mode-toggle";
import { Inter } from "next/font/google";
import { Provider } from "jotai";
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
        <Provider>
          <ThemeProvider defaultTheme="system" storageKey="theme">
            <PortfolioModeToggle />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
