import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Signup page - supports both custom app signup and Cognito Hosted UI.
 * Archivor uses Cognito; signup may redirect to Cognito or use in-app form.
 */
export class SignupPage extends BasePage {
  constructor(page: Page, baseURL: string = '') {
    super(page, baseURL);
  }

  async gotoSignup(signupPath = '/auth/signup') {
    await this.gotoAndWaitForReady(signupPath);
  }

  async fillSignupForm(email: string, password: string) {
    const emailInput = this.page.getByLabel(/email|e-mail/i)
      .or(this.page.getByPlaceholder(/email|e-mail/i))
      .or(this.page.locator('input[type="email"]'))
      .first();
    const passwordInput = this.page.getByLabel(/password/i)
      .or(this.page.getByPlaceholder(/password/i))
      .or(this.page.locator('input[type="password"]'))
      .first();
    const submitBtn = this.page.getByRole('button', { name: /sign up|signup|create|register|submit/i }).first();

    await emailInput.waitFor({ state: 'visible', timeout: 10_000 });
    await emailInput.fill(email);
    await passwordInput.fill(password);
    await submitBtn.click();
  }
}
