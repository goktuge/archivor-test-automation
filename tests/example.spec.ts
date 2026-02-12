import { test, expect } from '@playwright/test';

test.describe('Example tests', () => {
  test('@smoke @e2e example test - replace with your tests', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/archivor\.io/);
  });
});
