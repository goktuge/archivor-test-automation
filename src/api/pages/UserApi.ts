import { expect } from '@playwright/test';
import { ApiBase } from './ApiBase';

export class UserApi extends ApiBase {
  async getMe() {
    const res = await this.gql.me();
    expect(res.me).toBeDefined();
    return res.me;
  }
}
