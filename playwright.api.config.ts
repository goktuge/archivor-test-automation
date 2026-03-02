import 'dotenv/config';
import { defineConfig } from '@playwright/test';

/** Config for API tests only - no browser, no global auth setup */
export default defineConfig({
  testDir: './tests/api',
  testMatch: /.*\.spec\.ts/,
  timeout: 15_000,
  fullyParallel: true,
  use: {
    baseURL: process.env.ARCHIVOR_API_URL || 'https://api.staging.archivor.io',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      Authorization: process.env.ARCHIVOR_TOKEN || '',
    },
  },
  projects: [{ name: 'api' }],
});
