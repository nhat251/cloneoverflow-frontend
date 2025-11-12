import { User } from '~/types/';

export default interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<string>;
  logout: () => Promise<void>;
}
