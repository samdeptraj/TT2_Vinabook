import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalAddUser from './modal/ModalAddUser';
import ModalUpdateUser from './modal/ModalUpdateUser';

export default function NguoiDung() {
    const dispatch = useDispatch();
    const listUser = useSelector(state => state.NguoiDungReducer.listUser);
    const notifyUpdateUser = useSelector(state => state.NguoiDungReducer.notifyUpdateUser);
    const renderAllUser = () => {
        return listUser.map(item => {
            return <tr>
                <th scope="row">{item.id}</th>
                <td>{item.ho.length < 10 ? item.ho : item.ho.slice(0, 10) + "..."}</td>
                <td>{item.ten.length < 10 ? item.ten : item.ten.slice(0, 10) + "..."}</td>
                <td>{item.email.length < 25 ? item.email : item.email.slice(0, 25) + "..."}</td>
                <td>{item.password.length < 20 ? item.password : item.password.slice(0, 20) + "..."}</td>
                <td>{item.quyenHan}</td>
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
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col" colSpan={2}>
                            <button className='btn btn-success' type='button' data-toggle="modal" data-target="#addUser">Thêm user</button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Họ</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">pasword</th>
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
