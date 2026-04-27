import { GithubIcon, InstagramIcon, MailIcon } from "@/components/ui/icons";

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: typeof GithubIcon;
};

export type Project = {
  title: string;
  name: string;
  period: string;
  href: string;
  role: string;
  summary: string;
  impact: string;
  responsibilities: string[];
  highlights: string[];
  stack: string[];
  metric: string;
  visualLabel: string;
  imageSrc: string;
  imageAlt: string;
  imageFit: "cover" | "contain";
  imageAspect: "banner" | "square";
};

export type Experience = {
  company: string;
  team: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  stack: string[];
};

export type Credential = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

export const profile = {
  name: "Kwon YoungWoo",
  title: "Frontend Engineer",
  intro:
    "사용자 흐름을 먼저 이해하고, 화면 구조와 상태 관리를 제품 문제에 맞게 설계하는 신입 프론트엔드 엔지니어입니다.",
  email: "kkwon1122@gmail.com",
  location: "Seoul, Korea",
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
  ] satisfies NavItem[],
  socials: [
    { label: "GitHub", href: "https://github.com/kwonup", icon: GithubIcon },
    { label: "Email", href: "mailto:kkwon1122@gmail.com", icon: MailIcon },
    {
      label: "Instagram",
      href: "https://www.instagram.com/kkyvvoo/",
      icon: InstagramIcon,
    },
  ] satisfies SocialLink[],
};

export const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Figma",
  "Prisma",
  "Recoil",
  "WebSocket",
  "WebRTC",
  "Chart.js",
  "Python",
];

