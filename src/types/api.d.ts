interface ReqeustBaseType {
  endpoint: string;
  options?: CustomRequestConfigType;
}

interface CustomGetRequestType extends ReqeustBaseType {
  params?: { [key: string]: any };
}

interface CustomRequestType extends CustomGetRequestType {
  body?: { [key: string]: any };
}

interface CustomResponseType<T = {}> extends AxiosResponse<T> {
  status: number;
  success: boolean;
  message: string | null;
  data: T | null;
}
