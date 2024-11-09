import { test } from "@playwright/test";

test("setInputFiles", async ({ page }) => {
  await page.goto("/");
  await page.locator("#selectafile").click();
  await page.locator("#selectafile").setInputFiles("playwright.config.ts");
});

test("filechooser", async ({ page }) => {
  await page.goto("/");
  const fileChooserPromise = page.waitForEvent("filechooser");
  await page.locator("#selectafile").click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles("playwright.config.ts");
});
