import { test, expect } from '../fixtures';

test.describe('My favorites', () => {
  test('@smoke @e2e Favorites page loads', async ({ dashboardPage, page }) => {
    await dashboardPage.goto('/');
    await dashboardPage.pageForTest.waitForLoadState('networkidle');

    await dashboardPage.gotoSection('favorites');
    await expect(page).toHaveURL(/favorite/);
    await expect(page.getByText(/Favorites/i).first()).toBeVisible({ timeout: 5_000 });
  });
});
