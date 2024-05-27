import React, { useEffect, useState } from "react";
import "./style.scss";
import { ROUTERS } from "../../../../../utils/router";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
export default function HeaderBottom() {
  const location = useLocation();
  const listDanhMuc = useSelector(state => state.DanhMucReducerSaga.listDanhMuc);

  const renderTypeBooks = () => {
    return listDanhMuc.map((item) => {
      return (
        <li className="" style={{ width: "260px" }}>
          <Link to={`${ROUTERS.CATEGORY}?tenDanhMuc=${encodeURIComponent(item.tenDanhMuc)}`} className="dropdown-item ">
            {item.tenDanhMuc}
          </Link>
          <i class="fa-solid fa-angle-right "></i>
        </li >
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
              className={`dropdown-menu ${location.pathname === ROUTERS.HOME ? "show" : ""
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
