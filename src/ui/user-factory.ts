import { nanoid } from 'nanoid';
import type { BrowserContext } from '@playwright/test';
import type { TestUser } from '../../interfaces/test-user';
import type { GmailClient } from '../../utils/gmail-client';
import { env } from '../../config/env.config';

const BASE_EMAIL = 'archiver.automation';
const PASSWORD_PREFIX = 'Archivor2026.';
const SIGNUP_URL = `${env.baseUrl}/auth/signup`;
const SUCCESS_URL_REGEX = /\/success|\/dashboard|\/verified|archivor\.io\/app/i;

/**
 * Create a unique user via UI signup, Gmail activation, and browser verification.
 * No token - signup is public.
 */
export async function createUniqueUser(
  gmailClient: GmailClient,
  browserContext: BrowserContext
): Promise<TestUser> {
  const suffix = nanoid(8);
  const email = `${BASE_EMAIL}+${suffix}@gmail.com`;
  const password = `${PASSWORD_PREFIX}${suffix}`;

  const page = await browserContext.newPage();

  try {
    await page.goto(SIGNUP_URL, { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle').catch(() => {});

    const emailInput = page.getByLabel(/email|e-mail/i)
      .or(page.getByPlaceholder(/email|e-mail/i))
      .or(page.locator('input[type="email"]'))
      .first();
    const passwordInput = page.getByLabel(/password/i)
      .or(page.getByPlaceholder(/password/i))
      .or(page.locator('input[type="password"]'))
      .first();
    const submitBtn = page.getByRole('button', { name: /sign up|signup|create|register|submit|continue/i }).first();

    const emailVisible = await emailInput.isVisible().catch(() => false);
    if (!emailVisible) {
      const signUpLink = page.getByRole('link', { name: /sign up|signup|create account|register/i }).first();
      if (await signUpLink.isVisible().catch(() => false)) {
        await signUpLink.click();
        await page.waitForLoadState('networkidle').catch(() => {});
      }
    }

    await emailInput.waitFor({ state: 'visible', timeout: 15_000 });
    await emailInput.fill(email);
    await passwordInput.fill(password);
    await submitBtn.click();

    const { body, link } = await gmailClient.waitForEmail({
      toEmail: email,
      subjectRegex: /verify|activate|confirm/i,
      timeoutMs: 30_000,
      pollIntervalMs: 2_000,
    });

    if (!link) {
      throw new Error(`Activation link not found in email body. Body preview: ${body.substring(0, 500)}`);
    }

    const verifyPage = await browserContext.newPage();
    await verifyPage.goto(link, { waitUntil: 'domcontentloaded' });
    await verifyPage.waitForURL(SUCCESS_URL_REGEX, { timeout: 15_000 });

    await page.close().catch(() => {});
    await verifyPage.close().catch(() => {});

    return {
      email,
      password,
      verificationLink: link,
      verified: true,
    };
  } catch (err) {
    await page.close().catch(() => {});
    if (err instanceof Error) {
      if (err.message.includes('email') && err.message.includes('already')) {
        throw new Error(`Signup failed: Email ${email} may already exist. Try a different suffix.`);
      }
      throw err;
    }
    throw err;
  }
}
