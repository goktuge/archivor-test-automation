import { test, expect } from '../fixtures';

test.describe('All assets', () => {
  test('@smoke @e2e All assets page loads', async ({ dashboardPage, page }) => {
    await dashboardPage.goto('/');
    await dashboardPage.pageForTest.waitForLoadState('networkidle');

    await dashboardPage.gotoSection('assets');
    await expect(page).toHaveURL(/assets/);
    await expect(page.getByText(/All assets/i).first()).toBeVisible({ timeout: 5_000 });
  });
});
