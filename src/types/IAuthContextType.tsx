import { IUser as User } from '~/types/IUser';

export interface IAuthContextType {
  state: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}
