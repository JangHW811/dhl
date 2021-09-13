import BACKGROUND from '@assets/images/background.jpg';
import { EnumRouteUrl } from '@constants/ConstRoute';
import CommonContainer from '@pages/components/common/atoms/CommonContainer';
import HorizontalBlank from '@pages/components/common/atoms/HorizontalBlank';
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
    <CommonContainer style={{ background: `no-repeat 100% url(${BACKGROUND})` }}>
      <Contents>
        <Form
          name='basic'
          style={{ width: '100%' }}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 17,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={submitHandle}
          onFinishFailed={onError}>
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}>
            <Message>Welcome to KCMF!</Message>
          </Form.Item>
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

          <HorizontalBlank height={20} />
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

          <HorizontalBlank height={20} />
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
            style={{ justifyContent: 'flex-end', display: 'flex' }}>
            <Button type='primary' htmlType='submit' loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Contents>
      <YellowMessage>With great power comes great responsibility.</YellowMessage>
    </CommonContainer>
  );
};

const Contents = styled.div`
  width: 400px;
  border-top: 6px solid #d40511;
  box-shadow: 8px 6px 23px 11px rgba(0, 0, 0, 0.2);
  background: white;
`;

const Message = styled.p`
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
  margin: 15px 0 40px;
`;

const YellowMessage = styled.div`
  padding: 20px;
  background: #fc0;
  opacity: 0.7;
  position: fixed;
  bottom: 50px;
  right: 0;
`;
export default LoginPage;
