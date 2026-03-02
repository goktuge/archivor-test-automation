/**
 * Test API token: node scripts/test-api-token.js [TOKEN]
 * Or: ARCHIVOR_TOKEN=xxx node scripts/test-api-token.js
 */
require('dotenv').config();
const https = require('https');

const token = process.argv[2] || process.env.ARCHIVOR_TOKEN;
if (!token) {
  console.error('Usage: node scripts/test-api-token.js <TOKEN>');
  console.error('Or set ARCHIVOR_TOKEN in .env');
  process.exit(1);
}

const body = JSON.stringify({ query: '{ __schema { types { name } } }' });
const req = https.request(
  {
    hostname: 'api.staging.archivor.io',
    path: '/graphql',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body),
      Authorization: token,
    },
  },
  (res) => {
    let data = '';
    res.on('data', (c) => (data += c));
    res.on('end', () => {
      console.log('Status:', res.statusCode);
      console.log('Response:', data.substring(0, 500));
      try {
        const j = JSON.parse(data);
        if (j.data) {
          console.log('SUCCESS - Schema types count:', j.data.__schema?.types?.length);
        } else if (j.errors) {
          console.log('GraphQL errors:', j.errors);
        }
      } catch (_) {}
    });
  }
);
req.on('error', (e) => console.error(e));
req.write(body);
req.end();
