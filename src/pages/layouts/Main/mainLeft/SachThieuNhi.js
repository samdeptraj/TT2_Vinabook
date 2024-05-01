import React from 'react'
import ProductMain from './ProductMain'
import { useSelector } from 'react-redux';

export default function SachThieuNhi() {
  const listSanPhamUser = useSelector(state => state.DonHangReducerSaga.listSanPhamUser);
  const data = listSanPhamUser.filter(item=>item.tenDanhMuc==="Sách thiếu nhi");
  return (
    <div>
      <ProductMain data={data} />
    </div>
  );
}
