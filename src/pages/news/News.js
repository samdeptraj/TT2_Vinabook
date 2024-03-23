import React from "react";
import "../sass/main.scss";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../utils/router";
export default function News() {
  return (
    <div className="container">
      <div className="mt-5 myNews mb-5">
        <ul className="d-flex">
          <li className="mr-2">
            <a href="/#">
              Trang chủ <i class="fa-solid fa-angle-right"></i>{" "}
            </a>
          </li>
          <li>Sách Văn học Nước Ngoài</li>
        </ul>
        <h5 className="borderBottom">Tin tức</h5>
        <div className="row mt-4">
          <div className="col-2 text-right">
            <img src="./images/books/booksProduct/no_image.png" alt="" />
          </div>
          <div className="col-10 myNews-desc">
            <a href="/#" className="myNews-link">
              <p>Việt Nam mua bản quyền tác phẩm sắp ra mắt của Dan Brown</p>
            </a>

            <p className="textGray">Feb 9, 2018 16:14:00</p>
            <p>
              Bách Việt Books, đơn vị đã mua được bản quyền chuyển ngữ và phát
              hành bản tiếng Việt của Origin cho biết mặc dù con số cụ thể không
              được phép tiết lộ nhưng mức giá bản quyền cuốn này cao gấp đôi bản
              quyền Inferno - Hỏa ngục phát hành năm 2014.
            </p>
            <a href="/#" className="myNews-link">
              <i class="fa-solid fa-angles-right textGray"></i>Xem thêm
            </a>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-2 text-right">
            <img src="./images/books/booksProduct/no_image.png" alt="" />
          </div>
          <div className="col-10 myNews-desc">
            <Link to={ROUTERS.NEWS} className="myNews-link">
              <p>
                'Lời hứa về một cây bút chì' - cuốn sách truyền cảm hứng sống
              </p>
            </Link>
            <p className="textGray">Aug 5, 2016 11:32:00</p>
            <p>
              Cuốn sách kể hành trình theo đuổi mục đích sống cao cả của chàng
              trai trẻ người Mỹ - Adam Braun, từ chỗ chỉ sở hữu 25 USD tới xây
              250 trường học khắp thế giới.
            </p>
            <a href="/#" className="myNews-link">
              <i class="fa-solid fa-angles-right textGray"></i>Xem thêm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
