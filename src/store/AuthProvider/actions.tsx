import { SET_USER } from '~/components/commons/constants/constant';
import { IUser as User } from '~/types/IUser';

const login_action = (payload: User) => ({ type: SET_USER, payload });

export { login_action };
