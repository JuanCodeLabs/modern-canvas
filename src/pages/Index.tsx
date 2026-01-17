import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TechMarquee } from "@/components/TechMarquee";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection, ContactModal } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      
      <main>
        <HeroSection />
        <TechMarquee />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
