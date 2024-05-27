import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../../redux/saga/types/NguoiDung.types';
import { NotifyCRUD } from '../../components/globalSetting/notify/AlertCRUD';
import { Button, Checkbox, Col, Form, Input, Modal, Row } from 'antd';
import { Link } from 'react-router-dom';
export default function ModalSignin() {
    const dispatch = useDispatch();
    const { notifyData } = useSelector(state => state.NotifyReducer);
    const { onLogin } = useSelector(state => state.NguoiDungReducer);
    const login = (account) => {
        dispatch({
            type: LOGIN,
            data: account
        })
    }
    const onFinish = (values) => {
        login(values)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const validatePassword = (_, value) => {
        if (!value) {
            return Promise.reject(new Error("Mật khẩu không được để trống!."))
        }
        else if (value && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
            return Promise.resolve();
        }
        return Promise.reject(new Error("Mật khẩu phải dài ít nhất 8 ký tự và bao gồm cả chữ cái và số."))
    }
    const validateEmail = (_, value) => {
        if (!value) {
            return Promise.reject(new Error("Email không được để trống!."))

        } else if (value && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            return Promise.resolve();
        }
        return Promise.reject(new Error("Email không hợp lệ."))
    }
    const layout = {
        labelCol: {
            span: 4
        },
        wrapperCol: {
            span: 20
        }
    }
    const [loading, setLoading] = useState(false);
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };
    const handleCancel = () => {
        dispatch({
            type: "LOGIN_RDC",
            data: false
        })
    };
    return (
        <>
            {NotifyCRUD(notifyData)}
            <Modal
                open={onLogin}
                title="Đăng nhập"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <div>
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

                ]}
            >
                <Form
                    className='mt-4'
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    {...layout}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { validator: validateEmail }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                validator: validatePassword
                            }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Row>
                        <Col span={12}>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 20,
                                }}
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 20,
                                }}
                            >
                                <Link to="#">Quên mật khẩu?</Link>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 20,
                        }}
                    >
                        <Button key="submit" type="primary" loading={loading} htmlType='submit'>
                            Đăng nhập
                        </Button>,
                    </Form.Item>
                </Form>
            </Modal >
        </>

    )

}
