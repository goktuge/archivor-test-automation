export interface TestUser {
  email: string;
  password: string;
  userId?: string;
  verificationLink?: string;
  verified?: boolean;
}
