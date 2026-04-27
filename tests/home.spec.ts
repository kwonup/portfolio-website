import { expect, test } from "@playwright/test";

test("renders the portfolio sections and featured projects", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Kwon YoungWoo" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "제품 흐름을 화면으로 옮기는 프론트엔드" })).toBeVisible();
  await page.locator("#experience").scrollIntoViewIfNeeded();
  await expect(page.getByRole("heading", { name: "실제 사용자가 있는 제품에서 일한 경험" })).toBeVisible();
  await page.locator("#projects").scrollIntoViewIfNeeded();
  await expect(page.getByRole("heading", { name: "프로젝트" })).toBeVisible();

  const projects = page.locator("article");
  await expect(projects).toHaveCount(4);
  await expect(projects.nth(0)).toContainText("Tokit");
  await expect(projects.nth(1)).toContainText("Must-Fin");
  await expect(projects.nth(2)).toContainText("EF");

  await expect(page.getByRole("link", { name: "프로젝트 보기" })).toHaveAttribute("href", "#projects");
});
