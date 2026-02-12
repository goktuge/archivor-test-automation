/**
 * InfluxDB connection configuration.
 * Reads from environment variables when available.
 */

export interface InfluxDBConfig {
  enabled: boolean;
  url: string;
  token: string;
  org: string;
  bucket: string;
}

export function getInfluxDBConfig(): InfluxDBConfig {
  return {
    enabled: process.env.INFLUXDB_ENABLED === 'true',
    // e.g. https://us-central1-1.gcp.cloud2.influxdata.com
    url: process.env.INFLUXDB_URL || '',
    // InfluxDB 2.x API token
    token: process.env.INFLUXDB_TOKEN || '',
    // InfluxDB organization name
    org: process.env.INFLUXDB_ORG || '',
    // InfluxDB bucket for test metrics
    bucket: process.env.INFLUXDB_BUCKET || 'playwright-metrics',
  };
}
