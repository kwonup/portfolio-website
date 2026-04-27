"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import type { Project } from "@/data/profile";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.18) }}
      whileHover={{ y: -4 }}
      className="group rounded-lg border border-border/80 bg-card/75 p-5 transition-colors hover:border-primary/35 hover:bg-card/95"
    >
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="grid gap-5 focus-visible:outline-none md:grid-cols-[0.8fr_1.2fr]"
        aria-label={`${project.title} GitHub 저장소 열기`}
      >
        <ProjectVisual project={project} />
        <div className="min-w-0">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{project.role}</p>
              <h3 className="mt-2 flex items-center gap-2 text-xl font-semibold tracking-normal text-foreground">
                {project.title}
                <ArrowUpRightIcon className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {project.name} · {project.period}
              </p>
            </div>
            <span className="w-fit rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
              {project.metric}
            </span>
          </div>

          <p className="mt-5 text-[0.9375rem] leading-7 text-muted-foreground">{project.summary}</p>
          <p className="mt-3 text-[0.9375rem] leading-7 text-foreground/85">{project.impact}</p>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Main work</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.responsibilities.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <ul className="mt-5 space-y-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-[0.9375rem] leading-7 text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      </a>
    </motion.article>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md border border-border bg-secondary/50",
        project.imageAspect === "square" ? "aspect-square" : "aspect-[4/3]",
      )}
    >
      <Image
        src={project.imageSrc}
        alt={project.imageAlt}
        fill
        unoptimized
        sizes="(min-width: 768px) 32vw, 100vw"
        className={cn(
          "transition-transform duration-300 group-hover:scale-[1.02]",
          project.imageFit === "contain" ? "object-contain p-3" : "object-cover object-top",
        )}
      />
    </div>
  );
}
