import { test, expect } from '../../fixtures';

test.describe('Organization settings - Roles', () => {
  test('@smoke @e2e Roles tab loads', async ({ rolesTabPage, page }) => {
    await rolesTabPage.gotoRolesTab();

    await expect(page).toHaveURL(/settings|organization/i);
    await expect(page.getByRole('tab', { name: /roles/i }).or(page.locator('[role="tab"]').filter({ hasText: /roles/i })).first()).toBeVisible();
  });
});
