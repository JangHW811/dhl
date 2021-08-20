import React, { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CommonContainer from '../components/common/atoms/CommonContainer';
import HorizontalBlank from '../components/common/atoms/HorizontalBlank';
import CustomerList from './templates/CustomerList';
import SearchForm, { SearchDataInterface } from './templates/SearchForm';

const CustomerListPage: FC<RouteComponentProps> = (props) => {
  console.log('window.history.state', window.history.state);
  const [param, setParam] = useState<SearchDataInterface>(window.history.state);
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
      {searched && <CustomerList {...param} key={'customerList'} />}
    </CommonContainer>
  );
};

export default CustomerListPage;
