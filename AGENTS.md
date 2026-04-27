# AGENTS.md

## Goal

이 프로젝트는 프론트엔드 포트폴리오 웹사이트다.
[Brittany Chiang ](https://brittanychiang.com/#about) 스타일의 좌측 고정 / 우측 스크롤 단일 페이지 구조를 참고하되,
디자인을 복제하지 말고 한국어 포트폴리오에 맞게 재구성한다.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Playwright
- Vercel

## Information Architecture

메인 페이지는 아래 순서를 따른다:

1. Hero
2. About
3. Experience
4. Featured Projects
5. Education & Certifications
6. Contact

## Content Priorities

- Projects 비중을 가장 높게 둔다
- 대표 프로젝트는 Tokit, Must-Fin, EF 순으로 노출한다
- 신입 포트폴리오이므로 About보다 Projects와 Experience를 더 강하게 보여준다
- 기술 나열보다 문제 해결과 역할 중심으로 쓴다

## Design Rules

- 좌측은 이름, 직무, 소개, 섹션 네비게이션, 링크를 고정
- 우측은 섹션 스크롤
- 모바일에서는 고정 레이아웃을 해제하고 단일 세로 흐름으로 전환
- 미니멀하고 신뢰감 있는 톤
- 접근성 고려

## Code Rules

- src/components/sections 단위로 섹션 분리
- 정적 데이터는 src/data에 둔다
- any 사용 금지
- 하드코딩 최소화
- shadcn/ui 우선 사용
- Framer Motion은 Hero와 Project hover 정도로만 절제해서 사용

## Validation

작업 후 아래를 통과시킨다:

- npm run lint
- npm run build
- npm run test
