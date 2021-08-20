import { EnumRouteUrl } from '@constants/ConstRoute';
import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { atom, useRecoilState } from 'recoil';
import { authApi } from 'src/axios/useRequest';
import { getStorageItem, removeStorageItem, setStorageItem, STORAGE_KEY } from './storage';

export const accessTokenAtom = atom<string>({
  key: '@auth/accessTokenAtom',
  default: getStorageItem(STORAGE_KEY.ACCESS_TOKEN),
});

export const useAuth = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  const [loading, isLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log('accessToken', accessToken);
    accessToken ? setStorageItem(STORAGE_KEY.ACCESS_TOKEN, accessToken) : removeStorageItem(STORAGE_KEY.ACCESS_TOKEN);
  }, [accessToken]);
  //   const { data, mutate } = getToken();
  const login = useCallback(
    async ({ userId, password }) => {
      isLoading(true);
      try {
        const res = await authApi.post('/comm/control/auth', {
          userId,
          password,
        });
        const { apiToken } = res.data;
        setAccessToken(apiToken);
        isLoading(false);
      } finally {
        isLoading(false);
      }
    },
    [setAccessToken],
  );

  const logout = () => {
    setAccessToken('');
    history.push(EnumRouteUrl.LOGIN);
  };

  return {
    accessToken,
    loading,
    isLoggedIn: !!accessToken,
    authAction: { login, logout },
  };
};
