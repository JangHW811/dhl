import { removeStorageItem, STORAGE_KEY } from '@utils/storage';
import { AxiosResponse } from 'axios';

export const responseSuccessInterceptor = async (response: AxiosResponse<any>) => {
  console.log(response?.config?.method?.toUpperCase(), response?.config?.url, response?.status);

  return response;
};

export const responseErrorInterceptor = async (error: any) => {
  // 인증 에러 처리
  const isUnauthorized = error?.response?.status === 401 || error?.response?.status === 403;

  if (isUnauthorized) {
    removeStorageItem(STORAGE_KEY.ACCESS_TOKEN);
  }
  // 네트웍 에러 (타임아웃 포함)
  let isNetworkError = false;
  if (error?.message === 'Network Error' || error?.code === 'ECONNABORTED') {
    error.code = 'ECONNABORTED';
    isNetworkError = true;
  }

  if (isNetworkError) {
    console.log('timeout');
  } else {
    console.log(
      error?.response?.config?.method?.toUpperCase(),
      error?.response?.config?.url,
      error?.response?.status,
      error?.response,
    );
  }

  return Promise.reject(error);
};
