import { projects } from "@/data/profile";

import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

export function FeaturedProjectsSection() {
  return (
    <section
      aria-labelledby="projects"
      className="scroll-mt-24 py-16 lg:min-h-[32vh] lg:py-20"
    >
      <SectionHeading id="projects" eyebrow="Projects" title="프로젝트" />
      <p className="mb-8 max-w-3xl text-[1.0625rem] leading-8 text-muted-foreground">
        지금까지 진행했던 프로젝트들 입니다.
      </p>
      <div className="space-y-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
