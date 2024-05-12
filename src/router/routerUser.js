import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import MasterLayout from "../pages/layouts/masterLayouts";
import { ManageRoute } from "./ManageRoute";
import LoadingComponent from "../components/globalSetting/LoadingComponent/LoadingComponent";

const renderUserRouter = () => {
  return (
    <Routes>
      {ManageRoute.map((item, key) => {
        const Scroll = <ScrollTop />;
        const Layout = item.isShowLayout ? MasterLayout : null;
        const Component = item.component;
        return (
          <Route key={key} path={item.path} element={
            Layout ? (
              <Layout>
                {Scroll}
                {Component}
              </Layout>
            ) : (
              <>
                {Component}
              </>
            )
          } />
        );
      })}
    </Routes>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
