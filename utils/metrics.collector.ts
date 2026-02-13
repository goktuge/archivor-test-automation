export type TestStatus = 'passed' | 'failed' | 'skipped' | 'timedOut';

export interface TestResultMetric {
  testName: string;
  status: TestStatus;
  duration: number;
  browser: string;
  timestamp: string;
}

export interface PerformanceMetric {
  url: string;
  loadTime: number;
  ttfb: number;
  timestamp: string;
}

/**
 * Collects test execution and performance metrics.
 * Stores in memory for now. Implements sendToInfluxDB stub for future integration.
 */
export class TestMetricsCollector {
  private testResults: TestResultMetric[] = [];
  private performanceMetrics: PerformanceMetric[] = [];

  collectTestResult(
    testName: string,
    status: TestStatus,
    duration: number,
    browser: string
  ): void {
    const metric: TestResultMetric = {
      testName,
      status,
      duration,
      browser,
      timestamp: new Date().toISOString(),
    };
    this.testResults.push(metric);
  }

  collectPerformanceMetrics(url: string, loadTime: number, ttfb: number): void {
    const metric: PerformanceMetric = {
      url,
      loadTime,
      ttfb,
      timestamp: new Date().toISOString(),
    };
    this.performanceMetrics.push(metric);
  }

  getTestResults(): TestResultMetric[] {
    return [...this.testResults];
  }

  getPerformanceMetrics(): PerformanceMetric[] {
    return [...this.performanceMetrics];
  }

  getSummary(): {
    total: number;
    passed: number;
    failed: number;
    skipped: number;
    totalDuration: number;
  } {
    const passed = this.testResults.filter((r) => r.status === 'passed').length;
    const failed = this.testResults.filter((r) => r.status === 'failed' || r.status === 'timedOut').length;
    const skipped = this.testResults.filter((r) => r.status === 'skipped').length;
    const totalDuration = this.testResults.reduce((sum, r) => sum + r.duration, 0);

    return {
      total: this.testResults.length,
      passed,
      failed,
      skipped,
      totalDuration,
    };
  }

  clear(): void {
    this.testResults = [];
    this.performanceMetrics = [];
  }

  /** Stub: Send metrics to InfluxDB. InfluxDBReporter handles this. */
  async sendToInfluxDB(): Promise<void> {
    // No-op; InfluxDBReporter writes directly
  }
}

export const metricsCollector = new TestMetricsCollector();
