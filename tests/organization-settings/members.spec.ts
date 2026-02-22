import { test, expect } from '../../fixtures';

test.describe('Organization settings - Members', () => {
  test('@smoke @e2e Members tab loads', async ({ membersTabPage, page }) => {
    await membersTabPage.gotoMembersTab();

    await expect(page).toHaveURL(/settings|organization/i);
    await expect(page.getByRole('tab', { name: /members/i }).or(page.locator('[role="tab"]').filter({ hasText: /members/i })).first()).toBeVisible();
    await expect(page.getByText(/no members yet/i)).toBeVisible();
  });
});
