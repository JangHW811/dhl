import { EnumRouteUrl } from '@constants/ConstRoute';
import CommonContainer from '@pages/components/common/atoms/CommonContainer';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../utils/auth';

const LoginPage = (props: RouteComponentProps) => {
  const { accessToken, authAction, loading } = useAuth();
  // const [userId, setUserId] = useState('');
  // const [password, setPassword] = useState('');
  const submitHandle = async (submitData: any) => {
    await authAction.login(submitData);
    console.log('dataqq', accessToken, submitData);
    props.history.push(EnumRouteUrl.HOME);
  };
  const onError = async (errorInfo: any) => {
    console.log('errorInfo:', errorInfo);
  };
  return (
    <CommonContainer justifyCenter alignCenter>
      <Contents>
        <Form
          name='basic'
          style={{ width: '100%' }}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={submitHandle}
          onFinishFailed={onError}>
          <Form.Item
            label='Username'
            name='userId'
            rules={[
              {
                required: true,
                message: 'Please input your id',
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password',
              },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 16,
            }}>
            <Button type='primary' htmlType='submit' loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Contents>
    </CommonContainer>
  );
};

const Contents = styled.div`
  width: 70%;
`;

const Message = styled.p`
  font-size: 16px;
  line-height: 16px;
`;
export default LoginPage;
