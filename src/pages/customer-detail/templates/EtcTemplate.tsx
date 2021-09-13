import { API } from '@apis/API';
import BorderTable from '@pages/components/common/atoms/BorderTable';
import CommonSpinner from '@pages/components/common/atoms/CommonSpiner';
import { Descriptions } from 'antd';
import React, { FC, useMemo } from 'react';
import { useBarcode } from 'react-barcodes';
import { useRequest } from 'src/axios/useRequest';
import styled, { css } from 'styled-components';
import { CustomerDetailBizItemInterface, CustomerDetailItemInterface } from '..';

interface EtcTemplateInterface {
  accntNo: string;
}

const EtcTemplate: FC<EtcTemplateInterface> = ({ accntNo }) => {
  const { data: customerBizDetail } = useRequest<CustomerDetailBizItemInterface>({
    url: API.CUSTOMER_DETAIL_BIZ.endpoint,
    params: { accntNo },
    method: API.CUSTOMER_DETAIL_BIZ.method,
  });
  const { data: customerDetail, error } = useRequest<CustomerDetailItemInterface>({
    url: API.CUSTOMER_DETAIL.endpoint,
    params: { accntNo },
    method: API.CUSTOMER_DETAIL.method,
  });
  console.log('customerBizDetail', customerBizDetail, customerBizDetail?.bizNo ?? '-');

  const { inputRef } = useBarcode({
    value: customerBizDetail?.bizNo ?? '-',
    options: {},
  });

  // if (error) {
  //   return <div>error..</div>;
  // } else if (!customerDetail) {
  //   return <CommonSpinner />;
  // }
  const isShowTemplate = useMemo(() => {
    return error || !customerDetail;
  }, [error, customerDetail]);
  return (
    <>
      {isShowTemplate && <CommonSpinner />}
      <BorderTable
        column={{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        style={error || !customerDetail ? { display: 'none' } : {}}>
        <Descriptions.Item label='Route Code'>{customerDetail?.routeCode}</Descriptions.Item>
        <Descriptions.Item label='사업자번호(Barcode)'>
          <BarcodeImage ref={inputRef} visible={!!customerBizDetail?.bizNo} />
        </Descriptions.Item>
        <Descriptions.Item label='징수형태'>{customerBizDetail?.collectType}</Descriptions.Item>
        <Descriptions.Item label='관세납부방법'>{customerBizDetail?.taxPayMethod}</Descriptions.Item>
        <Descriptions.Item label='대납정보'>{customerBizDetail?.taxProxyAmt}</Descriptions.Item>
        <Descriptions.Item label='HAWB No.'>{''}</Descriptions.Item>
      </BorderTable>
    </>
  );
};

const BarcodeImage = styled.canvas<{ visible?: boolean }>`
  flex: 1;
  width: 100%;
  height: 100px;
  ${({ visible }) =>
    visible
      ? css``
      : css`
          display: none;
        `}
`;

export default EtcTemplate;
