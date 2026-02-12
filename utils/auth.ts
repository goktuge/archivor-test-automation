import fs from 'fs';
import path from 'path';
import { chromium, type BrowserContext } from '@playwright/test';
import { LoginPage } from '../pages';

const AUTH_FILE = path.join(process.cwd(), '.auth', 'user.json');

/**
 * Performs login and saves authentication state to .auth/user.json.
 * Can be used by global-setup or auth.setup.ts for per-test auth.
 */
export async function authenticate(context?: BrowserContext): Promise<string> {
  const email = process.env.TEST_USER_EMAIL;
  const password = process.env.TEST_USER_PASSWORD;
  const baseURL = process.env.BASE_URL || 'https://app.staging.archivor.io';

  if (!email || !password) {
    throw new Error('TEST_USER_EMAIL and TEST_USER_PASSWORD must be set in .env');
  }

  const browser = context ? undefined : await chromium.launch();
  const ctx = context ?? (await browser!.newContext());

  try {
    const page = await ctx.newPage();
    const loginPage = new LoginPage(page, baseURL);

    // Navigate to login - configurable via LOGIN_PATH env (default: /auth/login)
    const loginPath = process.env.LOGIN_PATH || '/auth/login';
    await loginPage.goto(loginPath);
    await page.waitForLoadState('networkidle');

    await loginPage.login(email, password);

    const loggedIn = await loginPage.isLoggedIn();
    if (!loggedIn) {
      const errorMsg = await loginPage.getErrorMessage();
      throw new Error(`Login failed: ${errorMsg || 'Unknown error'}`);
    }

    fs.mkdirSync(path.dirname(AUTH_FILE), { recursive: true });
    await ctx.storageState({ path: AUTH_FILE });
    return AUTH_FILE;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
