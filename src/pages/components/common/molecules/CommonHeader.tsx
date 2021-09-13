import DHL_LOGO from '@assets/images/logo.gif';
import { useAuth } from '@utils/auth';
import { getStorageItem, STORAGE_KEY } from '@utils/storage';
import { Button, Col, Row, Space } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import useModal from 'antd/lib/modal/useModal';
import React, { FC } from 'react';
import styled from 'styled-components';

interface HeaderInterface {
  title: string;
}
const CommonHeader: FC<HeaderInterface> = ({ title }) => {
  const { authAction, isLoggedIn } = useAuth();
  const [modal, contextHolder] = useModal();

  const userInfo: UserInfo = getStorageItem(STORAGE_KEY.USER_INFO);
  const showLoginModal = () => {
    modal.confirm({
      content: '로그아웃을 하시겠습니까?',
      onOk: () => authAction.logout(),
    });
  };
  return (
    <HeaderContainer>
      <HeaderRow>
        <Col span={14}>
          <Contents>{title}</Contents>
        </Col>
        <Col span={10}>
          <RightContainer>
            <Space size={20}>
              {isLoggedIn && (
                <>
                  <NameFont>{`${userInfo.username}(DHL KR)`}</NameFont>
                  <_Button type={'primary'} onClick={showLoginModal}>
                    Logout
                  </_Button>
                </>
              )}
              <DhlLogo src={DHL_LOGO} />
            </Space>
          </RightContainer>
        </Col>
      </HeaderRow>
      {contextHolder}
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Header)`
  width: 100vw;
  height: 64px;
  background-color: #ffcc00;
  justify-content: center;
  align-items: center;
  border-bottom: 6px solid #d40511;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
`;

const HeaderRow = styled(Row)`
  width: 100%;
`;

const Contents = styled.div`
  align-items: center;
  flex: 1;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  color: black;
  height: 100%;
`;
const NameFont = styled.span`
  align-items: center;
  flex: 1;
  display: flex;
  font-size: 12px;
  font-weight: bold;
  color: black;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const DhlLogo = styled.img`
  height: 45%;
  object-fit: contain;
`;

const _Button = styled(Button)`
  padding: 8px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default CommonHeader;
