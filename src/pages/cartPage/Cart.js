import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionDeleteProduct, actionTangGiamProduct } from "../../redux/actions/Action";
export default function Cart() {
  let { productCart } = useSelector((state) => state.ProductsReducer);
  let dispatch = useDispatch();
  const totalAmount = () => {
    const totalAmount = productCart.reduce((curr, acc) => {
      return curr + acc.soLuong;
    }, 0);
    return totalAmount;
  };
  const calTotalPrice = () => {
    return productCart.reduce((curr, acc) => {
      let price = acc.priceSale ? acc.priceSale : acc.price;
      return curr + acc.soLuong * price;
    }, 0);
  };
  const renderProduct = () => {
    return productCart.map((item) => {
      return (
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="row no-gutters w-50">
            <div className="col-md-3">
              <img className="w-100" src={item.image} alt="..." />
            </div>
            <div className="col-md-9">
              <div className="card-body p-0 pl-5">
                <h6 className="card-title">{item.title}</h6>
                <div className="d-flex">
                  <button
                    className="btn mr-2 bgGray pl-3 pr-3"
                    onClick={() => {
                      dispatch(actionTangGiamProduct(item.id, false));
                    }}
                  >
                    -
                  </button>
                  <input
                    value={item.soLuong}
                    name="amount"
                    disabled
                    className="w-25 form-control text-center"
                  />
                  <button
                    className="btn ml-2 bgGray pl-3 pr-3"
                    onClick={() => {
                      dispatch(actionTangGiamProduct(item.id, true));
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center myCart-cost">
            <p className="amount mb-0">{item.soLuong} x </p>
            <p className="price mb-0 pl-2 pr-3">
              {" "}
              {(item.priceSale
                ? item.priceSale
                : item.price
              ).toLocaleString()}{" "}
              ₫
            </p>
            <button
              className="btn"
              onClick={() => {
                dispatch(actionDeleteProduct(item));
              }}
            >
              <i className="fa-solid fa-trash textGray" />
            </button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container mt-4 mb-5 myCart">
      <h4 className="text-center textGreen mb-4">Giỏ hàng</h4>
      <div className="row">
        <div className="col-8">
          <div className="card mb-3 p-4">
            <h5 className="textGreen pb-3">SẢN PHẨM</h5>
            {renderProduct()}
          </div>
        </div>
        <div className="col-4">
          <div className="card myCart-paymentCart">
            <div className="card-header myCard-title pt-3">
              <h5 className="card-title ">TÓM TẮT ĐƠN HÀNG </h5>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <p>Sản phẩm</p>
                  <p>{totalAmount()}</p>
                </li>
                <li>
                  <p>Phí vận chuyển</p>
                  <p>Miễn phí </p>
                </li>
                <li>
                  <p>TẠM TÍNH </p>
                  <p className="textGreen">
                    {calTotalPrice().toLocaleString()} ₫
                  </p>
                </li>
              </ul>
              <p className="text-right">
                <i>(Đã bao gồm Thuế VAT và Phí đóng gói cơ bản).</i>
              </p>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h5>Tổng cộng</h5>
                <p style={{ fontWeight: "bold" }}>
                  {calTotalPrice().toLocaleString()} ₫
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center myCartbtn">
          <button className="btn bgGray mr-4">Quay lại</button>
          <button className="btn btn-warning">Thanh toán</button>
        </div>
      </div>
    </div>
  );
}
