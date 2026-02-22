import { test as base } from './metrics.fixture';
import { LoginPage } from '../pages/auth/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { AssetsPage } from '../pages/AssetsPage';
import { OrganizationSettingsPage } from '../pages/organization-settings/OrganizationSettingsPage';
import { OverviewTabPage } from '../pages/organization-settings/OverviewTabPage';
import { RolesTabPage } from '../pages/organization-settings/RolesTabPage';
import { TeamsTabPage } from '../pages/organization-settings/TeamsTabPage';
import { MembersTabPage } from '../pages/organization-settings/MembersTabPage';
import { ShareableLinksTabPage } from '../pages/organization-settings/ShareableLinksTabPage';
import { DownloadLinksTabPage } from '../pages/organization-settings/DownloadLinksTabPage';
import { TagsTabPage } from '../pages/organization-settings/TagsTabPage';

export const test = base.extend<{
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  assetsPage: AssetsPage;
  organizationSettingsPage: OrganizationSettingsPage;
  overviewTabPage: OverviewTabPage;
  rolesTabPage: RolesTabPage;
  teamsTabPage: TeamsTabPage;
  membersTabPage: MembersTabPage;
  shareableLinksTabPage: ShareableLinksTabPage;
  downloadLinksTabPage: DownloadLinksTabPage;
  tagsTabPage: TagsTabPage;
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

  organizationSettingsPage: async ({ authenticatedPage, baseURL }, use) => {
    const organizationSettingsPage = new OrganizationSettingsPage(authenticatedPage, baseURL ?? '');
    await use(organizationSettingsPage);
  },

  overviewTabPage: async ({ authenticatedPage, baseURL }, use) => {
    await use(new OverviewTabPage(authenticatedPage, baseURL ?? ''));
  },
  rolesTabPage: async ({ authenticatedPage, baseURL }, use) => {
    await use(new RolesTabPage(authenticatedPage, baseURL ?? ''));
  },
  teamsTabPage: async ({ authenticatedPage, baseURL }, use) => {
    await use(new TeamsTabPage(authenticatedPage, baseURL ?? ''));
  },
  membersTabPage: async ({ authenticatedPage, baseURL }, use) => {
    await use(new MembersTabPage(authenticatedPage, baseURL ?? ''));
  },
  shareableLinksTabPage: async ({ authenticatedPage, baseURL }, use) => {
    await use(new ShareableLinksTabPage(authenticatedPage, baseURL ?? ''));
  },
  downloadLinksTabPage: async ({ authenticatedPage, baseURL }, use) => {
    await use(new DownloadLinksTabPage(authenticatedPage, baseURL ?? ''));
  },
  tagsTabPage: async ({ authenticatedPage, baseURL }, use) => {
    await use(new TagsTabPage(authenticatedPage, baseURL ?? ''));
  },
});

export { expect } from './metrics.fixture';
