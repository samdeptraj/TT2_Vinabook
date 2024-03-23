import React from "react";
import "../../../sass/main.scss";
import books from "../../../../data/products/books.json";
export default function HotBookMain(props) {
  const renderProducts = () => {
    return books[props.typeBook].map((item) => {
      return (
        <li key={item.id}>
          <div className="card mb-3 myCard" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={item.image} alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body my-card-body">
                  <a href="/#">{item.title}</a>
                  <p className="card-text my-card-body-author mb-0">
                    {item.author}
                  </p>
                  <p className="card-text my-card-body-price price-off">
                    {item.price ? item.price + " ₫" : ""}
                  </p>
                  <p className="card-text my-card-body-price-sale">
                    {item.priceSale} ₫
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
  };
  return (
    <div className="myHotSaleWeek pt-4">
      <h5>{props.type}</h5>
      <ul className="mt-3 mb-3">{renderProducts()}</ul>
    </div>
  );
}
