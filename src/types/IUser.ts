export interface IUser {
  id: string;
  fullName?: string;
  dateOfBirth?: string | null;
  isActive: boolean;
  createdAt: string;
  email?: string;
}
