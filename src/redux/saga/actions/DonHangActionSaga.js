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
function* deleteDonHangAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    try {
        let { data, status } = yield call(() => donHangServices.deleteDonHangAPIService(action.data));
        if (status === 200) {
            yield put({
                type: "GET_ALL_DON_HANG"
            })
            yield put({
                type: "NOTIFY_CRUD",
                data: {
                    type: "success",
                    messageLog: data.message
                }
            })
        }
    } catch (error) {
        console.log('error: ', error);
    }
    yield put({
        type: "HIDE_LOADING"
    })
}
export function* actionDeleteDonHangAPI() {
    yield takeEvery("DELETE_DON_HANG", deleteDonHangAPI)
}
// update
function* updateDonHangAPI(action) {
    console.log('action: ', action);
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    try {
        const { data, status } = yield call(() => donHangServices.updateDonHangAPIService(action.data));
        if (status === 200) {
            yield put({
                type: "GET_ALL_DON_HANG",
            })
            yield put({
                type: "NOTIFY_CRUD",
                data: {
                    type: "success",
                    messageLog: data.message
                }
            })
            yield put({
                type: "EDIT_DON_HANG_RDC",
                data: false
            })
        }
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