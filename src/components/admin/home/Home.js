import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import DashBoard2 from './DashBoard2'
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

export default function Home() {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/dang-ky-tai-khoan')
        } else {
            const decodedToken = jwtDecode(token); // Correct function name
            if (decodedToken.quyenHan === 'admin') {
                setAuth(true);
            }
        }
    }, [navigate, setAuth]); // Add dependencies to useEffect

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
            <div className='container-fluid' style={{ height: '100vh' }}>
                <div className='row'>
                    <div className='col-2 ' >
                        <Dashboard />
                    </div>
                    <div className='col-10 bg-light'>
                        <div className='bg-success p-3 mb-3'>
                            <button className='btn btn-btn-outline-dark'>Đăng xuất</button>
                        </div>
                        <DashBoard2 />
                    </div>
                </div>
            </div>
        )
    }
}
