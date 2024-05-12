import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import ModalUpdateDonHang from './modal/ModalUpdateDonHang';
import excelExport from '../../../utils/ExcelExport';

export default function DonHang() {
    const dispatch = useDispatch();
    const listDonHang = useSelector(state => state.DonHangReducerSaga.listDonHang);
    const handleUpdate = (id) => {
        dispatch({
            type: "UPDATE_DON_HANG_RDC",
            data: id
        })
    }
    const renderSanPham = () => {
        return listDonHang.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td style={{ width: '30%' }}>{item.tenSp.length < 50 ? item.tenSp : item.tenSp.slice(0, 50) + "..."}</td>
                    <td style={{ width: '120px' }}>
                        <img src={item.image} alt="" style={{ width: '100%' }} />
                    </td>
                    <td style={{ width: '20%' }}>{item.createdAt}</td>
                    <td>{item.status}</td>
                    <td>
                        <button className='btn btn-primary mr-2' onClick={() => handleUpdate(item.id)} data-toggle="modal" data-target="#updateDonHang" type='button'><i className="fa-solid fa-pen-to-square"></i></button>
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
    const handleExportXLXS = () => {
        excelExport.exportToExcel(listDonHang, "Danh_sach_san_pham")
    }
    return (
        <div>
            <ModalUpdateDonHang />
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
                            <button className='btn btn-success mr-2' onClick={handleExportXLXS}><i class="fa-solid fa-file-excel"></i> Xuất excel</button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Email</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Ngày tạo</th>
                        <th scope="col">Trạng thái</th>
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
