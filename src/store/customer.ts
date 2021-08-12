import { ParsedUrlQueryInput } from 'querystring';
import { useRequest } from 'src/axios/useRequest';
import useSWR from 'swr';
import TempDetailJson from '../sample/customerDetail1.json';
import TempBizJson from '../sample/customerDetail2.json';

interface GetCustomerListRequest extends ParsedUrlQueryInput {
  searchField?: string;
  searchValue?: string;
}
interface CustomerListItemInterface {}

export const CustomerListData = (params: GetCustomerListRequest) => {
  const { data, error, mutate } = useRequest({ url: '/dhl/kr/search/kcmf/b2b/bizDetailList', params, method: 'GET' });

  return { customerList: data, error, customerListAction: { mutate } };
};

export const CustomerDetailData = (accntNo: string) => {
  const { data, error, mutate } = useSWR('CustomerDetail', () => TempDetailJson);

  return { customerDetail: data, error, customerListAction: { mutate } };
};

export const CustomerDetailBizData = (accntNo: string) => {
  const { data, error, mutate } = useSWR('CustomerBizDetail', () => TempBizJson);

  return { customerBizDetail: data, error, customerListAction: { mutate } };
};
