import { CustomerConsentListRequestInterface } from '@apis/customer';
import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CommonContainer from '../components/common/atoms/CommonContainer';
import HorizontalBlank from '../components/common/atoms/HorizontalBlank';
import CustomerConsentList from './templates/CustomerConsentList';
import SearchForm from './templates/SearchForm';

const CustomerConsentListPage: FC<RouteComponentProps> = (props) => {
  console.log('window.history.state', window.history.state, props);
  const [param, setParam] = useState<CustomerConsentListRequestInterface>(window.history.state);
  const [searched, isSearched] = useState(!!window.history.state?.searchValue);
  console.log('hist', window.history);

  useEffect(() => {
    console.log('param, window.location.pathname', param, window.location.pathname);
    searched && window.history.pushState(param, window.location.pathname);
  }, [searched, param]);
  return (
    <CommonContainer>
      <SearchForm
        param={param}
        onSearch={(searchData) => {
          setParam(searchData);
          isSearched(true);
        }}
      />
      <HorizontalBlank height={20} />
      {searched && <CustomerConsentList {...param} key={`key_${JSON.stringify(param)}`} />}
    </CommonContainer>
  );
};

export default CustomerConsentListPage;
