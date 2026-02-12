import fs from 'fs';
import path from 'path';
import type { FullConfig } from '@playwright/test';
import 'dotenv/config';
import { authenticate } from '../utils/auth';

const AUTH_FILE = path.join(process.cwd(), '.auth', 'user.json');

async function globalSetup(_config: FullConfig) {
  try {
    await authenticate();
  } catch (error) {
    console.warn('Global auth setup failed:', error instanceof Error ? error.message : error);
    // Create empty storage state so Playwright can load it (tests will run unauthenticated)
    fs.mkdirSync(path.dirname(AUTH_FILE), { recursive: true });
    fs.writeFileSync(AUTH_FILE, JSON.stringify({ cookies: [], origins: [] }));
  }
}

export default globalSetup;
