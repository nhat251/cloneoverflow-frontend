export default interface User {
  id: string;
  fullName: string;
  dateOfBirth?: string | null;
  isActive: boolean;
  createdAt: string;
  email?: string;
}
