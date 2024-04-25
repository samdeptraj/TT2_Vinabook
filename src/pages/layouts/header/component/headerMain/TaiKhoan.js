import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GET_USER } from '../../../../../redux/saga/types/NguoiDung.types';

export default function TaiKhoan() {
    const userInfo = {
        username: 'nguoidung123',
        email: 'nguoidung123@example.com',
        fullName: 'Người Dùng',
        avatar: 'https://example.com/avatar.png', // URL của ảnh đại diện
        // Các thông tin khác của tài khoản người dùng
    };
    return (
        <div className="container">
            <h1>Thông tin tài khoản</h1>
            <div className="user-profile">
                <div className="avatar">
                    <img src={userInfo.avatar} alt="Avatar" />
                </div>
                <div className="user-details">
                    <p><strong>Tên đăng nhập:</strong> {userInfo.username}</p>
                    <p><strong>Email:</strong> {userInfo.email}</p>
                    <p><strong>Họ và tên:</strong> {userInfo.fullName}</p>
                    {/* Hiển thị các thông tin khác của tài khoản người dùng */}
                </div>
            </div>
            {/* Thêm các phần tử giao diện khác để hiển thị thông tin tài khoản người dùng */}
        </div>
    );
}
