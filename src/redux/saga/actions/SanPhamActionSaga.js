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
// create
function* createSanPhamAPI(action) {
    yield console.log('action: ', action);
    try {
        let result = yield call(() => sanPhamServices.createSanPhamAPIService());

    } catch (error) {
        console.log('error: ', error);

    }
}
export function* actionCreateSanPhamAPI() {
    yield takeEvery(CREATE_SAN_PHAM, createSanPhamAPI)
}
// upload img
function* uploadImageSanPhamAPI(action) {
    yield console.log('action: ', action);
    try {
        let result = yield call(() => sanPhamServices.uploadImageSanPhamAPIService(action.data));

    } catch (error) {
        console.log('error: ', error);

    }
}
export function* actionUploadImageSanPhamAPI() {
    yield takeEvery("UPLOAD_IMAGE_SANPHAM", uploadImageSanPhamAPI)
}