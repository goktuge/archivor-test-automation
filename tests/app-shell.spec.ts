import { test, expect } from '../fixtures';

test.describe('App shell', () => {
  test('@smoke @e2e Session persists after navigation', async ({ dashboardPage, page }) => {
    await dashboardPage.gotoAndWaitForReady('/');

    // Navigate through sections
    await dashboardPage.gotoSection('assets');
    await expect(page).toHaveURL(/assets/);
    await dashboardPage.gotoSection('home');
    await expect(page).toHaveURL(/home|archivor/);

    // Should still be on app, not login
    await expect(page).not.toHaveURL(/login|signin|auth/);
  });

  test('@smoke @e2e New button is visible on dashboard', async ({ assetsPage }) => {
    await assetsPage.gotoAndWaitForReady('/');

    await expect(assetsPage.newButton).toBeVisible();
  });

  test('@smoke @e2e New button is visible on All assets page', async ({ assetsPage }) => {
    await assetsPage.gotoAndWaitForReady('/');
    await assetsPage.goToAllAssets();

    await expect(assetsPage.newButton).toBeVisible();
  });
});
