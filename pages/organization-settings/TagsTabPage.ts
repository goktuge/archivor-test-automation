import { Page } from '@playwright/test';
import { OrganizationSettingsPage } from './OrganizationSettingsPage';

export class TagsTabPage extends OrganizationSettingsPage {
  constructor(page: Page, baseURL: string = '') {
    super(page, baseURL);
  }

  async gotoTagsTab(): Promise<void> {
    await this.gotoOrganizationSettings();
    await this.clickTab('Tags');
  }

  // ─── Tags-specific locators (add as needed) ──────────────────────────────────
  // get createTagButton(): Locator { ... }
  // getTagByName(name: string): Locator { ... }
}
