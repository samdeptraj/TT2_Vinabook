import React from "react";
export default function FooterTop() {
  return (
    <div className="myFooterTop">
      <div className="container">
        <div className="row align-items-center myFooterTop--padding">
          <div className="col-3 myFooterTop-label">
            <label>
              <h5>
                ĐĂNG KÝ NHẬN EMAIL <br />
                <span> Đăng ký nhận thông tin sách mới, sách bán</span>
              </h5>
            </label>
          </div>
          <div className="col-9">
            <form className="myFooterTop-form">
              <div className="form-row">
                <div className="col-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên của bạn"
                  />
                </div>
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập email của bạn"
                  />
                </div>
                <div className="col-3">
                  <select className="form-control">
                    <option>Thể loại yêu thích</option>
                    <option>Thể loại yêu thích</option>
                    <option>Thể loại yêu thích</option>
                    <option>Thể loại yêu thích</option>
                    <option>Thể loại yêu thích</option>
                    <option>Thể loại yêu thích</option>
                    <option>Thể loại yêu thích</option>
                    <option>Thể loại yêu thích</option>
                    <option>Thể loại yêu thích</option>
                    <option>Thể loại yêu thích</option>
                  </select>
                </div>
                <div className="col-3">
                  <button className="btn btn-light myFooterTop-form--btnColor">ĐĂNG KÝ NGAY</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
