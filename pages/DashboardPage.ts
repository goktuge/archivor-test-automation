import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  constructor(page: Page, baseURL: string = '') {
    super(page, baseURL);
  }

  // ─── Locators ──────────────────────────────────────────────────────────────

  // Add dashboard-specific locators
  // Example: get dashboardHeading() { return this.getByRole('heading', { name: /dashboard/i }); }
}
