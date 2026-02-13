import { test, expect } from '../fixtures';
import { env } from '../config/env.config';

// Login tests require archivor.io login page - update LoginPage locators for your app structure
test.describe('Login', () => {
  test.describe('Authentication flow', () => {
    test('@smoke @auth @critical Login with valid credentials', async ({
      loginPage,
    }) => {
      await loginPage.gotoAndWaitForReady(env.loginPath);
      await loginPage.login(env.testUserEmail, env.testUserPassword);
      const loggedIn = await loginPage.isLoggedIn();
      expect(loggedIn).toBe(true);
    });

    test('@regression @auth @e2e Login with invalid credentials shows error', async ({
      loginPage,
    }) => {
      await loginPage.gotoAndWaitForReady(env.loginPath);
      // Use password that passes format validation to trigger real server error
      await loginPage.login('invalid@example.com', 'WrongPassword123!');
      const errorMessage = await loginPage.getErrorMessage();
      expect(errorMessage.length).toBeGreaterThan(0);
    });

    test('@regression @auth Login page loads successfully', async ({
      loginPage,
      authenticatedPage,
    }) => {
      await loginPage.goto(env.loginPath);
      await expect(authenticatedPage).toHaveURL(/archivor\.io/);
    });
  });

  test.describe('Form validation', () => {
    test('@e2e @auth Login with empty credentials shows validation', async ({
      loginPage,
    }) => {
      await loginPage.gotoAndWaitForReady(env.loginPath);
      // Archivor disables Continue when email is empty - implicit validation
      const continueBtn = loginPage.continueButton;
      await continueBtn.waitFor({ state: 'visible' });
      await expect(continueBtn).toBeDisabled();
      // Email field should be empty
      await expect(loginPage.emailInput).toHaveValue('');
    });
  });
});
