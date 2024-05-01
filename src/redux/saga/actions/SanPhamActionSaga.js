import { call, put, takeEvery } from "redux-saga/effects";
import { sanPhamServices } from "../../../services/SanPhamServices";
import { CREATE_SAN_PHAM, CREATE_SAN_PHAM_SAGA, GET_ALL_SAN_PHAM, GET_ALL_SAN_PHAM_SAGA } from "../types/sanPham.types";

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
    let result = yield call(() => sanPhamServices.getAllSanPhamAPIServiceUser());
    const { data } = result;
    yield put({
        type: "GET_ALL_SAN_PHAM_USER_SAGA",
        data
    })
}
export function* actionGetAllSanPhamAPIUser() {
    yield takeEvery("GET_ALL_SAN_PHAM_USER", getAllSanPhamAPIUser);
}
// create
function* createSanPhamAPI(action) {
    try {
        let result = yield call(() => sanPhamServices.createSanPhamAPIService(action.data));
        if (result.status === 201) {
            yield put({
                type: GET_ALL_SAN_PHAM
            })
        }
    } catch (error) {
        console.log('error: ', error);

    }
}
export function* actionCreateSanPhamAPI() {
    yield takeEvery(CREATE_SAN_PHAM, createSanPhamAPI)
}
// delete
function* deleteSanPhamAPI(action) {
    yield console.log('actions: ', action);
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
function* updateSanPhamAPI(action) {
    yield console.log('actions: ', action);
    const { formData, id } = action.data
    try {
        let result = yield call(() => sanPhamServices.updateSanPhamAPIService(formData, id));
        console.log('result: ', result);
        if (result.status === 200) {
            yield put({
                type: GET_ALL_SAN_PHAM
            })
        }
    } catch (error) {
        console.log('error: ', error);

    }
}
export function* actionUpdateSanPhamAPI() {
    yield takeEvery("UPDATE_SANPHAM", updateSanPhamAPI)
}