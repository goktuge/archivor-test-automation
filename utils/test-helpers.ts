import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';

/** Asserts URL matches regex and section title is visible. For section tests (favorites, collections, etc.). */
export async function expectSectionLoaded(
  page: Page,
  urlRegex: RegExp,
  titleRegex: RegExp,
  options?: { timeout?: number }
): Promise<void> {
  await expect(page).toHaveURL(urlRegex);
  await expect(page.getByText(titleRegex).first()).toBeVisible({
    timeout: options?.timeout ?? 5_000,
  });
}
