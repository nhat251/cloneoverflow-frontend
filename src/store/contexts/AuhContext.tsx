import { createContext } from 'react';
import { IAuthContextType as AuthContextType } from '~/types/IAuthContextType';

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
