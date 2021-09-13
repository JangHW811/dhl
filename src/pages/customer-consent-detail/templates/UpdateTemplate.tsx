import { Form, Input } from 'antd';
import React, { FC } from 'react';
import { CustomerConsentDetailResponse } from '..';

interface DetailTemplateInterface {
  seq: string;
}

const DetailTemplate: FC<CustomerConsentDetailResponse> = (customerConsentDetails) => {
  return (
    <Form
      title='세부내용'
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 24,
      }}>
      <Form.Item label='seq' name='seq'>
        <Input />
      </Form.Item>
      <Form.Item label='수집경로' name='appFrom'>
        <Input />
      </Form.Item>
      <Form.Item label='고객명' name='customerNameEncrypt'>
        <Input />
      </Form.Item>
      <Form.Item label='고객번호' name='account'>
        <Input />
      </Form.Item>
      <Form.Item label='사업자번호 ' name='bizNo'>
        <Input />
      </Form.Item>
      <Form.Item label='Account Holder' name='accountHolderYn'>
        <Input />
      </Form.Item>
      <Form.Item label='이메일' name='customerEmailEncrypt'>
        <Input />
      </Form.Item>
      <Form.Item label='마케팅동의여부 ' name='mktConsentYn'>
        <Input />
      </Form.Item>
      <Form.Item label='업데이트 날짜' name='updateTime'>
        <Input />
      </Form.Item>
      <Form.Item label='업데이트 담당자' name='updateUser'>
        <Input />
      </Form.Item>
    </Form>
  );
};

export default DetailTemplate;
