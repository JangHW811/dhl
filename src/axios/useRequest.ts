import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import useSWR, { SWRConfiguration, SWRResponse } from 'swr';
import { requestInterceptor } from './request';
import { responseErrorInterceptor, responseSuccessInterceptor } from './response';

export type GetRequest = AxiosRequestConfig | null;

interface Return<Data, Error>
  extends Pick<SWRResponse<AxiosResponse<Data>, AxiosError<Error>>, 'isValidating' | 'error' | 'mutate'> {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>, 'initialData'> {
  initialData?: Data;
}

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

export const useRequest = <Data = unknown, Error = unknown>(
  request: GetRequest,
  { initialData, ...config }: Config<Data, Error> = {},
  isAuth = false,
): Return<Data, Error> => {
  console.log('request', request);
  const {
    data: response,
    error,
    isValidating,
    mutate,
  } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
    request && JSON.stringify(request),
    /**
     * NOTE: Typescript thinks `request` can be `null` here, but the fetcher
     * function is actually only called by `useSWR` when it isn't.
     */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    () => (isAuth ? authApi.request(request!) : axiosInstance.request(request!)),
    {
      ...config,
      initialData: initialData && {
        status: 200,
        statusText: 'InitialData',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        config: request!,
        headers: {},
        data: initialData,
      },
    },
  );

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    mutate,
  };
};
