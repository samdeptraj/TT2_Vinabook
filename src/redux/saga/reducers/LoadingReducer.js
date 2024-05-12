const initialState = {
    loading: false
}
const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {

        case "DISPLAY_LOADING": {
            return { ...state, loading: true }
        }
        case "HIDE_LOADING": {
            return { ...state, loading: false }
        }
        default:
            return { ...state }

    }
}
export default LoadingReducer;