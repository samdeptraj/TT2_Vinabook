import { call, put, takeEvery } from "redux-saga/effects";
import ChiTietSPServices, { chiTietSPServices } from "../../../services/ChiTietSPServices";

function* getAllChiTietSPAPI(action) {
    let result = yield call(() => chiTietSPServices.getAllChiTietSpAPIService());
    console.log('result: ', result);
    const { data } = result;
    yield put({
        type: "GET_ALL_CHI_TIET_SP_SAGA",
        data
    })
}
export function* actionGetAllChiTietSPAPI() {
    yield takeEvery("GET_ALL_CHI_TIET_SP", getAllChiTietSPAPI);
}
// get detail
function* getChiTietSPAPIUser(action) {
    console.log('action: ', action);
    let result = yield call(() => chiTietSPServices.getChiTietSpAPIServiceUser(action.data));
    yield console.log('result: ', result);
    const { data } = result;
    yield put({
        type: "SAN_PHAM_GET_DETAIL_USER_SAGA",
        data
    })
}
export function* actionGetChiTietSPAPIUser() {
    yield takeEvery("SAN_PHAM_GET_DETAIL_USER", getChiTietSPAPIUser);
}
// create
function* createChiTietSPAPI(action) {
    yield console.log('actionsadd: ', action);
    try {
        let result = yield call(() => chiTietSPServices.createChiTietSpAPIService(action.data.values));
        console.log('result: ', result);
        if (result.status === 201) {
            yield put({
                type: "GET_ALL_CHI_TIET_SP"
            })
            yield put({
                type: "NOTIFY",
                data: result.data
            })
        }
    } catch (error) {
        console.log('error: ', error);
    }
}
export function* actionCreateChiTietSPAPI() {
    yield takeEvery("ADD_CHI_TIET_SP", createChiTietSPAPI)
}
// delete
function* deleteChiTietSPAPI(action) {
    yield console.log('actions: ', action);
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
}
export function* actionDeleteChiTietSPAPI() {
    yield takeEvery("DELETE_CHI_TIET_SP", deleteChiTietSPAPI)
}
// update
function* updateChiTietSPAPI(action) {
    console.log('action: ', action);
    const { values, id } = action.data;
    try {
        let result = yield call(() => chiTietSPServices.updateChiTietSpAPIService(values, id));
        console.log('result: ', result);
        if (result.status === 200) {
            yield put({
                type: "NOTIFY",
                data: result.data
            })
        }
    } catch (error) {
        console.log('error: ', error);
    }
}
export function* actionUpdateChiTietSPAPI() {
    yield takeEvery("UPDATE_CHI_TIET_SP", updateChiTietSPAPI)
}