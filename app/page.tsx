import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { PortfolioContentWrapper } from "@/components/portfolio-content-wrapper";

// Developer components
import DeveloperHero from "@/components/developer/hero";
import DeveloperAbout from "@/components/developer/about";
import DeveloperProjects from "@/components/developer/projects";
import DeveloperSkills from "@/components/developer/skills";

// Designer components
import DesignerHero from "@/components/designer/hero";
import DesignerAbout from "@/components/designer/about";
import DesignerProjects from "@/components/designer/projects";
import DesignerSkills from "@/components/designer/skills";

export default function Home() {
  const developerContent = (
    <>
      <DeveloperHero />
      <DeveloperAbout />
      <DeveloperProjects />
      <DeveloperSkills />
      <Contact />
    </>
  );

  const designerContent = (
    <>
      <DesignerHero />
      <DesignerAbout />
      <DesignerProjects />
      <DesignerSkills />
      <Contact />
    </>
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <PortfolioContentWrapper
        developerContent={developerContent}
        designerContent={designerContent}
      />
      <Footer />
    </main>
  );
}
