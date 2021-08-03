import { Header } from 'antd/lib/layout/layout';
import { FC } from 'react';
import styled from 'styled-components';
import DHL_LOGO from '../../../../assets/logo.gif';

interface HeaderInterface {
  title: string;
}
const CommonHeader: FC<HeaderInterface> = ({ title }) => {
  return (
    <HeaderContainer>
      <DhlLogo src={DHL_LOGO} />
      <Contents>{title}</Contents>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Header)`
  width: 100vw;
  display: sticky;
  height: 150px;
  background-color: #ffcc00;
  justify-content: center;
  border-bottom: 6px solid #d40511;
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
