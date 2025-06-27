"use client";

import dynamic from "next/dynamic";

interface PortfolioContentWrapperProps {
  developerContent: React.ReactNode;
  designerContent: React.ReactNode;
}

function PortfolioContentLoading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
    </div>
  );
}

// Dynamic import for client-side only rendering
const PortfolioContentContainer = dynamic(
  () => import("./portfolio-content-container").then(mod => ({ default: mod.PortfolioContentContainer })),
  { 
    ssr: false,
    loading: () => <PortfolioContentLoading />
  }
);

export function PortfolioContentWrapper({
  developerContent,
  designerContent,
}: PortfolioContentWrapperProps) {
  return (
    <PortfolioContentContainer
      developerContent={developerContent}
      designerContent={designerContent}
    />
  );
}