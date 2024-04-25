import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import "../../../sass/main.scss";
import { ROUTERS } from "../../../../utils/router";
import books from "../../../../data/products/books.json";
import { useDispatch } from "react-redux";
import { actionProductDetail } from "../../../../redux/actions/Action";
export default function ProductMain(props) {
  let dispatch = useDispatch();
  const hanldDetail = (item) => {
    dispatch(actionProductDetail(item));
  };
  const renderProducts = () => {
    return books[props.typeBook].map((item) => {
      return (
        <div className="col-4 p-2">
          <Link
            to={ROUTERS.DETAIL}
            className="myHotSaleBook-link"
            onClick={() => hanldDetail(item)}
          >
            <div
              className="card mb-3 p-3"
              style={{ maxWidth: 540, height: "250px" }}
            >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img className="w-100" src={item.image} alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body myCard-body">
                    <div className="myCard-body--border">
                      <h6 className="card-title">
                        {item.title.length > 15
                          ? item.title.substring(0, 15) + "..."
                          : item.title}
                      </h6>
                      <p className="card-text pb-2">{item.author}</p>
                    </div>
                    <p className="card-text pt-2 pb-2">
                      {item.desc.length > 15
                        ? item.desc.substring(0, 60) + "..."
                        : item.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mySale">
                <p id="boxSaleOf">{item.sale}%</p>
                <div className="mySale-price-container">
                  <p className="mySale-price">{item.price} ₫</p>
                  <p className="mySale-price-sale">{item.priceSale} ₫</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };
  return (
    <div className="myHotSaleBook">
      <div className="row">
        <div className="col-6">
          <h5>{props.type}</h5>
        </div>
        <div className="col-6 text-right">
          <a href="/#" className="myHotSaleBook--colorLink">
            Xem thêm <i className="fa-solid fa-angle-right"></i>
          </a>
        </div>
      </div>
      <div className="row ">{renderProducts()}</div>
    </div>
  );
}
