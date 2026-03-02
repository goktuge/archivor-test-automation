import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

/** Config for user factory tests - no global auth setup, fresh browser */
export default defineConfig({
  testDir: './tests/ui',
  testMatch: /smoke\/user-factory\.spec\.ts/,
  timeout: 60_000,
  use: {
    ...devices['Desktop Chrome'],
    storageState: { cookies: [], origins: [] },
    baseURL: process.env.BASE_URL || 'https://app.staging.archivor.io',
  },
  projects: [{ name: 'chromium-unauth' }],
});
