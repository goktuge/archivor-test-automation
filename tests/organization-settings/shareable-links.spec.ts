import { test, expect } from '../../fixtures';

test.describe('Organization settings - Shareable links', () => {
  test('@smoke @e2e Shareable links tab loads', async ({ shareableLinksTabPage, page }) => {
    await shareableLinksTabPage.gotoShareableLinksTab();

    await expect(page).toHaveURL(/settings|organization/i);
    await expect(page.locator('[role="tab"]').filter({ hasText: /shareable links/i }).first()).toBeVisible();
    await expect(page.getByText(/no shareable links yet/i)).toBeVisible();
  });
});
