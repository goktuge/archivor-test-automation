import { expect } from '@playwright/test';
import { ApiBase } from './ApiBase';

export class AttachmentsApi extends ApiBase {
  async getAttachments(organizationId: string, options?: { folderId?: string; first?: number }) {
    const res = await this.gql.attachmentsConnection({
      organizationId,
      folderId: options?.folderId,
      first: options?.first ?? 10,
    });
    expect(res.attachmentsConnection).toBeDefined();
    return res.attachmentsConnection;
  }
}
