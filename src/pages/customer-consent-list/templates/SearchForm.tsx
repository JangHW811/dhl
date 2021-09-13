import { CustomerConsentListRequestInterface } from '@apis/customer';
import { GlobalFormat } from '@constants/Format';
import { Button, DatePicker, Form, Input, Row, Select, Space } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
interface SearchFormInterface {
  onSearch: (data: CustomerConsentListRequestInterface) => void;
  param?: CustomerConsentListRequestInterface;
}

const SearchForm: FC<SearchFormInterface> = ({ onSearch, param }) => {
  const [searchParam, setSearchParam] = useState(param);
  const [requiredDate, isRequiredDate] = useState(true);

  const [form] = useForm();

  const onReset = () => {
    form.resetFields();
  };

  return (
    <_Form
      form={form}
      className='components-table-demo-control-bar'
      style={{ marginBottom: 16 }}
      onValuesChange={(data) => {
        console.log('AAAA', data);
      }}
      onFinish={(submitData: any) => {
        console.log('bbbb', submitData);

        if (submitData?.mktConsentTime) {
          const [from, to] = submitData.mktConsentTime;
          submitData = {
            ...submitData,
            mktConsentFrom: from.format(GlobalFormat.DateDash),
            mktConsentTo: to.format(GlobalFormat.DateDash),
          };
          delete submitData.mktConsentTime;
        }
        if (submitData?.personalConsentTime) {
          const [from, to] = submitData.personalConsentTime;
          submitData = {
            ...submitData,
            personalConsentFrom: from.format(GlobalFormat.DateDash),
            personalConsentTo: to.format(GlobalFormat.DateDash),
          };
          delete submitData.personalConsentTime;
        }
        onSearch(submitData);
      }}>
      <Row>
        <ItemContainer>
          <Label>{'수집경로'}</Label>
          <Content>
            <Item name={'appFrom'}>
              <Select options={[{ label: '전체', value: '' }, { value: 'CIM-UNSEO' }, { value: 'MyDHL' }]} />
            </Item>
          </Content>
        </ItemContainer>
        <ItemContainer>
          <Label>{'고객번호'}</Label>
          <Content>
            <Item name={'account'}>
              <Input />
            </Item>
          </Content>
        </ItemContainer>
        <ItemContainer>
          <Label>{'사업자번호'}</Label>
          <Content>
            <Item name={'bizNo'}>
              <Input />
            </Item>
          </Content>
        </ItemContainer>
        <ItemContainer>
          <Label>{'Account Holder'}</Label>
          <Content>
            <Item name={'accountHolder'}>
              <Input />
            </Item>
          </Content>
        </ItemContainer>
        <ItemContainer>
          <Label>{'이름'}</Label>
          <Content>
            <Item name={'customerName'}>
              <Input />
            </Item>
          </Content>
        </ItemContainer>
        <ItemContainer>
          <Label>{'연락처'}</Label>
          <Content>
            <Item name={'customerContact'}>
              <Input />
            </Item>
          </Content>
        </ItemContainer>
        <ItemContainer>
          <Label>{'이메일'}</Label>
          <Content>
            <Item name={'customerEmail'}>
              <Input />
            </Item>
          </Content>
        </ItemContainer>
        <ItemContainer>
          <Label>{'마케팅 동의여부'}</Label>
          <Content>
            <Item name={'mktConsentYn'}>
              <Select options={[{ label: '전체', value: '' }, { value: 'Y' }, { value: 'N' }]} />
            </Item>
          </Content>
        </ItemContainer>
        <ItemContainer>
          <Label>{'마케팅 동의일'}</Label>
          <Content>
            <Item name={'mktConsentTime'}>
              <DatePicker.RangePicker format={GlobalFormat.DateDash} picker={'date'} />
            </Item>
          </Content>
        </ItemContainer>
        <ItemContainer>
          <Label>{'개인정보 동의일'}</Label>
          <Content>
            <Item name={'personalConsentTime'}>
              <DatePicker.RangePicker format={GlobalFormat.DateDash} picker={'date'} />
            </Item>
          </Content>
        </ItemContainer>
        <ItemContainer>
          <Label>{'만료일'}</Label>
          <Content>
            <Item name={'expirationDate'}>
              <DatePicker format={GlobalFormat.DateDash} picker={'date'} style={{ width: '100%' }} />
            </Item>
          </Content>
        </ItemContainer>
        <ButtonArea>
          <ButtonSpace>
            <Button type={'primary'} htmlType='submit'>
              조회
            </Button>
            <Button onClick={onReset}>초기화</Button>
          </ButtonSpace>
        </ButtonArea>
      </Row>
    </_Form>
  );
};
const _Form = styled(Form)`
  background-color: #eee;
  padding: 12px;
`;

const Item = styled(Form.Item)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
`;

const ButtonArea = styled.div`
  flex: 1;
  padding: 8px 15px;
`;

const ButtonSpace = styled(Space)`
  float: right;
`;

const Label = styled.div`
  width: 110px;
  display: flex;
  justify-content: flex-end;
  margin-right: 8px;
`;

const Content = styled.div`
  width: 220px;
  display: flex;
`;

const ItemContainer = styled(Space)`
  margin: 10px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SearchForm;
