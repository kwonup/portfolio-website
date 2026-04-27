import { projects } from "@/data/profile";

import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

export function FeaturedProjectsSection() {
  return (
    <section
      aria-labelledby="projects"
      className="scroll-mt-24 py-16 lg:min-h-[32vh] lg:py-20"
    >
      <SectionHeading
        id="projects"
        eyebrow="Featured Projects"
        title="프로젝트"
      />
      <p className="mb-8 max-w-3xl text-[1.0625rem] leading-8 text-muted-foreground"></p>
      <div className="space-y-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
