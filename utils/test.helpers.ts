import fs from 'fs';
import path from 'path';
import { Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

// ─── Wait functions ───────────────────────────────────────────────────────────

/**
 * Wait for a condition to become true, with polling and timeout.
 */
export async function waitForCondition<T>(
  condition: () => Promise<T>,
  options?: { timeout?: number; interval?: number }
): Promise<T> {
  const timeout = options?.timeout ?? 10_000;
  const interval = options?.interval ?? 500;
  const start = Date.now();

  while (Date.now() - start < timeout) {
    const result = await condition();
    if (result) return result;
    await new Promise((r) => setTimeout(r, interval));
  }
  throw new Error(`Condition not met within ${timeout}ms`);
}

/**
 * Wait for an API response matching the given URL pattern.
 */
export async function waitForAPI(
  page: Page,
  urlPattern: string | RegExp,
  options?: { timeout?: number; method?: string }
): Promise<void> {
  await page.waitForResponse(
    (response) => {
      const urlMatch =
        typeof urlPattern === 'string'
          ? response.url().includes(urlPattern)
          : urlPattern.test(response.url());
      const methodMatch = options?.method
        ? response.request().method() === options.method
        : true;
      return urlMatch && methodMatch && response.status() < 400;
    },
    { timeout: options?.timeout ?? 10_000 }
  );
}

// ─── Screenshot utilities ─────────────────────────────────────────────────────

const SCREENSHOT_DIR = path.join('test-results', 'screenshots');

/**
 * Take a screenshot with naming convention: {suite}_{test}_{step}_{timestamp}.png
 */
export async function takeTestScreenshot(
  page: Page,
  options?: {
    name?: string;
    fullPage?: boolean;
    suite?: string;
    test?: string;
  }
): Promise<string> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const parts = [options?.suite ?? 'test', options?.test ?? 'screenshot', options?.name ?? '']
    .filter(Boolean)
    .join('_');
  const filename = `${parts || 'screenshot'}_${timestamp}.png`;
  const filepath = path.join(SCREENSHOT_DIR, filename);

  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  await page.screenshot({ path: filepath, fullPage: options?.fullPage ?? false });
  return filepath;
}

// ─── Random data generators (Faker) ───────────────────────────────────────────

export const randomData = {
  email: () => faker.internet.email(),
  password: (options?: { length?: number }) =>
    faker.internet.password({ length: options?.length ?? 12 }),
  firstName: () => faker.person.firstName(),
  lastName: () => faker.person.lastName(),
  fullName: () => faker.person.fullName(),
  username: () => faker.internet.username(),
  domain: () => faker.internet.domainName(),
  uuid: () => faker.string.uuid(),
  sentence: (wordCount?: number) => faker.lorem.sentence(wordCount),
  paragraph: (sentenceCount?: number) => faker.lorem.paragraph(sentenceCount),
  words: (count?: number) => faker.lorem.words(count ?? 5),
};

// ─── Date/time helpers ────────────────────────────────────────────────────────

export const dateHelpers = {
  /** Current date in ISO format */
  now: () => new Date().toISOString(),

  /** Today's date as YYYY-MM-DD */
  today: () => new Date().toISOString().slice(0, 10),

  /** Add days to current date */
  addDays: (days: number) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  },

  /** Format date for display */
  format: (date: Date, format: 'iso' | 'short' | 'locale' = 'iso') => {
    if (format === 'iso') return date.toISOString();
    if (format === 'short') return date.toISOString().slice(0, 10);
    return date.toLocaleDateString();
  },

  /** Random date within range */
  randomBetween: (start: Date, end: Date) =>
    faker.date.between({ from: start, to: end }),
};
