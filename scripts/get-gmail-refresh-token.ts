/**
 * One-time script to get Gmail OAuth2 refresh token.
 * Run: npx ts-node scripts/get-gmail-refresh-token.ts
 * Requires: GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET in .env
 */
import 'dotenv/config';
import * as readline from 'readline';
import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
const clientId = process.env.GMAIL_CLIENT_ID;
const clientSecret = process.env.GMAIL_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.error('Set GMAIL_CLIENT_ID and GMAIL_CLIENT_SECRET in .env');
  process.exit(1);
}

const oauth2 = new google.auth.OAuth2(clientId, clientSecret, 'urn:ietf:wg:oauth:2.0:oob');
const url = oauth2.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
  prompt: 'consent',
});

console.log('Open this URL in browser, sign in, then paste the authorization code:\n');
console.log(url);
console.log('\n');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Authorization code: ', async (code) => {
  rl.close();
  try {
    const { tokens } = await oauth2.getToken(code.trim());
    console.log('\nAdd to .env:\n');
    console.log(`GMAIL_REFRESH_TOKEN=${tokens.refresh_token}`);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
});
