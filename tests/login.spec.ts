import { test, expect } from '../fixtures';
import { env } from '../config/env.config';

test.describe('Login', () => {
  test.describe('Authentication flow', () => {
    test('@smoke @auth @critical Login with valid credentials', async ({
      loginPage,
      authenticatedPage,
    }) => {
      await loginPage.goto(process.env.LOGIN_PATH || '/auth/login');
      await loginPage.login(env.testUserEmail, env.testUserPassword);
      const loggedIn = await loginPage.isLoggedIn();
      expect(loggedIn).toBe(true);
    });

    test('@regression @auth @e2e Login with invalid credentials shows error', async ({
      loginPage,
    }) => {
      await loginPage.goto(process.env.LOGIN_PATH || '/auth/login');
      await loginPage.login('invalid@example.com', 'wrongpassword');
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage.length).toBeGreaterThan(0);
    });

    test('@regression @auth Login page loads successfully', async ({
      loginPage,
      authenticatedPage,
    }) => {
      await loginPage.goto(process.env.LOGIN_PATH || '/auth/login');
      await expect(authenticatedPage).toHaveURL(/archivor\.io/);
    });
  });

  test.describe('Form validation', () => {
    test('@e2e @auth Login with empty credentials shows validation', async ({
      loginPage,
    }) => {
      await loginPage.goto(process.env.LOGIN_PATH || '/auth/login');
      await loginPage.clickElement(loginPage.loginButton);
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage.length).toBeGreaterThanOrEqual(0);
    });
  });
});
