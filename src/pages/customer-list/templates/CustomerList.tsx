import { CustomerListRequestInterface, useCustomerList } from '@apis/customer';
import { EnumRouteUrl } from '@constants/ConstRoute';
import { sortString } from '@utils/sort';
import { Table } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const CustomerList: FC<CustomerListRequestInterface> = ({ searchField, searchValue }) => {
  const { data, error } = useCustomerList({ searchField, searchValue });

  if (error) {
    return <div>error..</div>;
  }
  return (
    <Table
      loading={!data}
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
          sorter: (a, b) => sortString(a.salesRepCode, b.salesRepCode),
          dataIndex: 'salesRepCode',
        },
        {
          title: '상호(한글)',
          sorter: (a, b) => sortString(a.korNm, b.korNm),
          dataIndex: 'korNm',
        },
        {
          title: '상호(영문)',
          sorter: (a, b) => sortString(a.engNm, b.engNm),
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
          sorter: (a, b) => sortString(a.contactDept, b.contactDept),
          dataIndex: 'contactDept',
        },
        {
          title: '담당자',
          sorter: (a, b) => sortString(a.contactNm, b.contactNm),
          dataIndex: 'contactNm',
        },
      ]}
    />
  );
};

export default CustomerList;
