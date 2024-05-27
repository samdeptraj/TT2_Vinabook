import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import { AlertCRUD, NotifyCRUD } from '../../globalSetting/notify/AlertCRUD';
import TextArea from 'antd/es/input/TextArea';
import { Editor } from '@tinymce/tinymce-react';
import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    Space,
    Upload,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { LocationGetHeader } from '../../globalSetting/Location/LocationGetHeader';
import { GET_ALL_SAN_PHAM } from '../../../redux/saga/types/sanPham.types';

export default function ChiTietSP() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { notifyData } = useSelector(state => state.NotifyReducer);
    const { sanPhamDetailAdmin } = useSelector(state => state.ChiTietSPReducerSaga);
    console.log('sanPhamDetailAdmin: ', sanPhamDetailAdmin);
    const { listDanhMuc } = useSelector(state => state.DanhMucReducerSaga);
    const { listSanPhamYetDetail } = useSelector(state => state.DonHangReducerSaga);
    const [form] = Form.useForm();
    const tenSpParam = LocationGetHeader("tenSp");
    const [values, setValues] = useState({});
    const [characters, setCharacters] = useState(0);
    useEffect(() => {
        if (values !== sanPhamDetailAdmin) {
            dispatch({
                type: "SAN_PHAM_GET_ONE_DETAIL",
                data: tenSpParam
            });
        }
        dispatch({ type: "GET_ALL_DANH_MUC" })
        dispatch({ type: "GET_SAN_PHAM_YET_DETAIL" })
    }, [dispatch, tenSpParam]);
    useEffect(() => {
        setValues(sanPhamDetailAdmin);
        form.setFieldsValue(sanPhamDetailAdmin);
        if(sanPhamDetailAdmin){
            setCharacters(sanPhamDetailAdmin.gioiThieuSach?.length)
        }
    }, [sanPhamDetailAdmin]);
    const handleUpdate = (sanPham) => {
        dispatch({
            type: "UPDATE_CHI_TIET_SP",
            data: {
                values: sanPham,
                id: sanPham.id
            }
        })
    }
    const onFinish = values => {
        // handleUpdate(values)
        // form.resetFields();
        // handleUpdate(values)
    }
    const onCancel = () => {
        dispatch({
            type: "VIEW_DETAIL_SAN_PHAM_RDC",
        })
        navigate(-1);
    }
    const handleEditorChange = (content) => {
        setCharacters(content.length)
        setValues({ ...values, gioiThieuSach: content })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...sanPhamDetailAdmin, [name]: value })
    }
    const handleChangeSelectItem = (value) => {
        console.log('value: ', value);
        setValues({ ...sanPhamDetailAdmin, maDanhMuc: value })
    }
    if (!sanPhamDetailAdmin.tenSp) {
        return null;
    }
    return (
        <div className="p-4">
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-1 mb-3 text-center'>
                <h4 className="mb-0">Chi tiết sản phẩm</h4>
            </div>
            {NotifyCRUD(notifyData)}
            <Form
                onFinish={onFinish}
                form={form}
                layout="vertical"
                encType='multipart/form-data'
                initialValues={sanPhamDetailAdmin}
            >
                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item label="Mã sản phẩm" name="maSanPham">
                            <Input name='maSanPham' value={sanPhamDetailAdmin.maSanPham} disabled />
                            <Input hidden />
                        </Form.Item>
                    </Col>
                    <Col span={18}>
                        <Form.Item label="Tên sản phẩm" name="tenSp">
                            <Select value={values.tenSp} name="tenSp" onChange={value => setValues({ ...sanPhamDetailAdmin, maSanPham: value })}>
                                {listSanPhamYetDetail.map(item => (
                                    <Select.Option key={item.tenSp} value={item.id}>
                                        {item.tenSp}
                                    </Select.Option>
                                ))}
                                <Input hidden />
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form.Item label={<p>Giới thiệu sách (nhập ít hơn 999 ký tự) Đã nhập: <span className='text-danger'>{characters}</span></p>} name="gioiThieuSach">
                            <Editor
                                name="gioiThieuSach"
                                apiKey='ncr45lxds6z6r5mb5ibsbg60jstwmit8jd80ivzeyhef9u1n'
                                init={{
                                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
                                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                }}
                                value={values?.gioiThieuSach}
                                onEditorChange={handleEditorChange}

                            />
                        </Form.Item>
                    </Col>

                </Row>
                <Row gutter={24}>
                    {[
                        { label: 'Tên nhà cung cấp', name: 'tenNCC', value: sanPhamDetailAdmin?.tenNCC },
                        { label: 'Tác giả', name: 'tacGia', value: sanPhamDetailAdmin.tacGia },
                        { label: 'Người dịch', name: 'nguoiDich', value: sanPhamDetailAdmin.nguoiDich },
                        { label: 'Nhà xuất bản', name: 'nxb', value: sanPhamDetailAdmin.nxb },
                        { label: 'Năm xuất bản', name: 'namXb', value: sanPhamDetailAdmin.namXb },
                        { label: 'Trọng lượng', name: 'trongLuong', value: sanPhamDetailAdmin.trongLuong },
                        { label: 'Hình thức', name: 'hinhThuc', value: sanPhamDetailAdmin.hinhThuc },
                    ].map(({ label, name, value }) => (
                        <Col span={8} key={name}>
                            <Form.Item label={label} name={name}>
                                <Input name={name} defaultValue={value} onChange={handleChange} />
                                <Input hidden />
                            </Form.Item>
                        </Col>
                    ))}
                    <Col span={8}>
                        <Form.Item label="Tên danh mục" name="tenDanhMuc">
                            <Select defaultValue={values?.tenDanhMuc} name="tenDanhMuc" onChange={value => setValues({ ...sanPhamDetailAdmin, maDanhMuc: value })}>
                                {listDanhMuc.map(item => {
                                    return <Select.Option key={item.tenDanhMuc} value={item.id}>
                                        {item.tenDanhMuc}
                                    </Select.Option>
                                })}
                                <Input hidden />
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Form.Item className='text-right' extra={
                            <Space>
                                <Button type="primary" htmlType="submit" onClick={() => handleUpdate(values)}>
                                    Lưu chỉnh sửa
                                </Button>
                                <Button type="" htmlType="reset" onClick={() => onCancel()}>
                                    Quay lại
                                </Button>
                            </Space>
                        } >
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
