import { IUser as User } from '~/types/IUser';
import { SET_USER, LOGOUT } from '~/components/commons/constants/constant';

type Action = { type: string; payload?: User | null };

const initState: User | null = null;

function reducer(state: User | null, action: Action): User | null {
  switch (action.type) {
    case SET_USER:
      return action.payload ?? null;

    case LOGOUT:
      return null;

    default:
      return state;
  }
}

export default reducer;
export { initState };
