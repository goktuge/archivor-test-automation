import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/** Href for each expected nav item. Sidebar may show icons only (labels in tooltip). */
const MENU_HREFS = ['home', 'assets', 'favorites', 'collections', 'trash'] as const;

export class DashboardPage extends BasePage {
  constructor(page: Page, baseURL: string = '') {
    super(page, baseURL);
  }

  // ─── Locators ──────────────────────────────────────────────────────────────

  get navMenu(): Locator {
    return this.page.locator('nav');
  }

  get expandSidebarButton(): Locator {
    return this.page.locator('.tabler-icon-layout-sidebar-left-expand, [class*="layout-sidebar-left-expand"]').first();
  }

  async expandSidebar(): Promise<void> {
    const btn = this.expandSidebarButton;
    if (await btn.isVisible()) {
      await btn.click();
      await this.menuLinkByHref('home').waitFor({ state: 'attached' });
    }
  }

  menuLinkByHref(href: string): Locator {
    return this.navMenu.locator(`a[href*="${href}"]`).first();
  }

  /** Navigate to a section via left menu. */
  async gotoSection(section: 'home' | 'assets' | 'favorites' | 'collections' | 'trash'): Promise<void> {
    await this.expandSidebar();
    const link = this.menuLinkByHref(section);
    await link.click();
    await this.waitForReady();
  }

  /**
   * Verifies all 5 menu items exist and are visible.
   * Expands sidebar first (for gotoSection). Sidebar may show icons only; we assert links by href.
   */
  async expectAllMenuItemsVisible(): Promise<void> {
    await this.expandSidebar();
    for (const href of MENU_HREFS) {
      const link = this.menuLinkByHref(href);
      await link.waitFor({ state: 'visible' });
    }
  }
}
