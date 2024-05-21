import { GET_ALL_SAN_PHAM_SAGA } from "../types/sanPham.types";

const initialState = {
    listSanPham: [],
    listSanPhamYetDetail: [],
    listSanPhamUser: [],
    listDonHangCuaToi: [],
    listDonHang: [],
    donHang: {},
    onEditSanPham: false,
    onEditDonHang: false,
    isNotViewDetail: true,
}

const DonHangReducerSaga = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_SAN_PHAM_SAGA: {
            return { ...state, listSanPham: action.data }
        }
        case "GET_ALL_SAN_PHAM_USER_SAGA": {
            return { ...state, listSanPhamUser: action.data }
        }
        case "TANG_GIAM_SO_LUONG_SP": {
            let sanPhamTangGiam = [...state.sanPhamCart];
            let index = sanPhamTangGiam.findIndex(item => item.maSanPham === action.data.id);
            if (index !== -1) {
                let newSoLuong = Number(sanPhamTangGiam[index].soLuong) + (action.data.type ? 1 : (-1));
                if (newSoLuong < 0) {
                    newSoLuong = 0;
                }
                sanPhamTangGiam[index] = {
                    ...sanPhamTangGiam[index],
                    soLuong: newSoLuong
                }
            }
            return { ...state, sanPhamCart: sanPhamTangGiam }

        }
        case "GET_ALL_DON_HANG_CUA_TOI_SAGA": {
            console.log('action: ', action);
            return { ...state, listDonHangCuaToi: action.data }
        }
        case "GET_ALL_DON_HANG_SAGA": {
            return { ...state, listDonHang: action.data }
        }
        case "UPDATE_DON_HANG_RDC": {
            return { ...state, donHang: action.data }
        }
        case "EDIT_SAN_PHAM_RDC": {
            return { ...state, onEditSanPham: action.data }
        }
        case "EDIT_DON_HANG_RDC": {
            return { ...state, onEditDonHang: action.data }
        }
        case "GET_SAN_PHAM_YET_DETAIL_RDC": {
            console.log(action);
            return { ...state, listSanPhamYetDetail: action.data }
        }
        default:
            return { ...state }

    }
}
export default DonHangReducerSaga;