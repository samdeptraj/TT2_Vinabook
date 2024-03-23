import React from "react";

export default function FooterBottom() {
  return (
    <div className=" myFooterBottom ">
      <div className="container pt-4 pb-4">
        <div className="row ">
          <div className="col-3">
            <img
              src="./images/footer/footerBottom/logo_so_cong_thuong.png"
              alt=""
            />
          </div>
          <div className="col-5">
            <h6>CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ MÊ KÔNG COM</h6>
            <p>
              Địa chỉ: 52/2 Thoại Ngọc Hầu, Phường Hòa Thạnh, Quận Tân Phú, Hồ
              Chí Minh
            </p>
            <p>
              MST: 0303615027 do Sở Kế Hoạch Và Đầu Tư Tp.HCM cấp ngày
              10/03/2011
            </p>
            <p>
              Tel: 028.73008182 - Fax: 028.39733234 - Email:{" "}
              <a href="/#">hotro@vinabook.com</a>
            </p>
          </div>
          <div className="col-4">
            <h6>WEBSITE CÙNG HỆ THỐNG</h6>
            <div className="mt-3">
              <img
                className="mr-4"
                src="./images/footer/footerBottom/logo_hotdeal_2x.png"
                alt=""
              />
              <img
                src="./images/footer/footerBottom/logo_yesgo_2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
