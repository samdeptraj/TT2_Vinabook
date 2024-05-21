import { call, delay, put, takeEvery } from "redux-saga/effects";
import ChiTietSPServices, { chiTietSPServices } from "../../../services/ChiTietSPServices";

// get detail admin
function* getAllChiTietSPAPI(action) {
    let result = yield call(() => chiTietSPServices.getAllChiTietSpAPIService());
    const { data } = result;
    yield put({
        type: "GET_ALL_CHI_TIET_SP_SAGA",
        data
    })
}
export function* actionGetAllChiTietSPAPI() {
    yield takeEvery("GET_ALL_CHI_TIET_SP", getAllChiTietSPAPI);
}
// get detail user
function* getChiTietSPAPIUser(action) {
    let result = yield call(() => chiTietSPServices.getChiTietSpAPIServiceUser(action.data));
    const { data } = result;
    console.log('data: ', data);
    yield put({
        type: "SAN_PHAM_GET_DETAIL_USER_SAGA",
        data
    })
}
export function* actionGetChiTietSPAPIUser() {
    yield takeEvery("SAN_PHAM_GET_DETAIL_USER", getChiTietSPAPIUser);
}
// get detail one admin
function* getOneChiTietSPAPI(action) {
    let result = yield call(() => chiTietSPServices.getOneChiTietSpAPIService(action.data));
    const { data } = result;
    yield put({
        type: "SAN_PHAM_GET_ONE_DETAIL_RDC",
        data
    })
}
export function* actionGetOneChiTietSPAPI() {
    yield takeEvery("SAN_PHAM_GET_ONE_DETAIL", getOneChiTietSPAPI);
}
// create
function* createChiTietSPAPI(action) {
    console.log('action: ', action);
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    try {
        let { data, status } = yield call(() => chiTietSPServices.createChiTietSpAPIService(action.data));
        if (status === 201) {
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
export function* actionCreateChiTietSPAPI() {
    yield takeEvery("ADD_CHI_TIET_SP", createChiTietSPAPI)
}
// delete
function* deleteChiTietSPAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    try {
        let result = yield call(() => chiTietSPServices.deleteChiTietSpAPIService(action.data));
        if (result.status === 200) {
            yield put({
                type: "GET_ALL_CHI_TIET_SP"
            })
        }
    } catch (error) {
        console.log('error: ', error);

    }
    yield put({
        type: "HIDE_LOADING"
    })
}
export function* actionDeleteChiTietSPAPI() {
    yield takeEvery("DELETE_CHI_TIET_SP", deleteChiTietSPAPI)
}
// update
function* updateChiTietSPAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    const { values, id } = action.data;
    try {
        let { data, status } = yield call(() => chiTietSPServices.updateChiTietSpAPIService(values, id));
        console.log('data, status: ', data, status);
        if (status === 200) {
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
export function* actionUpdateChiTietSPAPI() {
    yield takeEvery("UPDATE_CHI_TIET_SP", updateChiTietSPAPI)
}