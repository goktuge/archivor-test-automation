import { test, expect } from '../fixtures';

test.describe('Fixtures demo', () => {
  test('@smoke uses authenticatedPage and testData fixtures', async ({
    authenticatedPage,
    testData,
  }) => {
    await authenticatedPage.goto('/');
    expect(authenticatedPage).toBeDefined();
    expect(testData).toBeDefined();
  });

  test('uses dashboardPage fixture', async ({ dashboardPage }) => {
    await dashboardPage.goto('/');
    expect(dashboardPage).toBeDefined();
  });

  test('uses custom matcher toBeValidEmail', async () => {
    expect('user@example.com').toBeValidEmail();
  });
});
