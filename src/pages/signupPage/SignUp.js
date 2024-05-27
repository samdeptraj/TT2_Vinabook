import React, { useEffect, useState } from "react";
import "../sass/main.scss";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP } from "../../redux/saga/types/NguoiDung.types";
import { Link } from 'react-router-dom';
import { Button, Checkbox, Col, Form, Input, Modal, Row } from 'antd';
import { NotifyCRUD } from "../../components/globalSetting/notify/AlertCRUD";


export default function SignUp() {
  const dispatch = useDispatch();
  const { notifyData } = useSelector(state => state.NotifyReducer);
  const [passwordEnter, setPasswordEnter] = useState();
  const validateEmail = (_, value) => {
    if (!value) {
      return Promise.reject(new Error("Email không được để trống!."))

    } else if (value && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Email không hợp lệ."))
  }
  const validatePassword = (_, value) => {
    if (!value) {
      return Promise.reject(new Error("Mật khẩu không được để trống!."))
    }
    else if (value && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
      setPasswordEnter(value)
      return Promise.resolve();
    }
    return Promise.reject(new Error("Mật khẩu phải dài ít nhất 8 ký tự và bao gồm cả chữ cái và số."))
  }
  const validatePasswordConfirm = (_, value) => {
    if (!value) {
      return Promise.reject(new Error("Mật khẩu xác nhận không được để trống!"))
    }
    else if (value === passwordEnter) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("Mật khẩu không khớp."))
  }
  const handleSubmit = (account) => {
    dispatch({
      type: SIGNUP,
      data: account
    })
  }
  const layout = {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  }
  const onFinish = (values) => {
    console.log('values: ', values);
    handleSubmit(values)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      {NotifyCRUD(notifyData)}

      <div className="container mt-5">
        <div className="mySignUp">
          <ul className="d-flex">
            <li className="mr-2">
              <a href="/#">
                Trang chủ <i class="fa-solid fa-angle-right"></i>{" "}
              </a>
            </li>
            <li>Tạo tài khoản mới</li>
          </ul>
          <h4>Chưa có tài khoản? Đăng ký ngay</h4>
          <hr />
          <div className="row border mb-5">
            <div className="col-7 p-4 mySignUp-colLeft">
              <h4 className="mb-4 text-dark">ĐĂNG KÝ TÀI KHOẢN</h4>
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
                  label="Họ"
                  name="ho"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Tên"
                  name="ten"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label={<>Email <span className="text-danger ml-1">*</span></>}
                  name="email"
                  rules={[
                    { validator: validateEmail }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label={<>Mật khẩu <span className="text-danger ml-1">*</span></>}
                  name="password"
                  rules={[
                    {
                      validator: validatePassword
                    }
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  label={<>Xác nhận mật khẩu <span className="text-danger ml-1">*</span></>}
                  name="passwordConfirm"
                  rules={[
                    { validator: validatePasswordConfirm }
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 6,
                    span: 18,
                  }}
                >
                  <Button key="submit" type="primary" htmlType='submit'>
                    Đăng ký
                  </Button>,
                </Form.Item>
                <p>
                  Bằng việc bấm vào nút đăng ký, bạn đã chấp nhận{" "}
                  <a href="/#">chính sách bảo mật thông tin</a>
                </p>
              </Form>
            </div>
            <div className="col-5 mySignUp-colRight">
              <h6>Đăng nhập bằng tài khoản khác</h6>
              <div className="mb-3">
                <a href="/#">
                  <img src="./images/header/log/google_signin_dark.png" alt="" />
                </a>
              </div>
              <div>
                <a href="/#">
                  <img
                    className="w-50"
                    src="./images/header/log/facebook_signin_dark.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
