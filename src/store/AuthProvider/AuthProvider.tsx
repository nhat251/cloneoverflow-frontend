import { PropsWithChildren, useCallback, useEffect, useReducer } from 'react';
import { AuthContext } from '~/store/contexts';
import callApi from '~/api/axiosConfig';
import { LOGIN, LOGOUT, ME } from '~/components/commons/constants/api';
import reducer, { initState } from '~/store/AuthProvider/reducer';
import { login_action, logout_action } from './actions';

function AuthProvider({ children }: PropsWithChildren) {
  const [user, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    if (user) {
      console.log('✅ User đã login:', user);
    }
  }, [user]);

  const handleLogin = useCallback(async (username: string, password: string) => {
    // const response = await callApi({ path: LOGIN, method: 'POST', data: { username, password } });

    // if (response.result) {
    //   const me = await callApi({ path: ME }).then((res) => res.result);
    //   dispatch(login_action(me));
    // }

    if (username === 'nsntfoz' && password === '1234') {
      dispatch(
        login_action({
          id: '12312',
          fullName: 'nhat nguyen',
          email: 'nsntfoz@gmail.com',
          createdAt: '',
          isActive: true,
        }),
      );
    }
  }, []);

  const handleLogout = useCallback(async () => {
    // await callApi({ path: LOGOUT, method: 'POST' });
    // dispatch(logout_action());
    dispatch(logout_action());
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout }}>{children}</AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
