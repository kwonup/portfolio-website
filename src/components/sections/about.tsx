import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/profile";

import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section
      aria-labelledby="about"
      className="scroll-mt-24 py-14 lg:min-h-[34vh] lg:pb-20 lg:pt-0"
    >
      <SectionHeading
        id="about"
        eyebrow="About"
        title="제품 흐름을 이해하고 화면으로 구체화하는 프론트엔드 개발자"
      />
      <div className="space-y-5 text-[1.0625rem] leading-8 text-muted-foreground">
        <p>
          개발 요청을 그대로 구현하는 것에 그치지 않고, 왜 이 서비스가
          필요한지와 사용자가 어떤 흐름으로 기능을 이용하는지부터 고민해온
          프론트엔드 개발자입니다. 투자, 운동, 네트워킹 등 다양한 도메인의
          서비스를 직접 기획/디자인/구현하며, 문제를 화면 구조로 구체화하는
          경험을 쌓아왔습니다.
        </p>
        <p>
          인턴 기간에는 실제 출시까지 이어진 실사용자 약 1,500명 규모의 플랫폼
          서비스에서 핵심 화면을 주도적으로 개발했습니다. 배포 이후에는 이미지
          렌더링 문제로 발생한 과도한 트래픽 과금 이슈를 발견하고 개선한 경험이
          있으며, AI 도구를 팀 개발 흐름에 도입해 반복 작업을 줄이는 데
          기여했습니다.
        </p>

        <p>
          현재는 개발 생산성을 더 높이기 위해 Codex, Claude 등을 활용해 작업
          지시 문서와 프로젝트 구조를 기반으로 한 AI 하네스 방식을 학습하고
          적용하고 있습니다. 코드를 구현하는 것뿐 아니라, 화면이 왜 그렇게
          작동해야 하는지와 더 효율적으로 개발할 수 있는 방식을 함께 고민하는
          개발자입니다.
        </p>
      </div>
      <div className="mt-7 flex flex-wrap gap-2" aria-label="주요 기술">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
