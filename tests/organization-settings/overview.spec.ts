import { test, expect } from '../../fixtures';

const OVERVIEW_EXPECTED_TEXTS = [
  'Goktug org-222',
  'goktug-org-222',
  'Download Activity',
  'Last 7 days download trends',
  'Monthly usage',
  'Storage consumption by day',
];

test.describe('Organization settings - Overview', () => {
  test('@smoke @e2e Overview tab loads with org name and metrics', async ({ overviewTabPage, page }) => {
    await overviewTabPage.gotoOverviewTab();

    await expect(page).toHaveURL(/settings|organization/i);
    await expect(page.getByRole('tab', { name: /overview/i }).or(page.locator('[role="tab"]').filter({ hasText: /overview/i })).first()).toBeVisible();

    for (const text of OVERVIEW_EXPECTED_TEXTS) {
      await expect(page.getByText(new RegExp(text, 'i'))).toBeVisible();
    }
  });
});
