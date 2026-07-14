import { GithubIcon, MailIcon } from "@/components/ui/icons";

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
  team: string;
  summary: string;
  impact: string;
  responsibilities: string[];
  highlights: string[];
  stack: string[];
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
};

export type Credential = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

export const profile = {
  name: "권영우",
  englishName: "Youngwoo Kwon",
  title: "Software Engineer",
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
  ] satisfies SocialLink[],
};

export const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "FastAPI",
  "Pandas",
  "PostgreSQL",
  "Git",
  "Figma",
];

export const projects: Project[] = [
  {
    title: "Tokit",
    name: "토킷",
    period: "2025.07 - 2025.09",
    href: "https://github.com/lionchat100/lion-chat-fe",
    role: "Frontend Intern / Planning & Product UI",
    team: "프론트엔드 3명 · 백엔드 3명 · 디자이너 2명 · 기획 1명",
    summary:
      "(주)샤이닝라이언 신사업개발부서 인턴으로 참여한 IT 업계 종사자와 취업 준비생을 위한 네트워킹·소개팅 플랫폼입니다. 멋쟁이사자처럼 해커톤 참여 학생과 현업자가 프로필, 기술 스택, 관심사를 기반으로 연결될 수 있도록 기획했습니다.",
    impact:
      "제한된 개발 기간 안에 서비스를 안정적으로 배포해 해커톤 참가자를 포함한 실제 가입자 약 1,500명을 확보했고, 이후 사용자 피드백을 UI와 기능 개선에 반영해 완성도를 높였습니다.",
    responsibilities: [
      "홈 화면 및 프로필 탐색",
      "마이프로필과 상대 프로필",
      "마이페이지 프로필 조회·수정",
      "기획 및 디자인 일부 참여",
    ],
    highlights: [
      "Next.js, TypeScript, Tailwind CSS로 프론트엔드를 개발하고 기획과 디자인에도 일부 참여했습니다.",
      "FSD 아키텍처로 계층을 분리해 유지보수성과 확장성을 고려했습니다.",
      "Claude Code CLI를 팀 워크플로우에 도입하고 작업 단위를 커밋 단위로 나누는 패턴을 정착시켜 코드 생성, 리팩토링, 디버깅과 개발 사이클을 단축했습니다.",
      "Vercel 환경에서 프로필 이미지 트래픽 급증 원인을 분석하고 이미지 리사이징과 전송 크기 최적화로 불필요한 과금과 로딩 지연을 해결했습니다.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "FSD", "Claude Code"],
    imageSrc: "/project-banners/tokit-banner.svg",
    imageAlt: "Tokit 프로젝트 배너 이미지",
    imageFit: "cover",
    imageAspect: "banner",
  },
  {
    title: "fit-pt",
    name: "핏피티",
    period: "2026.07 - 2026.07",
    href: "https://github.com/kwonup/fit-pt",
    role: "Personal Project / Full-stack & AI",
    team: "개인 프로젝트",
    summary:
      "운동 기록과 목표를 관리하고, 누적 데이터를 바탕으로 AI 트레이너와 개인화된 운동 상담을 할 수 있는 피트니스 웹앱입니다.",
    impact:
      "개인 프로젝트로 기획과 화면 설계부터 프론트엔드, 백엔드 API, 데이터베이스, 사용자 맥락 기반 AI 상담 기능까지 전체 개발 과정을 직접 담당했습니다.",
    responsibilities: [
      "운동 기록 입력",
      "주간 대시보드",
      "캘린더",
      "AI 트레이너 챗봇",
      "API 및 DB 설계",
    ],
    highlights: [
      "Next.js와 TypeScript로 기록, 대시보드, 캘린더, AI 상담 사용자 흐름을 구현했습니다.",
      "FastAPI와 Supabase를 활용해 운동 기록 처리, 사용자 프로필 관리, 상담 데이터 저장 구조를 설계했습니다.",
      "운동 기록, 목표, 최근 수행 데이터를 상담 맥락으로 구성해 루틴과 중량 조절 방향을 제안하도록 구현했습니다.",
      "BMAD 방법론으로 요구사항과 기능 우선순위를 정리하고, Claude Code와 Codex를 번갈아 활용해 코드 구조, API 설계, 구현 방식을 교차 검증했습니다.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "BMAD",
      "Claude Code",
      "Codex",
    ],
    imageSrc: "/project-banners/fitpt-logo.png",
    imageAlt: "fit-pt 로고",
    imageFit: "contain",
    imageAspect: "square",
  },
  {
    title: "Must-Fin",
    name: "머핀",
    period: "2025.02 - 2025.03",
    href: "https://github.com/FRONT-END-BOOTCAMP-PLUS-3/mufin",
    role: "Frontend Lead / Product Design",
    team: "프론트엔드 4명 · 팀장",
    summary:
      "투자 입문자가 금융·투자 상식 퀴즈로 보상 포인트를 획득하고 이를 활용해 모의투자를 진행하며 자연스럽게 금융 지식과 투자 경험을 쌓을 수 있도록 설계한 서비스입니다.",
    impact:
      "프론트엔드 팀장으로 초기 아이디어 선정, 서비스 기획, UI 디자인과 개발을 주도해 프론트엔드스쿨 플러스 3기 최종 프로젝트 전체 1위인 최우수상을 수상했습니다.",
    responsibilities: [
      "모의투자 메인",
      "보유자산 지갑",
      "종목 검색",
      "주식 차트 시각화",
    ],
    highlights: [
      "Next.js, TypeScript, Prisma, styled-components를 기반으로 모의투자 메인, 보유자산·지갑, 종목 검색 페이지를 구현했습니다.",
      "Chart.js로 주식 가격 변동을 시각화하고 Socket 통신으로 실시간 주식 데이터를 화면에 반영했습니다.",
      "한국투자증권 주식 API를 연동해 실제 시장 데이터를 기반으로 모의투자를 진행할 수 있도록 구성했습니다.",
      "클린 아키텍처로 도메인 로직과 외부 API·UI 요소를 분리해 유지보수성과 확장성을 고려했습니다.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "styled-components",
      "Socket",
      "Chart.js",
    ],
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
    role: "Planning / Design / Frontend Owner",
    team: "프론트엔드 1명 · 백엔드 1명 · AI 2명",
    summary:
      "화상통화로 소개팅 상대를 연결하고 표정과 음성 데이터를 활용한 AI 감정 분석으로 감정 상태를 수치화·시각화하는 서비스입니다. 통화 종료 후 두 사람의 감정 흐름 그래프를 제공하고, 대화가 끊길 때 실시간으로 주제를 추천합니다.",
    impact:
      "프로젝트 기획과 아이디어 선정부터 Figma 디자인과 프론트엔드 전반을 담당하고, WebRTC, WebSocket, 감정 분석 시스템을 하나의 통화 경험으로 연결했습니다.",
    responsibilities: [
      "실시간 화상채팅",
      "Recoil 상태 관리",
      "영상·음성 스트림 제어",
      "감정 시각화",
      "대화 주제 추천 API",
      "채팅 기능",
      "녹화 데이터 업로드",
    ],
    highlights: [
      "JavaScript, React, Recoil, WebSocket, WebRTC를 기반으로 프론트엔드 전반을 구현했습니다.",
      "WebRTC와 WebSocket으로 실시간 화상채팅을 구현하고 Recoil 상태 관리로 안정적인 연결 환경을 구성했습니다.",
      "영상·음성 스트림 제어, 대화 주제 추천 API 연동과 채팅 기능으로 사용자 간 원활한 소통을 지원했습니다.",
      "녹화된 화상 데이터를 서버에 업로드해 감정 분석 및 피드백 시스템과 연동했습니다.",
    ],
    stack: ["React", "JavaScript", "Recoil", "WebRTC", "WebSocket"],
    imageSrc: "/project-banners/ef-banner.svg",
    imageAlt: "Emotion Feedback 프로젝트 배너 이미지",
    imageFit: "contain",
    imageAspect: "square",
  },
  {
    title: "Gym-Nect",
    name: "짐넥",
    period: "2023.10 - 2023.11",
    href: "https://github.com/FRONTENDSCHOOL7/final-07-gymnect",
    role: "Frontend / Data Visualization",
    team: "프론트엔드 3명",
    summary:
      "웨이트 트레이닝은 무게와 횟수, 러닝은 시간과 거리를 기준으로 운동 루틴을 기록하고 공유하며 일주일 동안의 성과를 시각적으로 확인하는 운동 아카이빙 SNS입니다. 친구들과 성과를 공유하며 동기부여를 주는 데 중점을 두었습니다.",
    impact:
      "프로젝트 초기 기획과 아이디어 도출을 주도하고 운동 분석 차트와 페이지, 로그인, 검색 기능을 구현했습니다.",
    responsibilities: [
      "운동 분석 페이지",
      "로그인",
      "검색",
      "캘린더",
      "소셜 피드",
    ],
    highlights: [
      "Chart.js로 볼륨, 거리, 칼로리 소모량을 시각화하고 캘린더와 연동해 주차별 기록을 확인할 수 있게 했습니다.",
      "Recoil로 로그인 상태를 관리하고 React Router의 보호 기능으로 인증되지 않은 사용자의 접근을 제한해 보안성을 높였습니다.",
      "디바운스를 적용한 검색 기능으로 불필요한 요청을 줄이고 성능을 개선했습니다.",
      "팔로우한 사용자의 피드를 동적으로 렌더링해 사용자 경험을 강화했습니다.",
    ],
    stack: ["React", "Recoil", "Axios", "styled-components", "Chart.js"],
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
      "신사업개발부서에서 프론트엔드 인턴으로 근무하며 IT 종사자와 취업 준비생을 위한 네트워킹 플랫폼 Tokit 프로젝트에 참여했습니다.",
    achievements: [
      "프로젝트 개발부터 실제 서비스 출시까지 참여했습니다.",
      "프론트엔드 개발을 중심으로 담당하면서 서비스 기획과 디자인에도 일부 참여했습니다.",
      "트래픽 급증으로 발생한 로딩 지연과 과도한 과금 문제를 이미지 리사이징 및 전송 크기 최적화로 해결했습니다.",
      "서비스 출시 후 실제 가입자 약 1,500명을 달성했습니다.",
    ],
  },
];

export const education: Credential[] = [
  {
    title: "세종대학교",
    organization: "소프트웨어융합대학 데이터사이언스학과 졸업",
    period: "2019.03 - 2025.02",
    description:
      "컴퓨터공학 기초지식 및 데이터 기반 문제 정의와 소프트웨어 구현 역량을 함께 학습했습니다.",
  },
  {
    title: "AX 자동화에서 LLM Agent까지 활용하는 AI 개발자 과정",
    organization: "청년취업사관학교 새싹(SeSAC) 영등포 8기",
    period: "2026.05 - 현재",
    description:
      "데이터 분석, 머신러닝,딥러닝 LLM 활용과 AI Agent 구조를 학습하고 웹 서비스에 적용하고 있습니다.",
  },
  {
    title: "프론트엔드스쿨 플러스 3기",
    organization: "멋쟁이사자처럼",
    period: "2024.12 - 2025.03",
    description:
      "프론트엔드 심화개념 학습 및 2회의 팀 프로젝트를 수행했고 최종 프로젝트 최우수상을 수상했습니다.",
  },
];

export const certifications: Credential[] = [
  {
    title: "SQL 개발자(SQLD)",
    organization: "한국데이터산업진흥원",
    period: "2025.11",
    description: "데이터 모델링과 SQL 활용 역량을 검증했습니다.",
  },
];
