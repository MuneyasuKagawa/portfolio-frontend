import "@/app/globals.css";
import { PortfolioModeToggle } from "@/components/portfolio-mode-toggle";
import { StructuredData } from "@/components/structured-data";
import { ThemeProvider } from "@/components/theme-provider";
import { Provider } from "jotai";
import { Inter } from "next/font/google";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mun's Portfolio - Frontend Developer & UI/UX Designer",
  description:
    "Muneyasu Kagawa's portfolio showcasing frontend development projects and UI/UX design work. Built with Next.js, React, and modern web technologies.",
  keywords: [
    "Muneyasu Kagawa",
    "Frontend Developer",
    "UI/UX Designer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Development",
    "Japanese Developer",
  ],
  authors: [{ name: "Muneyasu Kagawa", url: "https://mun-k.com" }],
  creator: "Muneyasu Kagawa",
  publisher: "Muneyasu Kagawa",
  metadataBase: new URL("https://mun-k.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ja_JP",
    url: "https://mun-k.com",
    siteName: "Mun's Portfolio",
    title: "Mun's Portfolio - Frontend Developer & UI/UX Designer",
    description:
      "Muneyasu Kagawa's portfolio showcasing frontend development projects and UI/UX design work. Built with Next.js, React, and modern web technologies.",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Muneyasu Kagawa - Frontend Developer & UI/UX Designer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@m_kagawa_",
    creator: "@m_kagawa_",
    title: "Mun's Portfolio - Frontend Developer & UI/UX Designer",
    description:
      "Muneyasu Kagawa's portfolio showcasing frontend development projects and UI/UX design work.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Replace with actual verification code when available
  },
  category: "portfolio",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData type="person" />
        <StructuredData type="website" />
      </head>
      <body className={inter.className}>
        <Provider>
          <ThemeProvider defaultTheme="light" storageKey="theme">
            <PortfolioModeToggle />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
