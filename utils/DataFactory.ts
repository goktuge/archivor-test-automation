import { faker } from '@faker-js/faker';
import type { User, Document, UserRole, DocumentStatus } from '../types';

/**
 * Base class for test data creation.
 * Uses @faker-js/faker for realistic mock data.
 * Stub methods can be extended for API-based data creation.
 */
export class DataFactory {
  // ─── User creation ──────────────────────────────────────────────────────────

  /**
   * Create a user with realistic mock data.
   * Stub: extend for API creation (e.g., POST /users).
   */
  createUser(overrides?: Partial<User>): User {
    return {
      id: faker.string.uuid(),
      email: faker.internet.email(),
      password: faker.internet.password({ length: 12 }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      fullName: faker.person.fullName(),
      role: 'user',
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
      ...overrides,
    };
  }

  // ─── Document creation ───────────────────────────────────────────────────────

  /**
   * Create a document with realistic mock data.
   * Stub: extend for API creation (e.g., POST /documents).
   */
  createDocument(overrides?: Partial<Document>): Document {
    const fileTypes = ['pdf', 'docx', 'xlsx', 'png', 'jpg'];
    return {
      id: faker.string.uuid(),
      title: faker.lorem.sentence(3),
      description: faker.lorem.paragraph(),
      fileType: faker.helpers.arrayElement(fileTypes),
      fileSize: faker.number.int({ min: 1024, max: 10_485_760 }),
      createdBy: faker.string.uuid(),
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
      status: 'draft',
      ...overrides,
    };
  }

  // ─── Batch creation ─────────────────────────────────────────────────────────

  createUsers(count: number, overrides?: Partial<User>): User[] {
    return Array.from({ length: count }, () => this.createUser(overrides));
  }

  createDocuments(count: number, overrides?: Partial<Document>): Document[] {
    return Array.from({ length: count }, () => this.createDocument(overrides));
  }

  // ─── Factory instance ───────────────────────────────────────────────────────

  static readonly instance = new DataFactory();
}

export const dataFactory = DataFactory.instance;
