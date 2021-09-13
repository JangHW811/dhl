import BorderTable from '@pages/components/common/atoms/BorderTable';
import { Descriptions } from 'antd';
import React, { FC } from 'react';
import { CustomerConsentDetailResponse } from '..';

const DetailTemplate: FC<CustomerConsentDetailResponse> = (customerConsentDetails) => {
  return (
    <BorderTable title='세부내용' column={1}>
      <Descriptions.Item label='seq'>{customerConsentDetails.seq}</Descriptions.Item>
      <Descriptions.Item label='수집경로'>{customerConsentDetails.appFrom}</Descriptions.Item>
      <Descriptions.Item label='고객명'>{customerConsentDetails.customerNameEncrypt}</Descriptions.Item>
      <Descriptions.Item label='고객번호'>{customerConsentDetails.account}</Descriptions.Item>
      <Descriptions.Item label='사업자번호 '>{customerConsentDetails.bizNo}</Descriptions.Item>
      <Descriptions.Item label='Account Holder'>{customerConsentDetails.accountHolderYn}</Descriptions.Item>
      <Descriptions.Item label='이메일'>{customerConsentDetails.customerEmailEncrypt}</Descriptions.Item>
      <Descriptions.Item label='마케팅동의여부 '>{customerConsentDetails.mktConsentYn}</Descriptions.Item>
      <Descriptions.Item label='업데이트 날짜'>{customerConsentDetails.updateTime}</Descriptions.Item>
      <Descriptions.Item label='업데이트 담당자'>{customerConsentDetails.updateUser}</Descriptions.Item>
    </BorderTable>
  );
};

export default DetailTemplate;
