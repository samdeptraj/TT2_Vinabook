import React from "react";
import "../sass/main.scss";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../utils/router";
export default function Category() {
  return (
    <div className="container mt-4 mb-5">
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={ROUTERS.HOME}>Trang chủ</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Sách Kinh Tế
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <h5 className="borderBottom textGreen">Sách Kinh Tế</h5>
        <div className="text-right d-flex justify-content-end">
          <select className="form-control w-25">
            <option>Ngày phát hành mới nhất</option>
            <option>Mới nhất</option>
            <option>A đến Z</option>
            <option>Z đến A</option>
            <option>Giá thấp đến cao</option>
            <option>Giá cao đến thấp</option>
            <option>Giảm giá thấp đến cao</option>
            <option>Giảm giá cao đến thấp</option>
          </select>
          <button className="btn">
            <i class="fa-solid fa-table-list"></i>
          </button>
        </div>
      </div>
      <div className="myCategory">
        <div className="row">
          <div className="col-2 mt-3">
            <div className="mb-3 myCategory-salePercent">
              <img src="./images/books/booksProduct/book-7.jpg" alt="" />
              <p className="position-absolute text-white">-70%</p>
            </div>
            <a href="/#">MBA Bằng Hình - The Visual MBA</a>
            <div className="myCategory-price">
              <p className="myCategory-price-origin">189.000 ₫</p>
              <p className="myCategory-price-sale">170.000 ₫</p>
            </div>
          </div>
          {/* sp */}
          <div className="col-2 mt-3">
            <div className="mb-3 myCategory-salePercent">
              <img src="./images/books/booksProduct/book-8.jpg" alt="" />
              <p className="position-absolute text-white">-69%</p>
            </div>
            <a href="/#">Tay Không Gây Dựng Cơ Đồ (Tái Bản 2021)</a>
            <div className="myCategory-price">
              <small>Vikrom Kromadit</small>
              <p className="myCategory-price-origin">79.000 ₫</p>
              <p className="myCategory-price-sale">24.000 ₫</p>
            </div>
          </div>
          {/* sp */}
          <div className="col-2 mt-3">
            <div className="mb-3 myCategory-salePercent">
              <img src="./images/books/booksProduct/book-8.jpg" alt="" />
              <p className="position-absolute text-white">-69%</p>
            </div>
            <a href="/#">Tay Không Gây Dựng Cơ Đồ (Tái Bản 2021)</a>
            <div className="myCategory-price">
              <small>Vikrom Kromadit</small>
              <p className="myCategory-price-origin">79.000 ₫</p>
              <p className="myCategory-price-sale">24.000 ₫</p>
            </div>
          </div>
          {/* sp */}
          <div className="col-2 mt-3">
            <div className="mb-3 myCategory-salePercent">
              <img src="./images/books/booksProduct/book-8.jpg" alt="" />
              <p className="position-absolute text-white">-69%</p>
            </div>
            <a href="/#">Tay Không Gây Dựng Cơ Đồ (Tái Bản 2021)</a>
            <div className="myCategory-price">
              <small>Vikrom Kromadit</small>
              <p className="myCategory-price-origin">79.000 ₫</p>
              <p className="myCategory-price-sale">24.000 ₫</p>
            </div>
          </div>
          {/* sp */}
          <div className="col-2 mt-3">
            <div className="mb-3 myCategory-salePercent">
              <img src="./images/books/booksProduct/book-8.jpg" alt="" />
              <p className="position-absolute text-white">-69%</p>
            </div>
            <a href="/#">Tay Không Gây Dựng Cơ Đồ (Tái Bản 2021)</a>
            <div className="myCategory-price">
              <small>Vikrom Kromadit</small>
              <p className="myCategory-price-origin">79.000 ₫</p>
              <p className="myCategory-price-sale">24.000 ₫</p>
            </div>
          </div>
          {/* sp */}
          <div className="col-2 mt-3">
            <div className="mb-3 myCategory-salePercent">
              <img src="./images/books/booksProduct/book-8.jpg" alt="" />
              <p className="position-absolute text-white">-69%</p>
            </div>
            <a href="/#">Tay Không Gây Dựng Cơ Đồ (Tái Bản 2021)</a>
            <div className="myCategory-price">
              <small>Vikrom Kromadit</small>
              <p className="myCategory-price-origin">79.000 ₫</p>
              <p className="myCategory-price-sale">24.000 ₫</p>
            </div>
          </div>
          {/* sp */}
          <div className="col-2 mt-3">
            <div className="mb-3 myCategory-salePercent">
              <img src="./images/books/booksProduct/book-8.jpg" alt="" />
              <p className="position-absolute text-white">-69%</p>
            </div>
            <a href="/#">Tay Không Gây Dựng Cơ Đồ (Tái Bản 2021)</a>
            <div className="myCategory-price">
              <small>Vikrom Kromadit</small>
              <p className="myCategory-price-origin">79.000 ₫</p>
              <p className="myCategory-price-sale">24.000 ₫</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom mt-4"></div>
      <div className="mt-4">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item">
              <a className="page-link" href="/#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
