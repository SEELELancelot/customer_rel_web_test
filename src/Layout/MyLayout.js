import React from 'react';
import './css/mylayout.css'
import { Layout, Menu, theme } from 'antd';
import Mytable from "../mytable/mytable";
import {NavLink, Route, Routes} from "react-router-dom";
import Page1 from "../page1/page1";
import Page2 from "../page2/page2";
import Error404 from "../404/error404";

const { Header, Content, Footer, Sider } = Layout;


const App: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (

        <Layout >
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <nav>

                    <NavLink to="product1" className={"navlink"}>1</NavLink>
                    <NavLink to="product2" className={"navlink"} >2</NavLink>
                    <NavLink to="product3" className={"navlink"}>3</NavLink>

                </nav>
            </Sider>
            <Layout >

                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 600, background: colorBgContainer }}>
                        <Routes>
                            {/*<Mytable/>*/}
                            <Route path={"/product1"} element={<Mytable  /> }/>
                            <Route path={"/product2"} element={<Page1 />}/>
                            <Route path={"/product3"} element={<Page2 />}/>
                            
                        </Routes>

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>客戶關係管理</Footer>
            </Layout>
        </Layout>
    );
};

export default App;