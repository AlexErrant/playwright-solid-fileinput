import { test } from "@playwright/test";

test("navigate", async ({ page }) => {
  await page.goto("https://localhost:3000");
});
