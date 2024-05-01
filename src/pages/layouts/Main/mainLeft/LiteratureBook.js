import React from "react";
import ProductMain from "./ProductMain";
import { useSelector } from "react-redux";

export default function LiteratureBook() {
  const listSanPhamUser = useSelector(state => state.DonHangReducerSaga.listSanPhamUser);
  const data = listSanPhamUser.filter(item => item.tenDanhMuc === "Sách văn học");
  return (
    <div>
      <ProductMain data={data} type="Sách văn học" />
    </div>
  );
}
