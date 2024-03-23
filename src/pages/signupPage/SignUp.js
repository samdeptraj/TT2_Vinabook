import React from "react";
import "../sass/main.scss";
export default function SignUp() {
  return (
    <div className="container mt-5">
      <div className="mySignUp">
        <ul className="d-flex">
          <li className="mr-2">
            <a href="/#">
              Trang chủ <i class="fa-solid fa-angle-right"></i>{" "}
            </a>
          </li>
          <li>Tạo tài khoản mới</li>
        </ul>
        <h4>Chưa có tài khoản? Đăng ký ngay</h4>
        <hr />
        <div className="row border mb-5">
          <div className="col-7 p-4 mySignUp-colLeft">
            <h4 className="mb-4">ĐĂNG KÝ TÀI KHOẢN</h4>
            <form>
              <div className="form-group row">
                <label htmlFor="name" className="col-sm-3 col-form-label">
                  Họ và Tên <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Họ và Tên"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-sm-3 col-form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    name="email"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="password" className="col-sm-3 col-form-label">
                  Mật khẩu <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    id="inputEmail3"
                    name="password"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="re-password"
                  className="col-sm-3 col-form-label"
                >
                  Xác nhận mật khẩu <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    id="inputEmail3"
                    name="re-password"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-3 col-form-label"
                >
                  Ngày sinh
                </label>
                <div className="col-sm-9">
                  <input
                    type="date"
                    className="form-control "
                    id="inputPassword3"
                  />
                </div>
              </div>
              <fieldset className="form-group row">
                <legend className="col-form-label col-sm-3 float-sm-left pt-0">
                  Giới tính <span className="text-danger">*</span>
                </legend>
                <div className="col-sm-9 d-flex">
                  <div className="form-check mr-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      defaultValue="option1"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Nữ
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Nam
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="form-group row">
                <label htmlFor="capcha" className="col-sm-3 col-form-label">
                  Mã xác nhận <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                    name="capcha"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-9">
                  <button type="submit" className="btn btn-success">
                    Sign in
                  </button>
                </div>
              </div>
              <p>
                Bằng việc bấm vào nút đăng ký, bạn đã chấp nhận{" "}
                <a href="/#">chính sách bảo mật thông tin</a>
              </p>
            </form>
          </div>
          <div className="col-5 mySignUp-colRight">
            <h6>Đăng nhập bằng tài khoản khác</h6>
            <div className="mb-3">
              <a href="/#">
                <img src="./images/header/log/google_signin_dark.png" alt="" />
              </a>
            </div>
            <div>
              <a href="/#">
                <img
                  className="w-50"
                  src="./images/header/log/facebook_signin_dark.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
