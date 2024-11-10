import { test } from "@playwright/test";

test("navigate back", async ({ page }) => {
  await page.goto("/");
  await page.goto("/fileupload");
  await page.reload();
});
