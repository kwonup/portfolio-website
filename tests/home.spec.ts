import { expect, test } from "@playwright/test";

test("renders the portfolio sections and featured projects", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "권영우" })).toBeVisible();
  await expect(
    page.getByRole("heading", {
      name: "핵심역량",
    }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "기술스택" })).toBeVisible();
  await page.locator("#experience").scrollIntoViewIfNeeded();
  await expect(page.getByRole("heading", { name: "경력", exact: true })).toBeVisible();
  await expect(page.locator("#experience").locator(".."))
    .toContainText("신사업개발부서에서 프론트엔드 인턴으로 근무");
  await expect(page.locator("#experience").locator(".."))
    .toContainText("실제 가입자 약 1,500명");
  await page.locator("#projects").scrollIntoViewIfNeeded();
  await expect(page.getByRole("heading", { name: "프로젝트" })).toBeVisible();
  await expect(page.getByText("지금까지 진행했던 프로젝트 들입니다.")).toBeVisible();

  const projects = page.locator("article");
  await expect(projects).toHaveCount(5);
  await expect(projects.nth(0)).toContainText("Tokit");
  await expect(projects.nth(1)).toContainText("fit-pt");
  await expect(projects.nth(2)).toContainText("Must-Fin");
  await expect(projects.nth(3)).toContainText("EF");
  await expect(projects.nth(4)).toContainText("Gym-Nect");
  await expect(projects.nth(0)).toContainText("팀원 구성: 프론트엔드 3명");
  await expect(projects.nth(1)).toContainText("팀원 구성: 개인 프로젝트");
  await expect(projects.nth(2)).toContainText("프론트엔드 4명");
  await expect(projects.nth(3)).toContainText("AI 2명");
  await expect(projects.nth(4)).toContainText("팀원 구성: 프론트엔드 3명");
  await expect(page.getByRole("heading", { name: "토킷 (Tokit)" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "핏피티 (fit-pt)" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "머핀 (Must-Fin)" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "짐넥 (Gym-Nect)" })).toBeVisible();

  await expect(projects.nth(0)).toContainText("커밋 단위");
  await expect(projects.nth(0)).toContainText("Vercel");
  await expect(projects.nth(1)).toContainText("BMAD");
  await expect(projects.nth(1)).toContainText("Claude Code");
  await expect(projects.nth(2)).toContainText("한국투자증권");
  await expect(projects.nth(2)).toContainText("최우수상");
  await expect(projects.nth(3)).toContainText("Figma");
  await expect(projects.nth(3)).toContainText("채팅 기능");
  await expect(projects.nth(4)).toContainText("무게와 횟수");
  await expect(projects.nth(4)).toContainText("디바운스");

  await expect(page.getByAltText("fit-pt 로고")).toBeVisible();
  await expect(page.getByRole("navigation").getByRole("link", { name: "Contact" })).toHaveCount(0);
  await page.locator("#contact").scrollIntoViewIfNeeded();
  await expect(
    page.getByRole("heading", {
      name: "감사합니다. 더 궁금한 점이 있다면 연락주세요",
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "kkwon1122@gmail.com" })).toHaveAttribute(
    "href",
    "mailto:kkwon1122@gmail.com",
  );

  await expect(page.getByRole("link", { name: "프로젝트 보기" })).toHaveCount(0);
});
