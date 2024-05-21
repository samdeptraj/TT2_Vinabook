import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Form,
    Input,
} from 'antd';
import { AlertCRUD, NotifyCRUD } from '../../globalSetting/notify/AlertCRUD';

export default function AddNguoiDung() {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const { infoAlert } = useSelector(state => state.NotifyReducer);
    const addUser = (values) => {
        dispatch({ type: "SIGNUP", data: values });
        form.resetFields();
    };
    const onFinish = values => {
        console.log('e: ', values);
        addUser(values);
    }
    return (
        <div className="p-4">
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-2 mb-4 text-center'>
                <h4 className="mb-0">Thêm người dùng</h4>
            </div>
            {AlertCRUD(infoAlert)}
            <Form
                onFinish={onFinish}
                form={form}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                style={{
                    maxWidth: 600,
                }}
                encType='multipart/form-data'
            >
                <Form.Item label="Họ" name="ho">
                    <Input name='ho' />
                </Form.Item
                >
                <Form.Item label="Tên" name='ten'>
                    <Input name='ten' />
                </Form.Item>
                <Form.Item label="Email" name='email'
                    rules={[
                        {
                            validator: async (_, value) => {
                                if (!value) {
                                    return Promise.reject('Please input your email!');
                                } else if (!/\S+@\S+\.\S+/.test(value)) {
                                    return Promise.reject('Email is not valid!');
                                }
                            },
                        }
                    ]}
                >
                    <Input name='email' />
                </Form.Item>
                <Form.Item label="Password" name='password'
                    rules={[
                        {
                            validator: async (a, value) => {
                                if (!value) {
                                    return Promise.reject("Please input your password")
                                } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(value)) {
                                    return Promise.reject("Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt")
                                }
                            }
                        }
                    ]}
                >
                    <Input.Password name='password' />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 4 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
