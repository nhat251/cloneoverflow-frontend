import { LOGOUT, SET_USER } from '~/components/commons/constants/constant';
import { IUser as User } from '~/types/IUser';

const login_action = (payload: User) => ({ type: SET_USER, payload });
const logout_action = () => ({ type: LOGOUT });

export { login_action, logout_action };
