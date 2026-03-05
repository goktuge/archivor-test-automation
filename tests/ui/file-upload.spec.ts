import fs from 'fs';
import path from 'path';
import { test, expect } from '../../fixtures';
import { env } from '../../config/env.config';

test.describe('File upload and delete', () => {
  test('@regression @smoke Upload file, verify in All assets, then delete', async ({
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

      // 2. Go to dashboard, then All assets
      await assetsPage.gotoAndWaitForReady('/');
      await assetsPage.goToAllAssets();
      await assetsPage.waitForReady();

      // 3. Click New -> File upload (file goes to current folder)
      await assetsPage.clickNew();
      await assetsPage.uploadFileWithoutDialog(uploadPath);

      // 4. Wait for "1 of 1 completed" or file in list
      await assetsPage.waitForUploadComplete(uniqueFileName);

      // 5. Wait for upload to complete (row without "queued")
      await assetsPage.completedRowByFileName(uniqueFileName).waitFor({ state: 'visible', timeout: 30_000 });

      // 6. Search for the file to filter the list
      const searchInput = assetsPage.pageForTest.getByPlaceholder(/search/i).first();
      await searchInput.fill(uniqueFileName);
      await assetsPage.waitForReady();

      const row = assetsPage.rowByFileName(uniqueFileName);
      const fileElement = assetsPage.elementWithFileName(uniqueFileName);
      await expect(row.or(fileElement).first()).toBeVisible({ timeout: 15_000 });

      // 7. Delete via selection bar: select row, then click trash icon
      await assetsPage.selectRowAndDeleteViaBar(uniqueFileName);

      // 8. If confirmation modal appears, click Delete/Confirm
      const confirmBtn = assetsPage.confirmDeleteButton;
      if (await confirmBtn.isVisible().catch(() => false)) {
        await assetsPage.confirmDelete();
      }

      // 9. Verify file is removed from All assets list
      await assetsPage.goToAllAssets();
      await assetsPage.waitForReady();
      await expect(assetsPage.rowByFileName(uniqueFileName).or(assetsPage.elementWithFileName(uniqueFileName)).first()).toBeHidden();
    } finally {
      try { fs.unlinkSync(uploadPath); } catch { /* ignore */ }
    }
  });
});
