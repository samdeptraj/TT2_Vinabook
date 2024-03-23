import React from "react";
import {Link} from 'react-router-dom';
import { ROUTERS } from "../../../utils/router";
export default function FooterMain() {
  return (
    <div className="container myFooterMain">
      <div className="row mt-4">
        <div className="col-2">
          <h5>VỀ CÔNG TY</h5>
          <ul>
            <li>
              <a href="/#">Giới thiệu công ty</a>
            </li>
            <li>
              <a href="/#">Tuyển dụng</a>
            </li>
            <li>
              <a href="/#">Góc báo chí</a>
            </li>
            <li>
              <a href="/#">Chương trình đại lý</a>
            </li>
            <li>
              <a href="/#">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="/#">Chính sách đổi trả</a>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <h5>Trợ giúp</h5>
          <ul>
            <li>
              <a href="/#">Quy định sử dụng</a>
            </li>
            <li>
              <a href="/#">Hướng dẫn mua hàng</a>
            </li>
            <li>
              <a href="/#">Phương thức thanh toán</a>
            </li>
            <li>
              <a href="/#">Phương thức vận chuyển</a>
            </li>
            <li>
              <a href="/#">Các câu hỏi thường gặp</a>
            </li>
            <li>
              <a href="/#">Ứng dụng đọc ebook</a>
            </li>
          </ul>
        </div>
        <div className="col-2 p-0">
          <h5>Tin tức sách</h5>
          <ul>
            <li>
              <Link to={ROUTERS.NEWS}>Tin tức</Link>
            </li>
            <li>
              <a href="/#">Chân dung</a>
            </li>
            <li>
              <a href="/#">Điểm sách</a>
            </li>
            <li>
              <a href="/#">Phê bình</a>
            </li>
          </ul>
        </div>
        <div className="col-2 p-0">
          <div>
            <h6>CHẤP NHẬN THANH TOÁN</h6>
            <img src="./images/footer/pay/visa.jpg" alt="" />
            <img src="./images/footer/pay/master_card.jpg" alt="" />
            <img src="./images/footer/pay/jcb.jpg" alt="" />
            <img src="./images/footer/pay/atm.jpg" alt="" />
            <img src="./images/footer/pay/cod.jpg" alt="" />
            <img src="./images/footer/pay/payoo.jpg" alt="" />
          </div>
          <div>
            <h6 className="mt-4 mb-3">THANH TOÁN AN TOÀN</h6>
            <img src="./images/footer/pay/verify_visa.jpg" alt="" />
            <img src="./images/footer/pay/mastercard_securecode.jpg" alt="" />
            <img src="./images/footer/pay/onepay.jpg" alt="" />
          </div>
        </div>
        <div className="col-2">
          <h6>ĐỐI TÁC VẬN CHUYỂN</h6>
          <img className="w-100" src="./images/footer/logovnb.png" alt="" />
          <img className="w-100" src="./images/footer/vn-post.jpg" alt="" />
          <img className="w-100" src="./images/footer/dhl.jpg" alt="" />
        </div>
        <div className="col-2">
          <h6>ĐỐI TÁC BÁN HÀNG</h6>
          <img src="./images/footer/lazada.jpg" alt="" />
          <img src="./images/footer/shopee.jpg" alt="" />
          <img src="./images/footer/amazon.jpg" alt="" />
        </div>
      </div>
      <div>
        <h6>TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</h6>
        <img
          className="mr-3"
          src="./images/footer/icon-googleplay.png"
          alt=""
        />
        <img src="./images/footer/icon-appstore.png" alt="" />
      </div>
      <div className="mt-4">
        <h6>THƯỜNG ĐƯỢC TÌM KIẾM</h6>
        <div className="row mt-4">
          <div className="col-2">
            <ul>
              <li>
                <a href="/#">truyện dan brown</a>
              </li>
              <li>
                <a href="/#">sách hay về gia đình</a>
              </li>
              <li>
                <a href="/#">sach hoc tieng trung</a>
              </li>
              <li>
                <a href="/#">sách blockchain</a>
              </li>
              <li>
                <a href="/#">sách khởi nghiệp</a>
              </li>
              <li>
                <a href="/#">sách quản lý nhân sự</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <li>
                <a href="/#">truyện dan brown</a>
              </li>
              <li>
                <a href="/#">sách hay về gia đình</a>
              </li>
              <li>
                <a href="/#">sach hoc tieng trung</a>
              </li>
              <li>
                <a href="/#">sách blockchain</a>
              </li>
              <li>
                <a href="/#">sách khởi nghiệp</a>
              </li>
              <li>
                <a href="/#">sách quản lý nhân sự</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <li>
                <a href="/#">truyện dan brown</a>
              </li>
              <li>
                <a href="/#">sách hay về gia đình</a>
              </li>
              <li>
                <a href="/#">sach hoc tieng trung</a>
              </li>
              <li>
                <a href="/#">sách blockchain</a>
              </li>
              <li>
                <a href="/#">sách khởi nghiệp</a>
              </li>
              <li>
                <a href="/#">sách quản lý nhân sự</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <li>
                <a href="/#">truyện dan brown</a>
              </li>
              <li>
                <a href="/#">sách hay về gia đình</a>
              </li>
              <li>
                <a href="/#">sach hoc tieng trung</a>
              </li>
              <li>
                <a href="/#">sách blockchain</a>
              </li>
              <li>
                <a href="/#">sách khởi nghiệp</a>
              </li>
              <li>
                <a href="/#">sách quản lý nhân sự</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul>
              <li>
                <a href="/#">truyện dan brown</a>
              </li>
              <li>
                <a href="/#">sách hay về gia đình</a>
              </li>
              <li>
                <a href="/#">sach hoc tieng trung</a>
              </li>
              <li>
                <a href="/#">sách blockchain</a>
              </li>
              <li>
                <a href="/#">sách khởi nghiệp</a>
              </li>
              <li>
                <a href="/#">sách quản lý nhân sự</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
