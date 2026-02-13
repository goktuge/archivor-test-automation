/**
 * Site exploration script:
 * - Logs in with TEST_USER_EMAIL / TEST_USER_PASSWORD from .env
 * - Navigates through main sections
 * - Discovers links, buttons, forms for test case ideas
 * Run: npx ts-node scripts/explore-site.ts
 */
import 'dotenv/config';
import { chromium } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://app.staging.archivor.io';
const LOGIN_PATH = process.env.LOGIN_PATH || '/auth/login';
const EMAIL = process.env.TEST_USER_EMAIL || '';
const PASSWORD = process.env.TEST_USER_PASSWORD || '';

async function explore() {
  if (!EMAIL || !PASSWORD) {
    console.warn('⚠ TEST_USER_EMAIL and TEST_USER_PASSWORD required in .env');
    return;
  }

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ baseURL: BASE_URL });
  const page = await context.newPage();

  try {
    console.log('📄 Navigating to login...');
    await page.goto(LOGIN_PATH);
    await page.waitForLoadState('networkidle');

    // Step 1: Email
    const emailInput = page.getByLabel(/email|e-posta/i).or(page.getByPlaceholder(/email|e-posta/i)).first();
    await emailInput.fill(EMAIL);
    await page.getByRole('button', { name: /continue|devam/i }).first().click();

    // Step 2: Password
    const passwordInput = page.getByPlaceholder(/password|şifre/i).or(page.locator('input[type="password"]')).first();
    await passwordInput.waitFor({ state: 'visible', timeout: 5000 });
    await passwordInput.fill(PASSWORD);
    await page.getByRole('button', { name: /log in|login|giriş/i }).first().click();

    await page.waitForURL((url) => !url.pathname.match(/login|signin|auth/i), { timeout: 15000 });
    console.log('✅ Logged in');

    // Explore dashboard
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Expand sidebar if collapsed
    const expandBtn = page.locator('.tabler-icon-layout-sidebar-left-expand, [class*="layout-sidebar-left-expand"]');
    if (await expandBtn.first().isVisible()) {
      await expandBtn.first().click();
      await page.waitForTimeout(500);
    }

    // Collect nav links
    const navLinks = await page.locator('nav a[href]').evaluateAll((els) =>
      els.map((a) => ({ href: (a as HTMLAnchorElement).getAttribute('href'), text: (a as HTMLElement).innerText?.trim() }))
    );
    console.log('\n📌 Nav links:', JSON.stringify(navLinks.filter((l) => l.text), null, 2));

    // Check for "New" button and submenu
    const newBtn = page.getByRole('button', { name: /new/i }).first();
    if (await newBtn.isVisible()) {
      await newBtn.click();
      await page.waitForTimeout(500);
      const menuItems = await page.getByRole('menuitem').allTextContents();
      console.log('\n📌 New menu items:', menuItems);
      await page.keyboard.press('Escape');
    }

    // Go to All assets
    const assetsLink = page.locator('nav a[href*="assets"]').first();
    if (await assetsLink.isVisible()) {
      await assetsLink.click();
      await page.waitForLoadState('networkidle');
      console.log('\n📄 On All assets page');
      const headings = await page.locator('h1, h2, [role="heading"]').allTextContents();
      console.log('Headings:', headings);
    }

    // Go to Collections
    const collectionsLink = page.locator('nav a[href*="collection"]').first();
    if (await collectionsLink.isVisible()) {
      await collectionsLink.click();
      await page.waitForLoadState('networkidle');
      console.log('\n📄 On Collections page');
    }

    // Go to Favorites
    const favLink = page.locator('nav a[href*="favorite"]').first();
    if (await favLink.isVisible()) {
      await favLink.click();
      await page.waitForLoadState('networkidle');
      console.log('\n📄 On My favorites page');
    }

    // Go to Recently deleted
    const trashLink = page.locator('nav a[href*="trash"]').first();
    if (await trashLink.isVisible()) {
      await trashLink.click();
      await page.waitForLoadState('networkidle');
      console.log('\n📄 On Recently deleted page');
    }

    console.log('\n✅ Exploration complete. Browser will stay open for 10s...');
    await page.waitForTimeout(10_000);
  } finally {
    await browser.close();
  }
}

explore().catch(console.error);
