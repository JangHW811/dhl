import { EnumRouteUrl } from '@constants/ConstRoute';
import { useHistory } from 'react-router';
import useSWR from 'swr';
import { getStorageItem, removeStorageItem, setStorageItem, STORAGE_KEY } from './storage';

export const useAuth = () => {
  const history = useHistory();
  const { data, mutate } = useSWR('authToken', () => getStorageItem(STORAGE_KEY.AUTH_TOKEN));
  //   const { data, mutate } = getToken();
  const login = () => {
    setStorageItem(STORAGE_KEY.AUTH_TOKEN, '123');
    return mutate();
  };
  const logout = () => {
    removeStorageItem(STORAGE_KEY.AUTH_TOKEN);
    history.push(EnumRouteUrl.LOGIN);
    return mutate();
  };

  return {
    authToken: data,
    isLoggedIn: !!data,
    authAction: { login, logout },
  };
};
