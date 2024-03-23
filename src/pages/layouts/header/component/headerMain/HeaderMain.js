import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { ROUTERS } from "../../../../../utils/router";
import { useDispatch, useSelector } from "react-redux";
import { actionDeleteProduct } from "../../../../../hooks/Action";
export default function HeaderMain() {
  let { productCart } = useSelector((state) => state.ProductsReducer);
  let dispatch = useDispatch();
  const totalPrice = () => {
    return productCart.reduce((acc, curr) => {
      let price = curr.priceSale ? curr.priceSale : curr.price;
      return acc + curr.soLuong * price;
    }, 0);
  };
  const renderProductCart = () => {
    return productCart.map((item) => {
      return (
        <div className="row no-gutters header-right-cartDiv-child1-2">
          <div className="col-md-2">
            <img className="w-100" src={item.image} alt="..." />
          </div>
          <div className="col-md-10 text-left d-flex">
            <div className="card-body">
              <h6 className="card-title">{item.title}</h6>
              <div className="d-flex">
                <p className="card-text bookCart-amount mr-3">
                  {item.soLuong} x{" "}
                </p>
                <p className="card-text bookCart-amount text-danger">
                  {(item.priceSale ? item.priceSale : item.price).toLocaleString()} ₫
                </p>
              </div>
            </div>
            <div className="card-footer cartDiv-child1-2-btn">
              <button className=" header-right-cartDiv-child1-2-btnClose" onClick={()=>{
                dispatch(actionDeleteProduct(item))
              }}>
                X
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
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
              <a href="/#">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
              <div className="position-absolute header-right-cartDiv">
                <ul>
                  <div className="card mb-3 header-right-cartDiv-child1">
                    <li>{renderProductCart()}</li>
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
                          to={ROUTERS.CART}
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
              {/* modal */}
              <div className="header-right-sign">
                <button
                  type="button"
                  className="btn"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Đăng nhập
                </button>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered myDialog">
                    <div className="modal-content">
                      <div className="modal-header myDialog-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Đăng nhập
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form className="container myDialog-form pb-0">
                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-3">
                                <label htmlFor="exampleInputEmail1">
                                  Email*
                                </label>
                              </div>
                              <div className="col-9">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="row align-items-center">
                              <div className="col-3">
                                <label htmlFor="exampleInputPassword1">
                                  Mật khẩu*
                                </label>
                              </div>
                              <div className="col-9">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                            </div>
                            <div className="d-flex justify-content-between">
                              <div className="form-group form-check mt-3">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="exampleCheck1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleCheck1"
                                >
                                  Ghi nhớ thông tin
                                </label>
                              </div>
                              <a href="/#" className="mt-2">
                                Quên mật khẩu?
                              </a>
                            </div>
                            <button type="submit" className="btn btn-success">
                              Đăng nhập
                            </button>
                            <div>
                              <p>
                                Chưa có tài khoản vui lòng{" "}
                                <span className="d-inline-block">
                                  <a href="/#" className="text-primary">
                                    ĐĂNG KÝ
                                  </a>
                                </span>
                              </p>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer d-flex flex-column">
                        <div className="w-100 pl-4 pb-3">
                          Hoặc đăng nhập bằng
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <a href="/#" style={{ height: "50px" }}>
                              <img
                                className="w-100 h-75"
                                src="./images/header/log/google_signin_dark.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="col-6">
                            <a href="/#" style={{ height: "50px" }}>
                              <img
                                className="w-100 h-75"
                                src="./images/header/log/facebook_signin_dark.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <Link to={ROUTERS.SIGNUP}>Đăng ký</Link>
            </li>
          </ul>
        </div>
        {/* menu mini */}
      </nav>
    </div>
  );
}
{
  /* 
<a href="/#"></a> 
*/
}
