import React from "react";
import ProductMain from "./ProductMain";
import { useSelector } from "react-redux";

export default function SkillBook() {
  const listSanPhamUser = useSelector(state => state.DonHangReducerSaga.listSanPhamUser);
  const data = listSanPhamUser.filter(item=>item.tenDanhMuc==="Sách kỹ năng");
  return (
    <div>
      <ProductMain data={data} />
    </div>
  );
}
