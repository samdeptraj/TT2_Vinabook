import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import DashBoard2 from './DashBoard2'
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';

export default function Home() {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "GET_ALL_DON_HANG",
        })
    }, [dispatch])

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token); // Correct function name
    useEffect(() => {
        if (!token) {
            navigate('/dang-ky-tai-khoan')
        } else {
            if (decodedToken.quyenHan === 'admin') {
                setAuth(true);
            }
        }
    }, [navigate, setAuth]); // Add dependencies to useEffect
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
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
            <div className='container-fluid' style={{ height: '100vh' }}>
                <div className='row'>
                    <div className='col-2 ' >
                        <Dashboard />
                    </div>
                    <div className='col-10 bg-light'>
                        <div className='bg-white mt-3 p-3 mb-3 text-right d-flex justify-content-end align-items-center' style={{ boxShadow: "1px 1px 4px 2px lightgray", borderRadius: '2px' }}>
                                <p className='mr-2' >{decodedToken.email}</p>
                            <div className='mr-2' style={{ width: '4%' }}>
                                <img src={require('../../../assets/images/avatar_user.png')} style={{ width: '100%', border: '1px solid lightgray', borderRadius: '50%', overflow: 'hidden' }} alt='/#' />
                            </div>
                            <div>
                                <button className='btn btn btn-outline-dark' onClick={() => handleLogout()}>Đăng xuất</button>
                            </div>
                        </div>
                        <DashBoard2 />
                    </div>
                </div>
            </div>
        )
    }
}
