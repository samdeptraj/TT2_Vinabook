import { all, call } from 'redux-saga/effects';
import { actionCreateSanPhamAPI, actionDeleteSanPhamAPI, actionGetAllSanPhamAPI, actionUpdateSanPhamAPI, actionUploadImageSanPhamAPI } from './actions/SanPhamActionSaga';
import { actionTheoDoiDeleteUserAPI, actionTheoDoiGetAllUserAPI, actionTheoDoiLoginAPI, actionTheoDoiSignUpAPI, actionTheoDoiUpdateUserAPI } from './actions/NguoiDungActionSaga';
import { actionCreateDanhMucAPI, actionDeleteDanhMucAPI, actionGetAllDanhMucAPI, actionUpdateDanhMucAPI } from './actions/DanhMucActionSaga';

export function* rootSaga() {
    yield all([
        // sanpham
        call(actionGetAllSanPhamAPI),
        call(actionCreateSanPhamAPI),
        call(actionDeleteSanPhamAPI),
        call(actionUpdateSanPhamAPI),
        // nguoidung
        call(actionTheoDoiLoginAPI),
        call(actionTheoDoiSignUpAPI),
        call(actionTheoDoiGetAllUserAPI),
        call(actionTheoDoiUpdateUserAPI),
        call(actionTheoDoiDeleteUserAPI),

        // danhmuc
        call(actionGetAllDanhMucAPI),
        call(actionCreateDanhMucAPI),
        call(actionUpdateDanhMucAPI),
        call(actionDeleteDanhMucAPI)
    ])
}