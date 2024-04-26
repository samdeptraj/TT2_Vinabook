import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ModalAddUser() {
    const dispatch = useDispatch();
    let notifySignUp = useSelector(state => state.NguoiDungReducer.notifySignUp);
    const [values, setValues] = useState({
        ho: "",
        ten: "",
        email: "",
        password: ""
    });
    const changeInput = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const clearInputs = () => {
        setValues({
            ho: "",
            ten: "",
            email: "",
            password: ""
        });
    };
    const addUser = () => {
        dispatch({ type: "SIGNUP", data: values });
        if (notifySignUp) {
            clearInputs(); // Xóa dữ liệu nhập trong input sau khi đăng nhập thành công
        }
    };

    return (
        <div>
            <div className="modal fade" id="addUser" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <label htmlFor="ho" className="col-sm-3 col-form-label">Họ</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name='ho' id="ho" onChange={changeInput} value={values.ho} placeholder='ho' />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="ten" className="col-sm-3 col-form-label">Tên</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" name='ten' id="ten" onChange={changeInput} value={values.ten} placeholder='ten' />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" name='email' id="email" onChange={changeInput} value={values.email} placeholder='email' />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="password" className="col-sm-3 col-form-label">Password</label>
                                    <div className="col-sm-9">
                                        <input type="password" className="form-control" name='password' id="password" onChange={changeInput} value={values.password} placeholder='password' />
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={clearInputs}>Đóng</button>
                            <button type="button" className="btn btn-primary" onClick={addUser}>Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
