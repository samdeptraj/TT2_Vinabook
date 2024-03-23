import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/layouts/masterLayouts";
import ProfilePage from "./pages/profilePage";
import SignUp from "./pages/signupPage/SignUp";
import Cart from "./pages/cartPage/Cart";
import News from "./pages/news/News";
import NewsPage from "./pages/news/NewsPage";
import Category from "./pages/categoryPage/Category";
import DetailProduct from "./pages/layouts/Main/mainLeft/DetailProduct";
import ScrollTop from "./components/ScrollTop";

const renderUserRouter = () => {
  const userRouter = [
    {
      path: ROUTERS.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.PROFILE,
      component: <ProfilePage />,
    },
    {
      path: ROUTERS.SIGNUP,
      component: <SignUp />,
    },
    {
      path: ROUTERS.DETAIL,
      component: <DetailProduct />,
    },
    {
      path: ROUTERS.CART,
      component: <Cart />,
    },
    {
      path: ROUTERS.NEWS,
      component: <News />,
      child: [
        {
          path: ROUTERS.NEWSPAGE,
          component: <NewsPage />,
        },
      ],
    },
    {
      path: ROUTERS.CATEGORY,
      component: <Category />,
    },
  ];
  return (
    <MasterLayout>
      <ScrollTop/>
      <Routes>
        {userRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component}></Route>
        ))}
      </Routes>
    </MasterLayout>
  );
};
const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
