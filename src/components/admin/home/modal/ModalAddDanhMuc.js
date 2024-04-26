import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ModalAddDanhMuc() {
    const dispatch = useDispatch();
    let notifySignUp = useSelector(state => state.NguoiDungReducer.notifySignUp);
    const [values, setValues] = useState({
        tenDanhMuc: ""
    });
    const changeInput = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    const clearInputs = () => {
        setValues({
            tenDanhMuc: ""
        });
    };
    const addDanhMuc = () => {
        dispatch({ type: "ADD_DANH_MUC", data: values });
    };
    return (
        <div>
            <div className="modal fade" id="addDanhMuc" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thêm người dùng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={clearInputs}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5 className='text-success'>{notifySignUp}</h5>
                            <hr />
                            <form action="/" method="post" enctype="multipart/form-data">
                                <div className="form-group row">
                                    <label htmlFor="tenDanhMuc" className="col-sm-3 col-form-label">Tên danh mục</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name='tenDanhMuc' id="tenDanhMuc" onChange={changeInput} value={values.ho} placeholder='danh mục' />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={clearInputs}>Đóng</button>
                            <button type="button" className="btn btn-primary" onClick={() => addDanhMuc()}>Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
