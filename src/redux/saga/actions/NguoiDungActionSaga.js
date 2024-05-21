import { call, delay, put, takeEvery } from "redux-saga/effects";
import { LOGIN, SIGNUP, SIGNUP_ERROR_EMAIL, SIGNUP_SAGA } from "../types/NguoiDung.types";
import { nguoiDungServices } from "../../../services/NguoiDungServices";

function redirectToHome() {
    window.location.href = '/';
}
function* loginAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
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
    yield put({
        type: "HIDE_LOADING"
    })
}
export function* actionTheoDoiLoginAPI() {
    yield takeEvery(LOGIN, loginAPI)
}
// signup 
function* signUpAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    try {
        const { data, status } = yield call(() => nguoiDungServices.signup(action.data));
        if (status === 201) {
            yield put({
                type: "GET_ALL_USER"
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
        console.error('Error during Signup:', error);
        yield put({
            type: "ALERT_CRUD",
            data: {
                openAlert: true,
                type: "error",
                message: error.response.data
            }
        })
    }
    yield put({
        type: "HIDE_LOADING"
    })
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
// get user 
function* getUserAPI(action) {
    try {
        const result = yield call(() => nguoiDungServices.getUserAPIService(action.data));
        const { data } = result;
        yield put({
            type: "GET_USER_SAGA",
            data
        })
    } catch (error) {
        console.error('Error during login:', error);
    }
}

export function* actionGetUserAPI() {
    yield takeEvery("GET_USER", getUserAPI)
}
// update user
function* updateUserAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    const { values, id } = action.data;
    try {
        const { data, status } = yield call(() => nguoiDungServices.updateUserAPIService(values, id));
        if (status === 200) {
            yield put({
                type: "NOTIFY_CRUD",
                data: {
                    type: "success",
                    messageLog: data.message
                }
            })
            yield put({
                type: "GET_ALL_USER"
            })
        }

    } catch (error) {
        console.error('Error during login:', error);
    }
    yield put({
        type: "HIDE_LOADING"
    })
}

export function* actionTheoDoiUpdateUserAPI() {
    yield takeEvery("UPDATE_USER", updateUserAPI)
}
// delete user
function* deleteUserAPI(action) {
    yield put({
        type: "DISPLAY_LOADING"
    })
    yield delay(700);
    const id = action.data;
    try {
        const { data, status } = yield call(() => nguoiDungServices.deleteUserAPIService(id));

        if (status === 200) {
            yield put({
                type: "NOTIFY_CRUD",
                data: {
                    type: "success",
                    messageLog: data.message
                }
            })
            yield put({
                type: "GET_ALL_USER"
            })
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
    yield put({
        type: "HIDE_LOADING"
    })
}

export function* actionTheoDoiDeleteUserAPI() {
    yield takeEvery("DELETE_USER", deleteUserAPI)
}
