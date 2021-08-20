import React, { FC } from 'react';

interface ConsentTemplateInterface {
  bizNo: string;
}

const ConsentTemplate: FC<ConsentTemplateInterface> = ({ bizNo }) => {
  // const { data: customerConsentDetail } = useRequest<CustomerDetailBizItemInterface>({
  //   url: API.CUSTOMER_DETAIL_BIZ.endpoint,
  //   params: { bizNo },
  //   method: API.CUSTOMER_DETAIL_BIZ.method,
  // });

  return (
    <>
      {/* <Descriptions bordered column={{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
        <Descriptions.Item label='수집경로'>{customerConsentDetail?.collectType}</Descriptions.Item>
      </Descriptions> */}
    </>
  );
};

export default ConsentTemplate;
