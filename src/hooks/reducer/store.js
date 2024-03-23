import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsReducer";
const store = configureStore({
  reducer: {
    ProductsReducer,
  },
});
export default store;
