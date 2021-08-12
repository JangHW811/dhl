import { InfoCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { isRequired } from '@utils/validate';
import { Button, Space, Tooltip } from 'antd';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { EnumRouteUrl } from '../../constants/ConstRoute';
import { useAuth } from '../../utils/auth';
import CommonContainer from '../components/common/atoms/CommonContainer';
import CommonInput from '../components/common/atoms/CommonInput';

const LoginPage = (props: RouteComponentProps) => {
  const { accessToken, authAction } = useAuth();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const submitHandle = () => {
    authAction.login(userId, password);
    console.log('dataqq', accessToken);
    props.history.push(EnumRouteUrl.HOME);
  };
  return (
    <CommonContainer center>
      <Contents direction={'vertical'} size={12}>
        <Message>Enter Your Credentials</Message>
        <CommonInput
          placeholder='Enter your ID'
          onChange={({ target }) => setUserId(target.value)}
          prefix={<UserOutlined />}
          suffix={
            <Tooltip title='Enter your ID'>
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        <CommonInput
          message={'비밀번호가 틀렸씀'}
          onChange={({ target }) => setPassword(target.value)}
          type={'password'}
          placeholder='Enter your Password'
          prefix={<LockOutlined />}
          suffix={
            <Tooltip title='Enter your Password'>
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        <Button type={'primary'} onClick={() => submitHandle()} disabled={!isRequired(userId, password)}>
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
