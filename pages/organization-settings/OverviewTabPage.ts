import { Page } from '@playwright/test';
import { OrganizationSettingsPage } from './OrganizationSettingsPage';

export class OverviewTabPage extends OrganizationSettingsPage {
  constructor(page: Page, baseURL: string = '') {
    super(page, baseURL);
  }

  async gotoOverviewTab(): Promise<void> {
    await this.gotoOrganizationSettings();
    await this.clickTab('Overview');
  }
}
