import fs from 'fs';
import path from 'path';
import { Page, Locator } from '@playwright/test';

export class BasePage {
  constructor(
    protected page: Page,
    protected baseURL: string = ''
  ) {}

  /** Expose page for tests that need direct Playwright APIs. Prefer waitForReady() for load state. */
  get pageForTest(): Page {
    return this.page;
  }

  // ─── Locator helpers (semantic selectors) ───────────────────────────────────

  getByRole(
    role: 'button' | 'link' | 'textbox' | 'heading' | 'img' | 'checkbox' | 'radio' | 'option',
    options?: { name?: string | RegExp; exact?: boolean }
  ): Locator {
    return this.page.getByRole(role, options);
  }

  getByLabel(text: string | RegExp, options?: { exact?: boolean }): Locator {
    return this.page.getByLabel(text, options);
  }

  getByTestId(testId: string | RegExp): Locator {
    return this.page.getByTestId(testId);
  }

  getByText(text: string | RegExp, options?: { exact?: boolean }): Locator {
    return this.page.getByText(text, options);
  }

  getByPlaceholder(text: string | RegExp): Locator {
    return this.page.getByPlaceholder(text);
  }

  // ─── Reusable actions ───────────────────────────────────────────────────────

  /** Wait for page to reach domcontentloaded (faster than networkidle). */
  async waitForReady(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async clickElement(locator: Locator, options?: { timeout?: number }): Promise<void> {
    await this.withErrorHandling(async () => {
      await locator.click(options);
    }, `clickElement`);
  }

  async fillInput(locator: Locator, value: string, options?: { clear?: boolean }): Promise<void> {
    await this.withErrorHandling(async () => {
      if (options?.clear !== false) {
        await locator.clear();
      }
      await locator.fill(value);
    }, `fillInput`);
  }

  async waitForNavigation(options?: {
    url?: string | RegExp;
    waitUntil?: 'load' | 'domcontentloaded' | 'networkidle';
    timeout?: number;
  }): Promise<void> {
    await this.withErrorHandling(async () => {
      await this.page.waitForURL(options?.url ?? '**', {
        waitUntil: options?.waitUntil ?? 'domcontentloaded',
        timeout: options?.timeout ?? 30_000,
      });
    }, `waitForNavigation`);
  }

  async waitForElement(locator: Locator, options?: { state?: 'visible' | 'attached'; timeout?: number }): Promise<Locator> {
    await this.withErrorHandling(async () => {
      await locator.waitFor({
        state: options?.state ?? 'visible',
        timeout: options?.timeout ?? 10_000,
      });
    }, `waitForElement`);
    return locator;
  }

  // ─── Screenshot helper ──────────────────────────────────────────────────────

  async takeScreenshot(name: string, options?: { fullPage?: boolean }): Promise<string> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `${name}_${timestamp}.png`;
    const screenshotPath = path.join('test-results', 'screenshots', filename);
    await this.withErrorHandling(async () => {
      fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
      await this.page.screenshot({
        path: screenshotPath,
        fullPage: options?.fullPage ?? false,
      });
    }, `takeScreenshot: ${name}`);
    return screenshotPath;
  }

  // ─── Navigation ──────────────────────────────────────────────────────────────

  async goto(path: string = ''): Promise<void> {
    const url = path.startsWith('http') ? path : `${this.baseURL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
    await this.withErrorHandling(async () => {
      await this.page.goto(url);
    }, `goto: ${url}`);
  }

  /** Navigate to path and wait for domcontentloaded. Use when page must be ready before next action. */
  async gotoAndWaitForReady(path: string = ''): Promise<void> {
    await this.goto(path);
    await this.waitForReady();
  }

  // ─── Error handling wrapper ──────────────────────────────────────────────────

  protected async withErrorHandling<T>(
    fn: () => Promise<T>,
    context: string
  ): Promise<T> {
    try {
      return await fn();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`[BasePage] ${context}: ${message}`);
    }
  }
}
