import { SIGNUP_ERROR_EMAIL, SIGNUP_SAGA } from "../types/NguoiDung.types";

const initialState = {
    notifySignUp: '',
    notifyErrorEmail: '',
    notifyErrorLogin: ''
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
        default:
            return { ...state }

    }
}
export default NguoiDungReducer;