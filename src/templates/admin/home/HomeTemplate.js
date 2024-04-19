
//<HomeTemplate path='/detail/:id' Component={Detail} />
//<LoginTemplate path='/logintemplate' Component={LoginJira} />

import { Route } from "react-router";
import Home from "../../../components/admin/home/Home";
import React from "react";

export const HomeTemplate = props => {
    const { Component, ...restParam } = props;
    return (
        <Route {...restParam} render={propsRoute => (
            <Component {...propsRoute} />
        )} />
    );
};

