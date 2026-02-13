import { test, expect } from '../fixtures';

const EXPECTED_NEW_MENU_OPTIONS = [
  'Google Drive',
  'One Drive',
  'Create Folder',
  'New Collection',
  'New Automation',
];

test.describe('New menu', () => {
  test('@e2e @smoke New menu shows all expected options', async ({ assetsPage }) => {
    await assetsPage.gotoAndWaitForReady('/');

    const options = await assetsPage.getNewMenuOptions();

    for (const expected of EXPECTED_NEW_MENU_OPTIONS) {
      expect(options.some((o) => o.includes(expected))).toBe(true);
    }
  });
});
