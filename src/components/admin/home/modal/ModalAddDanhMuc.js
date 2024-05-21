import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Drawer, Form, Input, Row, Space } from 'antd';

export default function ModalAddDanhMuc() {
    const dispatch = useDispatch();
    const { onModalAdd } = useSelector(state => state.DanhMucReducerSaga);
    const [values, setValues] = useState({
        tenDanhMuc: ""
    });
    const [form] = Form.useForm();
    const addDanhMuc = (value) => {
        dispatch({ type: "ADD_DANH_MUC", data: value });
        onClose();
        form.resetFields();
    };
    const onClose = () => {
        dispatch({
            type: "MODAL_ADD_DANH_MUC",
            data: false
        })
    };
    const onFinish = (formValues) => {
        addDanhMuc(formValues);
    };
    return (
        < Drawer
            title="Thêm danh mục sản phẩm"
            width={720}
            onClose={onClose}
            open={onModalAdd}
            styles={{
                body: {
                    paddingBottom: 80,
                },
            }
            }
            footer={
                < Space style={{ display: "flex", justifyContent: 'end' }}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" htmlType='submit' form='addDanhMucForm'>
                        Submit
                    </Button>
                </Space >
            }
        >
            <Form layout="vertical" encType='multipart/form-data'
                id='addDanhMucForm'
                onFinish={onFinish}
                form={form}
            >

                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="tenDanhMuc"
                            label="Tên danh mục"
                        >
                            <Input placeholder="Please enter field value" name='tenDanhMuc' value={values.tenDanhMuc} />
                            {/* <Input hidden /> */}
                        </Form.Item>
                    </Col>

                </Row>
            </Form>

        </ Drawer>
    )
}
