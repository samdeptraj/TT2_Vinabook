import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ChiTietSP() {
    const dispatch = useDispatch();
    const listChiTietSP = useSelector(state => state.ChiTietSPReducerSaga.listChiTietSP);

    useEffect(() => {
        dispatch({
            type: "GET_ALL_CHI_TIET_SP"
        });
    }, [dispatch]);
    const handleUpdate = (sanPham) => {
        dispatch({
            type: "UPDATE_CHI_TIET_SP_RDC",
            data: sanPham
        })
    }
    const renderSanPham = () => {
        return listChiTietSP.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.tensanpham}</td>
                    <td>
                        <textarea>
                            {item.gioiThieuSach}
                        </textarea>
                    </td>
                    <td>{item.tenNCC.length < 50 ? item.tenNCC : item.tenNCC.slice(0, 50) + "..."}</td>
                    <td>{item.tacGia}</td>
                    <td>{item.nguoiDich}</td>
                    <td>{item.nxb}</td>
                    <td>{item.namXb}</td>
                    <td>{item.trongLuong}</td>
                    <td>{item.kichThuocBaoBi}</td>
                    <td>{item.soTrang}</td>
                    <td>{item.hinhThuc}</td>
                    <td>{item.tendanhmuc}</td>
                    <td>
                        <Link to="/admin/update-chi-tiet-san-pham/" >
                            <button className='btn btn-primary mr-2 mb-1' onClick={() => handleUpdate(item)} data-toggle="modal" data-target="#modalUpdateSP" type='button'><i className="fa-solid fa-pen-to-square"></i></button>
                        </Link>
                        <button className='btn btn-danger' onClick={() => handleDelete(item.id)} type='button'><i className="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            );
        });
    };
    const handleDelete = (id) => {
        dispatch({
            type: "DELETE_CHI_TIET_SP",
            data: id
        })
    }
    return (
        <div>
            {/* <ModalAddSP />
            <ModalUpdateSP /> */}
            <h4 className='text-center mb-4'>Quản lý sản phẩm</h4>
            <table className="table  table-bordered" >
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col" colSpan={3}>
                            <Link to={'/admin/add-chi-tiet-san-pham'}>
                                <button className='btn btn-success' data-toggle="modal" data-target="#exampleModal" type='button'>Thêm mới</button>
                            </Link>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giới thiệu sách</th>
                        <th scope="col">Tên nhà cung cấp</th>
                        <th scope="col">Tác giả</th>
                        <th scope="col">Người dịch</th>
                        <th scope="col">Nhà xuất bản</th>
                        <th scope="col">Năm xuất bản</th>
                        <th scope="col">Trọng lượng</th>
                        <th scope="col">Kích thước bao bì</th>
                        <th scope="col">Số trang</th>
                        <th scope="col">Hình thức</th>
                        <th scope="col">Tên danh mục</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {renderSanPham()}
                </tbody>
            </table>
        </div>
    );
}
