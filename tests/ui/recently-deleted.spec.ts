import { test } from '../../fixtures';
import { expectSectionLoaded } from '../../utils/test-helpers';

test.describe('Recently deleted', () => {
  test('@smoke @regression Recently deleted page loads', async ({ dashboardPage, page }) => {
    await dashboardPage.gotoAndWaitForReady('/');

    await dashboardPage.gotoSection('trash');
    await expectSectionLoaded(page, /trash/, /Recently deleted/i);
  });
});
