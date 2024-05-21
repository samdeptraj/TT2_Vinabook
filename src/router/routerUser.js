import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import MasterLayout from "../pages/layouts/masterLayouts/MasterLayouts";
import { ManageRoute } from "./ManageRoute";
import Home from "../components/admin/home/Home";

const renderUserRouter = () => {
  return (
    <Routes>
      {ManageRoute.map((item, key) => {
        const Scroll = <ScrollTop />;
        const Layout = item.isShowLayout ? MasterLayout : null;
        const LayoutAdmin = item.isShowLayoutAdmin ? Home : null;
        const Component = item.component;
        return (
          <Route key={key} path={item.path} element={
            Layout ? (
              <Layout>
                {Scroll}
                {Component}
              </Layout>
            ) : LayoutAdmin ? (
              <LayoutAdmin>
                {Component}
              </LayoutAdmin>
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
