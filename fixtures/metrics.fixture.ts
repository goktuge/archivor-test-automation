import { test as base } from './base.fixtures';
import { metricsCollector } from '../utils/metrics.collector';
import type { TestStatus } from '../utils/metrics.collector';

// Map Playwright status to our TestStatus
function toTestStatus(status: unknown): TestStatus {
  const s = String(status);
  if (s === 'passed' || s === 'failed' || s === 'skipped' || s === 'timedOut') {
    return s;
  }
  return 'failed';
}

// Auto-collect test execution metrics and attach to Allure after each test
base.afterEach(async ({}, testInfo) => {
  const status = toTestStatus(testInfo.status ?? 'failed');
  const browser = testInfo.project?.name ?? 'unknown';
  const duration = testInfo.duration;

  metricsCollector.collectTestResult(testInfo.title, status, duration, browser);

  // Log metrics to console
  const statusEmoji = status === 'passed' ? '✓' : status === 'failed' ? '✗' : '○';
  console.log(`[Metrics] ${statusEmoji} ${testInfo.title} | ${status} | ${duration}ms | ${browser}`);

  // Attach metrics as Allure environment info (JSON attachment)
  const envInfo = JSON.stringify(
    {
      metrics_summary: metricsCollector.getSummary(),
      test: { title: testInfo.title, status, duration, browser },
    },
    null,
    2
  );
  await testInfo.attach('test-metrics', {
    body: envInfo,
    contentType: 'application/json',
  });
});

export const test = base;
export { expect } from './base.fixtures';
