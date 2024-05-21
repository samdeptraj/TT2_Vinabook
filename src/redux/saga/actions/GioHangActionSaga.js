import { call, put, takeEvery } from "redux-saga/effects";
import { sanPhamServices } from "../../../services/SanPhamServices";
import { CREATE_SAN_PHAM, CREATE_SAN_PHAM_SAGA, GET_ALL_SAN_PHAM, GET_ALL_SAN_PHAM_SAGA } from "../types/sanPham.types";
import { gioHangServices } from "../../../services/GioHangServices";

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
// create
function* createSpGioHangAPI(action) {
    try {
        let result = yield call(() => gioHangServices.createSpGioHangAPIService(action.data));
        if (result.status === 201) {
            yield put({
                type: GET_ALL_SAN_PHAM
            })
        }
    } catch (error) {
        console.log('error: ', error);
    }
}
export function* actionCreateSpGioHangAPI() {
    yield takeEvery("ADD_SAN_PHAM_CART", createSpGioHangAPI)
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
    const { id, maNguoiDung } = action.data;
    try {
        const { data, status } = yield call(() => gioHangServices.deleteSanPhamGioHangAPIService(id));
        if (status === 200) {
            yield put({
                type: "GET_ALL_SP_GIO_HANG",
                data: maNguoiDung
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
}
export function* actionDeleteSpGioHangAPI() {
    yield takeEvery("DELETE_SAN_PHAM_GIO_HANG_USER", deleteSpGioHangAPI)
}