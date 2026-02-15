// ─── Domain types ──────────────────────────────────────────────────────────────

export interface User {
  id?: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  role?: UserRole;
  createdAt?: string;
  updatedAt?: string;
}

export type UserRole = 'admin' | 'user' | 'viewer' | 'editor';

export interface Document {
  id?: string;
  title: string;
  description?: string;
  fileType?: string;
  fileSize?: number;
  createdBy?: string;
  createdAt?: string;
  updatedAt?: string;
  status?: DocumentStatus;
}

export type DocumentStatus = 'draft' | 'published' | 'archived';

// ─── API response types ───────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: ApiError[];
}

export interface ApiError {
  code: string;
  message: string;
  field?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// ─── Auth types ───────────────────────────────────────────────────────────────

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthToken {
  accessToken: string;
  refreshToken?: string;
  expiresAt: string;
}
