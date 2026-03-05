import { test, expect } from '../../fixtures';

test.describe('Create actions', () => {
  test('@regression @smoke Create Folder opens modal', async ({ assetsPage, page }) => {
    await assetsPage.gotoAndWaitForReady('/');

    await assetsPage.clickCreateFolder();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    await assetsPage.cancelModal();
    await expect(dialog).toBeHidden();
  });

  test('@regression @smoke New Collection opens modal', async ({ assetsPage, page }) => {
    await assetsPage.gotoAndWaitForReady('/');

    await assetsPage.clickNewCollection();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    await assetsPage.cancelModal();
    await expect(dialog).toBeHidden();
  });

  test('@regression New menu closes on Escape', async ({ assetsPage }) => {
    await assetsPage.gotoAndWaitForReady('/');

    await assetsPage.clickNew();
    const menu = assetsPage.pageForTest.getByRole('menu');
    await expect(menu).toBeVisible();

    await assetsPage.pageForTest.keyboard.press('Escape');
    await expect(menu).toBeHidden();
  });
});
