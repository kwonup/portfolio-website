import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/data/profile";

import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section
      aria-labelledby="experience"
      className="scroll-mt-24 py-16 lg:min-h-[46vh] lg:py-20"
    >
      <SectionHeading
        id="experience"
        eyebrow="Experience"
        title="실제 사용자가 있는 제품에서 일한 경험"
      />
      <div className="space-y-4">
        {experiences.map((experience) => (
          <Card
            key={experience.company}
            className="border-border/80 bg-card/70 backdrop-blur"
          >
            <CardHeader>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle>{experience.company}</CardTitle>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {experience.role} · {experience.team}
                  </p>
                </div>
                <p className="text-sm font-semibold text-primary">
                  {experience.period}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[0.9375rem] leading-7 text-muted-foreground">
                {experience.description}
              </p>
              <ul className="mt-5 space-y-3">
                {experience.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-3 text-[0.9375rem] leading-7 text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
