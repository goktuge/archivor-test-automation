import { test, expect } from '../../../fixtures';

test.describe('Organization settings - Tags', () => {
  test('@smoke @e2e Tags tab loads', async ({ tagsTabPage, page }) => {
    await tagsTabPage.gotoTagsTab();

    await expect(page).toHaveURL(/settings|organization/i);
    await expect(page.getByText(/tags|create tag|no tags yet/i)).toBeVisible();
  });
});
