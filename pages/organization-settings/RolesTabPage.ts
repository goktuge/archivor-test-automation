import { Page } from '@playwright/test';
import { OrganizationSettingsPage } from './OrganizationSettingsPage';

export class RolesTabPage extends OrganizationSettingsPage {
  constructor(page: Page, baseURL: string = '') {
    super(page, baseURL);
  }

  async gotoRolesTab(): Promise<void> {
    await this.gotoOrganizationSettings();
    await this.clickTab('Roles');
  }

  // ─── Roles-specific locators (add as needed) ──────────────────────────────────
  // get createRoleButton(): Locator { ... }
  // getRoleByName(name: string): Locator { ... }
}
