import { CustomerConsentListRequestInterface, useCustomerConsentList } from '@apis/customer';
import { EnumRouteUrl } from '@constants/ConstRoute';
import { GlobalFormat } from '@constants/Format';
import { sortDate, sortString } from '@utils/sort';
import { Table } from 'antd';
import moment from 'moment';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const CustomerConsentList: FC<CustomerConsentListRequestInterface> = (params) => {
  const { data, error } = useCustomerConsentList(params);
  if (error) {
    return <div>error..</div>;
  }

  return (
    <>
      <Table
        loading={!data}
        dataSource={data ?? []}
        rowKey={'seq'}
        columns={[
          {
            title: '수집경로',
            dataIndex: 'appFrom',
          },
          {
            title: '고객번호',
            dataIndex: 'account',
          },
          {
            title: 'account 개설 유무',
            dataIndex: 'accountHolderYn',
            align: 'center',
          },
          {
            title: '이름',
            dataIndex: 'customerName',
            sorter: (a, b) => sortString(a.customerName, b.customerName),
            render: (customerName, record) => {
              return <Link to={EnumRouteUrl.CUSTOMER_CONSENT_DETAIL.replace(':seq', record.seq)}>{`${customerName}`}</Link>;
            },
          },
          {
            title: '연락처',
            dataIndex: 'customerContact',
          },
          {
            title: '이메일',
            sorter: (a, b) => sortString(a.customerEmail, b.customerEmail),
            dataIndex: 'customerEmail',
          },
          {
            title: '마케팅 수신 동의여부',
            sorter: (a, b) => sortString(a.mktConsentYn, b.mktConsentYn),
            dataIndex: 'mktConsentYn',
            align: 'center',
          },
          {
            title: '마케팅 수신 동의일',
            dataIndex: 'mktConsentTime',
            sorter: (a, b) => sortDate(a.mktConsentTime, b.mktConsentTime),
            render: (mktConsentTime) => mktConsentTime && moment(mktConsentTime).format(GlobalFormat.DateDash),
          },
          {
            title: '개인정보 동의여부',
            sorter: (a, b) => sortString(a.personalConsentYn, b.personalConsentYn),
            dataIndex: 'personalConsentYn',
            align: 'center',
          },
          {
            title: '개인정보 동의일',
            dataIndex: 'personalConsentTime',
            sorter: (a, b) => sortDate(a.personalConsentTime, b.personalConsentTime),
            render: (personalConsentTime) => personalConsentTime && moment(personalConsentTime).format(GlobalFormat.DateDash),
          },
          {
            title: '사업자번호',
            dataIndex: 'bizNo',
          },
          {
            title: '만료일',
            dataIndex: 'expirationDate',
            sorter: (a, b) => sortDate(a.expirationDate, b.expirationDate),
            render: (expirationDate) => expirationDate && moment(expirationDate).format(GlobalFormat.DateDash),
          },
        ]}
      />
    </>
  );
};

export default CustomerConsentList;
