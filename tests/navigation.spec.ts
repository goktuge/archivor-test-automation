import { test, expect } from '../fixtures';

/** Section href -> expected page title (text visible on the page). */
const SECTION_TITLES: Record<string, string | RegExp> = {
  home: /Welcome back|Here's what's happening with your workspace/i,
  assets: /All assets/i,
  favorites: /Favorites/i,
  collections: /Collections/i,
  trash: /Recently deleted/i,
};

test.describe('Navigation', () => {
  test('@e2e @smoke All main sections are navigable with correct page titles', async ({
    dashboardPage,
    page,
  }) => {
    await dashboardPage.goto('/');
    await dashboardPage.pageForTest.waitForLoadState('networkidle');

    const sections = ['home', 'assets', 'favorites', 'collections', 'trash'] as const;
    for (const section of sections) {
      await dashboardPage.gotoSection(section);
      await expect(page).toHaveURL(new RegExp(section));

      const titlePattern = SECTION_TITLES[section];
      await expect(page.getByText(titlePattern).first()).toBeVisible({ timeout: 5_000 });
    }
  });
});
