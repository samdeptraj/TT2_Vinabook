import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_SAN_PHAM } from '../../../redux/saga/types/sanPham.types';
import ModalAddSP from './modal/ModalAddSP';

export default function DonHang() {
    const dispatch = useDispatch();
    const listSanPham = useSelector(state => state.DonHangReducerSaga.listSanPham);

    useEffect(() => {
        dispatch({
            type: GET_ALL_SAN_PHAM
        });
    }, [dispatch]);

    const handleUploadImage = (id, file) => {
        const formData = new FormData();
        formData.append('image', file);

        dispatch({
            type: "UPLOAD_IMAGE_SANPHAM",
            data: { id, formData }
        });
    };

    const renderSanPham = () => {
        return listSanPham.map(item => {
            const link = `/san-pham/${item.id}`;
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.tenSp}</td>
                    <td style={{ width: '50px' }}>
                        {item.avatar ? <img src={item.avatar} alt="" style={{ width: '40%' }} /> :
                            <form action={link} method="post" encType="multipart/form-data">
                               <input type="file" name="image" onChange={(e) => handleUploadImage(item.id, e.target.files[0])} />
                                <br />
                                <button className='btn btn-outline-primary mt-1' type='button'>Đăng ảnh</button>
                            </form>
                        }
                    </td>
                    <td>{item.giaGoc}</td>
                    <td>{item.giaSale}</td>
                    <td style={{ width: '120px' }}>{item.soLuong}</td>
                    <td>
                        <button className='btn btn-primary mr-2'><i className="fa-solid fa-pen-to-square"></i></button>
                        <button className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div>
            <ModalAddSP />
            <h4 className='text-center mb-4'>Quản lý sản phẩm</h4>
            <table className="table" >
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">
                            <button className='btn btn-success' data-toggle="modal" data-target="#exampleModal" type='button'>Thêm mới</button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Giá gốc</th>
                        <th scope="col">Giá sale</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {renderSanPham()}
                </tbody>
            </table>
        </div>
    );
}
