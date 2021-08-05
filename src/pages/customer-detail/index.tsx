import React, { FC } from 'react';
import CommonContainer from '../components/common/atoms/CommonContainer';
import CustomerTemplate from './templates/CustomerTemplate';

const CustomerDetailPage: FC = () => {
  return (
    <CommonContainer>
      <CustomerTemplate />
    </CommonContainer>
  );
};

export default CustomerDetailPage;
