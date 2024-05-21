import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Update import statement
import ModalAddDanhMuc from './modal/ModalAddDanhMuc';
import ModalUpdateDanhMuc from './modal/ModalUpdateDanhMuc';
import { NotifyCRUD } from '../../globalSetting/notify/AlertCRUD';
import { Alert, Button, Input, Popconfirm, Space, Table, Tag, message } from 'antd';
import { SearchOutlined, QuestionCircleOutlined } from '@ant-design/icons';


export default function DanhMuc() {
    const dispatch = useDispatch();
    const listDanhMuc = useSelector(state => state.DanhMucReducerSaga.listDanhMuc);
    const { notifyData } = useSelector(state => state.NotifyReducer);
    useEffect(() => {
        dispatch({
            type: "GET_ALL_DANH_MUC"
        })
    }, [])
    const handleUpdate = (danhMuc) => {
        dispatch({
            type: "UPDATE_DANH_MUC_RDC",
            data: danhMuc
        })
        dispatch({
            type: "MODAL_UPDATE_DANH_MUC",
            data: true
        })
    }
    const handleAdd = () => {
        dispatch({
            type: "MODAL_ADD_DANH_MUC",
            data: true
        })
    }
    const deleteDM = (id) => {
        dispatch({
            type: "DELETE_DANH_MUC",
            data: id
        })
    }
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            sorter: {
                compare: (a, b) => a.id - b.id,
            },
        },
        {
            title: 'Tên danh mục',
            dataIndex: 'tenDanhMuc',
            key: 'tenDanhMuc',
            width: '20%',
        },

        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (danhMuc, record) => {
                return (
                    <Space >
                        <Button type="primary" onClick={() => handleUpdate(danhMuc)}><i class="fa-solid fa-pen-to-square"></i></Button>
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={() => deleteDM(record.id)}
                            icon={
                                <QuestionCircleOutlined
                                    style={{
                                        color: 'red',
                                    }}
                                />
                            }
                        >
                            <Button type="primary" danger><i class="fa-solid fa-trash-can" ></i></Button>
                        </Popconfirm>
                    </Space>
                )
            },
        },
    ];
    return (
        // <div>
        //     <ModalAddDanhMuc />
        //     <ModalUpdateDanhMuc />
        //     <table className="table table-bordered">
        //         <thead>
        //             <tr>
        //                 <th scope="col"></th>
        //                 <th scope="col"></th>
        //                 <th scope="col">
        //                     <button className='btn btn-primary mr-2' type='button' data-toggle="modal" data-target="#addDanhMuc">Tạo danh mục</button>
        //                 </th>
        //             </tr>
        //             <tr>
        //                 <th scope="col">id</th>
        //                 <th scope="col">Tên danh mục</th>
        //                 <th scope="col">Chức năng</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {renderDanhMuc()}
        //         </tbody>
        //     </table>
        // </div>
        <div className='container-fluid'>
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-1 mb-3 text-center'>
                <h4 className="mb-0">Danh mục sản phẩm</h4>
            </div>
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-1 mb-3 text-right'>
                <Button type="primary" onClick={() => handleAdd()}>Thêm danh mục</Button>
            </div>
            <ModalAddDanhMuc />
            <ModalUpdateDanhMuc />
            {NotifyCRUD(notifyData)}
            <Table columns={columns} dataSource={listDanhMuc} />
        </div>
    )
}
