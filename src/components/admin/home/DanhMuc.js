import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Update import statement
import ModalAddDanhMuc from './modal/ModalAddDanhMuc';
import ModalUpdateDanhMuc from './modal/ModalUpdateDanhMuc';

export default function DanhMuc() {
    const dispatch = useDispatch();
    const listDanhMuc = useSelector(state => state.DanhMucReducerSaga.listDanhMuc);
    useEffect(() => {
        dispatch({
            type: "GET_ALL_DANH_MUC"
        })
    }, [])
    const renderDanhMuc = () => {
        return listDanhMuc.map(item => (
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.tenDanhMuc}</td>
                <td>
                    <button className='btn btn-primary mr-2' data-toggle="modal" data-target="#modalUpdateDanhMuc" type='button' onClick={() => handleUpdate(item)}><i className="fa-solid fa-pen-to-square"></i></button>
                    <button className='btn btn-danger' type='button'><i className="fa-solid fa-trash" onClick={() => deleteDM(item.id)}></i></button>
                </td>
            </tr>
        ))
    }
    const handleUpdate = (danhMuc) => {
        dispatch({
            type: "UPDATE_DANH_MUC_RDC",
            data: danhMuc
        })
    }
    const deleteDM = (id) => {
        dispatch({
            type: "DELETE_DANH_MUC",
            data: id
        })
    }
    return (
        <div>
            <ModalAddDanhMuc />
            <ModalUpdateDanhMuc />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">
                            <button className='btn btn-success mr-2' type='button' data-toggle="modal" data-target="#addDanhMuc">Tạo danh mục</button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Tên danh mục</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {renderDanhMuc()}
                </tbody>
            </table>
        </div>

    )
}
