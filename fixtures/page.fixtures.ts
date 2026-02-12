import { test as base } from './metrics.fixture';
import { LoginPage } from '../pages/auth/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { AssetsPage } from '../pages/AssetsPage';

export const test = base.extend<{
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  assetsPage: AssetsPage;
}>({
  loginPage: async ({ authenticatedPage, baseURL }, use) => {
    const loginPage = new LoginPage(authenticatedPage, baseURL ?? '');
    await use(loginPage);
  },

  dashboardPage: async ({ authenticatedPage, baseURL }, use) => {
    const dashboardPage = new DashboardPage(authenticatedPage, baseURL ?? '');
    await use(dashboardPage);
  },

  assetsPage: async ({ authenticatedPage, baseURL }, use) => {
    const assetsPage = new AssetsPage(authenticatedPage, baseURL ?? '');
    await use(assetsPage);
  },
});

export { expect } from './metrics.fixture';
