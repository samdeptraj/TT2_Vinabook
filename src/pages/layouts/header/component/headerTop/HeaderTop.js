import React from "react";
import "./style.scss";
export default function HeaderTop() {
  return (
    <div className="bg-light">
      <div className="container myHeaderTop">
        <nav className="navbar navbar-light">
          <ul className="d-flex">
            <li>
              <i className="fa-solid fa-truck" /> Miễn phí giao hàng
            </li>
            <li>
              <i className="fa-solid fa-book"></i> 80.000 tựa sách
            </li>
            <li>
              <i className="fa-solid fa-mobile"></i> Vinabook Reader
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
