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
  const [searchType, setSearchType] = useState(param?.searchField ?? '');
  const [searchKeyword, setSearchKeyword] = useState(param?.searchValue ?? '');
  const [searchData, setSearchData] = useState<SearchDataInterface>({ searchField: '', searchValue: '' });
  const changeSearchType = (key: string) => {
    setSearchType(key);
    setSearchKeyword('');
  };

  useEffect(() => {
    setSearchData({
      searchField: searchType,
      searchValue: searchKeyword,
    });
  }, [searchType, searchKeyword]);
  return (
    <Row gutter={10} style={{ alignItems: 'flex-end' }}>
      <Col span={4}>
        <Title>검색조건</Title>
        <SelectSearchType
          onChange={(value: any) => {
            changeSearchType(value);
          }}
          value={param?.searchField}
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
        <Input value={searchKeyword} onChange={({ target }) => setSearchKeyword(target.value)} />
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
