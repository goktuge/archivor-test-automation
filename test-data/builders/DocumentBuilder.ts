import { faker } from '@faker-js/faker';
import type { Document, DocumentStatus } from '../../types';

/**
 * Fluent builder for Document test data.
 * Usage: new DocumentBuilder().withTitle('Report').withStatus('published').build()
 */
export class DocumentBuilder {
  private data: Partial<Document> = {};

  withId(id: string): this {
    this.data.id = id;
    return this;
  }

  withTitle(title: string): this {
    this.data.title = title;
    return this;
  }

  withDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  withFileType(fileType: string): this {
    this.data.fileType = fileType;
    return this;
  }

  withFileSize(size: number): this {
    this.data.fileSize = size;
    return this;
  }

  withCreatedBy(userId: string): this {
    this.data.createdBy = userId;
    return this;
  }

  withStatus(status: DocumentStatus): this {
    this.data.status = status;
    return this;
  }

  withCreatedAt(date: string): this {
    this.data.createdAt = date;
    return this;
  }

  pdf(): this {
    return this.withFileType('pdf');
  }

  draft(): this {
    return this.withStatus('draft');
  }

  published(): this {
    return this.withStatus('published');
  }

  archived(): this {
    return this.withStatus('archived');
  }

  /** Build with defaults for any unspecified fields */
  build(): Document {
    const fileTypes = ['pdf', 'docx', 'xlsx', 'png', 'jpg'];
    return {
      id: this.data.id ?? faker.string.uuid(),
      title: this.data.title ?? faker.lorem.sentence(3),
      description: this.data.description ?? faker.lorem.paragraph(),
      fileType: this.data.fileType ?? faker.helpers.arrayElement(fileTypes),
      fileSize: this.data.fileSize ?? faker.number.int({ min: 1024, max: 10_485_760 }),
      createdBy: this.data.createdBy ?? faker.string.uuid(),
      createdAt: this.data.createdAt ?? faker.date.past().toISOString(),
      updatedAt: this.data.updatedAt ?? faker.date.recent().toISOString(),
      status: this.data.status ?? 'draft',
    };
  }

  /** Build minimal document (only required fields) */
  buildMinimal(): Document {
    return {
      title: this.data.title ?? faker.lorem.sentence(3),
    };
  }
}
