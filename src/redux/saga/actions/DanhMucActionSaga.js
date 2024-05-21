import { call, delay, put, takeEvery } from "redux-saga/effects";
import { danhMucServices } from "../../../services/DanhMucServices";

function* getAllDanhMucAPI(action) {
    if (action.data) {
        let result = yield call(() => danhMucServices.getAllDanhMucAPIService(action.data))
        console.log('result: ', result);
        yield put({
            type: "GET_ALL_SP_DANH_MUC",
            data: result.data
        })
    } else {
        let result = yield call(() => danhMucServices.getAllDanhMucAPIService());
        const { data } = result;
        yield put({
            type: "GET_ALL_DANH_MUC_SAGA",
            data
        })
    }

}
export function* actionGetAllDanhMucAPI() {
    yield takeEvery("GET_ALL_DANH_MUC", getAllDanhMucAPI);
}
// create
function* createDanhMucAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    try {
        let { data, status } = yield call(() => danhMucServices.createDanhMucAPIService(action.data));
        if (status === 201) {
            yield put({
                type: "GET_ALL_DANH_MUC"
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
export function* actionCreateDanhMucAPI() {
    yield takeEvery("ADD_DANH_MUC", createDanhMucAPI)
}
// delete
function* deleteDanhMucAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    try {
        let { data, status } = yield call(() => danhMucServices.deleteDanhMucAPIService(action.data));
        if (status === 200) {
            yield put({
                type: "GET_ALL_DANH_MUC"
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
export function* actionDeleteDanhMucAPI() {
    yield takeEvery("DELETE_DANH_MUC", deleteDanhMucAPI)
}
// update
function* updateDanhMucAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    const { id, name } = action.data;
    try {
        let result = yield call(() => danhMucServices.updateDanhMucAPIService(name, id));
        console.log('result: ', result);
        if (result.status === 200) {
            yield put({
                type: "GET_ALL_DANH_MUC"
            })
        }
    } catch (error) {
        console.log('error: ', error);
    }
    yield put({
        type: "HIDE_LOADING"
    })
}
export function* actionUpdateDanhMucAPI() {
    yield takeEvery("UPDATE_DANH_MUC", updateDanhMucAPI)
}
// sap xep
function* sapXepSpDanhMucAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    yield console.log('action: ', action);
    const { loaiSapXep, tenDanhMuc } = action.data;
    try {
        let result = yield call(() => danhMucServices.sapXepSpDanhMucAPIService(loaiSapXep, tenDanhMuc));
        console.log('result: ', result);
        if (result.status === 200) {
            yield put({
                type: "SAP_XEP_SP_DANH_MUC_SAGA",
                data: result.data
            })
        }
    } catch (error) {
        console.log('error: ', error);
    }
    yield put({
        type: "HIDE_LOADING"
    })
}
export function* actionSapXepSpDanhMucAPI() {
    yield takeEvery("SAP_XEP_SP_DANH_MUC", sapXepSpDanhMucAPI)
}