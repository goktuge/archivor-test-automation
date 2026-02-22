import { test, expect } from '../../fixtures';

test.describe('Organization settings - Tags', () => {
  test('@smoke @e2e Tags tab loads', async ({ tagsTabPage, page }) => {
    await tagsTabPage.gotoTagsTab();

    await expect(page).toHaveURL(/settings|organization/i);
    await expect(page.getByRole('tab', { name: /tags/i }).or(page.locator('[role="tab"]').filter({ hasText: /tags/i })).first()).toBeVisible();
  });
});
