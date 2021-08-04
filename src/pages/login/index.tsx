import { InfoCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { EnumRouteUrl } from '../../constants/ConstRoute';
import { useAuth } from '../../utils/auth';
import CommonContainer from '../components/common/atoms/CommonContainer';
import CommonInput from '../components/common/atoms/CommonInput';

const LoginPage = (props: RouteComponentProps) => {
  const { authToken, authAction } = useAuth();
  const submitHandle = () => {
    authAction.login();
    console.log('data', authToken);
    props.history.push(EnumRouteUrl.HOME);
  };
  return (
    <CommonContainer center>
      <Contents direction={'vertical'} size={12}>
        <Message>Enter Your Credentials</Message>
        <CommonInput
          placeholder='Enter your ID'
          prefix={<UserOutlined />}
          suffix={
            <Tooltip title='Enter your ID'>
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        <CommonInput
          message={'비밀번호가 틀렸씀'}
          type={'password'}
          placeholder='Enter your Password'
          prefix={<LockOutlined />}
          suffix={
            <Tooltip title='Enter your Password'>
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        <Button type={'primary'} onClick={() => submitHandle()}>
          Login
        </Button>
      </Contents>
    </CommonContainer>
  );
};

const Contents = styled(Space)`
  width: 70%;
`;

const Message = styled.p`
  font-size: 16px;
  line-height: 16px;
`;
export default LoginPage;
