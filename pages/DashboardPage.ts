import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/** Expected left menu item labels. Nav links may show text in tooltip on hover. */
const MENU_ITEMS = [
  'Dashboard',
  'All assets',
  'My favorites',
  'Collections',
  'Recently deleted',
] as const;

/** Href -> possible labels (tooltip may vary). */
const MENU_MAPPING: Array<{ href: string; labels: string[] }> = [
  { href: 'home', labels: ['Dashboard', 'Home'] },
  { href: 'assets', labels: ['All assets', 'Assets'] },
  { href: 'favorites', labels: ['My favorites', 'Favorites'] },
  { href: 'collections', labels: ['Collections', 'Collection'] },
  { href: 'trash', labels: ['Recently deleted', 'Trash'] },
];

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
      await this.menuLinkByHref('home').waitFor({ state: 'attached', timeout: 5_000 });
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
   * Verifies all 5 menu items exist and show expected text.
   * Expands sidebar first, then checks each menu item label in nav.
   */
  async expectAllMenuItemsVisible(): Promise<void> {
    await this.expandSidebar();
    for (const { href, labels } of MENU_MAPPING) {
      const link = this.menuLinkByHref(href);
      await link.waitFor({ state: 'visible', timeout: 5_000 });
      const labelPattern = new RegExp(labels.join('|'), 'i');
      await this.navMenu.getByText(labelPattern).first().waitFor({ state: 'visible', timeout: 5_000 });
    }
  }
}
