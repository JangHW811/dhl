import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import SubMenu from 'antd/lib/menu/SubMenu';
import React, { FC } from 'react';

const SideMenu: FC = () => {
  return (
    <Sider
      style={{ backgroundColor: '#fff' }}
      collapsible
      collapsedWidth={100}
      //   collapsed={true}
      //   onCollapse={this.onCollapse}
    >
      <div className='logo' />
      <Menu
        className='site-layout-background'
        theme='light'
        defaultSelectedKeys={['1']}
        mode='inline'
        style={{ backgroundColor: '#fff' }}>
        <SubMenu key='sub0' title='기업고객(B2B)'>
          <Menu.Item key='00'>고객정보 조회</Menu.Item>
          <Menu.Item key='01'>고객정보 등록</Menu.Item>
          <Menu.Item key='02'>고객정보 업로드</Menu.Item>
        </SubMenu>
        <Menu.Item key='2'>개인고객</Menu.Item>
        <SubMenu key='sub1' title='개인통관정보'>
          <Menu.Item key='3'>Tom</Menu.Item>
          <Menu.Item key='4'>Bill</Menu.Item>
          <Menu.Item key='5'>Alex</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' title='Billing'>
          <Menu.Item key='6'>Team 1</Menu.Item>
          <Menu.Item key='8'>Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key='9'>Common</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
