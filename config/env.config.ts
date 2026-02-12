import 'dotenv/config';

export const env = {
  baseUrl: process.env.BASE_URL || 'https://app.staging.archivor.io',
  testUserEmail: process.env.TEST_USER_EMAIL || '',
  testUserPassword: process.env.TEST_USER_PASSWORD || '',
};
