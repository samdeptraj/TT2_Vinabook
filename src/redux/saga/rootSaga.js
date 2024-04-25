import { all, call } from 'redux-saga/effects';
import { actionCreateSanPhamAPI, actionGetAllSanPhamAPI, actionUploadImageSanPhamAPI } from './actions/SanPhamActionSaga';
import { actionTheoDoiLoginAPI, actionTheoDoiSignUpAPI } from './actions/NguoiDungActionSaga';

export function* rootSaga() {
    yield all([
        call(actionGetAllSanPhamAPI),
        call(actionCreateSanPhamAPI),
        call(actionUploadImageSanPhamAPI),

        call(actionTheoDoiLoginAPI),
        call(actionTheoDoiSignUpAPI),
    ])
}