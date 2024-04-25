import React, { useEffect, useState } from "react";
import "../sass/main.scss";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP } from "../../redux/saga/types/NguoiDung.types";
export default function SignUp() {
  let notifySignUp = useSelector(state => state.NguoiDungReducer.notifySignUp);
  const notifyErrorEmail = useSelector(state => state.NguoiDungReducer.notifyErrorEmail);
  const [state, setState] = useState({
    values: {
    },
    errors: {
      ho: '',
      ten: '',
      email: '',
      password: '',
      repassword: ''
    }
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValues = { ...state.values };
    let newErrors = { ...state.errors };
    let error = {}; // Khởi tạo error là null
    if (name !== 'repassword') {
      newValues = { ...state.values, [name]: value };
    }
    if (value.trim() === '') {
      error = { ...state.errors, [name]: `${name} không được để trống` };
    } else {
      delete newErrors[name]; // Xóa lỗi nếu mật khẩu đã được nhập
    }
    if (name === 'password') {
      const passwordValue = value;
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
      if (!passwordRegex.test(passwordValue)) {
        error = { ...state.errors, [name]: "Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt" };
      }
    }
    if (name === 'repassword') {
      const repasswordValue = value;
      if (newValues.password !== repasswordValue) {
        error = { ...state.errors, [name]: "Mật khẩu không khớp" };
      } else {
        delete newErrors[name]; // Xóa lỗi nếu mật khẩu trùng khớp
      }
    }

    setState({
      values: newValues,
      errors: error // Cập nhật trạng thái lỗi
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: SIGNUP,
      data: state.values
    })
  }
  
  useEffect(() => {
    return () => {
        notifySignUp = ""; // Cleanup logic
    };
}, []); 
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
        <h5 className="text-success">{notifySignUp}</h5>
        <div className="row border mb-5">
          <div className="col-7 p-4 mySignUp-colLeft">
            <h4 className="mb-4 text-dark">ĐĂNG KÝ TÀI KHOẢN</h4>
            <form>
              <div className="form-group row">
                <label htmlFor="ho" className="col-sm-3 col-form-label">
                  Họ <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control invalid-ho"
                    name="ho"
                    placeholder="Họ"
                    onChange={handleChange}
                  />
                  <div id="" className="invalid-ho text-danger">
                    {state.errors.ho}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="ten" className="col-sm-3 col-form-label">
                  Tên <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control invalid-ten "
                    name="ten"
                    placeholder="Tên"
                    onChange={handleChange}
                  />
                  <div id="" className="invalid-ten text-danger">
                    {state.errors.ten}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-sm-3 col-form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    className="form-control invalid-email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                  />
                  <div id="" className="invalid-email text-danger">
                    {state.errors.email}
                    {notifySignUp?"":notifyErrorEmail}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="password" className="col-sm-3 col-form-label">
                  Mật khẩu <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control invalid-password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                  />
                  <div id="" className="invalid-password text-danger">
                    {state.errors.password}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="repassword"
                  className="col-sm-3 col-form-label"
                >
                  Xác nhận mật khẩu <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control invalid-repassword"
                    id="repassword"
                    name="repassword"
                    onChange={handleChange}
                  />
                  <div id="" className="invalid-repassword text-danger">
                    {state.errors.repassword}
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">

              </div>

              {/* <div className="form-group row">
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
              </div> */}
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
              {/* <div className="form-group row">
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
              </div> */}
              <div className="form-group row">
                <div className="col-sm-9">
                  <button type="submit" className="btn btn-success" onClick={(e) => handleSubmit(e)}>
                    Đăng ký
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
