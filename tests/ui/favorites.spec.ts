import { test } from '../../fixtures';
import { expectSectionLoaded } from '../../utils/test-helpers';

test.describe('My favorites', () => {
  test('@smoke @regression Favorites page loads', async ({ dashboardPage, page }) => {
    await dashboardPage.gotoAndWaitForReady('/');

    await dashboardPage.gotoSection('favorites');
    await expectSectionLoaded(page, /favorite/, /Favorites/i);
  });
});
