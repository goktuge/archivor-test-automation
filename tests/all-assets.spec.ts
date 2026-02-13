import { test } from '../fixtures';
import { expectSectionLoaded } from '../utils/test-helpers';

test.describe('All assets', () => {
  test('@smoke @e2e All assets page loads', async ({ dashboardPage, page }) => {
    await dashboardPage.gotoAndWaitForReady('/');

    await dashboardPage.gotoSection('assets');
    await expectSectionLoaded(page, /assets/, /All assets/i);
  });
});
