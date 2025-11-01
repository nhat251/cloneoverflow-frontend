import { PropsWithChildren, useCallback, useEffect, useReducer } from 'react';
import { AuthContext } from '~/store/contexts';
import callApi from '~/api/axiosConfig';
import { LOGIN, ME } from '~/components/commons/constants/api';
import reducer, { initState } from '~/store/AuthProvider/reducer';
import { login_action } from './actions';

function AuthProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    if (state) {
      console.log('✅ User đã login:', state);
    }
  }, [state]);

  const handleLogin = useCallback(async (username: string, password: string) => {
    const response = await callApi({ path: LOGIN, method: 'POST', data: { username, password } });

    if (response.result) {
      const me = await callApi({ path: ME }).then((res) => res.result);
      dispatch(login_action(me));
    }
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ state, login: handleLogin }}>{children}</AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
