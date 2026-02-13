import { test } from '../fixtures';
import { expectSectionLoaded } from '../utils/test-helpers';

test.describe('Collections', () => {
  test('@smoke @e2e Collections page loads', async ({ dashboardPage, page }) => {
    await dashboardPage.gotoAndWaitForReady('/');

    await dashboardPage.gotoSection('collections');
    await expectSectionLoaded(page, /collection/, /Collections/i);
  });
});
