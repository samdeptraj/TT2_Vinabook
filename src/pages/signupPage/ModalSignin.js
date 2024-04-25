import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../../redux/saga/types/NguoiDung.types';

export default function ModalSignin() {
    const notifyErrorLogin = useSelector(state => state.NguoiDungReducer.notifyErrorLogin);
    console.log('notifyErrorLogin: ', notifyErrorLogin);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        values: {
            email: "",
            password: ""
        }
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newValue = { ...state.values, [name]: value };
        setState({
            values: newValue
        })
    }
    const login = (e) => {
        e.preventDefault();
        dispatch({
            type: LOGIN,
            data: state.values
        })
    }
    return (
        <div
            className="modal fade"
            id="modalLogin"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered myDialog">
                <div className="modal-content">
                    <div className="modal-header myDialog-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Đăng nhập
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="container myDialog-form pb-0">
                            <div className="form-group">
                                <div className="row align-items-center">
                                    <div className="col-3">
                                        <label htmlFor="email">
                                            Email*
                                        </label>
                                    </div>
                                    <div className="col-9">
                                        <span className='text-danger'>{notifyErrorLogin}</span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            aria-describedby="emailHelp"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row align-items-center">
                                    <div className="col-3">
                                        <label htmlFor="password">
                                            Mật khẩu*
                                        </label>
                                    </div>
                                    <div className="col-9">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name='password'
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="form-group form-check mt-3">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="exampleCheck1"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="exampleCheck1"
                                        >
                                            Ghi nhớ thông tin
                                        </label>
                                    </div>
                                    <a href="/#" className="mt-2">
                                        Quên mật khẩu?
                                    </a>
                                </div>
                                <button type="submit" className="btn btn-success" onClick={(e) => login(e)}>
                                    Đăng nhập
                                </button>
                                <div>
                                    <p>
                                        Chưa có tài khoản vui lòng{" "}
                                        <span className="d-inline-block">
                                            <a href="/#" className="text-primary">
                                                ĐĂNG KÝ
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer d-flex flex-column">
                        <div className="w-100 pl-4 pb-3">
                            Hoặc đăng nhập bằng
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <a href="/#" style={{ height: "50px" }}>
                                    <img
                                        className="w-100 h-75"
                                        src="./images/header/log/google_signin_dark.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="col-6">
                                <a href="/#" style={{ height: "50px" }}>
                                    <img
                                        className="w-100 h-75"
                                        src="./images/header/log/facebook_signin_dark.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
