import { EnumRouteUrl } from '@constants/ConstRoute';
import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import SubMenu from 'antd/lib/menu/SubMenu';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

const SideMenu: FC = (props) => {
  const history = useHistory();
  console.log(props);
  return (
    <Sider
      style={{ backgroundColor: '#fff' }}
      collapsible
      collapsedWidth={100}
      //   collapsed={true}
      //   onCollapse={thi쟈s.onCollapse}
    >
      <div className='logo' />
      <Menu
        className='site-layout-background'
        theme='light'
        defaultSelectedKeys={['1']}
        mode='inline'
        style={{ backgroundColor: '#fff' }}>
        <SubMenu key='sub0' title='KCMF 관리'>
          <Menu.Item
            key='00'
            onClick={() => {
              console.log('???');
              history.push(EnumRouteUrl.CUSTOMER_LIST);
            }}>
            고객정보 조회
          </Menu.Item>
        </SubMenu>
        <SubMenu key='sub1' title='개인정보 관리'>
          <Menu.Item
            key='3'
            onClick={() => {
              console.log('???');
              history.push(EnumRouteUrl.CUSTOMER_CONSENT_LIST);
            }}>
            조회
          </Menu.Item>
          <Menu.Item
            key='4'
            onClick={() => {
              console.log('???');
            }}>
            입력
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
