import { Button, Col, Input, Row, Select } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
interface SearchFormInterface {
  onSearch: (data: SearchDataInterface) => void;
  param?: SearchDataInterface;
}

export interface SearchDataInterface {
  searchField: string;
  searchValue: string;
}
const SearchForm: FC<SearchFormInterface> = ({ onSearch, param }) => {
  const [searchField, setSearchField] = useState(param?.searchField ?? '');
  const [searchValue, setSearchValue] = useState(param?.searchValue ?? '');
  const [searchData, setSearchData] = useState<SearchDataInterface>({ searchField: '', searchValue: '' });
  const changeSearchType = (key: string) => {
    setSearchField(key);
    setSearchValue('');
  };

  useEffect(() => {
    setSearchData({
      searchField,
      searchValue,
    });
  }, [searchField, searchValue]);
  return (
    <Row gutter={10} style={{ alignItems: 'flex-end' }}>
      <Col span={4}>
        <Title>검색조건</Title>
        <SelectSearchType
          onChange={(value: any) => {
            changeSearchType(value);
          }}
          value={searchField}
          options={[
            { label: '고객번호', value: 'accntNo' },
            { label: '한글상호', value: 'bizKorNm' },
            { label: '영문상호', value: 'bizEngNm' },
            { label: '담당자명', value: 'bizContactNm' },
            { label: '전화번호', value: 'bizContactTel' },
            { label: '사업자번호', value: 'bizNo' },
            { label: '대표자명', value: 'bizRepresentNm' },
            { label: '법인번호', value: 'bizResidentNo' },
          ]}
        />
      </Col>
      <Col span={4}>
        <Title>검색어</Title>
        <Input value={searchValue} onChange={({ target }) => setSearchValue(target.value)} />
      </Col>
      <Col>
        <Button
          type={'primary'}
          disabled={!(searchData.searchField && searchData.searchValue)}
          onClick={() => {
            onSearch(searchData);
          }}>
          검색
        </Button>
      </Col>
    </Row>
  );
};
const SelectSearchType = styled(Select)`
  width: 100%;
`;

const Title = styled.div`
  justify-content: center;
  font-size: 12px;
`;

export default SearchForm;
