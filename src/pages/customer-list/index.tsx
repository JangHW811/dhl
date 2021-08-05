import React, { useState } from 'react';
import CommonContainer from '../components/common/atoms/CommonContainer';
import HorizontalBlank from '../components/common/atoms/HorizontalBlank';
import CustomerList from './templates/CustomerList';
import SearchForm, { SearchDataInterface } from './templates/SearchForm';
const CustomerListPage = () => {
  const [param, setParam] = useState<SearchDataInterface>();
  const [searched, isSearched] = useState(false);
  return (
    <CommonContainer>
      <SearchForm
        onSearch={(searchData) => {
          setParam(searchData);
          isSearched(true);
        }}
        onChangeField={() => isSearched(false)}
      />
      <HorizontalBlank height={20} />
      {searched && <CustomerList {...param} />}
    </CommonContainer>
  );
};

export default CustomerListPage;
