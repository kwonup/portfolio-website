import { profile } from "@/data/profile";

import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <section aria-labelledby="contact" className="scroll-mt-24 py-12">
      <div className="rounded-lg border border-border bg-card/70 p-6 sm:p-8">
        <SectionHeading
          id="contact"
          eyebrow="Contact"
          title="감사합니다. 더 궁금한 점이 있다면 연락주세요"
          className="mb-4"
        />
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex text-lg font-semibold text-primary underline-offset-4 transition hover:underline"
        >
          {profile.email}
        </a>
      </div>
    </section>
  );
}
