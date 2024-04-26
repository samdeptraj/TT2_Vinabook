import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'; // Fixed import statement
import { rootSaga } from './saga/rootSaga';
import ProductsReducer from './reducer/ProductsReducer';
import DonHangReducerSaga from './saga/reducers/DonHangReducerSaga';
import NguoiDungReducer from './saga/reducers/NguoiDungReducer';
import DanhMucReducerSaga from './saga/reducers/DanhMucReducerSaga';

const sagaMiddleware = createSagaMiddleware();
// Combine your reducers
const rootReducer = combineReducers({
    // your reducers
    ProductsReducer,
    DonHangReducerSaga,
    NguoiDungReducer,
    DanhMucReducerSaga
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
