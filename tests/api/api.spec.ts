import { test, expect } from '../../fixtures/api-fixture';
import { UserApi } from '../../src/api/pages/UserApi';
import { OrganizationApi } from '../../src/api/pages/OrganizationApi';
import { AttachmentsApi } from '../../src/api/pages/AttachmentsApi';

test.describe('Archivor GraphQL API', () => {
  test.describe('Smoke', () => {
    test('@smoke @api me query returns current user', async ({ gql }) => {
      const userApi = new UserApi(gql);
      const me = await userApi.getMe();
      expect(me).toBeDefined();
      expect(me.id).toBeDefined();
      expect(me.email).toBeDefined();
    });

    test('@smoke @api me returns organizations', async ({ gql }) => {
      const orgApi = new OrganizationApi(gql);
      const orgs = await orgApi.getMyOrganizations();
      expect(Array.isArray(orgs)).toBe(true);
    });

    test('@smoke @api attachmentsConnection returns data for org', async ({ gql }) => {
      const orgApi = new OrganizationApi(gql);
      const orgs = await orgApi.getMyOrganizations();
      expect(orgs.length).toBeGreaterThan(0);
      const attachmentsApi = new AttachmentsApi(gql);
      const conn = await attachmentsApi.getAttachments(orgs[0].id, { first: 5 });
      expect(conn).toBeDefined();
      expect(conn.pageInfo).toBeDefined();
    });
  });

  test.describe('Auth validation', () => {
    test('@api @auth API rejects request without token', async () => {
      const res = await fetch('https://api.staging.archivor.io/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ me { id } }' }),
      });
      expect(res.status).toBeGreaterThanOrEqual(400);
    });
  });

  test.describe('Error handling', () => {
    test('@api non-existent organization returns error', async ({ gql }) => {
      await expect(
        gql.organizationShow({ id: '00000000-0000-0000-0000-000000000000' })
      ).rejects.toThrow();
    });
  });
});
