import { GET_ALL_SAN_PHAM_SAGA } from "../types/sanPham.types";

const initialState = {
    listDanhMuc: [],
    notify: "",
    danhMucUpdate: {}
}

const DanhMucReducerSaga = (state = initialState, action) => {
    switch (action.type) {

        case "GET_ALL_DANH_MUC_SAGA": {
            return { ...state, listDanhMuc: action.data }
        }
        case "UPDATE_DANH_MUC_RDC": {
            return { ...state, danhMucUpdate: action.data }
        }
        default:
            return { ...state }

    }
}
export default DanhMucReducerSaga;