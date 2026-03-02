import { Page } from '@playwright/test';
import { OrganizationSettingsPage } from './OrganizationSettingsPage';

export class DownloadLinksTabPage extends OrganizationSettingsPage {
  constructor(page: Page, baseURL: string = '') {
    super(page, baseURL);
  }

  async gotoDownloadLinksTab(): Promise<void> {
    await this.gotoOrganizationSettings();
    await this.clickTab('Download links');
  }

  // ─── Download links-specific locators (add as needed) ───────────────────────
}
