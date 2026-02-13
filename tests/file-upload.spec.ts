import fs from 'fs';
import path from 'path';
import { test, expect } from '../fixtures';
import { env } from '../config/env.config';

test.describe('File upload and delete', () => {
  test('@e2e @smoke Upload file, verify in All assets, then delete', async ({
    loginPage,
    assetsPage,
  }, testInfo) => {
    const uniqueFileName = `test-${testInfo.parallelIndex}-${Date.now()}`;
    const sourcePath = path.join('resources', 'test.txt');
    const tempDir = path.join('test-results', 'upload-files');
    const uploadPath = path.join(tempDir, `${uniqueFileName}.txt`);

    fs.mkdirSync(tempDir, { recursive: true });
    fs.copyFileSync(sourcePath, uploadPath);

    try {
      // 1. Login
      await loginPage.gotoAndWaitForReady(env.loginPath);
      await loginPage.login(env.testUserEmail, env.testUserPassword);
      const loggedIn = await loginPage.isLoggedIn();
      expect(loggedIn).toBe(true);

      // 2. Wait for dashboard to load, then click New -> File upload
      await assetsPage.gotoAndWaitForReady('/');
      await assetsPage.clickNew();

      // 3. Upload file (without opening Windows file dialog)
      await assetsPage.uploadFileWithoutDialog(uploadPath);

      // 4. Wait for "1 of 1 completed" or file in list
      await assetsPage.waitForUploadComplete(uniqueFileName);

      // 5. Click All assets in left menu, refresh page
      await assetsPage.goToAllAssets();
      await assetsPage.refreshPage();

      // 6. Verify file is in the list
      const row = assetsPage.rowByFileName(uniqueFileName);
      await expect(row).toBeVisible();

      // 7. Click three dots on row -> Delete
      await assetsPage.openRowMenu(uniqueFileName);
      await assetsPage.clickDelete();

      // 8. In modal, click Delete
      await assetsPage.confirmDelete();

      // 9. Verify file is removed from list
      await assetsPage.waitForReady();
      await expect(assetsPage.rowByFileName(uniqueFileName)).toBeHidden();
    } finally {
      try { fs.unlinkSync(uploadPath); } catch { /* ignore */ }
    }
  });
});
