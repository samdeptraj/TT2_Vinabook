import React, { useState } from "react";
import "./style.scss";
import { ROUTERS } from "../../../../../utils/router";
import { Link, useLocation } from "react-router-dom";
import typeBook from "../../../../../data/danhmucsp/danhMucSach.json";
export default function HeaderBottom() {
  const location = useLocation();
  const [typeBookState, setTypeBook] = useState(typeBook);
  const renderTypeBooks = () => {
    return typeBookState.map((item) => {
      let routerLink = "";
      if (item.title.trim() === "Sách Kinh Tế") {
        routerLink = ROUTERS.CATEGORY;
      }
      return (
        <li className="">
          <Link to={routerLink} className="dropdown-item ">
            {item.title}
          </Link>
          <i class="fa-solid fa-angle-right "></i>
        </li>
      );
    });
  };
  return (
    <div className="myHeaderBottom">
      <div className="container">
        <ul className="nav nav-tabs justify-content-between">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="/#"
              role="button"
              aria-expanded="false"
            >
              <i class="fa-solid fa-bars"></i> Danh mục sách
            </a>

            <div
              className={`dropdown-menu ${
                location.pathname === ROUTERS.HOME ? "show" : ""
              } myDropdown-menu`}
            >
              <ul>{renderTypeBooks()}</ul>
            </div>
          </li>
          <li className="nav-item d-flex li-right">
            <a className="nav-link disabled text-white" href="/#">
              <i class="fa-solid fa-phone-volume"></i> Hotline: 1900 6401
            </a>
            <a className="nav-link disabled text-white" href="/#">
              <i class="fa-solid fa-headset"></i> Hỗ trợ trực tuyến
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
