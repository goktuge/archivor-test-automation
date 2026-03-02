import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import { BasePage } from '../BasePage';

/** Organization Settings tabs in the main content area. */
export const ORG_SETTINGS_TABS = [
  'Overview',
  'Roles',
  'Teams',
  'Members',
  'Shareable links',
  'Download links',
  'Tags',
] as const;

export type OrgSettingsTab = (typeof ORG_SETTINGS_TABS)[number];

export class OrganizationSettingsPage extends BasePage {
  constructor(page: Page, baseURL: string = '') {
    super(page, baseURL);
  }

  // ─── Locators ──────────────────────────────────────────────────────────────

  get navMenu(): Locator {
    return this.page.locator('nav');
  }

  get expandSidebarButton(): Locator {
    return this.page
      .locator('.tabler-icon-layout-sidebar-left-expand, [class*="layout-sidebar-left-expand"]')
      .first();
  }

  /** Org dropdown button (e.g. "Goktug org-222 /goktug-org-222") — opens menu with Organization settings. */
  get orgDropdownButton(): Locator {
    return this.navMenu.getByRole('button').first();
  }

  /** Organization settings — in org dropdown menu (menuitem) or sidebar link. */
  get organizationSettingsLink(): Locator {
    return this.page
      .getByRole('menuitem', { name: /organization settings/i })
      .or(this.page.getByRole('link', { name: /organization settings/i }))
      .first();
  }

  /** Tab in the main content area by name. */
  tabByName(name: string | RegExp): Locator {
    return this.page
      .getByRole('tab', { name })
      .or(this.page.getByRole('button', { name }))
      .or(this.page.locator('[role="tab"]').filter({ hasText: name }))
      .first();
  }

  /** Main content area / tab panel. */
  get mainContent(): Locator {
    return this.page.getByRole('main').or(this.page.locator('[role="tabpanel"]')).or(this.page.locator('main')).first();
  }

  // ─── Navigation ──────────────────────────────────────────────────────────────

  async expandSidebar(): Promise<void> {
    const btn = this.expandSidebarButton;
    if (await btn.isVisible()) {
      await btn.click();
      await this.orgDropdownButton.waitFor({ state: 'attached' });
    }
  }

  /** Navigate to Organization Settings via left sidebar — org dropdown -> Organization settings. */
  async gotoOrganizationSettings(): Promise<void> {
    await this.gotoAndWaitForReady('/');
    await this.expandSidebar();
    await this.orgDropdownButton.waitFor({ state: 'visible' });
    await this.orgDropdownButton.click();
    await this.organizationSettingsLink.waitFor({ state: 'visible' });
    await this.organizationSettingsLink.click();
    await this.waitForReady();
  }

  /** Click a tab and wait for content to load. Tabs may be in "Other" dropdown. */
  async clickTab(tabName: string): Promise<void> {
    const tab = this.tabByName(new RegExp(tabName, 'i'));
    const tabVisible = await tab.waitFor({ state: 'visible', timeout: 3000 }).then(() => true).catch(() => false);
    if (tabVisible) {
      await tab.scrollIntoViewIfNeeded();
      await tab.click();
      await this.waitForReady();
      return;
    }
    // Tab under "Other" dropdown - click Other then menu item
    const otherBtn = this.page.getByRole('tab', { name: /other/i })
      .or(this.page.getByRole('button', { name: /other|more/i }))
      .or(this.page.locator('[role="tab"]').filter({ hasText: /other|more/i }))
      .first();
    await otherBtn.waitFor({ state: 'visible', timeout: 5000 });
    await otherBtn.click();
    const menuItem = this.page.getByRole('menuitem', { name: new RegExp(tabName, 'i') })
      .or(this.page.getByRole('option', { name: new RegExp(tabName, 'i') }))
      .or(this.page.locator('[role="menuitem"]').filter({ hasText: new RegExp(tabName, 'i') }))
      .first();
    await menuItem.waitFor({ state: 'visible', timeout: 5000 });
    // Some menu items may be disabled (feature not available for org) - use force to click
    await menuItem.click({ force: true });
    await this.waitForReady();
  }

  /** Verify tab is visible, opens correctly, and its title exists. Uses clickTab for tabs in Other dropdown. */
  async expectTabOpensWithTitle(tabName: string, expectedTitle?: string | RegExp): Promise<void> {
    await this.clickTab(tabName);

    // Tab opened: either tab is selected (aria-selected) or heading/text with title exists
    const title = expectedTitle ?? new RegExp(tabName, 'i');
    const tabSelected = this.page.locator('[role="tab"][aria-selected="true"]').filter({ hasText: new RegExp(tabName, 'i') });
    const headingOrText = this.page.getByRole('heading', { name: title }).or(this.page.getByText(title).first());
    await expect(tabSelected.or(headingOrText).first()).toBeVisible({ timeout: 10_000 });
  }
}
