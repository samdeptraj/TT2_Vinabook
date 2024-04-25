import { GET_ALL_SAN_PHAM_SAGA } from "../types/sanPham.types";

const initialState = {
    listSanPham: []
}

const DonHangReducerSaga = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_SAN_PHAM_SAGA:
            {
                return { ...state, listSanPham: action.data }

            }

        default:
            return { ...state }

    }
}
export default DonHangReducerSaga;