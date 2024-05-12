import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Editor } from '@tinymce/tinymce-react';
import { useHistory, useNavigate } from 'react-router-dom';
export default function UpdateChiTietSP() {
  const dispatch = useDispatch();
  const spChiTiet = useSelector(state => state.ChiTietSPReducerSaga.spChiTiet);
  const listDanhMuc = useSelector(state => state.DanhMucReducerSaga.listDanhMuc);
  const listSanPham = useSelector(state => state.DonHangReducerSaga.listSanPham);
  const notify = useSelector(state => state.ChiTietSPReducerSaga.notify);
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
    hinhThuc: "",
  });
  useEffect(() => {
    setState({
      ...state,
      gioiThieuSach: spChiTiet.gioiThieuSach,
      tenNCC: spChiTiet.tenNCC,
      tacGia: spChiTiet.tacGia,
      nguoiDich: spChiTiet.nguoiDich,
      nxb: spChiTiet.nxb,
      namXb: spChiTiet.namXb,
      trongLuong: spChiTiet.trongLuong,
      kichThuocBaoBi: spChiTiet.kichThuocBaoBi,
      soTrang: spChiTiet.soTrang,
      hinhThuc: spChiTiet.hinhThuc,
    })
  }, [spChiTiet])
  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_CHI_TIET_SP",
      data: {
        values: state,
        id: spChiTiet.id
      }
    })
    
  }
  useEffect(()=>{
    if(notify.trim()!==''){
      alert(notify);
      dispatch({
        type: "NULL_NOTIFY"
      })
    }
  },[notify])
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
  const renderTenSP = ()=>{
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
            <label htmlFor="trongLuong">Trọng lượng</label>
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
            <label htmlFor="hinhThuc">Hình thức</label>
            <input type="text" className="form-control" id="hinhThuc" name='hinhThuc' value={state.hinhThuc} onChange={handleChangeInput} />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="maSanPham">Tên sản phẩm</label>
            <div className="input-group mb-3">
              <select className="custom-select" id="inputGroupSelect01" name='maSanPham'>
                <option selected disabled style={{ fontWeight: "bold" }}>Bạn chọn...</option>
                {renderTenSP()}
              </select>
            </div>
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="maDanhMuc">Tên danh mục</label>
            <div className="input-group mb-3">
              <select className="custom-select" name='maDanhMuc' id="inputGroupSelect01" onChange={handleChangeInput}>
                <option selected disabled style={{ fontWeight: "bold" }}>Bạn chọn...</option>
                {renderTenDM()}
              </select>
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="btn btn-success mr-2" onClick={handleUpdate}>Lưu thay đổi</button>
          <button type="submit" className="btn btn-primary" onClick={handleBack}>Quay trở lại</button>
        </div>
      </form>

    </div>
  )
}
