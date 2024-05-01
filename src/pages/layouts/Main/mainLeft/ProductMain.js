import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import "../../../sass/main.scss";
import { ROUTERS } from "../../../../utils/router";
import { useDispatch, useSelector } from "react-redux";
import { actionProductDetail } from "../../../../redux/actions/Action";
export default function ProductMain(props) {
  let dispatch = useDispatch();
  const { data } = props;
  const renderProducts = () => {
    return data.map((item) => {
      return (
        <div className="col-4 p-2">
          <Link
            to={`${ROUTERS.DETAIL}?tenSp=${encodeURIComponent(item.tenSp)}`}
            className="myHotSaleBook-link"
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
                        {item.tenSp.length > 15
                          ? item.tenSp.substring(0, 15) + "..."
                          : item.tenSp}
                      </h6>
                      <p className="card-text pb-2">{item.tacGia}</p>
                    </div>
                    <p className="card-text pt-2 pb-2">
                      {item.gioiThieuSach.length > 15
                        ? item.gioiThieuSach.substring(0, 60) + "..."
                        : item.gioiThieuSach}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mySale">
                <p id="boxSaleOf">{Math.round(((Number(item.giaGoc) - Number(item.giaSale)) / Number(item.giaGoc)) * 100)}%</p>
                <div className="mySale-price-container">
                  <p className="mySale-price">{Number(item.giaGoc).toLocaleString()} ₫</p>
                  <p className="mySale-price-sale">{Number(item.giaSale).toLocaleString()} ₫</p>
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
          <h5>{data[0] ? data[0].tenDanhMuc : ""}</h5>
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
