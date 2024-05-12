import React, { useEffect, useState } from "react";
import "../sass/main.scss";
import { Link, useLocation } from "react-router-dom";
import { ROUTERS } from "../../utils/router";
import { useDispatch, useSelector } from "react-redux";

export default function Category() {
  const dispatch = useDispatch();
  const listSanPhamDanhMuc = useSelector(state => state.DanhMucReducerSaga.listSanPhamDanhMuc);
  let listSpSapXep = useSelector(state => state.DanhMucReducerSaga.listSpSapXep);
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const tenDanhMuc = searchParam.get("tenDanhMuc");
  useEffect(() => {
    dispatch({
      type: "GET_ALL_DANH_MUC",
      data: tenDanhMuc
    });
  }, [tenDanhMuc]);
  const handleClick = (tenSp) => {
    dispatch({
      type: "SAN_PHAM_GET_DETAIL_USER",
      data: tenSp
    });
  }
  const handleChangeSapXep = (e) => {
    const { value } = e.target;
    dispatch({
      type: "SAP_XEP_SP_DANH_MUC",
      data: {
        loaiSapXep: value,
        tenDanhMuc
      }
    })
  }

  const renderSp = () => {
    if (listSpSapXep.length > 0) {
      return listSpSapXep.map(item => {
        const giaGoc = Number(item.giaGoc);
        const giaSale = Number(item.giaSale);
        return (
          <div className="col-2 mt-3" key={item.id}>
            <Link to={`/${ROUTERS.DETAIL}?tenSp=${encodeURIComponent(item.tenSp)}`} style={{ textDecoration: 'none' }} onClick={() => handleClick(item.tenSp)}>
              <div className="mb-3 myCategory-salePercent mb-4" style={{ height: '230px' }}>
                <img src={item.image} alt="" style={{ width: '100%', overflow: "hidden" }} />
                <p className="position-absolute text-white text-right">{Math.round((giaGoc - giaSale) / giaGoc * 100)}%</p>
              </div>
              <p>{item.tenSp.length < 30 ? item.tenSp : item.tenSp.slice(0, 30) + "..."}</p>
              <div className="myCategory-price d-flex justify-content-around">
                <p className="myCategory-price-origin">{giaGoc.toLocaleString()} ₫</p>
                <p className="myCategory-price-sale">{giaSale.toLocaleString()} ₫</p>
              </div>
            </Link>
          </div>
        );
      });
    } else {
      return listSanPhamDanhMuc.map(item => {
        const giaGoc = Number(item.giaGoc);
        const giaSale = Number(item.giaSale);
        return (
          <div className="col-2 mt-3" key={item.id}>
            <Link to={`/${ROUTERS.DETAIL}?tenSp=${encodeURIComponent(item.tenSp)}`} style={{ textDecoration: 'none' }} onClick={() => handleClick(item.tenSp)}>
              <div className="mb-3 myCategory-salePercent mb-4" style={{ height: '230px' }}>
                <img src={item.image} alt="" style={{ width: '100%', overflow: "hidden" }} />
                <p className="position-absolute text-white text-right">{Math.round((giaGoc - giaSale) / giaGoc * 100)}%</p>
              </div>
              <p>{item.tenSp.length < 30 ? item.tenSp : item.tenSp.slice(0, 30) + "..."}</p>
              <div className="myCategory-price d-flex justify-content-around">
                <p className="myCategory-price-origin">{giaGoc.toLocaleString()} ₫</p>
                <p className="myCategory-price-sale">{giaSale.toLocaleString()} ₫</p>
              </div>
            </Link>
          </div>
        );
      });
    }

  }
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
          <select className="form-control w-25" onChange={handleChangeSapXep}>
            <option value={"Mới nhất"} selected>Mới nhất</option>
            <option value={"A đến Z"}>A đến Z</option>
            <option value={"Z đến A"}>Z đến A</option>
            <option value={"Giá thấp đến cao"}>Giá thấp đến cao</option>
            <option value={"Giá cao đến thấp"}>Giá cao đến thấp</option>
            <option value={"Giảm giá thấp đến cao"}>Giảm giá thấp đến cao</option>
            <option value={"Giảm giá cao đến thấp"}>Giảm giá cao đến thấp</option>
          </select>
          <button className="btn">
            <i class="fa-solid fa-table-list"></i>
          </button>
        </div>
      </div>
      <div className="myCategory">
        <div className="row">
          {renderSp()}
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
    </div>
  );
}
