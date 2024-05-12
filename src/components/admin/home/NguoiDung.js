import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalAddUser from './modal/ModalAddUser';
import ModalUpdateUser from './modal/ModalUpdateUser';
import excelExport from '../../../utils/ExcelExport';

export default function NguoiDung() {
    const dispatch = useDispatch();
    const listUser = useSelector(state => state.NguoiDungReducer.listUser);
    const notifyUpdateUser = useSelector(state => state.NguoiDungReducer.notifyUpdateUser);
    const [emailSearch, setEmailSearch] = useState("");
    const [emailSearched, setEmailSearched] = useState([]);
    const renderAllUser = () => {
        return (emailSearched.length > 0 ? emailSearched : listUser).map(item => {
            return <tr>
                <th scope="row">{item.id}</th>
                <td>{item.ho.length < 10 ? item.ho : item.ho.slice(0, 10) + "..."}</td>
                <td>{item.ten.length < 10 ? item.ten : item.ten.slice(0, 10) + "..."}</td>
                <td>{item.email.length < 25 ? item.email : item.email.slice(0, 25) + "..."}</td>
                <td style={{width:"200px"}}>{item.quyenHan}</td>
                <td>
                    <button className='btn btn-primary mr-2' data-toggle="modal" data-target="#updateUser" onClick={() => handleUpdate(item)}><i class="fa-solid fa-pen-to-square"></i></button>
                    <button className='btn btn-danger' onClick={() => handleDelete(item.id)}><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        })
    }
    useEffect(() => {
        dispatch({
            type: "GET_ALL_USER"
        })
    }, [])
    useEffect(() => {
        if (notifyUpdateUser) {
            alert(notifyUpdateUser)
        }
    }, [notifyUpdateUser])
    const handleUpdate = (user) => {
        dispatch({
            type: 'UPDATE_USER_RDC',
            data: user
        })
    }
    const handleDelete = (id) => {
        dispatch({
            type: "DELETE_USER",
            data: id
        })
    }
    const handleExportXLXS = () => {
        excelExport.exportToExcel(listUser, "Danh_sach_nguoi_dung")
    }
    const handleChangeEmail = (e) => {
        let { value } = e.target;
        value = value.trim();
        if (value !== emailSearch) {
            setEmailSearch(value);
        }
    }
    const handleFindUserByEmail = () => {
        const data = listUser.filter(item => item.email === emailSearch);
        if (data) {
            setEmailSearched(data);
        }
    }
    const handleClearFindUserByEmail = () => {
        setEmailSearched([]);
        setEmailSearch("")
    }
    return (
        <div>
            <ModalAddUser />
            <ModalUpdateUser />
            <h4 className='text-center mb-4'>Quản lý người dùng</h4>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col" colSpan={2}>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="nhập email..." onChange={handleChangeEmail} value={emailSearch}/>
                                <div className="input-group-append">
                                    <button className="btn btn-success" type="button" id="button-addon2" onClick={handleFindUserByEmail}><i class="fa-solid fa-magnifying-glass"></i></button>
                                    <button className="btn btn-secondary ml-1" type="button" id="button-addon2" onClick={handleClearFindUserByEmail}><i class="fa-solid fa-rotate-left"></i></button>
                                </div>
                            </div>
                        </th>
                        <th scope="col" colSpan={2}>
                            <button className='btn btn-success mr-2' onClick={handleExportXLXS}><i class="fa-solid fa-file-excel"></i> Xuất excel</button>
                            <button className='btn btn-primary' type='button' data-toggle="modal" data-target="#addUser">Thêm user</button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Họ</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Quyền hạn</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {renderAllUser()}
                </tbody>
            </table>
        </div>
    )
}
