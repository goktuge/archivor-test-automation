import { test } from '@playwright/test';
import { authenticate } from '../utils/auth';

/**
 * Performs authentication and saves state to .auth/user.json.
 * Use when global setup auth is insufficient (e.g., isolated login tests).
 * Run with: npx playwright test --grep @setup
 */
export async function setupAuth(): Promise<void> {
  await authenticate();
}

test.describe('@setup Auth setup', () => {
  test('@setup perform authentication', async () => {
    await setupAuth();
  });
});
