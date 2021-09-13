import { API } from '@apis/API';
import { useRequest } from 'src/axios/useRequest';

export interface CustomerListRequestInterface {
  searchField?: string;
  searchValue?: string;
}
export interface CustomerListItemInterface {
  accntNo: string;
  accountCode: string;
  bizNo: string;
  contactDept: string;
  contactNm: string;
  engNm: string;
  korAddr: string;
  korNm: string;
  salesRepCode: string;
}

export const useCustomerList = (params: CustomerListRequestInterface) => {
  const { endpoint, method } = API.CUSTOMER;
  return useRequest<CustomerListItemInterface[]>({
    url: endpoint,
    params,
    method,
  });
};

export interface CustomerConsentListRequestInterface {
  appFrom?: string;
  account?: string;
  bizNo?: string;
  accountHolder?: string;
  customerName?: string;
  customerContact?: string;
  customerEmail?: string;
  mktYn?: string;
  mktTime?: string;
  personalTime?: string;
  updateTime?: string;
  updateUser?: string;
}

export interface CustomerConsentListItemInterface {
  seq: string;
  appFrom: string;
  account: string;
  accountHolderYn: YN;
  customerName: string;
  customerContact: string;
  customerEmail: string;
  customerNameEncrypt: string;
  customerContactEncrypt: string;
  customerEmailEncrypt: string;
  mktConsentYn: YN;
  mktConsentTime: string;
  personalConsentYn: YN;
  personalConsentTime: string;
  updateTime: string;
  updateUser: string;
  bizNo: string;
  createTime: string;
  createUser: string;
  expirationDate: string;
}
export const useCustomerConsentList = (params: CustomerConsentListRequestInterface) => {
  const { endpoint, method } = API.CUSTOMER_CONSENT_LIST;
  return useRequest<CustomerConsentListItemInterface[]>({
    url: endpoint,
    params,
    method,
  });
};
