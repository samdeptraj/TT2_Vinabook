import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionAddCart } from "../../../../redux/actions/Action";
export default function DetailProduct() {
  let { product } = useSelector((state) => state.ProductsReducer); //thay the mapStateToProps
  let dispatch = useDispatch();
  const renderBookDetail = () => {
    return (
      <div className="row">
        <div className="col-8">
          <div className="card mb-3 border-0">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img className="w-100" src={product.image} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body pt-0">
                  <h4 className="card-title">{product.title}</h4>
                  <p className="card-text">Tác giả: {product.author}</p>
                  <p className="card-text">Nhà xuất bản: Nxb Hội Nhà Văn</p>
                  <p className="card-text">Nhà phát hành: Nhã Nam</p>
                  <p className="card-text borderBottom">
                    {product.desc}
                    <br />
                    <a href="/#">Xem thêm</a>
                  </p>
                  <h5 className="card-title">Thông tin kèm theo</h5>

                  <p className="card-text">
                    Có dịch vụ bọc sách plastic cao cấp cho sách này{" "}
                    <a href="/#" className="texta">
                      (Chi tiết)
                    </a>
                  </p>
                  <p className="card-text ">
                    Miễn phí giao hàng toàn quốc cho Đơn hàng từ 250.000đ (Áp
                    dụng từ 1/2/2015.{" "}
                    <a href="/#" className="texta">
                      Xem chi tiết »
                    </a>
                    )
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div classname="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <ul className="borderBottom myDetailProduct-ulRight">
                <li className="li-1">
                  <p>Giá bìa</p>
                  <p>{product.price} ₫</p>
                </li>
                <li className="li-2">
                  <p>Giá bán</p>
                  <p>{product.priceSale} ₫</p>
                </li>
                <li className="li-3">
                  <p>Tiết kiệm</p>
                  <p className="texta">?0.000 ₫ ({product.sale}%)</p>
                </li>
                <li className="li-4">
                  <p>Chất lượng sách</p>
                  <p className="texta">Loại A(?)</p>
                </li>
              </ul>
              <h6 className="card-title borderBottom texta text-right">
                <i class="fa-solid fa-circle-check"></i> ĐẶT THEO YÊU CẦU
              </h6>
              <small className="card-text">
                Sách này sẽ được Vinabook.com lấy từ NXB khi quý khách đặt mua.
                Thời gian gởi hàng từ 5-10 ngày làm việc.
              </small>
              <button
                className="btn btn-warning w-100 mt-4"
                onClick={() => {
                  dispatch(actionAddCart(product));
                }}
              >
                <i class="fa-solid fa-cart-shopping"></i> MUA NGAY
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container mt-4 myDetailProduct mb-5">
      <ul className="d-flex">
        <li className="mr-2">
          <a href="/#">
            Trang chủ <i class="fa-solid fa-angle-right"></i>{" "}
          </a>
        </li>
        <li>Sách Văn học Nước Ngoài</li>
      </ul>
      {renderBookDetail()}
      <div>
        <h5 className="texta borderBottom">Sách nên mua kèm với sách này</h5>
        <div className="d-flex align-items-center">
          <div className="mr-5">
            <img src="./images/books/booksProduct/book-3.jpg" alt="" />
            <span className="pr-3 pl-3">+</span>
            <img src="./images/books/booksProduct/book-4.jpg" alt="" />
            <span className="pr-3 pl-3">+</span>
            <img src="./images/books/booksProduct/book-5.jpg" alt="" />
          </div>
          <div>
            <h5>
              Tổng giá bán <span className="textPrice-18">449.000 ₫</span>
            </h5>
            <button className="btn btn-warning">
              <i class="fa-solid fa-cart-shopping"></i> MUA NGAY
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="defaultCheck1"
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            <a href="/#" className="text-dark">
              Mắt Nào Xanh Nhất
            </a>{" "}
            <span className="textPrice-15 ml-3">165.000 ₫</span>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="defaultCheck1"
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            <a href="/#" className="text-dark">
              Tuyết
            </a>{" "}
            <span className="textPrice-15 ml-3">126.000 ₫</span>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="defaultCheck1"
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            <a href="/#" className="text-dark">
              Eleanor Oliphant Hoàn Toàn Ổn - Eleanor Oliphant Is Completely
              Fine
            </a>{" "}
            <span className="textPrice-15 ml-3">158.000 ₫</span>
          </label>
        </div>
      </div>
      <div className="mt-5">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              data-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Giới thiệu sách
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              data-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Thông tin chi tiết
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              data-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Đánh giá & bình luận
            </button>
          </li>
        </ul>
        <div className="row">
          <div className="col-9">
            <div className="tab-content mt-4" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h4>Hippi - Những Kẻ Lãng Du</h4>
                <p className="mt-4">Hippi - Những Kẻ Lãng Du</p>
                <p>
                  Hippie – Những kẻ lãng du đưa ta đến với những con người hoàn
                  toàn xa lạ, với những mục đích khác nhau nhưng cùng hướng đến
                  vùng đất xa xôi Nepal trên con đường mòn hippie huyền thoại.
                  Trong hành trình đó, chàng trai Brazil tên Paulo gầy gò có
                  chòm râu dê và mái tóc dài bồng bềnh, mơ ước trở thành nhà văn
                  đã gặp gỡ Karla, cô gái Hà Lan ở độ tuổi đôi mươi đang tìm
                  kiếm bạn đồng hành cho chuyến đi.
                </p>
                <p>
                  Sau khi gặp nhau ở Amsterdam, cô thuyết phục Paulo cùng cô lên
                  chiếc Xe buýt Diệu kỳ đi từ Amsterdam đến Istanbul và qua
                  Trung Á đến Kathmandu. Khi cùng nhau bắt đầu cuộc hành trình
                  này, Paulo và Karla đã khám phá ra mối tình đánh thức họ ở mọi
                  phương diện, đồng thời dẫn đến những lựa chọn và quyết định sẽ
                  định hướng cho cuộc sống của họ sau này.
                </p>
                <p>Mời bạn đón đọc.</p>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <h5>Thông tin chi tiết</h5>
                <ul className="myDetailProduct-ulDetail">
                  <li>
                    <p>Tác giả:</p>
                    <p className="pl-3"> Paulo Coelho , Trần Hải Đức</p>
                  </li>
                  <li>
                    <p>Nhà phát hành:</p>
                    <p className="pl-3">
                      <a href="/#"> Nhã Nam</a>
                    </p>
                  </li>
                  <li>
                    <p>Khối lượng:</p>
                    <p className="pl-3"> 500.00 gam</p>
                  </li>
                  <li>
                    <p>Định dạng:</p>
                    <p className="pl-3"> Bìa mềm</p>
                  </li>
                  <li>
                    <p>Ngày phát hành:</p>
                    <p className="pl-3"> 2024</p>
                  </li>
                  <li>
                    <p>Nhà xuất bản:</p>
                    <p className="pl-3"> Nxb Hội Nhà Văn</p>
                  </li>
                  <li>
                    <p>Mã Sản phẩm:</p>
                    <p className="pl-3"> 8935235240483</p>
                  </li>
                  <li>
                    <p>Ngôn ngữ:</p>
                    <p className="pl-3"> Tiếng Việt</p>
                  </li>
                  <li>
                    <p>Kích thước:</p>
                    <p className="pl-3"> 20.5 x 14 cm</p>
                  </li>
                  <li>
                    <p>Số trang:</p>
                    <p className="pl-3"> 368</p>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade myDetailProduct"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <h5>Nhận xét từ khách hàng</h5>
                <div className="row myDetailProduct-rate">
                  <div className="col-8">
                    <div className="card mb-3 myDetailProduct-padding">
                      <div className="row no-gutters">
                        <div className="col-md-4 myDetailProduct-rate-child1 pr-3 pt-3">
                          <p className="pTag-1">Đánh giá trung bình</p>
                          <p className="pTag-2">(0 - người đánh giá)</p>
                          <p className="pTag-3">0,0</p>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <ul className="myDetailProduct-rate-ulStar">
                              <li>
                                <span>
                                  5{" "}
                                  <i className="fa-solid fa-star ml-1 text-warning"></i>
                                </span>
                                <div className="myDetailProduct-rate-progress"></div>{" "}
                                <span>0</span>
                              </li>
                              <li>
                                <span>
                                  4{" "}
                                  <i className="fa-solid fa-star ml-1 text-warning"></i>
                                </span>
                                <div className="myDetailProduct-rate-progress"></div>{" "}
                                <span>0</span>
                              </li>
                              <li>
                                <span>
                                  3{" "}
                                  <i className="fa-solid fa-star ml-1 text-warning"></i>
                                </span>
                                <div className="myDetailProduct-rate-progress"></div>{" "}
                                <span>0</span>
                              </li>
                              <li>
                                <span>
                                  2{" "}
                                  <i className="fa-solid fa-star ml-1 text-warning"></i>
                                </span>
                                <div className="myDetailProduct-rate-progress"></div>{" "}
                                <span>0</span>
                              </li>
                              <li>
                                <span>
                                  1{" "}
                                  <i className="fa-solid fa-star ml-1 text-warning"></i>
                                </span>
                                <div className="myDetailProduct-rate-progress"></div>{" "}
                                <span>0</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <p>Đăng nhập để gửi nhận xét của Bạn</p>
                    <button className="btn btn-success btn-lg">
                      Đăng nhập
                    </button>
                    <p>
                      Bạn chưa có tài khoản? Hãy <a href="/#">Đăng ký</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title textGreen borderBottom">
                  Thông tin tác giả
                </h5>
                <p className="card-subtitle mb-2 text-muted">
                  <a href="/#" className="texta">
                    Paulo Coelho
                  </a>
                </p>
                <small>Paulo Coelho</small>
                <ul className="borderBottom myDetailProduct-infoAuthor">
                  <li>
                    <a href="/#" className="texta">
                      <i class="fa-solid fa-angles-right textGray"></i> Vào
                      trang riêng của tác giả
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="texta">
                      <i class="fa-solid fa-angles-right textGray"></i> Xem tất
                      cả các sách của tác giả
                    </a>
                  </li>
                </ul>
                <p className="card-subtitle mb-2 text-muted">
                  <a href="/#" className="texta">
                    Trần Hải Đức
                  </a>
                </p>
                <ul className="borderBottom myDetailProduct-infoAuthor">
                  <li>
                    <i class="fa-solid fa-angles-right textGray"></i>
                    <a href="/#" className="texta">
                      Vào trang riêng của tác giả
                    </a>
                  </li>
                  <li>
                    <i class="fa-solid fa-angles-right textGray"></i>
                    <a href="/#" className="texta">
                      Xem tất cả các sách của tác giả
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
