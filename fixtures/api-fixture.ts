import 'dotenv/config';
import { test as baseTest, expect, request } from '@playwright/test';
import { getClient, GqlAPI } from '../src/api/graphql';

export { expect };

const API_BASE_URL = process.env.ARCHIVOR_API_URL || 'https://api.staging.archivor.io';
const TOKEN = process.env.ARCHIVOR_TOKEN || '';

type ApiFixtures = {
  gql: GqlAPI;
};

export const test = baseTest.extend<ApiFixtures>({
  gql: async ({ }, use) => {
    const apiContext = await request.newContext({
      baseURL: API_BASE_URL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        Authorization: TOKEN,
      },
    });
    const gql = getClient(apiContext, { gqlEndpoint: '/graphql' });
    await use(gql);
    await apiContext.dispose();
  },
});
