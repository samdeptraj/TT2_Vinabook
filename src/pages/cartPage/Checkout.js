import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import { Button, Form, Input, Select, Space } from 'antd';

export default function Checkout() {
    let dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const decodeToken = jwtDecode(token);
    useEffect(() => {
        dispatch({
            type: "GET_ALL_SP_GIO_HANG",
            data: decodeToken.maNguoiDung
        })
    }, [])
    let listSanPhamCart = useSelector((state) => state.GioHangReducerSaga.listSanPhamCart);

    const totalPriceSp = () => {
        return listSanPhamCart.reduce((curr, acc) => {
            let price = (acc.soLuongSpGioHang * Number(acc.giaSale ? acc.giaSale : acc.giaGoc));
            return curr + price;
        }, 0);
    }
    const [tinhThanh, setTinhThanh] = useState("");
    const [quanHuyen, setQuanHuyen] = useState([]);
    const [quanHuyenValue, setQuanHuyenValue] = useState([]);
    const [phuongXa, setPhuongXa] = useState([]);
    const [phuongXaValue, setPhuongXaValue] = useState([]);
    const [state, setState] = useState({
        email: "",
        sdt: "",
        diaChi: ""
    })
    const handleChangeTinhThanh = (e) => {
        const { value } = e.target;
        setTinhThanh(value);
        setQuanHuyen([]);
        setPhuongXa([]);
    }
    const handleChangeQuanHuyen = (e) => {
        const { value } = e.target;
        setQuanHuyenValue(value)
        setPhuongXa([]);
    }
    const handleChangePhuongXa = (e) => {
        const { value } = e.target;
        setPhuongXaValue(value)
    }
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }
    const tinhThanhVN = [
        "Hà Nội",
        "Hà Giang",
        "Cao Bằng",
        "Bắc Kạn",
        "Tuyên Quang",
        "Lào Cai",
        "Điện Biên",
        "Lai Châu",
        "Sơn La",
        "Yên Bái",
        "Hòa Bình",
        "Thái Nguyên",
        "Lạng Sơn",
        "Quảng Ninh",
        "Bắc Giang",
        "Phú Thọ",
        "Vĩnh Phúc",
        "Bắc Ninh",
        "Hải Dương",
        "Hải Phòng",
        "Hưng Yên",
        "Thái Bình",
        "Hà Nam",
        "Nam Định",
        "Ninh Bình",
        "Thanh Hóa",
        "Nghệ An",
        "Hà Tĩnh",
        "Quảng Bình",
        "Quảng Trị",
        "Thừa Thiên Huế",
        "Đà Nẵng",
        "Quảng Nam",
        "Quảng Ngãi",
        "Bình Định",
        "Phú Yên",
        "Khánh Hòa",
        "Ninh Thuận",
        "Bình Thuận",
        "Kon Tum",
        "Gia Lai",
        "Đắk Lắk",
        "Đắk Nông",
        "Lâm Đồng",
        "Bình Phước",
        "Tây Ninh",
        "Bình Dương",
        "Đồng Nai",
        "Bà Rịa - Vũng Tàu",
        "TP. Hồ Chí Minh",
        "Long An",
        "Tiền Giang",
        "Bến Tre",
        "Trà Vinh",
        "Vĩnh Long",
        "Đồng Tháp",
        "An Giang",
        "Kiên Giang",
        "Cần Thơ",
        "Hậu Giang",
        "Sóc Trăng",
        "Bạc Liêu",
        "Cà Mau"
    ];
    const renderTinhThanh = () => {
        return tinhThanhVN.map(item => {
            return <option value={item}>{item}</option>
        })
    }
    const renderQuanHuyen = () => {
        if (tinhThanh === "Hà Nội" && quanHuyen.length === 0) {
            setQuanHuyen([
                "Quận Ba Đình",
                "Quận Cầu Giấy",
                "Quận Hoàn Kiếm",
                "Quận Hai Bà Trưng",
                "Quận Hoàng Mai",
                "Quận Đống Đa",
                "Quận Tây Hồ",
                "Quận Thanh Xuân",
                "Quận Bắc Từ Liêm",
                "Quận Hà Đông",
                "Quận Long Biên",
                "Quận Nam Từ Liêm"
            ]);
        } else if (tinhThanh === "Bắc Giang" && quanHuyen.length === 0) {
            setQuanHuyen([
                "Thành phố Bắc Giang",
                "Huyện Hiệp Hòa",
                "Huyện Lạng Giang",
                "Huyện Lục Nam",
                "Huyện Lục Ngạn",
                "Huyện Sơn Động",
                "Huyện Tân Yên",
                "Huyện Việt Yên",
                "Huyện Yên Dũng",
                "Huyện Yên Thế"
            ]);

        } else if (tinhThanh === "Hà Giang" && quanHuyen.length === 0) {
            setQuanHuyen([
                "Huyện Bắc Mê",
                "Huyện Bắc Quang",
                "Huyện Đồng Văn",
                "Huyện Hoàng Su Phì",
                "Huyện Mèo Vạc",
                "Huyện Quản Bạ",
                "Huyện Quang Bình",
                "Huyện Vị Xuyên",
                "Huyện Xín Mần",
                "Huyện Yên Minh"
            ]);
        }
        else if (tinhThanh === "Cao Bằng" && quanHuyen.length === 0) {
            setQuanHuyen([
                "Thành phố Cao Bằng",
                "Huyện Bảo Lâm",
                "Huyện Bảo Lạc",
                "Huyện Hà Quảng",
                "Huyện Hòa An",
                "Huyện Nguyên Bình",
                "Huyện Quảng Uyên",
                "Huyện Thạch An",
                "Huyện Trà Lĩnh",
                "Huyện Trùng Khánh"
            ]);
        }

        return quanHuyen.map(item => {
            return <option>{item}</option>
        })
    }
    const renderPhuongXa = () => {
        if (quanHuyenValue === "Quận Ba Đình" && phuongXa.length === 0) {
            setPhuongXa([
                "Cống Vị", "Điện Biên", "Đội Cấn", "Giảng Võ", "Kim Mã", "Liễu Giai", "Ngọc Hà", "Ngọc Khánh", "Nguyễn Trung Trực", "Phúc Xá", "Quán Thánh", "Thành Công", "Trúc Bạch", "Vĩnh Phúc"
            ]);
        } else if (quanHuyenValue === "Quận Hoàn Kiếm" && phuongXa.length === 0) {
            setPhuongXa([
                "Chương Dương Độ", "Cửa Đông", "Cửa Nam", "Đồng Xuân", "Hàng Bạc", "Hàng Bài", "Hàng Bồ", "Hàng Bông", "Hàng Buồm", "Hàng Đào", "Hàng Gai", "Hàng Mã", "Hàng Trống", "Lý Thái Tổ", "Phan Chu Trinh", "Phúc Tân", "Trần Hưng Đạo", "Tràng Tiền"
            ]);
        } else if (quanHuyenValue === "Quận Tây Hồ" && phuongXa.length === 0) {
            setPhuongXa([
                "Bưởi", "Thụy Khuê", "Yên Phụ", "Tứ Liên", "Nhật Tân", "Quảng An", "Xuân La", "Phú Thượng"
            ]);
        } else if (quanHuyenValue === "Quận Long Biên" && phuongXa.length === 0) {
            setPhuongXa([
                "Bồ Đề", "Gia Thụy", "Cự Khối", "Đức Giang", "Giang Biên", "Long Biên",
                "Ngọc Lâm", "Ngọc Thụy", "Phúc Đồng", "Phúc Lợi", "Sài Đồng",
                "Thạch Bàn", "Thượng Thanh", "Việt Hưng"
            ]);
        } else if (quanHuyenValue === "Quận Cầu Giấy" && phuongXa.length === 0) {
            setPhuongXa([
                "Nghĩa Đô", "Quan Hoa", "Dịch Vọng", "Dịch Vọng Hậu",
                "Trung Hòa", "Nghĩa Tân", "Mai Dịch", "Yên Hòa"
            ]);
        }
        return phuongXa.map(item => {
            return <option value={item}>{item}</option>
        })
    }
    const renderSPCart = () => {
        return listSanPhamCart.map(item => {
            return <div className="row no-gutters d-flex border border-1 mb-2 p-2">
                <div className="col-md-2">
                    <img src={item.image} alt="..." style={{ width: '100%' }} />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">{item.tenSp}</h5>
                        <p className="card-text">Số lượng: {item.soLuongSpGioHang}</p>
                        <p className="card-text text-danger">Giá: {(item.soLuongSpGioHang * Number(item.giaSale ? item.giaSale : item.giaGoc)).toLocaleString()} đ</p>
                    </div>
                </div>
            </div>
        })
    }
    const handleAdd = () => {
        const maNguoiDung = decodeToken.maNguoiDung;
        const maSanPhams = [];
        listSanPhamCart.map(item => maSanPhams.push(item.maSanPham))
        dispatch({
            type: "ADD_HOA_DON_DAT_HANG_USER",
            data: {
                ...state,
                tinhThanh,
                quanHuyen: quanHuyenValue,
                phuongXa: phuongXaValue,
                maNguoiDung,
                maSanPhams
            }
        })
    }
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-7'>
                    <img src='./images/header/logo.png' alt='/#' />

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb bg-white pl-0">
                            <li className="breadcrumb-item"><Link to="/gio-hang" style={{ textDecoration: "none" }}>Giỏ hàng</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Thanh toán</li>
                        </ol>
                    </nav>
                    <p>Thông tin giao hàng</p>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="sdt">Số điện thoại <span className='text-danger'>(*)</span></label>
                                <input type="text" className="form-control" id="sdt" name='sdt' onChange={handleChangeInput} placeholder='(+84)' />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="diaChi">Địa chỉ nhận hàng <span className='text-danger'>(*)</span></label>
                            <input type="text" className="form-control" id="diaChi" name='diaChi' placeholder="1234 Main St" onChange={handleChangeInput} />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="quocGia">Quốc gia</label>
                                <input type="text" className="form-control" name="quocGia" id="quocGia" placeholder="Quoc gia" value={"Việt Nam"} disabled />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="tinhThanh">Tỉnh/thành <span className='text-danger'>(*)</span></label>
                                <select id="tinhThanh" name='tinhThanh' className="form-control" onChange={handleChangeTinhThanh}>
                                    <option selected>Chọn tỉnh/thành...</option>
                                    {renderTinhThanh()}
                                </select>
                            </div>

                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputState">Quận/huyện <span className='text-danger'>(*)</span></label>
                                <select id="inputState" className="form-control" name='quanHuyen' onChange={handleChangeQuanHuyen}>
                                    <option selected>Chọn quận/huyện...</option>
                                    {renderQuanHuyen()}
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputZip">Phường xã <span className='text-danger'>(*)</span></label>
                                <select id="inputState" className="form-control" name='phuongXa' onChange={handleChangePhuongXa}>
                                    <option selected>Chọn phường/xã...</option>
                                    {renderPhuongXa()}
                                </select>
                            </div>
                        </div>
                    </form>
                    <div className='mt-3 myCheckout-ptvc'>
                        <h5>Phương thức vận chuyển</h5>
                        <div className="input-group border border-1 d-flex align-align-items-center">
                            <input type='radio' name='ptvc' checked />
                            <label htmlFor='ptvc' className='mb-0 ml-3'>Giao hàng tận nơi</label>
                        </div>
                    </div>
                    <div className='mt-4 myCheckout-ptvc'>
                        <h5>Phương thức thanh toán</h5>
                        <div className="input-group border border-1 d-flex align-align-items-center p-3 " style={{ borderRadius: '5px' }}>
                            <input type='radio' name='payment' checked />
                            <label htmlFor='payment' className='mb-0 ml-3'><i class="fa-solid fa-money-bill"></i> Thanh toán khi giao hàng</label>
                        </div>
                    </div>
                    <div className='w-100 d-flex justify-content-end mt-3'>
                        <Link to={'/thanh-toan-check'}>
                            <button className='btn text-white p-3' style={{ backgroundColor: "#338dbc" }}
                                onClick={() => handleAdd()}>Hoàn tất đơn hàng</button>
                        </Link>
                    </div>
                </div>
                <div className='col-5 bg-light '>
                    <div className="card mb-3 p-3" style={{ maxWidth: 540 }}>
                        {renderSPCart()}
                    </div>
                    <hr />
                    <div className='row'>
                        <p className='col-6'>Tạm tính:</p>
                        <p className='col-6 '> {totalPriceSp().toLocaleString()} đ</p>
                    </div>
                    <div className='row'>
                        <p className='col-6'>Phí vận chuyển:</p>
                        <p className='col-6'>Miễn phí</p>
                    </div>
                    <hr />
                    <div className='row'>
                        <p className='col-6'>Tổng cộng:</p>
                        <h4 className='col-6'> {totalPriceSp().toLocaleString()} đ</h4>
                    </div>
                </div>
            </div>
            <hr className='mt-5' />
            <p className='text-center'>Powered by Haravan</p>
        </div>
    )
}
