import { call, delay, put, takeEvery } from "redux-saga/effects";
import { sanPhamServices } from "../../../services/SanPhamServices";
import { CREATE_SAN_PHAM, GET_ALL_SAN_PHAM, GET_ALL_SAN_PHAM_SAGA } from "../types/sanPham.types";

function* getAllSanPhamAPI(action) {
    let result = yield call(() => sanPhamServices.getAllSanPhamAPIService());
    const { data } = result;
    yield put({
        type: GET_ALL_SAN_PHAM_SAGA,
        data
    })
}
export function* actionGetAllSanPhamAPI() {
    yield takeEvery(GET_ALL_SAN_PHAM, getAllSanPhamAPI);
}
// get user
function* getAllSanPhamAPIUser(action) {
    let result = null;
    if (action.data) {
        yield put({
            type: "DISPLAY_LOADING"
        })
        yield delay(700);
        result = yield call(() => sanPhamServices.getAllSanPhamAPIServiceUser(action.data));
    } else {
        result = yield call(() => sanPhamServices.getAllSanPhamAPIServiceUser());
    }
    const { data } = result;
    yield put({
        type: "GET_ALL_SAN_PHAM_USER_SAGA",
        data
    })
    yield put({
        type: "HIDE_LOADING"
    })
}
export function* actionGetAllSanPhamAPIUser() {
    yield takeEvery("GET_ALL_SAN_PHAM_USER", getAllSanPhamAPIUser);
}
function* getSanPhamYetDetailAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    const { data, status } = yield call(() => sanPhamServices.getSanPhamYetDetailAPIService());
    if (status === 200) {
        yield put({
            type: "GET_SAN_PHAM_YET_DETAIL_RDC",
            data
        })
    }
    yield put({
        type: "HIDE_LOADING"
    })
}
export function* actionGetSanPhamYetDetailAPI() {
    yield takeEvery("GET_SAN_PHAM_YET_DETAIL", getSanPhamYetDetailAPI);
}
// create
function* createSanPhamAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    try {
        let { data, status } = yield call(() => sanPhamServices.createSanPhamAPIService(action.data));
        console.log(' data, status: ', data, status);
        if (status === 201) {
            yield put({
                type: GET_ALL_SAN_PHAM
            })
            yield put({
                type: "ALERT_CRUD",
                data: {
                    openAlert: true,
                    type: "success",
                    message: data.message
                }
            })
        }
    } catch (error) {
        console.log('error: ', error);
        const { data, status } = error.response;
        if (status === 404) {
            yield put({
                type: "ALERT_CRUD",
                data: {
                    openAlert: true,
                    type: "error",
                    message: data.message
                }
            })
        }

    } finally {
        yield put({
            type: "HIDE_LOADING"
        })
    }
}

export function* actionCreateSanPhamAPI() {
    yield takeEvery(CREATE_SAN_PHAM, createSanPhamAPI)
}
// delete
function* deleteSanPhamAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    try {
        let { data, status } = yield call(() => sanPhamServices.deleteSanPhamAPIService(action.data));
        if (status === 200) {
            yield put({
                type: GET_ALL_SAN_PHAM
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
export function* actionDeleteSanPhamAPI() {
    yield takeEvery("DELETE_SAN_PHAM", deleteSanPhamAPI)
}
// update
function* updateSanPhamAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    const { formData, id } = action.data
    try {
        let { data, status } = yield call(() => sanPhamServices.updateSanPhamAPIService(formData, id));
        if (status === 200) {
            yield put({
                type: GET_ALL_SAN_PHAM
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
export function* actionUpdateSanPhamAPI() {
    yield takeEvery("UPDATE_SANPHAM", updateSanPhamAPI)
}