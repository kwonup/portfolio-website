import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/profile";

import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section
      aria-labelledby="about"
      className="scroll-mt-24 py-14 lg:min-h-[34vh] lg:pb-20 lg:pt-0"
    >
      <SectionHeading id="about" eyebrow="About" title="핵심역량" />
      <div className="text-[1.0625rem] leading-8 text-muted-foreground">
        <p>
          프론트엔드 중심의 웹 서비스 개발 경험을 기반으로 데이터 분석과 AI
          자동화 영역까지 역량을 확장하고 있는 개발자입니다.
          <br />
          금융,헬스케어,네트워킹,AI감정분석 등 다양한 도메인의 프로젝트에서
          팀원들과 협업하며 기획, 디자인, UI 구현부터 <br />
          백엔드 API/DB 연동, 배포까지 서비스 전 과정을 주도적으로 경험했습니다.
        </p>
        <p>
          특히 복잡한 데이터와 정보를 직관적으로 시각화하고, AI 도구를 개발
          과정에 적용해 생산성을 높이는 데 강점이 있습니다.
        </p>
        <p>
          새로운 기술을 빠르게 습득하고 문제의 본질을 파악하며, 탄탄한 체력과
          몰입력을 바탕으로 맡은 과제를 끝까지 완성하는것에 자신있습니다.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-base font-semibold text-foreground">기술스택</h3>
        <div className="mt-4 flex flex-wrap gap-2" aria-label="기술스택">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
