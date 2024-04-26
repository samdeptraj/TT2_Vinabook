import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ModalUpdateUser() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.NguoiDungReducer.user);
    const [values, setValues] = useState({
        ho: "",
        ten: "",
        email: "",
        password: ""
    });
    const clearInputs = () => {
        setValues({
            ho: "",
            ten: "",
            email: "",
            password: "",
            quyenHan: ""
        });
    };
    const changeInput = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    useEffect(() => {
        setValues({
            ...values,
            ho: user.ho,
            ten: user.ten,
            email: user.email,
            password: user.password,
            quyenHan: user.quyenHan
        })
    }, [user])
    const updateUser = () => {
        console.log(values);
        const { id } = user;
        dispatch({
            type: "UPDATE_USER",
            data: { values, id }
        })
    }
    return (
        <div>
            <div className="modal fade" id="updateUser" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cập nhập thông tin người dùng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={clearInputs}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* <h5 className='text-success'>{notifySignUp}</h5> */}
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
                                <div className="form-group mb-3 row align-items-center">
                                    <label className="input-group col-3" htmlFor="type">Quyền hạn</label>
                                    <div className='col-9'>
                                        <select className="custom-select " id="inputGroupSelect01" name='quyenHan' onChange={changeInput}>
                                            <option value={1} selected disabled>---Lựa chọn---</option>
                                            <option value={"user"} >user</option>
                                            <option value={"admin"}>admin</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={clearInputs}>Đóng</button>
                            <button type="button" className="btn btn-primary" onClick={() => updateUser()}>Cập nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
