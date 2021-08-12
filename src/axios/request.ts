import { getStorageItem, STORAGE_KEY } from '@utils/storage';
import { AxiosRequestConfig } from 'axios';

export const requestInterceptor = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  try {
    const accessToken = getStorageItem(STORAGE_KEY.ACCESS_TOKEN);
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
  } catch (error) {
    return Promise.reject(error);
  }

  return config;
};
