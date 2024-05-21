import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import { Alert, Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Upload } from 'antd';

export default function ModalUpdateSP() {
    const sanPhamUpdate = useSelector(state => state.ProductsReducer.sanPhamUpdate);
    const { onEditSanPham } = useSelector(state => state.DonHangReducerSaga);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        value: {
            tenSp: "",
            giaGoc: "",
            giaSale: "",
        }
    })
    useEffect(() => {
        setState((prevState) => ({
            value: {
                ...prevState.value,
                tenSp: sanPhamUpdate.tenSp,
                giaGoc: sanPhamUpdate.giaGoc,
                giaSale: sanPhamUpdate.giaSale,
            },
        }));
    }, [sanPhamUpdate]);
    const [file, setFile] = useState("");
    const changeInput = (e) => {
        const { name, value } = e.target;
        setState({
            value: {
                ...state.value,
                [name]: value
            }
        })
        console.log(state);
    }
    const handleChangeImg = (file) => {
        setFile(file);
    }
    const updateSP = () => {
        const id = sanPhamUpdate.id;
        let formData = new FormData();
        formData.append("image", file);
        formData.append("tenSp", state.value.tenSp);
        formData.append("giaGoc", state.value.giaGoc);
        formData.append("giaSale", state.value.giaSale);
        dispatch({
            type: "UPDATE_SANPHAM",
            data: { formData, id }
        })
    }
    const onClose = () => {
        dispatch({
            type: "EDIT_SAN_PHAM_RDC",
            data: false
        })
    };
    return (
        < Drawer
            title="Cập nhập sản phẩm"
            width={720}
            onClose={onClose}
            open={onEditSanPham}
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
                        updateSP()
                    }} type="primary" htmlType='submit' >
                        Submit
                    </Button>
                </Space >
            }
        >
            <Form layout="vertical" encType='multipart/form-data'>

                <Row gutter={16}>
                    <Col span={6}>
                        <Form.Item
                            name="id"
                            label="ID"
                        >
                            <Input value={sanPhamUpdate.id} disabled />
                            <Input hidden />
                        </Form.Item>
                    </Col>
                    <Col span={18}>
                        <Form.Item
                            name="tenSp"
                            label="Tên sản phẩm"
                        >
                            <Input value={state.value.tenSp} name='tenSp' onChange={changeInput} />
                            <Input hidden />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Image" valuePropName="fileList">
                            <Upload action="/upload.do" listType="picture-card" name='image' maxCount={1} onChange={(e) => handleChangeImg(e.file.originFileObj)}>
                                <button style={{ border: 0, background: 'none' }} type="button">
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </button>
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="giaGoc"
                            label="Giá gốc"
                        >
                            <Input placeholder="Please enter field value" onChange={changeInput} name='giaGoc' value={state.value.giaGoc} />
                            <Input hidden />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="giaSale"
                            label="Giá sale"
                        >
                            <Input placeholder="Please enter field value" onChange={changeInput} name='giaSale' value={state.value.giaSale} />
                            <Input hidden />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

        </ Drawer>
    )
}
