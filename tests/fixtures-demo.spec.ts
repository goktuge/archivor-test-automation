import { test, expect } from '../fixtures';

test.describe('Fixtures demo', () => {
  test('@smoke uses authenticatedPage and testData fixtures', async ({
    authenticatedPage,
    testData,
  }) => {
    await authenticatedPage.goto('/');
    expect(authenticatedPage).toBeTruthy();
    expect(testData).toBeTruthy();
  });

  test('uses dashboardPage fixture', async ({ dashboardPage }) => {
    await dashboardPage.goto('/');
    expect(dashboardPage).toBeTruthy();
  });

  test('uses custom matcher toBeValidEmail', async () => {
    expect('user@example.com').toBeValidEmail();
    
  });
});
