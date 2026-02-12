import { Page, Locator } from '@playwright/test';
import { BasePage } from '../BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page, baseURL: string = '') {
    super(page, baseURL);
  }

  // ─── Locators (semantic selectors) ───────────────────────────────────────────

  get emailInput(): Locator {
    return this.page
      .getByLabel(/email/i)
      .or(this.getByPlaceholder(/email/i))
      .or(this.page.locator('input[type="email"]'))
      .or(this.page.locator('input[name*="email" i]'))
      .first();
  }

  get passwordInput(): Locator {
    return this.page
      .getByLabel(/password/i)
      .or(this.getByPlaceholder(/password/i))
      .or(this.page.locator('input[type="password"]'))
      .or(this.page.locator('input[name*="password" i]'))
      .first();
  }

  get loginButton(): Locator {
    return this.getByRole('button', { name: /log in|login|sign in|signin|submit/i }).first();
  }

  // ─── Actions ────────────────────────────────────────────────────────────────

  async login(email: string, password: string): Promise<void> {
    await this.waitForElement(this.emailInput);
    await this.fillInput(this.emailInput, email);
    await this.fillInput(this.passwordInput, password);
    await this.clickElement(this.loginButton);
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      // Success indicators: URL no longer on login, or presence of dashboard/app shell
      await this.page.waitForURL((url) => !url.pathname.match(/login|signin|auth/i), {
        timeout: 10_000,
      });
      return true;
    } catch {
      return false;
    }
  }

  async getErrorMessage(): Promise<string> {
    const errorSelectors = [
      this.page.getByRole('alert'),
      this.getByText(/invalid|incorrect|error|wrong|failed/i),
      this.getByTestId('error-message'),
      this.getByTestId('login-error'),
      this.page.locator('[data-testid*="error"]'),
    ];

    for (const locator of errorSelectors) {
      try {
        const element = locator.first();
        await element.waitFor({ state: 'visible', timeout: 2_000 });
        return await element.textContent() ?? '';
      } catch {
        continue;
      }
    }
    return '';
  }
}
