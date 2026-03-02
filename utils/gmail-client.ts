import { google } from 'googleapis';
import * as cheerio from 'cheerio';

const GMAIL_SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

export interface WaitForEmailOptions {
  toEmail: string;
  subjectRegex?: RegExp;
  timeoutMs?: number;
  pollIntervalMs?: number;
}

export class GmailClient {
  private gmail = google.gmail('v1');
  private oauth2Client;

  constructor(
    clientId: string,
    clientSecret: string,
    refreshToken: string
  ) {
    this.oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
    this.oauth2Client.setCredentials({ refresh_token: refreshToken });
  }

  private async getAuth() {
    return this.oauth2Client;
  }

  /** List messages in inbox, optionally filtered by q query. */
  async listMessages(q?: string, maxResults = 10): Promise<{ id: string }[]> {
    const auth = await this.getAuth();
    const res = await this.gmail.users.messages.list({
      userId: 'me',
      q: q ?? 'in:inbox',
      maxResults,
      auth,
    });
    const messages = res.data.messages ?? [];
    return messages.map((m) => ({ id: m.id! }));
  }

  /** Get full message by ID. */
  async getMessage(messageId: string) {
    const auth = await this.getAuth();
    const res = await this.gmail.users.messages.get({
      userId: 'me',
      id: messageId,
      format: 'full',
      auth,
    });
    return res.data;
  }

  /** Extract body (HTML preferred, then plain) from message. */
  getEmailBody(message: { payload?: { body?: { data?: string }; parts?: { body?: { data?: string }; mimeType?: string }[] } }): string {
    const payload = message.payload;
    if (!payload) return '';

    const decode = (data?: string) => (data ? Buffer.from(data, 'base64').toString('utf-8') : '');

    if (payload.body?.data) return decode(payload.body.data);

    const parts = payload.parts ?? [];
    let html = '';
    let plain = '';
    for (const part of parts) {
      const data = decode(part.body?.data);
      if (!data) continue;
      const mime = (part.mimeType ?? '').toLowerCase();
      if (mime.includes('html')) html = data;
      else if (mime.includes('plain')) plain = data;
    }
    return html || plain;
  }

  /** Extract first http(s) link from HTML body. */
  extractLinkFromHtml(html: string): string | null {
    const $ = cheerio.load(html);
    const links: string[] = [];
    $('a[href]').each((_, el) => {
      const href = $(el).attr('href');
      if (href && /^https?:\/\//i.test(href)) {
        links.push(href);
      }
    });
    if (links.length > 0) return links[0];

    const hrefMatch = html.match(/https?:\/\/[^\s"'<>]+/);
    return hrefMatch ? hrefMatch[0] : null;
  }

  /**
   * Wait for email matching criteria. Polls every pollIntervalMs until timeout.
   * @throws Error with meaningful message on timeout
   */
  async waitForEmail(options: WaitForEmailOptions): Promise<{ messageId: string; body: string; link: string | null }> {
    const {
      toEmail,
      subjectRegex = /verify|activate|confirm/i,
      timeoutMs = 30_000,
      pollIntervalMs = 2_000,
    } = options;

    const start = Date.now();
    const q = `to:${toEmail}`;

    while (Date.now() - start < timeoutMs) {
      const messages = await this.listMessages(q, 20);

      for (const { id } of messages) {
        const msg = await this.getMessage(id);
        const headers = msg.payload?.headers ?? [];
        const subject = headers.find((h) => h.name?.toLowerCase() === 'subject')?.value ?? '';

        if (!subjectRegex.test(subject)) continue;

        const body = this.getEmailBody(msg);
        const link = this.extractLinkFromHtml(body);

        return { messageId: id, body, link };
      }

      await new Promise((r) => setTimeout(r, pollIntervalMs));
    }

    throw new Error(
      `Gmail timeout: No email matching subject ${subjectRegex} received for ${toEmail} within ${timeoutMs / 1000}s. ` +
        `Checked every ${pollIntervalMs / 1000}s.`
    );
  }
}
