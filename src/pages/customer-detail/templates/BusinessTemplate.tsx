import { API } from '@apis/API';
import { Descriptions } from 'antd';
import React, { FC } from 'react';
import { useRequest } from 'src/axios/useRequest';
import { CustomerDetailBizItemInterface } from '..';

interface BusinessTemplateInterface {
  accntNo: string;
}

const BusinessTemplate: FC<BusinessTemplateInterface> = ({ accntNo }) => {
  const { endpoint, method } = API.CUSTOMER_DETAIL_BIZ;
  const { data: customerBizDetail, error } = useRequest<CustomerDetailBizItemInterface>({
    url: endpoint,
    params: { accntNo },
    method,
  });

  if (error) {
    return <div>error..</div>;
  } else if (!customerBizDetail) {
    return <div>loading..</div>;
  }
  return (
    <Descriptions bordered column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}>
      <Descriptions.Item label='사업자번호'>{customerBizDetail?.bizNo}</Descriptions.Item>
      <Descriptions.Item label='ACNT NO.'>{`${customerBizDetail?.impAccntNo} (IMP)\n${customerBizDetail?.expAccntNo} (EXP)`}</Descriptions.Item>
      <Descriptions.Item label='상호(영문)' span={2}>
        {customerBizDetail?.bizEngNm}
      </Descriptions.Item>
      <Descriptions.Item label='상호(한글)' span={2}>
        {customerBizDetail?.bizKorNm}
      </Descriptions.Item>
      <Descriptions.Item label='대표자성명'>{customerBizDetail?.bizRepresentName}</Descriptions.Item>
      <Descriptions.Item label='법인번호'>{customerBizDetail?.bizResidentNo}</Descriptions.Item>
      <Descriptions.Item label='등록주소' span={2}>
        {customerBizDetail?.bizAddr}
      </Descriptions.Item>
      <Descriptions.Item label='업태'>{customerBizDetail?.bizType}</Descriptions.Item>
      <Descriptions.Item label='종목'>{customerBizDetail?.bizKind}</Descriptions.Item>
      <Descriptions.Item label='갱신일'>{customerBizDetail?.bizType}</Descriptions.Item>
      <Descriptions.Item label='우편번호'>{customerBizDetail?.bizZipNo}</Descriptions.Item>
      <Descriptions.Item label='담당자'>{customerBizDetail?.bizContactNm}</Descriptions.Item>
      <Descriptions.Item label='담당자부서명'>{customerBizDetail?.bizContactDept}</Descriptions.Item>
      <Descriptions.Item label='전화번호'>{customerBizDetail?.bizContactTel}</Descriptions.Item>
      <Descriptions.Item label='FAX번호'>{customerBizDetail?.bizContactFax}</Descriptions.Item>
      <Descriptions.Item label='이메일'>{customerBizDetail?.bizContactEmail}</Descriptions.Item>
      <Descriptions.Item label='휴대폰번호'>{customerBizDetail?.bizContactCP}</Descriptions.Item>
      <Descriptions.Item label='수입담당자이메일' span={2}>
        {`${customerBizDetail?.importEmail}${customerBizDetail?.importEmailYn === 'Y' ? ' (수신허용)' : ''}`}
      </Descriptions.Item>
      <Descriptions.Item label='수출담당자이메일' span={2}>
        {`${customerBizDetail?.exportEmail}${customerBizDetail?.exportEmailYn === 'Y' ? ' (수신허용)' : ''}`}
      </Descriptions.Item>
      <Descriptions.Item label='전송 TYPE' span={2}>
        {customerBizDetail?.collectType}
      </Descriptions.Item>
      <Descriptions.Item label='B/L 인계 정보' span={2}>
        {customerBizDetail?.blHandInfo}
      </Descriptions.Item>
      <Descriptions.Item label='선 통관정보' span={2}>
        {customerBizDetail?.mainProdInfo}
      </Descriptions.Item>
      <Descriptions.Item label='선 통관정보2' span={2}>
        {customerBizDetail?.specialRemarks}
      </Descriptions.Item>
      <Descriptions.Item label='참조1' span={2}>
        {customerBizDetail?.remarks1}
      </Descriptions.Item>
      <Descriptions.Item label='참조2' span={2}>
        {customerBizDetail?.remarks2}
      </Descriptions.Item>
      <Descriptions.Item label='참조3' span={2}>
        {customerBizDetail?.remarks3}
      </Descriptions.Item>
      <Descriptions.Item label='특이사항' span={2}>
        {customerBizDetail?.taxCheckInfo}
      </Descriptions.Item>
      <Descriptions.Item label='최종수정일'>{customerBizDetail?.modifyDate}</Descriptions.Item>
      <Descriptions.Item label='최종수정자'>{customerBizDetail?.modifyUserId}</Descriptions.Item>
      <Descriptions.Item label='Agent e-mail'>{customerBizDetail?.agentEmail}</Descriptions.Item>
      <Descriptions.Item label='Agent 영문이름'>{customerBizDetail?.agentEngNm}</Descriptions.Item>
      <Descriptions.Item label='Agent 이름'>{customerBizDetail?.agentNm}</Descriptions.Item>
      <Descriptions.Item label='Agent Code'>{customerBizDetail?.agentCd}</Descriptions.Item>
      <Descriptions.Item label='Agent 전화번호'>{customerBizDetail?.agentTel}</Descriptions.Item>
      <Descriptions.Item label='Agent FAX 번호'>{customerBizDetail?.agentFax}</Descriptions.Item>
    </Descriptions>
  );
};

export default BusinessTemplate;
