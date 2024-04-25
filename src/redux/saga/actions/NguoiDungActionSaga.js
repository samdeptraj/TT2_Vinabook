import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USER, LOGIN, SIGNUP, SIGNUP_ERROR_EMAIL, SIGNUP_SAGA } from "../types/NguoiDung.types";
import { nguoiDungServices } from "../../../services/NguoiDungServices";

function redirectToHome() {
    window.location.href = '/';
}
function* loginAPI(action) {
    try {
        const result = yield call(() => nguoiDungServices.login(action.data));
        console.log('result: ', result);
        localStorage.setItem('token', result.data.token);
        if (result.data.token) {
            redirectToHome();
        }
    } catch (error) {
        yield put({
            type: "ERROR_LOGIN",
            data: error.response.data.message
        })
        console.error('Error during login:', error);
    }
}
export function* actionTheoDoiLoginAPI() {
    yield takeEvery(LOGIN, loginAPI)
}
// signup 
function* signUpAPI(action) {
    try {
        yield call(() => nguoiDungServices.signup(action.data));
        yield put({
            type: SIGNUP_SAGA,
            data: { message: "Đăng ký tài khoản thành công!" }
        })
        yield put({
            type: SIGNUP_ERROR_EMAIL,
            data: ""
        })
    } catch (error) {
        console.error('Error during login:', error);
        yield put({
            type: SIGNUP_ERROR_EMAIL,
            data: error.response.data
        })
    }
}

export function* actionTheoDoiSignUpAPI() {
    yield takeEvery(SIGNUP, signUpAPI)
}
