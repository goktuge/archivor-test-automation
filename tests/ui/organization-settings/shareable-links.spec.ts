import { test, expect } from '../../../fixtures';

test.describe('Organization settings - Shareable links', () => {
  test('@smoke @regression Shareable links tab loads', async ({ shareableLinksTabPage, page }) => {
    await shareableLinksTabPage.gotoShareableLinksTab();

    await expect(page).toHaveURL(/settings|organization/i);
    await expect(page.getByText(/no shareable links yet|shareable links/i)).toBeVisible();
  });
});