export const projects: Project[] = [
  {
    title: "Tokit",
    name: "토킷",
    period: "2025.07 - 2025.09",
    href: "https://github.com/lionchat100/lion-chat-fe",
    role: "Frontend Intern / Product UI",
    summary:
      "IT 업계 종사자와 취업 준비생을 연결하는 커피챗 네트워킹 플랫폼입니다. 프로필 등록, 기술 스택과 관심사 기반 탐색, 마이페이지 경험을 중심으로 구현했습니다.",
    impact:
      "배포 후 해커톤 사용자를 포함해 실제 가입자 1,500여 명을 확보했고, 사용자 피드백을 UI 개선 작업으로 연결했습니다.",
    responsibilities: [
      "홈 화면",
      "프로필 탐색",
      "프로필 상세",
      "마이페이지",
      "기획 및 디자인 참여",
    ],
    highlights: [
      "FSD 아키텍처로 기능 단위 책임을 분리해 화면 확장과 유지보수 비용을 낮췄습니다.",
      "Claude Code CLI를 팀 워크플로우에 도입해 컴포넌트 생성, 리팩토링, 디버깅 반복 작업을 단축했습니다.",
      "가입/탐색 흐름에서 필요한 정보를 먼저 노출하도록 프로필 카드와 상세 화면의 정보 구조를 정리했습니다.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "FSD", "Claude Code"],
    metric: "1,500+ users",
    visualLabel: "Networking",
    imageSrc: "/project-banners/tokit-banner.svg",
    imageAlt: "Tokit 프로젝트 배너 이미지",
    imageFit: "cover",
    imageAspect: "banner",
  },
  {
    title: "Must-Fin",
    name: "머핀",
    period: "2025.02 - 2025.03",
    href: "https://github.com/FRONT-END-BOOTCAMP-PLUS-3/mufin",
    role: "Frontend / Mock Investment",
    summary:
      "투자 입문자가 금융 퀴즈로 포인트를 얻고 모의투자까지 이어갈 수 있도록 설계한 금융교육 서비스입니다.",
    impact:
      "실시간 주식 데이터, 차트, 보유자산 흐름을 연결해 학습과 투자 경험이 끊기지 않는 화면 구조를 만들었습니다.",
    responsibilities: [
      "모의투자 메인",
      "보유자산 지갑",
      "종목 검색",
      "주식 차트 시각화",
    ],
    highlights: [
      "클린 아키텍처 관점으로 도메인 로직과 외부 API 의존성을 분리해 변경 가능성을 낮췄습니다.",
      "Socket 통신과 한국투자증권 API를 활용해 실시간 데이터 기반 모의투자 흐름을 구성했습니다.",
      "Chart.js로 가격 변화를 시각화하고 사용자가 보유자산 상태를 빠르게 판단할 수 있게 했습니다.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "styled-components",
      "Socket",
      "Chart.js",
    ],
    metric: "Realtime",
    visualLabel: "Finance",
    imageSrc: "/project-banners/must-fin-banner.svg",
    imageAlt: "Must-Fin 프로젝트 배너 이미지",
    imageFit: "cover",
    imageAspect: "banner",
  },
  {
    title: "EF",
    name: "Emotion Feedback",
    period: "2024.03 - 2024.06",
    href: "https://github.com/EmotionFeedback",
    role: "Frontend / Realtime UX",
    summary:
      "화상 소개팅 중 표정과 음성 데이터를 분석해 감정 흐름을 시각화하고, 대화가 끊길 때 주제를 추천하는 서비스입니다.",
    impact:
      "WebRTC, WebSocket, 감정 분석 API를 하나의 통화 경험으로 연결해 실시간 상호작용의 안정성을 다뤘습니다.",
    responsibilities: [
      "화상채팅",
      "상태 관리",
      "스트림 제어",
      "감정 시각화",
      "추천 API 연동",
    ],
    highlights: [
      "WebRTC와 WebSocket을 활용해 실시간 화상채팅과 서버 이벤트 흐름을 구현했습니다.",
      "음성 및 음소 스트림 제어, 얼굴 표정 데이터 업로드 등 미디어 처리 경험을 쌓았습니다.",
      "감정 흐름 그래프와 대화 주제 추천 기능으로 통화 이후와 통화 중의 피드백 경험을 설계했습니다.",
    ],
    stack: ["React", "JavaScript", "Recoil", "WebRTC", "WebSocket"],
    metric: "Live call",
    visualLabel: "AI Feedback",
    imageSrc: "/project-banners/ef-banner.svg",
    imageAlt: "Emotion Feedback 프로젝트 배너 이미지",
    imageFit: "contain",
    imageAspect: "square",
  },
  {
    title: "Gym-Nect",
    name: "짐넥트",
    period: "2023.10 - 2023.11",
    href: "https://github.com/FRONTENDSCHOOL7/final-07-gymnect",
    role: "Frontend / Social Feed",
    summary:
      "운동 루틴을 기록하고 공유하며 주간, 월간 성과를 시각적으로 확인하는 운동 아카이빙 SNS 플랫폼입니다.",
    impact:
      "기록, 검색, 피드, 인증 라우팅을 연결해 사용자가 운동 데이터를 남기고 다시 확인하는 기본 흐름을 구현했습니다.",
    responsibilities: [
      "메인 페이지",
      "로그인",
      "검색",
      "기록 상세",
      "권한 기반 라우팅",
    ],
    highlights: [
      "러닝과 웨이트 기록 상세 화면에 Chart.js 기반 시각화를 적용했습니다.",
      "Recoil로 로그인 상태를 관리하고 React Router로 인증 사용자 접근 흐름을 제어했습니다.",
      "팔로우한 사용자의 피드를 동적으로 렌더링해 SNS 탐색 경험을 구현했습니다.",
    ],
    stack: ["React", "Recoil", "Axios", "styled-components", "Chart.js"],
    metric: "Social log",
    visualLabel: "Workout",
    imageSrc: "/project-banners/gym-nect-banner.svg",
    imageAlt: "Gym-Nect 프로젝트 배너 이미지",
    imageFit: "cover",
    imageAspect: "banner",
  },
];

export const experiences: Experience[] = [
  {
    company: "(주)샤이닝 라이언",
    team: "신사업개발부서",
    role: "Frontend Intern",
    period: "2025.07 - 2025.09",
    description:
      "IT 취준생 네트워킹 플랫폼 Tokit의 프론트엔드 개발과 제품 화면 개선에 참여했습니다.",
    achievements: [
      "홈, 프로필 탐색, 프로필 상세, 마이페이지 등 핵심 사용자 흐름을 구현했습니다.",
      "사용자 피드백을 바탕으로 정보 배치와 인터랙션을 개선했습니다.",
      "FSD 구조와 AI 개발 도구를 팀 작업 방식에 맞춰 적용했습니다.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "FSD"],
  },
];

export const education: Credential[] = [
  {
    title: "세종대학교",
    organization: "소프트웨어융합대학 데이터사이언스학과 졸업",
    period: "2019.03 - 2025.02",
    description:
      "데이터 기반 문제 정의와 소프트웨어 구현 역량을 함께 학습했습니다.",
  },
  {
    title: "프론트엔드스쿨 플러스 3기",
    organization: "멋쟁이사자처럼",
    period: "2024.12 - 2025.03",
    description:
      "2회의 팀 프로젝트를 수행했고 최종 프로젝트 최우수상을 수상했습니다.",
  },
];

export const certifications: Credential[] = [
  {
    title: "SQL 개발자(SQLD)",
    organization: "한국데이터산업진흥원",
    period: "2025.11",
    description: "데이터 모델링과 SQL 활용 역량을 검증했습니다.",
  },
  {
    title: "OPIc IM2",
    organization: "ACTFL",
    period: "2025.07",
    description: "영어 커뮤니케이션 기본 역량을 갖추고 있습니다.",
  },
  {
    title: "육군 병장 만기전역",
    organization: "Republic of Korea Army",
    period: "2020.09 - 2022.02",
    description: "군 복무를 마쳤습니다.",
  },
];
