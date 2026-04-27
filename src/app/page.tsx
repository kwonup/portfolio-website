import { PortfolioShell } from "@/components/layout/portfolio-shell";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects";

export default function Home() {
  return (
    <PortfolioShell>
      <AboutSection />
      <ExperienceSection />
      <FeaturedProjectsSection />
      <EducationSection />
      <ContactSection />
    </PortfolioShell>
  );
}
