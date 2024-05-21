const initialState = {
    infoAlert: {},
    notifyData: {},
}

const NotifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALERT_CRUD": {
            console.log('action.data: ', action.data);
            return { ...state, infoAlert: action.data }
        }
        case "CANCEL_ALERT_CRUD": {
            return { ...state, infoAlert: { ...state.infoAlert, openAlert: false } }
        }
        case "NOTIFY_CRUD": {
            return { ...state, notifyData: action.data }
        }
        case "CLEAR_NOTIFY_CRUD": {
            return { ...state, notifyData: {} }
        }
        default:
            return { ...state }

    }
}
export default NotifyReducer;

