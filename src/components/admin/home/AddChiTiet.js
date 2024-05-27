import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
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
import { NotifyCRUD } from '../../globalSetting/notify/AlertCRUD';
import { LocationGetHeader } from '../../globalSetting/Location/LocationGetHeader';


export default function AddChiTiet() {
    const dispatch = useDispatch();
    const listDanhMuc = useSelector(state => state.DanhMucReducerSaga.listDanhMuc);
    const { listSanPhamYetDetail } = useSelector(state => state.DonHangReducerSaga);
    const { notifyData } = useSelector(state => state.NotifyReducer);
    console.log('notifyData: ', notifyData);
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [values, setValues] = useState({});
    const tenSpParam = LocationGetHeader("tenSp");
    const sanPhamURL = listSanPhamYetDetail.find(item => item.tenSp === tenSpParam);
    const [characters, setCharacters] = useState(0);

    const handleAdd = () => {
        dispatch({
            type: "ADD_CHI_TIET_SP",
            data: values
        })
        navigate("/admin/san-pham")
    }
    useEffect(() => {
        dispatch({ type: "GET_ALL_DANH_MUC" })
        dispatch({ type: "GET_SAN_PHAM_YET_DETAIL" })
    }, [dispatch, tenSpParam]);
    useEffect(() => {
        if (sanPhamURL) {
            setValues({ ...values, maSanPham: sanPhamURL.id })
        }
    }, [sanPhamURL]);
    const onFinish = values => {
        // handleUpdate(values)
        // form.resetFields();
        // handleUpdate(values)
    }
    const handleEditorChange = (content) => {
        setCharacters(content.length)
        setValues({ ...values, gioiThieuSach: content })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }
    const onCancel = () => {
        dispatch({
            type: "VIEW_DETAIL_SAN_PHAM_RDC",
        })
        navigate(-1);
    }
    console.log("values: ", values);
    return (
        <div className="p-4">
            <div style={{ backgroundColor: "#FAFAFA" }} className='p-1 mb-3 text-center'>
                <h4 className="mb-0">Thêm chi tiết sản phẩm</h4>
            </div>
            {NotifyCRUD(notifyData)}
            <Form
                onFinish={onFinish}
                form={form}
                layout="vertical"
                encType='multipart/form-data'
            >
                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item label="Mã sản phẩm" name="maSanPham">
                            <Input name='maSanPham' value={sanPhamURL?.id} disabled />
                            <Input hidden />
                        </Form.Item>
                    </Col>
                    <Col span={18}>
                        <Form.Item label="Tên sản phẩm" name="tenSp">
                            <Select value={sanPhamURL?.tenSp} name="tenSp" onChange={value => setValues({ ...values, maSanPham: value })}>
                                {listSanPhamYetDetail.map(item => (
                                    <Select.Option key={item.tenSp} value={item.id}>
                                        {item.tenSp}
                                    </Select.Option>
                                ))}
                            </Select>
                            <Input hidden />

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
                        { label: 'Tên nhà cung cấp', name: 'tenNCC', value: values?.tenNCC },
                        { label: 'Tác giả', name: 'tacGia', value: values.tacGia },
                        { label: 'Người dịch', name: 'nguoiDich', value: values.nguoiDich },
                        { label: 'Nhà xuất bản', name: 'nxb', value: values.nxb },
                        { label: 'Năm xuất bản', name: 'namXb', value: values.namXb },
                        { label: 'Trọng lượng (gram)', name: 'trongLuong', value: values.trongLuong },
                        { label: 'Hình thức', name: 'hinhThuc', value: values.hinhThuc },
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
                            <Select defaultValue={values?.tenDanhMuc} name="tenDanhMuc" onChange={value => setValues({ ...values, maDanhMuc: value })}>
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
                                <Button type="primary" htmlType="submit" onClick={() => handleAdd()}>
                                    Thêm chi tiết
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
