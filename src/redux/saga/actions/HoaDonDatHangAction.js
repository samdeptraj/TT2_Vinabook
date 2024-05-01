import { call, put, takeEvery } from "redux-saga/effects";
import { sanPhamServices } from "../../../services/SanPhamServices";
import { CREATE_SAN_PHAM, CREATE_SAN_PHAM_SAGA, GET_ALL_SAN_PHAM, GET_ALL_SAN_PHAM_SAGA } from "../types/sanPham.types";
import { gioHangServices } from "../../../services/GioHangServices";
import { hoaDonDatHangServices } from "../../../services/HoaDonDatHangServices";

function* getAllHoaDonDatHangAPI(action) {
    console.log('action: ', action);
    let result = yield call(() => hoaDonDatHangServices.getAllHoaDonDatHangAPIService());
    console.log('result: ', result);
    const {data} = result;
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
    console.log('action: ', action);
    try {
        let result = yield call(() => hoaDonDatHangServices.createHoaDonDatHangAPIService(action.data));
        console.log('result: ', result);
        // if (result.status === 201) {
        //     yield put({
        //         type: GET_ALL_SAN_PHAM
        //     })
        // }
    } catch (error) {
        console.log('error: ', error);
    }
}
export function* actionCreateHoaDonDatHangAPI() {
    yield takeEvery("ADD_HOA_DON_DAT_HANG_USER", createHoaDonDatHangAPI)
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
    const { id,maNguoiDung } = action.data;
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