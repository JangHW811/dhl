import { InfoCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { EnumRouteUrl } from '../../constants/ConstRoute';
import CommonContainer from '../components/common/atoms/CommonContainer';
import CommonInput from '../components/common/atoms/CommonInput';

const LoginPage = () => {
  const submitHandle = () => {};
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
          errorMessage={'비밀번호가 틀렸씀'}
          type={'password'}
          placeholder='Enter your Password'
          prefix={<LockOutlined />}
          suffix={
            <Tooltip title='Enter your Password'>
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        <Link to={EnumRouteUrl.HOME}>
          <Button type={'primary'}>Login</Button>
        </Link>
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
