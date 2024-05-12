import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER } from '../../../../../redux/saga/types/NguoiDung.types';
import { jwtDecode } from 'jwt-decode';
import moment from 'moment';
import { Link } from 'react-router-dom';
export default function TaiKhoan() {
    const dispatch = useDispatch();
    const userInfo = {
        username: 'nguoidung123',
        email: 'nguoidung123@example.com',
        fullName: 'Người Dùng',
        avatar: 'https://example.com/avatar.png', // URL của ảnh đại diện
        // Các thông tin khác của tài khoản người dùng
    };
    const token = localStorage.getItem('token');
    const decodeToken = jwtDecode(token);
    const userProfile = useSelector(state => state.NguoiDungReducer.userProfile);
    console.log('userProfile: ', userProfile);
    useEffect(() => {
        dispatch({
            type: "GET_USER",
            data: decodeToken.maNguoiDung
        })
    }, [dispatch])
    const handleChangeAvatar = () => {

    }
    const renderProfile = () => {
        if (userProfile) {
            return <div className='row'>
                <div className='col-6'>
                    <h3>Thông tin tài khoản</h3>
                    <div className="user-profile mt-3">
                        <div className="avatar myAccount-avatar d-flex justify-content-center flex-column" style={{ width: "10%" }} >
                            <img src={userProfile.avatar} alt="Avatar" style={{ borderRadius: "50%", width: "100%" }} />
                        </div>
                        <div className="user-details mt-4">
                            <p><strong>Email:</strong> {userProfile.email}</p>
                            <p><strong>Họ và tên:</strong> {userProfile.ho + " " + userProfile.ten}</p>
                            <p><strong>Ngày tạo:</strong> {moment(userProfile.createdAt).format('DD/MM/YYYY HH:mm:ss')}</p>
                            <Link to="/don-hang-cua-toi" className='text-success' style={{ textDecoration: "none", fontSize: "18px", color: "black" }}><i class="fa-solid fa-truck-fast"></i> Đơn hàng</Link>
                        </div>
                    </div>
                </div>
            </div >
        } else {
            return <div className='d-flex justify-content-center align-content-center'>
                <div className='w-25'>
                    <img src='./images/header/nothing.png' alt='/#' style={{ width: "100%" }} />
                    <h3>Chẳng có gì ở đây cả</h3>
                </div>
            </div>
        }
    }
    return (
        <div className="container mt-5 mb-5 myAccount">
            {renderProfile()}
            {/* Thêm các phần tử giao diện khác để hiển thị thông tin tài khoản người dùng */}
        </div>
    );
}
