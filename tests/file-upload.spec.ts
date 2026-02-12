import path from 'path';
import { test, expect } from '../fixtures';
import { env } from '../config/env.config';

const TEST_FILE = 'test.txt';

test.describe('File upload and delete', () => {
  test('@e2e @smoke Upload file, verify in All assets, then delete', async ({
    loginPage,
    assetsPage,
  }) => {
    // 1. Login
    await loginPage.goto(env.loginPath);
    await loginPage.pageForTest.waitForLoadState('networkidle');
    await loginPage.login(env.testUserEmail, env.testUserPassword);
    const loggedIn = await loginPage.isLoggedIn();
    expect(loggedIn).toBe(true);

    // 2. Wait for dashboard to load, then click New -> File upload
    await assetsPage.goto('/');
    await assetsPage.pageForTest.waitForLoadState('networkidle');
    await assetsPage.clickNew();

    // 3. Upload test.txt (without opening Windows file dialog)
    const filePath = path.join('resources', TEST_FILE);
    await assetsPage.uploadFileWithoutDialog(filePath);

    // 4. Wait for "1 of 1 completed" or file in list
    await assetsPage.waitForUploadComplete(TEST_FILE);

    // 5. Click All assets in left menu, refresh page
    await assetsPage.goToAllAssets();
    await assetsPage.refreshPage();
    await assetsPage.pageForTest.waitForLoadState('networkidle');

    // 6. Verify test.txt is in the list
    const isInList = await assetsPage.isFileInList(TEST_FILE);
    expect(isInList).toBe(true);

    // 7. Click three dots on test.txt row -> Delete
    await assetsPage.openRowMenu(TEST_FILE);
    await assetsPage.clickDelete();

    // 8. In modal, click Delete
    await assetsPage.confirmDelete();

    // 9. Verify test.txt is removed from list
    await assetsPage.pageForTest.waitForLoadState('networkidle');
    const row = assetsPage.rowByFileName(TEST_FILE);
    await expect(row).toBeHidden({ timeout: 10_000 });
  });
});
