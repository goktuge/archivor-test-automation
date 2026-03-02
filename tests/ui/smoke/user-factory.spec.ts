import 'dotenv/config';
import { test, expect } from '../../../fixtures/gmail-fixture';
import { createUniqueUser } from '../../../src/ui';

/**
 * Smoke test for unique user signup factory.
 * Requires Gmail OAuth configured (see docs/gmail-oauth-setup.md).
 * Uses chromium-unauth: no pre-login, fresh browser for signup.
 */
test.describe('User factory', () => {
  test('@smoke @user-factory createUniqueUser creates and verifies user', async ({ gmail, page }) => {
    test.skip(!process.env.GMAIL_REFRESH_TOKEN, 'Gmail OAuth not configured');
    const browserContext = page.context();
    const user = await createUniqueUser(gmail, browserContext);

    console.log('Created user:', {
      email: user.email,
      password: '[REDACTED]',
      verified: user.verified,
      verificationLink: user.verificationLink ? '[present]' : undefined,
    });

    expect(user.email).toMatch(/archiver\.automation\+[a-zA-Z0-9_-]+@gmail\.com/);
    expect(user.password).toMatch(/^Archivor2026\./);
    expect(user.verified).toBe(true);
  });
});
