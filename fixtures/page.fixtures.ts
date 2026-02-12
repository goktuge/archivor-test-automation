import { test as base } from './metrics.fixture';
import { LoginPage } from '../pages/auth/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

export const test = base.extend<{
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
}>({
  loginPage: async ({ authenticatedPage, baseURL }, use) => {
    const loginPage = new LoginPage(authenticatedPage, baseURL ?? '');
    await use(loginPage);
  },

  dashboardPage: async ({ authenticatedPage, baseURL }, use) => {
    const dashboardPage = new DashboardPage(authenticatedPage, baseURL ?? '');
    await use(dashboardPage);
  },
});

export { expect } from './metrics.fixture';
