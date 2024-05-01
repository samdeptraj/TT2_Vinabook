import { call, put, takeEvery } from "redux-saga/effects";
import { sanPhamServices } from "../../../services/SanPhamServices";
import { GET_ALL_SAN_PHAM } from "../types/sanPham.types";
import { gioHangServices } from "../../../services/GioHangServices";
import { donHangServices } from "../../../services/DonHangServices";

function* getAllSpGioHangAPI(action) {
    let result = yield call(() => gioHangServices.getAllSpGioHangAPIService(action.data));
    const { data } = result;
    yield put({
        type: "GET_ALL_SP_GIO_HANG_SAGA",
        data
    })
}
export function* actionGetAllSpGioHangAPI() {
    yield takeEvery("GET_ALL_SP_GIO_HANG", getAllSpGioHangAPI);
}
// get my don
function* getAllDonHangCuaToiAPI(action) {
    console.log('actionww: ', action);
    let result = yield call(() => donHangServices.getAllDonHangCuaToiAPIService(action.data));
    const { data } = result;
    yield put({
        type: "GET_ALL_DON_HANG_CUA_TOI_SAGA",
        data
    })
}
export function* actionGetAllDonHangCuaToiAPI() {
    yield takeEvery("GET_ALL_DON_HANG_CUA_TOI", getAllDonHangCuaToiAPI);
}
// create
function* createDonHangAPI(action) {
    try {
        let result = yield call(() => donHangServices.createDonHangAPIService(action.data));
        console.log('result: ', result);
    } catch (error) {
        console.log('error: ', error);
    }
}
export function* actionCreateDonHangAPI() {
    yield takeEvery("ADD_DON_HANG", createDonHangAPI)
}

// delete
function* deleteSanPhamAPI(action) {
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
}
export function* actionDeleteSanPhamAPI() {
    yield takeEvery("DELETE_SANPHAM", deleteSanPhamAPI)
}
// update
function* updateSpGioHangAPI(action) {
    const { maNguoiDung } = action.data
    try {
        yield call(() => gioHangServices.updateSpGioHangAPIService(action.data));
        yield put({
            type: "GET_ALL_SP_GIO_HANG",
            data: maNguoiDung
        })
    } catch (error) {
        console.log('error: ', error);

    }
}
export function* actionUpdateSpGioHangAPI() {
    yield takeEvery("UPDATE_SO_LUONG_SAN_PHAM", updateSpGioHangAPI)
}
// delete
function* deleteSpGioHangAPI(action) {
    console.log('action: ', action);
    const { id, maNguoiDung } = action.data;
    try {
        const result = yield call(() => gioHangServices.deleteSanPhamAPIService(id));
        console.log('result: ', result);
        yield put({
            type: "GET_ALL_SP_GIO_HANG",
            data: maNguoiDung
        })
    } catch (error) {
        console.log('error: ', error);

    }
}
export function* actionDeleteSpGioHangAPI() {
    yield takeEvery("DELETE_SAN_PHAM_GIO_HANG_USER", deleteSpGioHangAPI)
}