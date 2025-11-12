import { PropsWithChildren, useCallback, useEffect, useReducer } from 'react';
import { AuthContext } from '~/store/contexts';
import callApi from '~/api/axiosConfig';
import { LOGIN, LOGOUT, ME } from '~/components/commons/constants/api';
import reducer, { initState } from '~/store/AuthProvider/reducer';
import { login_action, logout_action } from './actions';
import { ACCESS_TOKEN_KEY_STORAGE } from '~/components/commons/constants/constant';

function AuthProvider({ children }: PropsWithChildren) {
  const [user, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    const fetchMe = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY_STORAGE);
      if (token) {
        try {
          const me = await callApi({ path: ME }).then((res) => res.result);
          dispatch(login_action(me));
        } catch (err) {
          console.warn('Fetch /me failed, maybe token expired:', err);
          localStorage.removeItem(ACCESS_TOKEN_KEY_STORAGE);
          dispatch(logout_action());
        }
      }
    };
    fetchMe();
  }, []);

  const handleLogin = useCallback(async (username: string, password: string) => {
    const response = await callApi({ path: LOGIN, method: 'POST', data: { username, password } });

    if (response.result) {
      localStorage.setItem(ACCESS_TOKEN_KEY_STORAGE, response.result.accessToken);

      const me = await callApi({ path: ME }).then((res) => res.result);
      dispatch(login_action(me));
    }

    return response.message;
  }, []);

  const handleLogout = useCallback(async () => {
    await callApi({ path: LOGOUT, method: 'POST' });
    dispatch(logout_action());
    localStorage.removeItem(ACCESS_TOKEN_KEY_STORAGE);
  }, []);

  useEffect(() => {
    const onLogout = () => {
      dispatch(logout_action());
    };

    window.addEventListener('auth:logout', onLogout);

    return () => {
      window.removeEventListener('auth:logout', onLogout);
    };
  }, [handleLogout]);

  return (
    <>
      <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout }}>{children}</AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
