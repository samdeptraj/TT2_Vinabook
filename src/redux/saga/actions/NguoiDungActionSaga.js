import { call, put, takeEvery } from "redux-saga/effects";
import { LOGIN, SIGNUP, SIGNUP_ERROR_EMAIL, SIGNUP_SAGA } from "../types/NguoiDung.types";
import { nguoiDungServices } from "../../../services/NguoiDungServices";

function redirectToHome() {
    window.location.href = '/';
}
function* loginAPI(action) {
    try {
        const result = yield call(() => nguoiDungServices.login(action.data));
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
    console.log('action: ', action);
    try {
        const value = yield call(() => nguoiDungServices.signup(action.data));
        console.log('value: ', value);
        yield put({
            type: SIGNUP_SAGA,
            data: { message: "Đăng ký tài khoản thành công!" }
        })
        yield put({
            type: "GET_ALL_USER"
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

// get user 
function* getAllUserAPI(action) {
    try {
        const result = yield call(() => nguoiDungServices.getAllUserAPIService());
        const { data } = result;
        yield put({
            type: "GET_ALL_USER_SAGA",
            data
        })
    } catch (error) {
        console.error('Error during login:', error);
    }
}

export function* actionTheoDoiGetAllUserAPI() {
    yield takeEvery("GET_ALL_USER", getAllUserAPI)
}
// update user
function* updateUserAPI(action) {
    console.log('actionewe: ', action);
    const { values, id } = action.data;
    try {
        const result = yield call(() => nguoiDungServices.updateUserAPIService(values, id));
        console.log('result: ', result);

        if (result.status === 200) {
            yield put({
                type: "NOTIFY_UPDATE_SAGA",
                data: result.data
            })
        }
        yield put({
            type: "GET_ALL_USER"
        })
    } catch (error) {
        console.error('Error during login:', error);

    }
}

export function* actionTheoDoiUpdateUserAPI() {
    yield takeEvery("UPDATE_USER", updateUserAPI)
}
// delete user
function* deleteUserAPI(action) {
    console.log('action userdel: ', action);
    const id = action.data;
    console.log('id: ', id);
    try {
        const result = yield call(() => nguoiDungServices.deleteUserAPIService(id));
        console.log('result: ', result);

        if (result.status === 200) {
            yield put({
                type: "NOTIFY_UPDATE_SAGA",
                data: result.data
            })
        }
        yield put({
            type: "GET_ALL_USER"
        })
    } catch (error) {
        console.error('Error during login:', error);

    }
}

export function* actionTheoDoiDeleteUserAPI() {
    yield takeEvery("DELETE_USER", deleteUserAPI)
}
