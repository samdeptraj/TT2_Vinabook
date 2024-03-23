import React from "react";
import "../../../sass/main.scss";
import goodbook from "../../../../data/products/goodbook.json";
export default function NewBook(props) {
  const bgColor = "#0a6f3c";
  const renderBook = () => {
    return goodbook.map((item) => {
      if (item.id === props.idBook) {
        return (
          <div
            className="card mb-3 myNewBook-container mt-4"
            style={item.id === 2 ? { backgroundColor: bgColor } : null}
          >
            <div className="row no-gutters">
              <div className="col-md-4 myNewBook-divImg1">
                <a href="/#">
                  <img
                    className="w-100 myNewBook-img-1"
                    src={item.image}
                    alt="..."
                  />
                </a>
              </div>
              <div className="col-md-8 myNewBook__fontSize">
                <div className="card-body">
                  <h4 className="card-title">
                    {item.title}
                    <br /> <small>{item.author}</small>
                  </h4>
                  <p className="card-text myNewBook__border">{item.desc}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between w-50">
                      <div>
                        <p id="boxSaleOf">-20%</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <p className="mr-3 ml-3">{item.price} ₫</p>
                        <p>{item.priceSale} đ</p>
                      </div>
                    </div>

                    <div>
                      <button className="btnBuyNow">Mua ngay</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  };
  return (
    <div className="myNewBook">
      <h4>Sách Mới Hay</h4>
      {renderBook()}
    </div>
  );
}
