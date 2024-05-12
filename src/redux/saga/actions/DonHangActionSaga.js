import { call, delay, put, takeEvery } from "redux-saga/effects";
import { sanPhamServices } from "../../../services/SanPhamServices";
import { GET_ALL_SAN_PHAM } from "../types/sanPham.types";
import { gioHangServices } from "../../../services/GioHangServices";
import { donHangServices } from "../../../services/DonHangServices";

function* getAllDonHangAPI(action) {
    let result = yield call(() => donHangServices.getAllDonHangAPIService());
    yield put({
        type: "GET_ALL_DON_HANG_SAGA",
        data: result.data
    })
}
export function* actionGetAllDonHangAPI() {
    yield takeEvery("GET_ALL_DON_HANG", getAllDonHangAPI);
}
// get my don
function* getAllDonHangCuaToiAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    let result = yield call(() => donHangServices.getAllDonHangCuaToiAPIService(action.data));
    const { data } = result;
    yield put({
        type: "GET_ALL_DON_HANG_CUA_TOI_SAGA",
        data
    })
    yield put({
        type: "HIDE_LOADING"
    })
}
export function* actionGetAllDonHangCuaToiAPI() {
    yield takeEvery("GET_ALL_DON_HANG_CUA_TOI", getAllDonHangCuaToiAPI);
}
// create
function* createDonHangAPI(action) {
    try {
        let result = yield call(() => donHangServices.createDonHangAPIService(action.data));
    } catch (error) {
        console.log('error: ', error);
    }
}
export function* actionCreateDonHangAPI() {
    yield takeEvery("ADD_DON_HANG", createDonHangAPI)
}

// delete
function* deleteSanPhamAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    try {
        let result = yield call(() => sanPhamServices.deleteSanPhamAPIService(action.data));
        if (result.status === 200) {
            yield put({
                type: GET_ALL_SAN_PHAM
            })
        }
    } catch (error) {
        console.log('error: ', error);

    }
    yield put({
        type: "HIDE_LOADING"
    })
}
export function* actionDeleteSanPhamAPI() {
    yield takeEvery("DELETE_SANPHAM", deleteSanPhamAPI)
}
// update
function* updateDonHangAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    const { maDonHang, status } = action.data;
    try {
        yield call(() => donHangServices.updateDonHangAPIService(maDonHang, status));
        yield put({
            type: "GET_ALL_DON_HANG",
        })
    } catch (error) {
        console.log('error: ', error);
    }
    yield put({
        type: "HIDE_LOADING"
    })
}
export function* actionUpdateDonHangAPI() {
    yield takeEvery("UPDATE_DON_HANG", updateDonHangAPI)
}
// delete
function* deleteSpGioHangAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    const { id, maNguoiDung } = action.data;
    try {
        yield call(() => gioHangServices.deleteSanPhamAPIService(id));
        yield put({
            type: "GET_ALL_SP_GIO_HANG",
            data: maNguoiDung
        })
    } catch (error) {
        console.log('error: ', error);
    }
    yield put({
        type: "HIDE_LOADING"
    })
}
export function* actionDeleteSpGioHangAPI() {
    yield takeEvery("DELETE_SAN_PHAM_GIO_HANG_USER", deleteSpGioHangAPI)
}