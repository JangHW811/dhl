import { Method } from 'axios';

export interface ApiInterface {
  endpoint: string;
  method: Method;
}

// interface ApiObjectInterface {
//   [key: keyof API]: ApiInterface;
// }

export const API = {
  CUSTOMER: {
    endpoint: '/dhl/kr/search/kcmf/b2b/hcmfMasterList',
    method: 'GET',
  } as ApiInterface,
  CUSTOMER_DETAIL: {
    endpoint: '/dhl/kr/search/kcmf/b2b/hcmfMasterInfo',
    method: 'GET',
  } as ApiInterface,
  CUSTOMER_DETAIL_BIZ: {
    endpoint: '/dhl/kr/search/kcmf/b2b/bizDetailInfo',
    method: 'GET',
  } as ApiInterface,
};
