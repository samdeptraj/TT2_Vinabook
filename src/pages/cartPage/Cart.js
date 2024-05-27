import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
export default function Cart() {
  let dispatch = useDispatch();
  let listSanPhamCart = useSelector((state) => state.GioHangReducerSaga.listSanPhamCart);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodeToken = jwtDecode(token);
      dispatch({
        type: "GET_ALL_SP_GIO_HANG",
        data: decodeToken.maNguoiDung
      })
    }
  }, [])
  const totalAmount = () => {
    const totalAmount = listSanPhamCart.reduce((curr, acc) => {
      return curr + acc.soLuongSpGioHang;
    }, 0);
    return totalAmount;
  };
  const calTotalPrice = () => {
    return listSanPhamCart.reduce((curr, acc) => {
      let giaSp = acc.giaSale ? acc.giaSale : acc.giaGoc;
      return curr + acc.soLuongSpGioHang * Number(giaSp);
    }, 0);
  };
  const handleTangGiamSoLuong = (maSanPham, maNguoiDung, type) => {
    dispatch({
      type: "UPDATE_SO_LUONG_SAN_PHAM",
      data: { maSanPham, maNguoiDung, type }
    })
  }
  const handleDeleteSp = (id, maNguoiDung) => {
    dispatch({
      type: "DELETE_SAN_PHAM_GIO_HANG_USER",
      data: { id, maNguoiDung }
    })
  }
  const renderProduct = () => {
    return listSanPhamCart.map((item) => {
      return (
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="row no-gutters w-50">
            <div className="col-md-3">
              <img className="w-100" src={item.image} alt="..." />
            </div>
            <div className="col-md-9">
              <div className="card-body p-0 pl-5">
                <h6 className="card-title">{item.title}</h6>
                <div className="d-flex">
                  <button
                    className="btn mr-2 bgGray pl-3 pr-3"
                    onClick={() => handleTangGiamSoLuong(item.maSanPham, item.maNguoiDung, false)}
                  >
                    -
                  </button>
                  <input
                    value={item.soLuongSpGioHang}
                    name="amount"
                    disabled
                    className="w-25 form-control text-center"
                  />
                  <button
                    className="btn ml-2 bgGray pl-3 pr-3"
                    onClick={() => handleTangGiamSoLuong(item.maSanPham, item.maNguoiDung, true)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center myCart-cost">
            <p className="amount mb-0">{item.soLuongSpGioHang} x </p>
            <p className="price mb-0 pl-2 pr-3">
              {Number(item.giaSale ? item.giaSale : item.giaGoc).toLocaleString()}{" "}
              ₫
            </p>
            <button
              className="btn"
              onClick={() => handleDeleteSp(item.id, item.maNguoiDung)}
            >
              <i className="fa-solid fa-trash textGray" />
            </button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container mt-4 mb-5 myCart">
      <h4 className="text-center textGreen mb-4">Giỏ hàng</h4>
      <div className="row">
        <div className="col-8">
          <div className="card mb-3 p-4">
            <h5 className="textGreen pb-3">SẢN PHẨM</h5>
            {renderProduct()}
          </div>
        </div>
        <div className="col-4">
          <div className="card myCart-paymentCart">
            <div className="card-header myCard-title pt-3">
              <h5 className="card-title ">TÓM TẮT ĐƠN HÀNG </h5>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <p>Sản phẩm</p>
                  <p>{totalAmount()}</p>
                </li>
                <li>
                  <p>Phí vận chuyển</p>
                  <p>Miễn phí </p>
                </li>
                <li>
                  <p>TẠM TÍNH </p>
                  <p className="textGreen">
                    {calTotalPrice().toLocaleString()} ₫
                  </p>
                </li>
              </ul>
              <p className="text-right">
                <i>(Đã bao gồm Thuế VAT và Phí đóng gói cơ bản).</i>
              </p>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h5>Tổng cộng</h5>
                <p style={{ fontWeight: "bold" }}>
                  {calTotalPrice().toLocaleString()} ₫
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center myCartbtn">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <button className="btn bgGray mr-4">Quay lại</button>
          </Link>
          <Link to="/thanh-toan" style={{ textDecoration: 'none', color: 'black' }}>
            <button className="btn btn-warning">Thanh toán</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
