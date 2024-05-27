import { call, put, takeEvery } from "redux-saga/effects";
import { sanPhamServices } from "../../../services/SanPhamServices";
import { GET_ALL_SAN_PHAM } from "../types/sanPham.types";
import { gioHangServices } from "../../../services/GioHangServices";
import { hoaDonDatHangServices } from "../../../services/HoaDonDatHangServices";

function* getAllHoaDonDatHangAPI(action) {
    let result = yield call(() => hoaDonDatHangServices.getAllHoaDonDatHangAPIService());
    const { data } = result;
    yield put({
        type: "GET_ALL_HOA_DON_DAT_HANG_USER_SAGA",
        data
    })
}
export function* actionGetAllHoaDonDatHangAPI() {
    yield takeEvery("GET_ALL_HOA_DON_DAT_HANG_USER", getAllHoaDonDatHangAPI);
}
// create
function* createHoaDonDatHangAPI(action) {
    try {
        yield call(() => hoaDonDatHangServices.createHoaDonDatHangAPIService(action.data));
        yield put({
            type: "GET_ALL_HOA_DON_DAT_HANG_USER"
        }
        )
    } catch (error) {
        console.log('error: ', error);
    }
}
export function* actionCreateHoaDonDatHangAPI() {
    yield takeEvery("ADD_HOA_DON_DAT_HANG_USER", createHoaDonDatHangAPI)
}

