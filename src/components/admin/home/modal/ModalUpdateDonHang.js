import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function ModalUpdateDonHang() {
    const [status, setStatus] = useState();
    const dispatch = useDispatch();
    const { onEditDonHang, donHang } = useSelector(state => state.DonHangReducerSaga);
    const handleChangeOption = (e) => {
        const { value } = e.target;
        setStatus(value);
    }
    useEffect(() => {
        if (donHang) {
            setStatus(donHang.status)
        }
    }, [donHang])
    const handleSave = () => {
        dispatch({
            type: "UPDATE_DON_HANG",
            data: { maDonHang: donHang.id, status }
        })
    }
    const changeInput = (value) => {
        setStatus(value)
    }
    const onClose = () => {
        dispatch({
            type: "EDIT_DON_HANG_RDC",
            data: false
        })
    };
    return (
        < Drawer
            title="Cập nhập đơn hàng"
            width={378}
            onClose={onClose}
            open={onEditDonHang}
            styles={{
                body: {
                    paddingBottom: 80,
                },
            }
            }
            footer={
                < Space style={{ display: "flex", justifyContent: 'end' }}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={() => {
                        handleSave()
                    }} type="primary" htmlType='submit' >
                        Submit
                    </Button>
                </Space >
            }
        >
            <Form layout="vertical" encType='multipart/form-data'>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="id"
                            label="ID"
                        >
                            <Input value={donHang.id} disabled />
                            <Input hidden />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="status"
                            label="Trạng thái đơn"
                        >
                            <Select name="status" onChange={changeInput} value={status}>
                                {["Chờ xác nhận", "Đang giao hàng", "Đã giao", "Đã hủy"].map(item => (
                                    <Select.Option key={item} value={item}>
                                        {item}
                                    </Select.Option>
                                ))}
                            </Select>
                            <Input hidden />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

        </ Drawer>
    )
}
