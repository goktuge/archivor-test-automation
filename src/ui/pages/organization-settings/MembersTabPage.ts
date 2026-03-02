import { Page } from '@playwright/test';
import { OrganizationSettingsPage } from './OrganizationSettingsPage';

export class MembersTabPage extends OrganizationSettingsPage {
  constructor(page: Page, baseURL: string = '') {
    super(page, baseURL);
  }

  async gotoMembersTab(): Promise<void> {
    await this.gotoOrganizationSettings();
    await this.clickTab('Members');
  }

  // ─── Members-specific locators (add as needed) ──────────────────────────────
  // get inviteMemberButton(): Locator { ... }
  // getMemberByEmail(email: string): Locator { ... }
}
