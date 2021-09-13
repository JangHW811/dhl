import { API } from '@apis/API';
import CommonContainer from '@pages/components/common/atoms/CommonContainer';
import CommonSpinner from '@pages/components/common/atoms/CommonSpiner';
import HorizontalBlank from '@pages/components/common/atoms/HorizontalBlank';
import { Button, Space } from 'antd';
import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useRequest } from 'src/axios/useRequest';
import styled from 'styled-components';
import DetailTemplate from './templates/DetailTemplate';
import UpdateTemplate from './templates/UpdateTemplate';

export interface CustomerConsentDetailResponse {
  seq: string;
  customerNameEncrypt: string;
  customerContactEncrypt: string;
  customerEmailEncrypt: string;
  mktConsentYn: string;
  account: string;
  accountHolderYn: string;
  bizNo: string;
  appFrom: string;
  createTime: string;
  createUser: string;
  updateTime: string;
  updateUser: string;
}
const CustomerConsentDetailPage: FC<RouteComponentProps<{ seq: string }>> = (props) => {
  const { seq } = props.match.params;
  console.log(props, props.match, props.match.params);

  const { endpoint, method } = API.CUSTOMER_CONSENT_DETAIL;
  const { data: customerConsentDetails, error } = useRequest<CustomerConsentDetailResponse[]>({
    url: endpoint,
    params: { seq },
    method,
  });

  if (error) {
    return <div>error..</div>;
  } else if (!customerConsentDetails) {
    return <CommonSpinner />;
  }

  return (
    <CommonContainer style={{ width: 1200 }}>
      {customerConsentDetails.map((item) => (
        <ItemContainer {...item}></ItemContainer>
      ))}
    </CommonContainer>
  );
};

const ItemContainer: FC<CustomerConsentDetailResponse> = (detailData) => {
  const [update, isUpdate] = useState(false);
  return (
    <div>
      {update ? <UpdateTemplate {...detailData} /> : <DetailTemplate {...detailData} />}
      <HorizontalBlank height={12} />
      <ButtonContainer>
        {update ? (
          <Space>
            <Button onClick={() => isUpdate(false)}>저장</Button>
            <Button onClick={() => isUpdate(false)}>취소</Button>
          </Space>
        ) : (
          <Button onClick={() => isUpdate(true)}>수정</Button>
        )}
      </ButtonContainer>
    </div>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default CustomerConsentDetailPage;
