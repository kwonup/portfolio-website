import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";

import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <section aria-labelledby="contact" className="scroll-mt-24 py-12">
      <div className="rounded-lg border border-primary/25 bg-primary/10 p-6 sm:p-8">
        <SectionHeading id="contact" eyebrow="Contact" title="함께 일할 준비가 되어 있습니다" className="mb-4" />
        <p className="max-w-3xl text-[1.0625rem] leading-8 text-muted-foreground">
          제품의 문제를 이해하고, 팀이 유지보수할 수 있는 프론트엔드 구조로 구현하는 일을 하고 싶습니다.
          프로젝트나 채용 관련 대화는 이메일 또는 GitHub로 편하게 남겨주세요.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild>
            <a href={`mailto:${profile.email}`}>이메일 보내기</a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://github.com/kwonup" target="_blank" rel="noreferrer">
              GitHub
              <ArrowUpRightIcon className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
