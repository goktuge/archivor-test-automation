import { Page } from '@playwright/test';
import { OrganizationSettingsPage } from './OrganizationSettingsPage';

export class TeamsTabPage extends OrganizationSettingsPage {
  constructor(page: Page, baseURL: string = '') {
    super(page, baseURL);
  }

  async gotoTeamsTab(): Promise<void> {
    await this.gotoOrganizationSettings();
    await this.clickTab('Teams');
  }

  // ─── Teams-specific locators (add as needed) ─────────────────────────────────
  // get createTeamButton(): Locator { ... }
  // getTeamByName(name: string): Locator { ... }
}
