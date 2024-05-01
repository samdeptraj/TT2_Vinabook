import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_SAN_PHAM } from '../../../redux/saga/types/sanPham.types';
import ModalAddSP from './modal/ModalAddSP';
import ModalUpdateSP from './modal/ModalUpdateSP';

export default function DonHang() {
    const dispatch = useDispatch();
    const listSanPham = useSelector(state => state.DonHangReducerSaga.listSanPham);

    useEffect(() => {
        dispatch({
            type: GET_ALL_SAN_PHAM
        });
    }, [dispatch]);

    const handleUpdate = (sanPham)=>{
        dispatch({
            type: "UPDATE_SANPHAM_RDC",
            data: sanPham
        })
    }
    const renderSanPham = () => {
        return listSanPham.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.tenSp.length < 50 ? item.tenSp : item.tenSp.slice(0, 50) + "..."}</td>
                    <td style={{ width: '150px' }}>
                        <img src={item.image} alt="" style={{ width: '100%' }} />
                    </td>
                    <td>{item.giaGoc}</td>
                    <td>{item.giaSale}</td>
                    <td style={{ width: '120px' }}>{item.soLuong}</td>
                    <td>
                        <button className='btn btn-primary mr-2' onClick={()=> handleUpdate(item)} data-toggle="modal" data-target="#modalUpdateSP" type='button'><i className="fa-solid fa-pen-to-square"></i></button>
                        <button className='btn btn-danger' onClick={() => handleDelete(item.id)} type='button'><i className="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            );
        });
    };
    const handleDelete = (id) => {
        dispatch({
            type: "DELETE_SANPHAM",
            data: id
        })
    }
    return (
        <div>
            <ModalAddSP />
            <ModalUpdateSP/>
            <h4 className='text-center mb-4'>Quản lý sản phẩm</h4>
            <table className="table  table-bordered" >
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col" colSpan={2}>
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
