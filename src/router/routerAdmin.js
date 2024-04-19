import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { adminRouter } from './AdminRouter';

const renderAdminRouter = () => {
    return (
        <Routes>
            {adminRouter.map((item, index) => (
                <Route key={index} path={item.path} element={item.component} />
            ))}
        </Routes>
    )

}
const RouterCustomAdmin = () => {
    return renderAdminRouter();
};
export default RouterCustomAdmin;
