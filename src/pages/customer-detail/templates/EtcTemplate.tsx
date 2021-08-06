import { CustomerDetailData } from '@store/customer';
import { Descriptions } from 'antd';
import React, { FC } from 'react';

interface EtcTemplateInterface {}

const EtcTemplate: FC<EtcTemplateInterface> = () => {
  const { customerDetail } = CustomerDetailData('123');

  console.log('customerDetail', customerDetail);
  return (
    <Descriptions bordered column={{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
      <Descriptions.Item label='Route Code'>{customerDetail?.routeCode}</Descriptions.Item>
      <Descriptions.Item label='사업자번호(Barcode)'>{customerDetail?.bizNo}</Descriptions.Item>
      <Descriptions.Item label='징수형태'>{customerDetail?.accntNo}</Descriptions.Item>
      <Descriptions.Item label='관세납부방법'>{customerDetail?.accntNo}</Descriptions.Item>
      <Descriptions.Item label='대납정보'>{customerDetail?.accntNo}</Descriptions.Item>
      <Descriptions.Item label='HAWB No.'>{customerDetail?.accntNo}</Descriptions.Item>
    </Descriptions>
  );
};

export default EtcTemplate;
