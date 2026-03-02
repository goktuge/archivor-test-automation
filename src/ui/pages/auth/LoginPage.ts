import { Page, Locator } from '@playwright/test';
import { BasePage } from '../BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page, baseURL: string = '') {
    super(page, baseURL);
  }

  // ─── Locators (label / placeholder / text) ───────────────────────────────────

  get emailInput(): Locator {
    return this.getByLabel(/email|e-mail/i)
      .or(this.getByPlaceholder(/email|e-mail|enter.*email/i))
      .or(this.page.getByRole('textbox', { name: /email/i }))
      .first();
  }

  get passwordInput(): Locator {
    return this.getByLabel(/password/i)
      .or(this.getByPlaceholder(/password/i))
      .or(this.page.locator('input[type="password"]'))
      .first();
  }

  get continueButton(): Locator {
    return this.getByRole('button', { name: /continue/i }).first();
  }

  get loginButton(): Locator {
    return this.getByRole('button', { name: /log in|login|sign in|signin|submit|continue/i }).first();
  }

  // ─── Actions ────────────────────────────────────────────────────────────────

  async login(email: string, password: string): Promise<void> {
    await this.waitForElement(this.emailInput);
    await this.fillInput(this.emailInput, email);
    await this.clickElement(this.continueButton);
    await this.waitForElement(this.passwordInput);
    await this.fillInput(this.passwordInput, password);
    await this.clickElement(this.loginButton);
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      // Success indicators: URL no longer on login, or presence of dashboard/app shell
      await this.page.waitForURL((url) => !url.pathname.match(/login|signin|auth/i));
      return true;
    } catch {
      return false;
    }
  }

  async getErrorMessage(): Promise<string> {
    const errorSelectors = [
      this.page.getByRole('alert'),
      this.getByText(/invalid|incorrect|error|wrong|failed|must|required|include|character/i),
    ];

    for (const locator of errorSelectors) {
      try {
        const element = locator.first();
        await element.waitFor({ state: 'visible' });
        return await element.textContent() ?? '';
      } catch {
        continue;
      }
    }
    return '';
  }
}
