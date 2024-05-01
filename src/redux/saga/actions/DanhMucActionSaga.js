import { call, put, takeEvery } from "redux-saga/effects";
import { danhMucServices } from "../../../services/DanhMucServices";

function* getAllDanhMucAPI(action) {
    let result = yield call(() => danhMucServices.getAllDanhMucAPIService());
    console.log('result: ', result);
    const { data } = result;
    yield put({
        type: "GET_ALL_DANH_MUC_SAGA",
        data
    })
}
export function* actionGetAllDanhMucAPI() {
    yield takeEvery("GET_ALL_DANH_MUC", getAllDanhMucAPI);
}
// create
function* createDanhMucAPI(action) {
    yield console.log('actions: ', action);
    try {
        let result = yield call(() => danhMucServices.createDanhMucAPIService(action.data));
        console.log('result: ', result);
        if (result.status === 201) {
            yield put({
                type: "GET_ALL_DANH_MUC"
            })
        }
    } catch (error) {
        console.log('error: ', error);
    }
}
export function* actionCreateDanhMucAPI() {
    yield takeEvery("ADD_DANH_MUC", createDanhMucAPI)
}
// delete
function* deleteDanhMucAPI(action) {
    yield console.log('actions: ', action);
    try {
        let result = yield call(() => danhMucServices.deleteDanhMucAPIService(action.data));
        if (result.status === 200) {
            yield put({
                type: "GET_ALL_DANH_MUC"
            })
        }
    } catch (error) {
        console.log('error: ', error);

    }
}
export function* actionDeleteDanhMucAPI() {
    yield takeEvery("DELETE_DANH_MUC", deleteDanhMucAPI)
}
// update
function* updateDanhMucAPI(action) {
    console.log('action: ', action);
    const {id,name} = action.data;
    
    try {
        let result = yield call(() => danhMucServices.updateDanhMucAPIService(name,id));
        console.log('result: ', result);
        if (result.status === 200) {
            yield put({
                type: "GET_ALL_DANH_MUC"
            })
        }
    } catch (error) {
        console.log('error: ', error);
    }
}
export function* actionUpdateDanhMucAPI() {
    yield takeEvery("UPDATE_DANH_MUC", updateDanhMucAPI)
}