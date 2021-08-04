import { Button, Col, Input, Row, Select } from 'antd';
import React from 'react';
import styled from 'styled-components';
import CommonContainer from '../components/common/atoms/CommonContainer';
const CustomerListPage = () => {
  return (
    <CommonContainer>
      <Row gutter={10} style={{ alignItems: 'flex-end' }}>
        <Col span={4}>
          <Title>검색조건</Title>
          <SelectSearchType
            options={[
              { label: '고객번호', value: '고객번호' },
              { label: '한글상호', value: '한글상호' },
              { label: '영문상호', value: '영문상호' },
              { label: '담당자명', value: '담당자명' },
              { label: '전화번호', value: '전화번호' },
              { label: '사업자번호', value: '사업자번호' },
              { label: '대표자명', value: '대표자명' },
              { label: '법인번호', value: '법인번호' },
            ]}
          />
        </Col>
        <Col span={4}>
          <Title>검색어</Title>
          <Input />
        </Col>
        <Col>
          <Button type={'primary'}>검색</Button>
        </Col>
      </Row>
    </CommonContainer>
  );
};

const SelectSearchType = styled(Select)`
  width: 100%;
`;

const Title = styled.div`
  justify-content: center;
  font-size: 12px;
`;
export default CustomerListPage;
