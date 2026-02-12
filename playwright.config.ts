import path from 'path';
import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : 4,
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  reporter: [
    ['list'],
    ['html'],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://app.staging.archivor.io',
    storageState: path.join(process.cwd(), '.auth', 'user.json'),
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  globalSetup: './config/global-setup.ts',
  grep: process.env.TEST_TAG ? new RegExp(process.env.TEST_TAG) : undefined,
  grepInvert: process.env.TEST_EXCLUDE ? new RegExp(process.env.TEST_EXCLUDE) : undefined,
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
      retries: 0,
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
