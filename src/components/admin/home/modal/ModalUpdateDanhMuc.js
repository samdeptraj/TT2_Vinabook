import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Upload } from 'antd';

export default function ModalUpdateDanhMuc() {
    const danhMucUpdate = useSelector(state => state.DanhMucReducerSaga.danhMucUpdate);
    const { onModalUpdate } = useSelector(state => state.DanhMucReducerSaga);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        tenDanhMuc: ""
    })
    useEffect(() => {
        setState({
            tenDanhMuc: danhMucUpdate.tenDanhMuc
        })
    }, [danhMucUpdate])
    const updateDM = () => {
        dispatch({
            type: "UPDATE_DANH_MUC",
            data: {
                name: state,
                id: danhMucUpdate.id
            }
        })
        dispatch({
            type: "MODAL_UPDATE_DANH_MUC",
            data: true
        })
    }
    const onClose = () => {
        dispatch({
            type: "MODAL_UPDATE_DANH_MUC",
            data: false
        })
    };
    return (
        // <div>

        //     {/* Modal */}
        //     <div className="modal fade" id="modalUpdateDanhMuc" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        //         <div className="modal-dialog ">
        //             <div className="modal-content ">
        //                 <div className="modal-header">
        //                     <h5 className="modal-title" id="exampleModalLabel">Cập nhập danh mục sản phẩm</h5>
        //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //                         <span aria-hidden="true">×</span>
        //                     </button>
        //                 </div>
        //                 <div className="modal-body">
        //                     <div className="form-group row">
        //                         <label htmlFor="tenSp" className="col-sm-3 col-form-label">Tên danh mục</label>
        //                         <div className="col-sm-9">
        //                             <input type="text" className="form-control" name='tenDanhMuc' id="tenDanhMuc" onChange={changeInput} value={state.tenDanhMuc} placeholder='danh mục' />
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="modal-footer">
        //                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        //                     <button type="button" className="btn btn-primary" onClick={() => updateDM()}>Update</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div >
        // </div >
        < Drawer
            title="Cập nhập người dùng"
            width={720}
            onClose={onClose}
            open={onModalUpdate}
            styles={{
                body: {
                    paddingBottom: 80,
                },
            }
            }
            footer={
                < Space style={{ display: "flex", justifyContent: 'end' }}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={() => updateDM()} type="primary" htmlType='submit' >
                        Submit
                    </Button>
                </Space >
            }
        >
            <Form layout="vertical" encType='multipart/form-data'>
                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item
                            name="id"
                            label="ID"
                        >
                            <Input placeholder="Please enter field value" name='id' disabled value={danhMucUpdate.id} />
                            <Input hidden />
                        </Form.Item>
                    </Col>
                    <Col span={18}>
                        <Form.Item
                            name="tenDanhMuc"
                            label="Tên danh mục"
                        >
                            <Input placeholder="Please enter field value" name='tenDanhMuc' value={state.tenDanhMuc} />
                            <Input hidden />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </ Drawer>
    )
}
