import { expect } from '@playwright/test';
import { ApiBase } from './ApiBase';

export class OrganizationApi extends ApiBase {
  async getOrganization(id: string) {
    const res = await this.gql.organizationShow({ id });
    expect(res.organizationShow).toBeDefined();
    return res.organizationShow;
  }

  async getMyOrganizations() {
    const res = await this.gql.me();
    expect(res.me.organizations).toBeDefined();
    return res.me.organizations;
  }
}
