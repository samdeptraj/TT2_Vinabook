import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { notifyCRUD } from '../../../globalSetting/notify/AlertCRUD';
import { Option } from 'antd/es/mentions';

export default function ModalUpdateUser() {
    const dispatch = useDispatch();
    const { user, onEditNguoiDung } = useSelector(state => state.NguoiDungReducer);
    const [values, setValues] = useState({
        ho: "",
        ten: "",
        email: "",
        password: "",
        quyenHan: ""
    });
    const [form] = Form.useForm();
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
        const { id } = user;
        dispatch({
            type: "UPDATE_USER",
            data: { values, id }
        })
        onClose()
    }
    const onClose = () => {
        dispatch({
            type: "EDIT_NGUOI_DUNG_RDC",
            data: false
        })
        form.resetFields();
    };
    return (
        < Drawer
            title="Cập nhập người dùng"
            width={720}
            onClose={onClose}
            open={onEditNguoiDung}
            styles={{
                body: {
                    paddingBottom: 80,
                },
            }
            }
            footer={
                < Space style={{ display: "flex", justifyContent: 'end' }}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={() => updateUser()} type="primary" htmlType='submit' >
                        Submit
                    </Button>
                </Space >
            }
        >
            <Form layout="vertical" encType='multipart/form-data' form={form}>

                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item
                            name="id"
                            label="ID"
                        >
                            <Input value={user.id} disabled />
                            <Input hidden />
                        </Form.Item>
                    </Col>
                    <Col span={9}>
                        <Form.Item
                            name="ho"
                            label="Họ"
                        >
                            <Input value={values.ho} name='ho' onChange={changeInput} />
                            <Input hidden />
                        </Form.Item>
                    </Col>
                    <Col span={9}>
                        <Form.Item
                            name="Tên"
                            label="ten"
                        >
                            <Input value={values.ten} name='ten' onChange={changeInput} />
                            <Input hidden />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="email"
                            label="Email"
                        >
                            <Input placeholder="Please enter email" onChange={changeInput} name='email' value={values.email} />
                            <Input hidden />
                        </Form.Item>
                    </Col>

                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="password"
                            label="Password"
                        >
                            <Input placeholder="Please enter field value" onChange={changeInput} name='password' value={values.password} />
                            {/* <Input hidden /> */}
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="quyenHan"
                            label="Quyền hạn"

                        >
                            <select className="custom-select" onChange={changeInput} name="quyenHan">
                                <option selected>No change</option>
                                <option value="client">client</option>
                                <option value="admin">admin</option>
                            </select>
                        </Form.Item>

                    </Col>
                </Row>

            </Form>

        </ Drawer>
    )
}