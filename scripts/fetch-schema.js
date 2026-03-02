const https = require('https');
const fs = require('fs');
const path = require('path');
const { getIntrospectionQuery, buildClientSchema, printSchema } = require('graphql');

const token = process.env.ARCHIVOR_TOKEN || '';
const body = JSON.stringify({ query: getIntrospectionQuery() });

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
      const json = JSON.parse(data);
      if (json.errors) {
        console.error('GraphQL errors:', JSON.stringify(json.errors, null, 2));
        process.exit(1);
      }
      if (!json.data) {
        console.error('No data in response:', data.substring(0, 500));
        process.exit(1);
      }
      const schema = buildClientSchema(json.data);
      const sdl = printSchema(schema);
      const outDir = path.join(process.cwd(), 'src', 'api');
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'schema.gql'), sdl);
      console.log('Schema saved to src/api/schema.gql');
    });
  }
);
req.on('error', (e) => {
  console.error(e);
  process.exit(1);
});
req.write(body);
req.end();
