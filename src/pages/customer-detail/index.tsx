import HorizontalBlank from '@pages/components/common/atoms/HorizontalBlank';
import React, { FC } from 'react';
import CommonContainer from '../components/common/atoms/CommonContainer';
import BusinessTemplate from './templates/BusinessTemplate';
import CustomerTemplate from './templates/CustomerTemplate';
import EtcTemplate from './templates/EtcTemplate';

const CustomerDetailPage: FC = () => {
  return (
    <CommonContainer>
      <CustomerTemplate />
      <HorizontalBlank height={40} />
      <BusinessTemplate />
      <HorizontalBlank height={40} />
      <EtcTemplate />
    </CommonContainer>
  );
};

export default CustomerDetailPage;
