import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export default function AddChiTiet() {
    const dispatch = useDispatch();
    const notify = useSelector(state => state.ChiTietSPReducerSaga.notify);
    const listDanhMuc = useSelector(state => state.DanhMucReducerSaga.listDanhMuc);
    const listSanPham = useSelector(state => state.DonHangReducerSaga.listSanPham);
    const navigate = useNavigate();
    const [state, setState] = useState({
        gioiThieuSach: "",
        tenNCC: "",
        tacGia: "",
        nguoiDich: "",
        nxb: "",
        namXb: "",
        trongLuong: "",
        kichThuocBaoBi: "",
        soTrang: "",
        hinhTHuc: "",
    });
    const handleChangeInput = (e) => {
        const { name, value } = e.target
        console.log('name, value : ', name, value );
        setState({
            ...state,
            [name]: value
        })
    }
    const handleAdd = (e) => {
        e.preventDefault();
        console.log("state: ",state);
        dispatch({
            type: "ADD_CHI_TIET_SP",
            data: {
                values: state,
            }
        })

    }
    useEffect(() => {
        if (notify.trim() !== '') {
            alert(notify);
            dispatch({
                type: "NULL_NOTIFY"
            })
        }
    }, [notify])
    const handleBack = () => {
        navigate('/admin/home');
    }
    const renderTenDM = () => {
        return listDanhMuc.map(item => {
            return <>
                <option value={item.id}>{item.tenDanhMuc}</option>
            </>
        })
    }
    const renderTenSP = () => {
        return listSanPham.map(item => {
            return <>
                <option value={item.id}>{item.tenSp}</option>
            </>
        })
    }
    return (
        <div className='container mt-4'>
            <h4 className='text-center mb-4'>Cập nhập chi tiết sản phẩm</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="gioiThieuSach">Giới thiệu sách</label>
                    <textarea rows={4} type="text" className="form-control" id="gioiThieuSach" name='gioiThieuSach' placeholder='Nhập nội dung...' value={state.gioiThieuSach} onChange={handleChangeInput} />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="tenNCC">Tên nhà cung cấp</label>
                        <input type="text" className="form-control" id="tenNCC" name='tenNCC' value={state.tenNCC} onChange={handleChangeInput} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="tacGia">Tác giả</label>
                        <input type="text" className="form-control" id="tacGia" name='tacGia' value={state.tacGia} onChange={handleChangeInput} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="nguoiDich">Người dịch</label>
                        <input type="text" className="form-control" id="nguoiDich" name='nguoiDich' value={state.nguoiDich} onChange={handleChangeInput} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="nxb">Nhà xuất bản</label>
                        <input type="text" className="form-control" id="nxb" name='nxb' value={state.nxb} onChange={handleChangeInput} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="namXb">Năm xuất bản</label>
                        <input type="text" className="form-control" id="namXb" name='namXb' value={state.namXb} onChange={handleChangeInput} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="trongLuong">Trọng lượng (gr)</label>
                        <input type="text" className="form-control" id="trongLuong" name='trongLuong' value={state.trongLuong} onChange={handleChangeInput} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="kichThuocBaoBi">Kích thước bao bì</label>
                        <input type="text" className="form-control" id="kichThuocBaoBi" name='kichThuocBaoBi' value={state.kichThuocBaoBi} onChange={handleChangeInput} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="soTrang">Số trang</label>
                        <input type="text" className="form-control" id="soTrang" name='soTrang' value={state.soTrang} onChange={handleChangeInput} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="hinhTHuc">Hình thức</label>
                        <input type="text" className="form-control" id="hinhTHuc" name='hinhTHuc' value={state.hinhTHuc} onChange={handleChangeInput} />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="maSanPham">Tên sản phẩm</label>
                        <div className="input-group mb-3">
                            <select className="custom-select" id="maSanPham" name='maSanPham' onChange={handleChangeInput}>
                                <option selected disabled style={{ fontWeight: "bold" }}>Bạn chọn...</option>
                                {renderTenSP()}
                            </select>
                        </div>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="maDanhMuc">Tên danh mục</label>
                        <div className="input-group mb-3">
                            <select className="custom-select" name='maDanhMuc' id="maDanhMuc" onChange={handleChangeInput}>
                                <option selected disabled style={{ fontWeight: "bold" }}>Bạn chọn...</option>
                                {renderTenDM()}
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-success mr-2" onClick={handleAdd}>Thêm</button>
                    <button type="submit" className="btn btn-primary" onClick={handleBack}>Quay trở lại</button>
                </div>
            </form>

        </div>
    )
}
