import { test, expect } from '../fixtures';

test.describe('Recently deleted', () => {
  test('@smoke @e2e Recently deleted page loads', async ({ dashboardPage, page }) => {
    await dashboardPage.goto('/');
    await dashboardPage.pageForTest.waitForLoadState('networkidle');

    await dashboardPage.gotoSection('trash');
    await expect(page).toHaveURL(/trash/);
    await expect(page.getByText(/Recently deleted/i).first()).toBeVisible({ timeout: 5_000 });
  });
});
