import { test } from '../fixtures';

test.describe('Dashboard', () => {
  test('@smoke @e2e Left menu has all expected items: Dashboard, All assets, My favorites, Collections, Recently deleted', async ({
    dashboardPage,
  }) => {
    await dashboardPage.goto('/');
    await dashboardPage.pageForTest.waitForLoadState('networkidle');

    await dashboardPage.expectAllMenuItemsVisible();
  });
});
