
const initialState = {
    listChiTietSP: [],
    spChiTiet: {},
    notify: "",
    sanPhamCart: [],
    sanPhamDetail: {}
}

const ChiTietSPReducerSaga = (state = initialState, action) => {
    switch (action.type) {

        case "GET_ALL_CHI_TIET_SP_SAGA": {
            return { ...state, listChiTietSP: action.data }
        }
        case "UPDATE_CHI_TIET_SP_RDC": {
            return { ...state, spChiTiet: action.data }
        }
        case "NOTIFY": {
            return { ...state, notify: action.data }
        }
        case "NULL_NOTIFY": {
            return { ...state, notify: "" }
        }
        case "SAN_PHAM_GET_DETAIL_USER_SAGA": {

            return { ...state, sanPhamDetail: action.data }
        }
        default:
            return { ...state }

    }
}
export default ChiTietSPReducerSaga;
