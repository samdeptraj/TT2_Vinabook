import { Route, Routes } from "react-router-dom";

import ScrollTop from "../components/ScrollTop";
import MasterLayout from "../pages/layouts/masterLayouts";
import { userRouter } from "./UserRouter";
import { adminRouter } from "./AdminRouter";

const renderUserRouter = () => {
  return (
    <MasterLayout>
      <ScrollTop />
      <Routes>
        {userRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};
const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
