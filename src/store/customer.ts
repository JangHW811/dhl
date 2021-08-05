import { ParsedUrlQueryInput, stringify } from 'querystring';
import useSWR from 'swr';
import TempDetailJson from '../sample/customerDetail1.json';
import TempBizJson from '../sample/customerDetail2.json';
import TempListJson from '../sample/customerList.json';

interface GetCustomerListRequest extends ParsedUrlQueryInput {
  searchField?: string;
  searchValue?: string;
}
interface CustomerListItemInterface {}

export const CustomerListData = (param: GetCustomerListRequest) => {
  const test = stringify(param);

  const { data, error, mutate } = useSWR('CustomerList', () => TempListJson);

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
