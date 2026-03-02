import path from 'path';
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AssetsPage extends BasePage {
  constructor(page: Page, baseURL: string = '') {
    super(page, baseURL);
  }

  // ─── Locators ──────────────────────────────────────────────────────────────

  get newButton(): Locator {
    return this.getByRole('button', { name: /new/i }).first();
  }

  get fileUploadButton(): Locator {
    return this.page
      .getByRole('button', { name: /file upload|upload file|upload/i })
      .or(this.page.getByRole('menuitem', { name: /file upload|upload file|upload/i }))
      .or(this.page.getByText(/file upload|upload file/i).first())
      .first();
  }

  get fileInput(): Locator {
    return this.page.locator('input[type="file"]:not([webkitdirectory])').first();
  }

  get completedMessage(): Locator {
    return this.getByText(/1 of 1 completed|1\/1 completed|upload complete/i);
  }

  get allAssetsLink(): Locator {
    return this.page.locator('nav a[href*="assets"], a[href*="/assets"]').first();
  }

  rowByFileName(fileName: string): Locator {
    return this.page
      .locator('tr, [role="row"], .table-row, [data-testid*="row"], [class*="row"], [class*="TableRow"]')
      .filter({ hasText: fileName })
      .first();
  }

  /** Row that contains fileName and does NOT show "queued" (upload completed). */
  completedRowByFileName(fileName: string): Locator {
    return this.page
      .locator('tr, [role="row"], .table-row')
      .filter({ hasText: fileName })
      .filter({ hasNotText: 'queued' })
      .first();
  }

  /** Any element containing the file name (fallback when row structure varies). */
  elementWithFileName(fileName: string): Locator {
    return this.page.getByText(fileName, { exact: false }).first();
  }

  /** Checkbox in row for selection (used before delete via selection bar). */
  rowCheckbox(row: Locator): Locator {
    return row.locator('input[type="checkbox"]')
      .or(row.getByRole('checkbox'))
      .or(row.locator('[role="checkbox"]'))
      .or(row.locator('.checkbox, [class*="checkbox"]'))
      .first();
  }

  threeDotsInRow(row: Locator): Locator {
    return row.locator('button').last();
  }

  /** Delete option in the row context menu (after clicking three-dots). Scope to visible menu. */
  get deleteMenuItem(): Locator {
    const menu = this.page.getByRole('menu');
    return menu.getByRole('menuitem', { name: /delete|move to trash|remove|trash/i })
      .or(menu.getByRole('button', { name: /delete|move to trash|trash|remove/i }))
      .or(menu.getByText(/delete|move to trash|remove|trash/i).first())
      .or(this.page.getByRole('menuitem', { name: /delete|move to trash|remove|trash/i }))
      .first();
  }

  /** Trash/delete button in the bottom selection bar (when 1+ items selected). */
  get selectionBarDeleteButton(): Locator {
    const bar = this.page.locator(':has-text("item selected")');
    return bar.getByRole('button').last()
      .or(bar.locator('button[aria-label*="trash" i], button[aria-label*="delete" i]'))
      .or(this.page.getByRole('button', { name: /delete|trash|remove/i }))
      .or(this.page.locator('button[aria-label*="delete" i], button[aria-label*="trash" i]'))
      .first();
  }

  get confirmDeleteButton(): Locator {
    return this.page
      .getByRole('button', { name: /^delete$|^remove$|move to trash|confirm.*delete|delete.*confirm/i })
      .first();
  }

  // ─── Actions ───────────────────────────────────────────────────────────────

  async clickNew(): Promise<void> {
    await this.waitForElement(this.newButton);
    await this.clickElement(this.newButton);
    await this.page.getByRole('menu').waitFor({ state: 'visible' });
  }

  /** Opens New menu, returns menu item labels, then closes menu. */
  async getNewMenuOptions(): Promise<string[]> {
    await this.clickNew();
    const items = await this.page.getByRole('menuitem').allTextContents();
    await this.page.keyboard.press('Escape');
    return items.map((s) => s.trim()).filter(Boolean);
  }

  /** New → Create Folder. Caller must handle modal (cancel/confirm). */
  async clickCreateFolder(): Promise<void> {
    await this.clickNew();
    await this.page.getByRole('menuitem', { name: /create folder/i }).click();
    await this.page.getByRole('dialog').waitFor({ state: 'visible' });
  }

  /** New → New Collection. Caller must handle modal (cancel/confirm). */
  async clickNewCollection(): Promise<void> {
    await this.clickNew();
    await this.page.getByRole('menuitem', { name: /new collection/i }).click();
    await this.page.getByRole('dialog').waitFor({ state: 'visible' });
  }

  /** Close modal/dialog via Cancel button. */
  async cancelModal(): Promise<void> {
    const cancelBtn = this.page.getByRole('button', { name: /cancel/i }).first();
    await cancelBtn.waitFor({ state: 'visible' });
    await cancelBtn.click();
  }

  /**
   * Upload file without opening the Windows file dialog.
   * Clicks File upload to open modal, then setInputFiles on the input directly (no click on input = no dialog).
   */
  async uploadFileWithoutDialog(filePath: string): Promise<void> {
    const fullPath = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
    await this.fileUploadButton.waitFor({ state: 'visible' });
    await this.fileUploadButton.click();
    await this.fileInput.waitFor({ state: 'attached' });
    await this.fileInput.setInputFiles(fullPath);
  }

  /** Direct setInputFiles when input is already visible. */
  async uploadFile(filePath: string): Promise<void> {
    const fullPath = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
    await this.fileInput.setInputFiles(fullPath);
  }

  async waitForUploadComplete(fileName: string, timeout = 60_000): Promise<void> {
    await Promise.race([
      this.completedMessage.waitFor({ state: 'visible', timeout }),
      this.rowByFileName(fileName).waitFor({ state: 'visible', timeout }),
    ]);
  }

  async goToAllAssets(): Promise<void> {
    await this.waitForElement(this.allAssetsLink);
    await this.clickElement(this.allAssetsLink);
    await this.waitForReady();
  }

  async refreshPage(): Promise<void> {
    await this.pageForTest.reload();
    await this.waitForReady();
  }

  async openRowMenu(fileName: string, preferCompleted = false): Promise<void> {
    const row = preferCompleted ? this.completedRowByFileName(fileName) : this.rowByFileName(fileName);
    await row.waitFor({ state: 'visible' });
    await row.scrollIntoViewIfNeeded();
    const dots = this.threeDotsInRow(row);
    await dots.click();
    await this.page.getByRole('menu').waitFor({ state: 'visible', timeout: 5000 });
  }

  /** Select row (click checkbox to select), then delete via bottom selection bar. */
  async selectRowAndDeleteViaBar(fileName: string): Promise<void> {
    const row = this.completedRowByFileName(fileName).or(this.rowByFileName(fileName));
    await row.first().waitFor({ state: 'visible' });
    await row.first().scrollIntoViewIfNeeded();
    const checkbox = row.first().locator('input[type="checkbox"], [role="checkbox"]').first();
    if (await checkbox.isVisible().catch(() => false)) {
      await checkbox.click();
    } else {
      await row.first().click();
    }
    await this.selectionBarDeleteButton.waitFor({ state: 'visible', timeout: 10_000 });
    await this.selectionBarDeleteButton.click();
  }

  async clickDelete(): Promise<void> {
    await this.waitForElement(this.deleteMenuItem);
    await this.clickElement(this.deleteMenuItem);
  }

  async confirmDelete(): Promise<void> {
    await this.waitForElement(this.confirmDeleteButton);
    await this.clickElement(this.confirmDeleteButton);
  }

  async isFileInList(fileName: string): Promise<boolean> {
    const row = this.rowByFileName(fileName);
    return row.isVisible();
  }

  async isFileNotInList(fileName: string): Promise<boolean> {
    const row = this.rowByFileName(fileName);
    await row.waitFor({ state: 'detached' });
    return true;
  }
}
