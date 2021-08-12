import DHL_LOGO from '@assets/logo.gif';
import { useGlobalModal } from '@store/modal';
import { useAuth } from '@utils/auth';
import { Button, Col, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import styled from 'styled-components';

interface HeaderInterface {
  title: string;
}
const CommonHeader: FC<HeaderInterface> = ({ title }) => {
  const { authAction, isLoggedIn } = useAuth();
  const { globalModalActions } = useGlobalModal();

  const showLoginModal = () => {
    globalModalActions.open({
      type: 'confirm',
      contents: '로그아웃을 하시겠습니까?',
      onClickConfirm: () => authAction.logout(),
    });
  };
  return (
    <HeaderContainer>
      <HeaderRow>
        <Col span={22}>
          <DhlLogo src={DHL_LOGO} />
          <Contents>{title}</Contents>
        </Col>
        {isLoggedIn && (
          <Col>
            <Button type={'primary'} onClick={showLoginModal}>
              로그아웃
            </Button>
          </Col>
        )}
      </HeaderRow>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Header)`
  width: 100vw;
  height: 150px;
  background-color: #ffcc00;
  justify-content: center;
  border-bottom: 6px solid #d40511;
  display: flex;
`;

const HeaderRow = styled(Row)`
  width: 100%;
`;

const Contents = styled.div`
  align-items: center;
  flex: 1;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  color: white;
  height: 100%;
`;

const DhlLogo = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 127px;
  height: 17px;
`;
export default CommonHeader;
