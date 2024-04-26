import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ModalUpdateDanhMuc() {
    const danhMucUpdate = useSelector(state => state.DanhMucReducerSaga.danhMucUpdate);
    console.log('danhMucUpdate: ', danhMucUpdate);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        tenDanhMuc: ""
    })
    useEffect(() => {
        setState({
            tenDanhMuc: danhMucUpdate.tenDanhMuc
        })
    }, [danhMucUpdate])
    const changeInput = (e) => {
        const { name, value } = e.target;
        console.log('state: ', state);
        const newValue = {
            ...state,
            [name]: value
        }
        setState(newValue)
    }
    const updateDM = () => {
        console.log(state);
        dispatch({
            type: "UPDATE_DANH_MUC",
            data: {
                name: state,
                id: danhMucUpdate.id
            }
        })
    }
    return (
        <div>

            {/* Modal */}
            <div className="modal fade" id="modalUpdateDanhMuc" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content ">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cập nhập danh mục sản phẩm</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group row">
                                <label htmlFor="tenSp" className="col-sm-3 col-form-label">Tên danh mục</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" name='tenDanhMuc' id="tenDanhMuc" onChange={changeInput} value={state.tenDanhMuc} placeholder='danh mục' />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => updateDM()}>Update</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    )
}
