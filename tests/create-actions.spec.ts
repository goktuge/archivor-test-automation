import { test, expect } from '../fixtures';

test.describe('Create actions', () => {
  test('@e2e @smoke Create Folder opens modal', async ({ assetsPage, page }) => {
    await assetsPage.gotoAndWaitForReady('/');

    await assetsPage.clickCreateFolder();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible({ timeout: 5_000 });

    await assetsPage.cancelModal();
    await expect(dialog).toBeHidden({ timeout: 3_000 });
  });

  test('@e2e @smoke New Collection opens modal', async ({ assetsPage, page }) => {
    await assetsPage.gotoAndWaitForReady('/');

    await assetsPage.clickNewCollection();

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible({ timeout: 5_000 });

    await assetsPage.cancelModal();
    await expect(dialog).toBeHidden({ timeout: 3_000 });
  });

  test('@e2e New menu closes on Escape', async ({ assetsPage }) => {
    await assetsPage.gotoAndWaitForReady('/');

    await assetsPage.clickNew();
    const menu = assetsPage.page.getByRole('menu');
    await expect(menu).toBeVisible();

    await assetsPage.page.keyboard.press('Escape');
    await expect(menu).toBeHidden({ timeout: 2_000 });
  });
});
