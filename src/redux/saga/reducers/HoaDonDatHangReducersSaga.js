import { GET_ALL_SAN_PHAM_SAGA } from "../types/sanPham.types";

const initialState = {
  listHoaDonDatHang: [],

}
const HoaDonDatHangReducersSaga = (state = initialState, action) => {
  switch (action.type) {

    case "GET_ALL_HOA_DON_DAT_HANG_USER_SAGA": {
      return { ...state, listHoaDonDatHang: action.data }
    }
    // case "GET_ALL_SAN_PHAM_USER_SAGA": {
    //     return { ...state, listSanPhamUser: action.data }
    // }
    // case "ADD_SAN_PHAM_CART": {
    //     const newSanPhamCart = [...state.sanPhamCart];
    //     let index = newSanPhamCart.findIndex(item => item.maSanPham === action.data.maSanPham);
    //     if (index !== -1) {
    //         newSanPhamCart[index] = { ...newSanPhamCart[index], soLuong: Number(newSanPhamCart[index].soLuong) + 1 }
    //     } else {
    //         newSanPhamCart.push(action.data)
    //     }
    //     console.log('newSanPhamCart: ', newSanPhamCart);
    //     return { ...state, sanPhamCart: newSanPhamCart }

    // }
    default:
      return { ...state }

  }
}
export default HoaDonDatHangReducersSaga;