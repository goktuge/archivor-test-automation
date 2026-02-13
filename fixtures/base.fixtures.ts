import type { Page } from '@playwright/test';
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages';
import { env } from '../config/env.config';

// ─── Base fixtures ──────────────────────────────────────────────────────────

export const test = base.extend<{
  authenticatedPage: Page;
  baseURL: string;
}>({
  // Page with auth - for auth projects (chromium, firefox, webkit) ensures login
  // chromium-unauth skips: login/file-upload tests need unauthenticated start
  authenticatedPage: async ({ page, baseURL }, use, testInfo) => {
    const isUnauth = testInfo.project.name === 'chromium-unauth';
    if (!isUnauth) {
      await page.goto(env.loginPath);
      await page.waitForLoadState('networkidle');
      const loginPage = new LoginPage(page, baseURL ?? '');
      const needsLogin = await loginPage.emailInput.isVisible().catch(() => false);
      if (needsLogin) {
        await loginPage.login(env.testUserEmail, env.testUserPassword);
        await loginPage.isLoggedIn();
        await page.waitForLoadState('networkidle');
      }
    }
    await use(page);
  },

  // Base URL for page initialization
  baseURL: async ({}, use) => {
    const url = process.env.BASE_URL || 'https://app.staging.archivor.io';
    await use(url);
  },
});

export { expect } from '@playwright/test';
