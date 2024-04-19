import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import RouterCustom from "./router/routerUser";
import { Provider } from "react-redux";
import store from "./hooks/reducer/store";
import RouterCustomAdmin from "./router/routerAdmin";
import Home from "./components/admin/home/Home";
import HomePage from "./pages/homePage";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <RouterCustom />
        <RouterCustomAdmin />
      </Routes>

    </BrowserRouter>
  </Provider>
);
export default store;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
