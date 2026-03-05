import { test, expect } from '../../../fixtures';
import { ORG_SETTINGS_TABS } from '../../../src/ui';

test.describe('Organization settings', () => {
  test('@smoke @regression Organization settings tabs open correctly and titles exist', async ({
    organizationSettingsPage,
    page,
  }) => {
    await organizationSettingsPage.gotoOrganizationSettings();

    await expect(page).toHaveURL(/settings|organization/i);

    for (const tabName of ORG_SETTINGS_TABS) {
      await organizationSettingsPage.expectTabOpensWithTitle(tabName);
    }
  });
});
