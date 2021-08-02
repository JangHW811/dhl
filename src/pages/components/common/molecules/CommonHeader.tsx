import { Header } from 'antd/lib/layout/layout';
import { FC } from 'react';
import styled from 'styled-components';

interface HeaderInterface {
  title: string;
}
const CommonHeader: FC<HeaderInterface> = ({ title }) => {
  return (
    <HeaderContainer>
      <Contents>{title}</Contents>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Header)`
  width: 100vw;
  display: sticky;
  height: 80px;
  background-color: #f8ce46;
  border-bottom: 6px solid #a2312a;
`;

const Contents = styled.div`
  padding: 30px;
  align-items: center;
  flex: 1;
  display: flex;
  height: 100%;
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

export default CommonHeader;
