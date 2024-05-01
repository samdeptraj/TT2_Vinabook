import React from "react";
import ProductMain from "./ProductMain";
import { useSelector } from "react-redux";

export default function EconomicBook() {
  const listSanPhamUser = useSelector(state => state.DonHangReducerSaga.listSanPhamUser);
  const data = listSanPhamUser.filter(item => item.tenDanhMuc === "Sách kinh tế");
  return (
    <div>
      <ProductMain data={data} type="Sách kinh tế" />
    </div>
  );
}
