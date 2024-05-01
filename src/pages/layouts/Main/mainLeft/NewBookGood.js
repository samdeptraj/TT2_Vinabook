import React from "react";
import NewBook from "./NewBook";
import { useSelector } from "react-redux";

export default function NewBookGood() {
  const listSanPhamUser = useSelector(state => state.DonHangReducerSaga.listSanPhamUser);
  const data = listSanPhamUser.filter(item => item.tenDanhMuc === "Sách bán chạy");
  return (
    <div>
      <NewBook data={data} idBook={1} />
    </div>
  );
}
