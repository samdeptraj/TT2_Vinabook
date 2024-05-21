import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import CardHome from './CardHome';
import NguoiDung from './NguoiDung';
import SanPham from './SanPham';
import './style.css';
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined, AppstoreAddOutlined, HolderOutlined, ReconciliationOutlined,
    PlusCircleOutlined, UnorderedListOutlined
} from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import AddSanPham from './AddSanPham';
import AddNguoiDung from './AddNguoiDung';
import DanhMuc from './DanhMuc';
import ChiTietSP from './ChiTietSP';
import { ROUTERS_ADMIN } from '../../../utils/router';
import SubMenu from 'antd/es/menu/SubMenu';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, route) {
    return {
        key,
        icon,
        children,
        label,
        route
    };
}

const items = [
    getItem('Trang chủ', '1', <PieChartOutlined />, null, '/admin/home'),
    getItem('Sản phẩm', 'sub1', <DesktopOutlined />, [
        getItem('Thêm sản phẩm', '2', <PlusCircleOutlined />, null, '/admin/san-pham/add'),
        getItem('Danh sách sản phẩm', '3', <UnorderedListOutlined />, null, '/admin/san-pham'),
    ]),
    getItem('Người dùng', 'sub2', <UserOutlined />, [
        getItem('Thêm người dùng', '4', <PlusCircleOutlined />, null, '/admin/nguoi-dung/add'),
        getItem('Danh sách người dùng', '5', <UnorderedListOutlined />, null, '/admin/nguoi-dung/'),
    ]),
    getItem('Danh mục sản phẩm', '6', <AppstoreAddOutlined />, null, '/admin/danh-muc'),
    getItem('Đơn hàng', '7', <ReconciliationOutlined />, null, '/admin/don-hang'),
];
export default function Home({ children }) {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token); // Correct function name
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const [selectedItem, setSelectedItem] = useState("1");
    const isNotViewDetail = useSelector(state => state.DonHangReducerSaga.isNotViewDetail);
    useEffect(() => {
        dispatch({
            type: "GET_ALL_DON_HANG",
        })
    }, [dispatch])

    useEffect(() => {
        if (!token) {
            navigate('/dang-ky-tai-khoan')
        } else {
            if (decodedToken.quyenHan === 'admin') {
                setAuth(true);
            }
        }
    }, [navigate, setAuth]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    const handleMenuItemClick = (item) => {
        setSelectedItem(item.key);
    }
    const renderMenuItems = (items) => {
        return items.map(item => {
            if (item.children) {
                return <SubMenu key={item.key} icon={item.icon} title={item.label}>
                    {renderMenuItems(item.children)}
                </SubMenu>
            }
            return <Menu.Item key={item.key} item={item} icon={item.icon}>
                {<Link to={item.route} style={{ textDecoration: "none" }}>{item.label}</Link>}
            </Menu.Item>
        })
    }
    if (auth === false) {
        return (
            <div className='container-fluid' style={{ height: '100vh' }}>
                <div className='row'>
                    <div className='col-12 bg-light' >
                        <h1 className='text-center text-danger'>Bạn không có quyền truy cập!</h1>
                        <p className='text-center'><Link to={'/'} style={{ textDecoration: 'none' }}>Quay trở lại</Link></p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}>
                    <div className="demo-logo-vertical" style={{ width: '100%', padding: "10px" }} >
                        <img src={require('../../../assets/images/logo_vinabook.png')} alt='' style={{ width: "100%" }} />
                    </div>
                    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                        {renderMenuItems(items)}
                    </Menu>
                </Sider>
                <Layout >
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <div className='admin_home_header' >
                            <p className='mr-2 mb-0' >{decodedToken.email}</p>
                            <div className='mr-2' style={{ width: '4%' }}>
                                <img src={require('../../../assets/images/avatar_user.png')} style={{ width: '100%', border: '1px solid lightgray', borderRadius: '50%', overflow: 'hidden' }} alt='/#' />
                            </div>
                            <div>
                                <button className='btn btn btn-outline-dark' onClick={() => handleLogout()}>Đăng xuất</button>
                            </div>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <Breadcrumb
                            style={{
                                margin: '10px 0',
                            }}
                        >
                            <Breadcrumb.Item>Admin</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                {selectedItem === "1" ? "Trang chủ" : ""}
                                {selectedItem === "2" ? "Thêm sản phẩm" : ""}
                                {selectedItem === "3" && isNotViewDetail ? "Danh sách sản phẩm" : selectedItem === "3" && !isNotViewDetail ? "Chi tiết sản phẩm" : ""}
                                {selectedItem === "4" ? "Thêm người dùng" : ""}
                                {selectedItem === "5" ? "Danh sách người dùng" : ""}
                                {selectedItem === "6" ? "Danh mục sản phẩm" : ""}
                                {selectedItem === "8" ? "Thêm chi tiết sản phẩm" : ""}
                                {selectedItem === "9" ? "Danh sách chi tiết sản phẩm" : ""}
                                {selectedItem === "10" ? "Thêm đơn hàng" : ""}
                                {selectedItem === "11" ? "Danh sách đơn hàng" : ""}
                            </Breadcrumb.Item>
                        </Breadcrumb>

                        <div
                            style={{
                                padding: 5,
                                minHeight: 360,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
