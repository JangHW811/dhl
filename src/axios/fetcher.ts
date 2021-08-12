import axios, { AxiosRequestConfig } from 'axios';
import { requestInterceptor } from './request';
import { responseErrorInterceptor, responseSuccessInterceptor } from './response';

const baseOptions: AxiosRequestConfig = {
  baseURL: `${process.env.REACT_APP_API_HOST}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

const axiosInstance = axios.create(baseOptions);
axiosInstance.interceptors.request.use(requestInterceptor);
axiosInstance.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);

export const authApi = axios.create(baseOptions);

export const Fecher = {
  get: async <T = null>({ endpoint, params, options }: CustomGetRequestType) => {
    const result = await axiosInstance.get<T>(endpoint, {
      params,
      ...options,
    });

    return result;
  },
  post: async <T = null>({ endpoint, body, options, params }: CustomRequestType) => {
    return await axiosInstance.post<CustomResponseType<T>>(endpoint, body, {
      ...options,
      params,
    });
  },
  put: async <T = null>({ endpoint, body, options, params }: CustomRequestType) => {
    return await axiosInstance.put<CustomResponseType<T>>(endpoint, body, {
      ...options,
      params,
    });
  },
  delete: async <T = null>({ endpoint, body, options }: CustomRequestType) => {
    return await axiosInstance.delete<CustomResponseType<T>>(endpoint, {
      data: body,
      ...options,
    });
  },
};
