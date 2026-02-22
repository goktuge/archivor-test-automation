import { test, expect } from '../../fixtures';

test.describe('Organization settings - Teams', () => {
  test('@smoke @e2e Teams tab loads', async ({ teamsTabPage, page }) => {
    await teamsTabPage.gotoTeamsTab();

    await expect(page).toHaveURL(/settings|organization/i);
    await expect(page.getByRole('tab', { name: /teams/i }).or(page.locator('[role="tab"]').filter({ hasText: /teams/i })).first()).toBeVisible();
    await expect(page.getByText(/no teams yet/i)).toBeVisible();
  });
});
