import { EnumRouteUrl } from '@constants/ConstRoute';
import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';
import { atom, useRecoilState } from 'recoil';
import { getStorageItem, removeStorageItem, setStorageItem, STORAGE_KEY } from './storage';

export const accessTokenAtom = atom<string>({
  key: '@auth/accessTokenAtom',
  default: getStorageItem(STORAGE_KEY.ACCESS_TOKEN),
});

export const useAuth = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  const history = useHistory();

  useEffect(() => {
    console.log('accessToken', accessToken);
    accessToken ? setStorageItem(STORAGE_KEY.ACCESS_TOKEN, accessToken) : removeStorageItem(STORAGE_KEY.ACCESS_TOKEN);
  }, [accessToken]);
  //   const { data, mutate } = getToken();
  const login = useCallback(
    async (userId: string, password: string) => {
      // const res = authApi.post('/comm/control/auth', {
      //   userId,
      //   password,
      // });
      setAccessToken(
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhcHAiOiJLQ01GIiwicm9sZSI6IkFETSIsImV4cCI6MTYyODcyOTEzNCwiaWF0IjoxNjI4NzI4NTM0LCJlbWFpbCI6bnVsbCwidXNlcm5hbWUiOiJoeXVud29vaiJ9.pcGXavKFCDNwpwDPfl2HCSGw6-OoLYQAJt4rNTZjTOhzRzzs8zd5iNxyhkdhUw7izNOpOtlEEm_D4a2dSuEMkg',
      );
    },
    [setAccessToken],
  );

  const logout = () => {
    setAccessToken('');
    history.push(EnumRouteUrl.LOGIN);
  };

  return {
    accessToken,
    isLoggedIn: !!accessToken,
    authAction: { login, logout },
  };
};
