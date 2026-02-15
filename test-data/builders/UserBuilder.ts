import { faker } from '@faker-js/faker';
import type { User, UserRole } from '../../types';

/**
 * Fluent builder for User test data.
 * Usage: new UserBuilder().withEmail('x@y.com').withRole('admin').build()
 */
export class UserBuilder {
  private data: Partial<User> = {};

  withId(id: string): this {
    this.data.id = id;
    return this;
  }

  withEmail(email: string): this {
    this.data.email = email;
    return this;
  }

  withPassword(password: string): this {
    this.data.password = password;
    return this;
  }

  withFirstName(firstName: string): this {
    this.data.firstName = firstName;
    return this;
  }

  withLastName(lastName: string): this {
    this.data.lastName = lastName;
    return this;
  }

  withFullName(fullName: string): this {
    this.data.fullName = fullName;
    return this;
  }

  withRole(role: UserRole): this {
    this.data.role = role;
    return this;
  }

  withCreatedAt(date: string): this {
    this.data.createdAt = date;
    return this;
  }

  admin(): this {
    return this.withRole('admin');
  }

  viewer(): this {
    return this.withRole('viewer');
  }

  editor(): this {
    return this.withRole('editor');
  }

  /** Build with defaults for any unspecified fields */
  build(): User {
    const firstName = this.data.firstName ?? faker.person.firstName();
    const lastName = this.data.lastName ?? faker.person.lastName();
    return {
      id: this.data.id ?? faker.string.uuid(),
      email: this.data.email ?? faker.internet.email(),
      password: this.data.password ?? faker.internet.password({ length: 12 }),
      firstName,
      lastName,
      fullName: this.data.fullName ?? `${firstName} ${lastName}`,
      role: this.data.role ?? 'user',
      createdAt: this.data.createdAt ?? faker.date.past().toISOString(),
      updatedAt: this.data.updatedAt ?? faker.date.recent().toISOString(),
    };
  }

  /** Build minimal user (only required fields) */
  buildMinimal(): User {
    const firstName = this.data.firstName ?? faker.person.firstName();
    const lastName = this.data.lastName ?? faker.person.lastName();
    return {
      email: this.data.email ?? faker.internet.email(),
      firstName,
      lastName,
    };
  }
}
