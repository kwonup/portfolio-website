import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-6 scroll-mt-24", className)} id={id}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-normal text-foreground sm:text-3xl">{title}</h2>
    </div>
  );
}
