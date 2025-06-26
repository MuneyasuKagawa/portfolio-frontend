import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { PortfolioContentContainer } from "@/components/portfolio-content-container";

export default function Home() {
  const developerContent = (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );

  const designerContent = (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-center">Designer Portfolio Coming Soon</h1>
    </div>
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PortfolioContentContainer
        developerContent={developerContent}
        designerContent={designerContent}
      />
      <Footer />
    </main>
  );
}
