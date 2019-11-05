import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import CustomSlider from '../../components/customSlider/customSlide'
const { Header, Content, Footer, Sider } = Layout;

class Admin extends React.Component{
    render(){
        return(
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                >
                    <div className="logo" />

                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <CustomSlider></CustomSlider>
                        {/*<Menu.Item key="1">*/}
                        {/*<Icon type="user" />*/}
                        {/*<span className="nav-text">nav 1</span>*/}
                    {/*</Menu.Item>*/}
                        {/*<Menu.Item key="1">*/}
                            {/*<Icon type="user" />*/}
                            {/*<span className="nav-text">nav 1</span>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item key="1">*/}
                            {/*<Icon type="user" />*/}
                            {/*<span className="nav-text">nav 1</span>*/}
                        {/*</Menu.Item>*/}
                    </Menu>
                </Sider>
                <Layout  marginTop='20'>
                    <Header style={{ background: '#fff'}} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 400 }}>
                            content
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
export default Admin