import { GET_ALL_SAN_PHAM_SAGA } from "../types/sanPham.types";

const initialState = {
    listDanhMuc: [],
    notify: "",
    danhMucUpdate: {},
    listSanPhamDanhMuc: [],
    listSpSapXep: [],
    onModalUpdate: false,
    onModalAdd: false
}

const DanhMucReducerSaga = (state = initialState, action) => {
    switch (action.type) {

        case "GET_ALL_DANH_MUC_SAGA": {
            return { ...state, listDanhMuc: action.data }
        }
        case "UPDATE_DANH_MUC_RDC": {
            return { ...state, danhMucUpdate: action.data }
        }
        case "GET_ALL_SP_DANH_MUC": {
            return { ...state, listSanPhamDanhMuc: action.data }
        }
        case "SAP_XEP_SP_DANH_MUC_SAGA": {
            return { ...state, listSpSapXep: action.data }
        }
        case "CLEAR_SORT_SP": {
            return { ...state, listSpSapXep: [] }
        }
        case "MODAL_UPDATE_DANH_MUC": {
            return { ...state, onModalUpdate: action.data }
        }
        case "MODAL_ADD_DANH_MUC": {
            return { ...state, onModalAdd: action.data }
        }
        default:
            return { ...state }

    }
}
export default DanhMucReducerSaga;