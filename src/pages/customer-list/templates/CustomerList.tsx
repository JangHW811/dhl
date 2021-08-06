import { EnumRouteUrl } from '@constants/ConstRoute';
import { CustomerListData } from '@store/customer';
import { Table } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface CustomerListInterface {
  searchField?: string;
  searchValue?: string;
}

// interface CustomerListItemInterface {
//   accnt_no: number;
//   account_code: string;
//   sales_rep_code: string;
//   kor_nm: string;
//   eng_nm: string;
//   biz_no: number;
//   kor_addr: string;
//   contact_dept: string;
//   contact_nm: string;
// }

const CustomerList: FC<CustomerListInterface> = ({ searchField, searchValue }) => {
  const { customerList } = CustomerListData({ searchField, searchValue });
  //   useEffect(() => {
  //   }, []);
  return (
    <>
      <Table
        dataSource={customerList}
        rowKey={'accnt_no'}
        columns={[
          {
            title: '고객번호',
            dataIndex: 'accnt_no',
            render: (accnt_no, record) => {
              return <Link to={EnumRouteUrl.CUSTOMER_DETAIL}>{`${accnt_no} (${record.account_code})`}</Link>;
            },
          },
          {
            title: 'REP',
            dataIndex: 'sales_rep_code',
          },
          {
            title: '상호(한글)',
            dataIndex: 'kor_nm',
          },
          {
            title: '상호(영문)',
            dataIndex: 'eng_nm',
          },
          {
            title: '사업자번호',
            dataIndex: 'biz_no',
          },
          {
            title: '사업장 주소',
            dataIndex: 'kor_addr',
          },
          {
            title: '부서명',
            dataIndex: 'contact_dept',
          },
          {
            title: '담당자',
            dataIndex: 'contact_nm',
          },
        ]}
      />
    </>
  );
};

export default CustomerList;
