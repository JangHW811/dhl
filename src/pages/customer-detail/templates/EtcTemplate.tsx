import { CustomerDetailBizData, CustomerDetailData } from '@store/customer';
import { Descriptions } from 'antd';
import React, { FC } from 'react';
import { useBarcode } from 'react-barcodes';
import styled from 'styled-components';

interface EtcTemplateInterface {}

const EtcTemplate: FC<EtcTemplateInterface> = () => {
  const { customerDetail } = CustomerDetailData('123');
  const { customerBizDetail } = CustomerDetailBizData('123');

  const { inputRef } = useBarcode({
    value: customerBizDetail?.bizNo ?? '',
    options: {},
  });

  return (
    <Descriptions bordered column={{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
      <Descriptions.Item label='Route Code'>{customerDetail?.routeCode}</Descriptions.Item>
      <Descriptions.Item label='사업자번호(Barcode)'>
        <BarcodeImage ref={inputRef} />
      </Descriptions.Item>
      <Descriptions.Item label='징수형태'>{customerBizDetail?.collectType}</Descriptions.Item>
      <Descriptions.Item label='관세납부방법'>{customerBizDetail?.taxPayMethod}</Descriptions.Item>
      <Descriptions.Item label='대납정보'>{customerBizDetail?.taxProxyAmt}</Descriptions.Item>
      <Descriptions.Item label='HAWB No.'>{''}</Descriptions.Item>
    </Descriptions>
  );
};

const BarcodeImage = styled.canvas`
  flex: 1;
  width: 100%;
  height: 100px;
`;

export default EtcTemplate;
