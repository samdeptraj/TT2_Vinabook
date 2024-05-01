import React, { useEffect } from "react";
import ProductMain from "./ProductMain";
import { useSelector } from "react-redux";
export default function HotSaleBook() {
  const listSanPhamUser = useSelector(state => state.DonHangReducerSaga.listSanPhamUser);
  const data = listSanPhamUser.filter(item => item.tenDanhMuc === "Sách bán chạy");
  return (
    <div>
      <ProductMain data={data} />
    </div>
  );
}
