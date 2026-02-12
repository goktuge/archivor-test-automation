import 'dotenv/config';

export const env = {
  baseUrl: process.env.BASE_URL || 'https://app.staging.archivor.io',
  loginPath: process.env.LOGIN_PATH || '/auth/login',
  testUserEmail: process.env.TEST_USER_EMAIL || '',
  testUserPassword: process.env.TEST_USER_PASSWORD || '',
};
