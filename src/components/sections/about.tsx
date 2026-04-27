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
        title="제품 흐름을 화면으로 옮기는 프론트엔드"
      />
      <div className="space-y-5 text-[1.0625rem] leading-8 text-muted-foreground">
        <p>
          개발만 받아서 구현하는 것이 아니라, 왜 이 서비스가 필요한지부터
          고민해온 프론트엔드 개발자입니다. 투자, 운동, 소개팅 등 다양한
          도메인의 서비스를 직접 기획,디자인 하고 구현하며, 문제를 정의하는 눈을
          키워왔습니다.
        </p>
        <p>
          인턴 기간에는 실제 출시까지 이어진 실사용자 1,500명 규모의 플랫폼
          서비스의 핵심 화면을 주도적으로 개발했고, AI 도구를 팀에 도입해 반복
          작업을 줄인 경험도 있습니다. 코드를 잘 짜는 것과 함께, 왜 이 화면이
          이렇게 작동해야 하는지를 끝까지 고민하는 개발자입니다
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
