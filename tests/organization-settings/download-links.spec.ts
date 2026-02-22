import { test, expect } from '../../fixtures';

test.describe('Organization settings - Download links', () => {
  test('@smoke @e2e Download links tab loads', async ({ downloadLinksTabPage, page }) => {
    await downloadLinksTabPage.gotoDownloadLinksTab();

    await expect(page).toHaveURL(/settings|organization/i);
    await expect(page.locator('[role="tab"]').filter({ hasText: /download links/i }).first()).toBeVisible();
    await expect(page.getByText(/no download links yet/i)).toBeVisible();
  });
});
