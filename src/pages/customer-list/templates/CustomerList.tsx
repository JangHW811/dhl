import { API } from '@apis/API';
import { EnumRouteUrl } from '@constants/ConstRoute';
import { Table } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useRequest } from 'src/axios/useRequest';

interface CustomerListRequestInterface {
  searchField?: string;
  searchValue?: string;
}

interface CustomerListItemInterface {
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
const CustomerList: FC<CustomerListRequestInterface> = ({ searchField, searchValue }) => {
  const { endpoint, method } = API.CUSTOMER;
  const { data, error, mutate } = useRequest<CustomerListItemInterface[]>({
    url: endpoint,
    params: { searchField, searchValue },
    method,
  });

  if (error) {
    return <div>error..</div>;
  } else if (!data) {
    return <div>loading..</div>;
  }
  return (
    <Table
      dataSource={data ?? []}
      rowKey={'accntNo'}
      columns={[
        {
          title: '고객번호',
          dataIndex: 'accntNo',
          render: (accntNo, record) => {
            return (
              <Link to={EnumRouteUrl.CUSTOMER_DETAIL.replace(':accntNo', accntNo)}>{`${accntNo} (${record.accountCode})`}</Link>
            );
          },
        },
        {
          title: 'REP',
          dataIndex: 'salesRepCode',
        },
        {
          title: '상호(한글)',
          dataIndex: 'korNm',
        },
        {
          title: '상호(영문)',
          dataIndex: 'engNm',
        },
        {
          title: '사업자번호',
          dataIndex: 'bizNo',
        },
        {
          title: '사업장 주소',
          dataIndex: 'korAddr',
        },
        {
          title: '부서명',
          dataIndex: 'contactDept',
        },
        {
          title: '담당자',
          dataIndex: 'contactNm',
        },
      ]}
    />
  );
};

export default CustomerList;
