import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const MainLayout = ({ children }) => {
    return (
        <Layout style={{ minHeight: "362px" }}>
            <Header style={{backgroundColor: "#fff"}}>
                <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1">
                        <Link to="/">Список элементов</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: "20px" }}>{children}</Content>
        </Layout>
    );
};

export default MainLayout;
