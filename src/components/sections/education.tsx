import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications, education } from "@/data/profile";

import { SectionHeading } from "./section-heading";

export function EducationSection() {
  return (
    <section
      aria-labelledby="education"
      className="scroll-mt-24 py-16 lg:min-h-[56vh] lg:py-20"
    >
      <SectionHeading
        id="education"
        eyebrow="Education & Certifications"
        title="학습 이력"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <Card
            key={`${item.organization}-${item.title}`}
            className="border-border/80 bg-card/70"
          >
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
              <p className="text-sm font-medium text-muted-foreground">
                {item.organization}
              </p>
            </CardHeader>
            <CardContent>
              <Badge>{item.period}</Badge>
              <p className="mt-4 text-[0.9375rem] leading-7 text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {certifications.map((item) => (
          <div
            key={`${item.organization}-${item.title}`}
            className="rounded-lg border border-border/80 bg-secondary/35 p-4"
          >
            <p className="text-sm font-semibold text-foreground">
              {item.title}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {item.organization}
            </p>
            <p className="mt-3 text-xs font-semibold text-primary">
              {item.period}
            </p>
            <p className="mt-3 text-[0.9375rem] leading-7 text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
