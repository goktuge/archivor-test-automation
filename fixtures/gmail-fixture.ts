import 'dotenv/config';
import { test as baseTest, expect } from '@playwright/test';
import { GmailClient } from '../utils/gmail-client';

const clientId = process.env.GMAIL_CLIENT_ID || '';
const clientSecret = process.env.GMAIL_CLIENT_SECRET || '';
const refreshToken = process.env.GMAIL_REFRESH_TOKEN || '';

export { expect };

type GmailFixtures = {
  gmail: GmailClient;
};

export const test = baseTest.extend<GmailFixtures>({
  gmail: async ({}, use) => {
    if (!clientId || !clientSecret || !refreshToken) {
      // Return a no-op so test can call test.skip() before using gmail
      const noop = {
        waitForEmail: async () => {
          throw new Error('Gmail OAuth not configured. Set GMAIL_* in .env. See docs/gmail-oauth-setup.md');
        },
      } as GmailClient;
      await use(noop);
      return;
    }
    const gmail = new GmailClient(clientId, clientSecret, refreshToken);
    await use(gmail);
  },
});

