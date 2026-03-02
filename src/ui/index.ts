// Page objects
export { BasePage } from './pages/BasePage';
export { LoginPage } from './pages/auth/LoginPage';
export { DashboardPage } from './pages/DashboardPage';
export { AssetsPage } from './pages/AssetsPage';
export { SignupPage } from './pages/SignupPage';
export {
  OrganizationSettingsPage,
  ORG_SETTINGS_TABS,
  type OrgSettingsTab,
} from './pages/organization-settings/OrganizationSettingsPage';
export { OverviewTabPage } from './pages/organization-settings/OverviewTabPage';
export { RolesTabPage } from './pages/organization-settings/RolesTabPage';
export { TeamsTabPage } from './pages/organization-settings/TeamsTabPage';
export { MembersTabPage } from './pages/organization-settings/MembersTabPage';
export { ShareableLinksTabPage } from './pages/organization-settings/ShareableLinksTabPage';
export { DownloadLinksTabPage } from './pages/organization-settings/DownloadLinksTabPage';
export { TagsTabPage } from './pages/organization-settings/TagsTabPage';

// User factory (UI signup + Gmail verification)
export { createUniqueUser } from './user-factory';
