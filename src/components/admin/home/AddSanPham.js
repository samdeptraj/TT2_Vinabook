import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_SAN_PHAM } from '../../../redux/saga/types/sanPham.types';
import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Input,
    Upload,
} from 'antd';
import { AlertCRUD } from '../../globalSetting/notify/AlertCRUD';
export default function AddSanPham() {
    const dispatch = useDispatch();
    const { infoAlert } = useSelector(state => state.NotifyReducer);
    const [file, setFile] = useState("");
    const [form] = Form.useForm();
    const handleChangeImg = (file) => {
        setFile(file);
    }
    const onFinish = values => {
        addSp(values)
    }
    const addSp = (values) => {
        const { tenSp, image, giaGoc, giaSale } = values;
        console.log('tenSp, image, giaGoc, giaSale: ', tenSp, image, giaGoc, giaSale);
        let formData = new FormData();
        formData.append("image", image.file.originFileObj);
        formData.append("tenSp", tenSp);
        formData.append("giaGoc", giaGoc);
        formData.append("giaSale", giaSale);
        dispatch({
            type: CREATE_SAN_PHAM,
            data: formData
        })
        form.resetFields();
    }
    return (
        <div className="p-4">
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-1 mb-3 text-center'>
                <h4 className="mb-0">Thêm sản phẩm</h4>
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
                <Form.Item label="Tên sản phẩm " name="tenSp">
                    <Input name='tenSp' />
                </Form.Item>

                <Form.Item label="Hình ảnh" name='image' >
                    <Upload action="/upload.do" listType="picture-card" maxCount={1} onChange={e => handleChangeImg(e.file.originFileObj)}>
                        <button
                            style={{
                                border: 0,
                                background: 'none',
                            }}
                            type="button"
                        >
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Giá gốc" name='giaGoc'
                    rules={[
                        {
                            validator: async (_, value) => {
                                if (!value || isNaN(value)) {
                                    return Promise.reject("Giá tiền phải là số!")
                                }
                            }
                        }
                    ]}
                >
                    <Input name='giaGoc' />
                </Form.Item>
                <Form.Item label="Giá sale" name='giaSale'
                    rules={[
                        {
                            validator: async (_, value) => {
                                if (!value || isNaN(value)) {
                                    return Promise.reject("Giá tiền phải là số!")
                                }
                            }
                        }
                    ]}
                >
                    <Input name='giaSale' />
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
