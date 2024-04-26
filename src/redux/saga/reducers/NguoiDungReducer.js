import { SIGNUP_ERROR_EMAIL, SIGNUP_SAGA } from "../types/NguoiDung.types";

const initialState = {
    notifySignUp: '',
    notifyErrorEmail: '',
    notifyErrorLogin: '',
    listUser: [],
    user: {},
    notifyUpdateUserSuccess: ""
}

const NguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SAGA:
            {
                return { ...state, notifySignUp: action.data.message }
            }
        case SIGNUP_ERROR_EMAIL:
            {
                return { ...state, notifyErrorEmail: action.data }
            }
        case "ERROR_LOGIN": {
            return { ...state, notifyErrorLogin: action.data }
        }
        case "GET_ALL_USER_SAGA": {

            return { ...state, listUser: action.data }
        }
        case "UPDATE_USER_RDC": {

            return { ...state, user: action.data }
        }
        case "NOTIFY_UPDATE_SAGA": {
            return { ...state, notifyUpdateUser: action.data }
        }
        default:
            return { ...state }

    }
}
export default NguoiDungReducer;