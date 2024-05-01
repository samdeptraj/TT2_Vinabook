import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { ROUTERS } from "../../../../../utils/router";
import { useDispatch, useSelector } from "react-redux";
import { actionDeleteProduct } from "../../../../../redux/actions/Action";
import TaiKhoan from "./TaiKhoan";

export default function HeaderMain() {
  const navigate = useNavigate();
  let listSanPhamCart = useSelector((state) => state.GioHangReducerSaga.listSanPhamCart);
  let dispatch = useDispatch();
  const totalPrice = () => {
    return listSanPhamCart.reduce((acc, curr) => {
      let price = curr.giaSale ? curr.giaSale : curr.giaGoc;
      return acc + (curr.soLuongSpGioHang * price);
    }, 0);
  };
  const handleDeleteSp = (id, maNguoiDung) => {
    dispatch({
      type: "DELETE_SAN_PHAM_GIO_HANG_USER",
      data: { id, maNguoiDung }
    })
  }
  const renderProductCart = () => {
    return listSanPhamCart.slice(0, 5).map(item => {
      return (
        <div className="row no-gutters header-right-cartDiv-child1-2 mb-1">
          <div className="col-md-2">
            <img className="w-100" src={item.image} alt="..." />
          </div>
          <div className="col-md-10 text-left d-flex">
            <div className="card-body">
              <h6 className="card-title">{item.title}</h6>
              <div className="d-flex">
                <p className="card-text bookCart-amount mr-3">
                  {item.soLuongSpGioHang} x{" "}
                </p>
                <p className="card-text bookCart-amount text-danger">
                  {Number(item.giaSale ? item.giaSale : item.giaGoc).toLocaleString()} ₫
                </p>
              </div>
            </div>
            <div className="card-footer cartDiv-child1-2-btn">
              <button className=" header-right-cartDiv-child1-2-btnClose"
                onClick={() => handleDeleteSp(item.id, item.maNguoiDung)}>
                X
              </button>
            </div>
          </div>
        </div >
      );
    })
  }
  const renderActionAccount = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return (
        <>
          <div className="header-right-sign">
            <button
              type="button"
              className="btn"
              data-toggle="modal"
              data-target="#modalLogin"
            >
              Đăng nhập
            </button>
          </div>
          <Link to={ROUTERS.SIGNUP}>Đăng ký</Link>
        </>
      )
    } else {
      return (
        <>
          <Link to={ROUTERS.TAIKHOAN}>Tài khoản</Link>
          <div className="header-right-sign">
            <button className="btn" onClick={() => handleLogout()}>Đăng xuất</button>
          </div>
        </>
      );
    }
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(ROUTERS.HOME)
  }
  return (
    <div className="container mt-3 mb-3 myHeaderMain">
      <nav className="navbar navbar-expand-lg navbar-light row">
        <div className="col-3">
          <Link to={ROUTERS.HOME}>
            <img src="./images/header/logo.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="col-6">
          <div
            className="collapse navbar-collapse position-relative"
            id="navbarSupportedContent"
          >
            <form className="form-inline my-2 my-lg-0">
              <i className="fa-solid fa-magnifying-glass position-absolute l0"></i>
              <input
                className="form-control"
                type="search"
                placeholder="Tìm kiếm tựa sách, tác giả"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 position-absolute"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="col-3 header-right">
          <ul className="d-flex">
            <li className="mr-3 position-relative header-right-cart">
              <Link
                to={"/" + ROUTERS.CART}
                style={{ color: "black", textDecoration: "none" }}
              >
                <i className="fa-solid fa-cart-shopping"></i>

              </Link>
              <div className="position-absolute header-right-cartDiv">
                <ul>
                  <div className="card mb-3 header-right-cartDiv-child1">
                    <li>{renderProductCart()}</li>
                    <li> <Link
                      to={"/" + ROUTERS.CART}
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Xem trong giỏ...
                    </Link></li>
                    <div className="card-footer card-total d-flex justify-content-between">
                      <p>
                        Tổng cộng:
                        <span className="text-danger fw-bold">
                          {" "}
                          {totalPrice().toLocaleString()} ₫
                        </span>{" "}
                      </p>
                      <button className="btn btn-warning">
                        <Link
                          to={"/" + ROUTERS.CART}
                          style={{ color: "black", textDecoration: "none" }}
                        >
                          Xem giỏ hàng
                        </Link>
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
            </li>
            <li className="d-flex">
              {renderActionAccount()}
            </li>
          </ul>
        </div>
        {/* menu mini */}
      </nav>
    </div>
  );
}