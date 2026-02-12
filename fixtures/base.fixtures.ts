import path from 'path';
import fs from 'fs';
import type { Page } from '@playwright/test';
import { test as base, expect as baseExpect } from '@playwright/test';

// ─── Test data loader ─────────────────────────────────────────────────────────

function loadTestData() {
  const testDataDir = path.join(process.cwd(), 'test-data');
  const data: Record<string, unknown> = {};

  if (!fs.existsSync(testDataDir)) return data;

  const files = fs.readdirSync(testDataDir).filter((f) => f.endsWith('.json'));
  for (const file of files) {
    const name = file.replace('.json', '');
    const content = fs.readFileSync(path.join(testDataDir, file), 'utf-8');
    try {
      data[name] = JSON.parse(content);
    } catch {
      // Skip invalid JSON
    }
  }
  return data;
}

// ─── Custom matchers ─────────────────────────────────────────────────────────

const customMatchers = {
  toBeWithinRange(received: number, floor: number, ceiling: number) {
    const pass = received >= floor && received <= ceiling;
    return {
      message: () =>
        pass
          ? `expected ${received} not to be within range ${floor} - ${ceiling}`
          : `expected ${received} to be within range ${floor} - ${ceiling}`,
      pass,
    };
  },
  toBeValidEmail(received: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pass = emailRegex.test(received);
    return {
      message: () =>
        pass ? `expected ${received} not to be a valid email` : `expected ${received} to be a valid email`,
      pass,
    };
  },
};

// Extend expect with custom matchers
const expect = baseExpect.extend(customMatchers);

// ─── Base fixtures ──────────────────────────────────────────────────────────

export const test = base.extend<{
  authenticatedPage: Page;
  testData: Record<string, unknown>;
  baseURL: string;
}>({
  // Page with auth state - when using storageState in config, page is already authenticated
  authenticatedPage: async ({ page }, use) => {
    await use(page);
  },

  // Test data from test-data/*.json
  testData: async ({}, use) => {
    const data = loadTestData();
    await use(data);
  },

  // Base URL for page initialization
  baseURL: async ({}, use) => {
    const url = process.env.BASE_URL || 'https://app.staging.archivor.io';
    await use(url);
  },
});

export { expect };
