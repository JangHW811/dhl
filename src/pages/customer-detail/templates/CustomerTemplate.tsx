import { API } from '@apis/API';
import { Descriptions } from 'antd';
import React, { FC } from 'react';
import { useRequest } from 'src/axios/useRequest';
import { CustomerDetailItemInterface } from '..';

interface CustomerTemplateInterface {
  accntNo: string;
}

const CustomerTemplate: FC<CustomerTemplateInterface> = ({ accntNo }) => {
  const { endpoint, method } = API.CUSTOMER_DETAIL;
  const { data: customerDetail, error } = useRequest<CustomerDetailItemInterface>({
    url: endpoint,
    params: { accntNo },
    method,
  });

  if (error) {
    return <div>error..</div>;
  } else if (!customerDetail) {
    return <div>loading..</div>;
  }
  return (
    <Descriptions title='고객번호 조회 결과' bordered column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}>
      <Descriptions.Item label='고객번호'>{customerDetail?.accntNo}</Descriptions.Item>
      <Descriptions.Item label='사업자번호'>{customerDetail?.bizNo}</Descriptions.Item>
      <Descriptions.Item label='상호(한글)' span={2}>
        {customerDetail?.korNm}
      </Descriptions.Item>
      <Descriptions.Item label='상호(영문)' span={2}>
        {customerDetail?.engNm}
      </Descriptions.Item>
      <Descriptions.Item label='등록주소(한글)' span={2}>
        {customerDetail?.korAddr}
      </Descriptions.Item>
      <Descriptions.Item label='우편번호'>{customerDetail?.zipCode}</Descriptions.Item>
      <Descriptions.Item label='ROUTE CODE'>{customerDetail?.routeCode}</Descriptions.Item>
      <Descriptions.Item label='SALES Rep'>{customerDetail?.salesRepCode}</Descriptions.Item>
      <Descriptions.Item label='담당자'>{customerDetail?.contactNm}</Descriptions.Item>
      <Descriptions.Item label='담당자부서명'>{customerDetail?.contactDept}</Descriptions.Item>
      <Descriptions.Item label='전화번호'>{customerDetail?.contactTel}</Descriptions.Item>
      <Descriptions.Item label='FAX번호'>{customerDetail?.contactFax}</Descriptions.Item>
      <Descriptions.Item label='휴대폰번호'>{customerDetail?.contactCP}</Descriptions.Item>
      <Descriptions.Item label='이메일주소'>{customerDetail?.contactEmail}</Descriptions.Item>
      <Descriptions.Item label='Open Data' span={2}>
        {customerDetail?.openDate}
      </Descriptions.Item>
      <Descriptions.Item label='Creadit Stop'>{customerDetail?.creditStop}</Descriptions.Item>
      <Descriptions.Item label='Stop 사유'>{customerDetail?.debtorReason}</Descriptions.Item>
      <Descriptions.Item label='최종수정일'>{customerDetail?.mktModifyDate}</Descriptions.Item>
      <Descriptions.Item label='최종수정자'>{customerDetail?.mktModifyUserId}</Descriptions.Item>
    </Descriptions>
  );
};

export default CustomerTemplate;
