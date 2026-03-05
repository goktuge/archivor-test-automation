import { test, expect } from '../../fixtures';

test.describe('Dashboard', () => {
  test('@smoke @regression Left menu has all expected items: Dashboard, All assets, My favorites, Collections, Recently deleted', async ({
    dashboardPage,
  }) => {
    await dashboardPage.gotoAndWaitForReady('/');

    await dashboardPage.expectAllMenuItemsVisible();
  });

  test('@smoke @regression Dashboard shows welcome message', async ({
    dashboardPage,
    page,
  }) => {
    await dashboardPage.gotoAndWaitForReady('/');

    await expect(page.getByText(/Welcome back|Here's what's happening with your workspace/i).first()).toBeVisible();
  });
});
