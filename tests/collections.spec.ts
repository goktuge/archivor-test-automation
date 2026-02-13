import { test, expect } from '../fixtures';

test.describe('Collections', () => {
  test('@smoke @e2e Collections page loads', async ({ dashboardPage, page }) => {
    await dashboardPage.goto('/');
    await dashboardPage.pageForTest.waitForLoadState('networkidle');

    await dashboardPage.gotoSection('collections');
    await expect(page).toHaveURL(/collection/);
    await expect(page.getByText(/Collections/i).first()).toBeVisible({ timeout: 5_000 });
  });
});
