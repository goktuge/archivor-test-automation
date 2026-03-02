import { Page } from '@playwright/test';
import { OrganizationSettingsPage } from './OrganizationSettingsPage';

export class ShareableLinksTabPage extends OrganizationSettingsPage {
  constructor(page: Page, baseURL: string = '') {
    super(page, baseURL);
  }

  async gotoShareableLinksTab(): Promise<void> {
    await this.gotoOrganizationSettings();
    await this.clickTab('Shareable links');
  }

  // ─── Shareable links-specific locators (add as needed) ───────────────────────
}
