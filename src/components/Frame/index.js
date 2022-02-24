import React from 'react'
import './index.css'
import { Layout, Menu } from 'antd';

import { adminRoute } from '../../routes/index'
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header,Sider, Content } = Layout;
function Index(props) {
    function renderMenu(adminRoute){
       return adminRoute.map(route=>{
            if( route.children && route.children.length > 0){
                return <SubMenu  key={route.path} title={route.title}>
                    { renderMenu(route.children) }
                </SubMenu>
            }else{
                return <Menu.Item title={route.title} key={route.path}>{route.title}</Menu.Item>
            }
        })
    }

  return (
    <Layout>
        <Sider >
          <div className="logo" />
          <Menu theme="dark" mode="inline" >
                {renderMenu(adminRoute)}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
            {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })} */}
            1111
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
  )
}

export default Index