import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/homePage";
import { ROUTERS} from "../utils/router";
import ProfilePage from "../pages/profilePage";
import SignUp from "../pages/signupPage/SignUp";
import Cart from "../pages/cartPage/Cart";
import News from "../pages/news/News";
import NewsPage from "../pages/news/NewsPage";
import Category from "../pages/categoryPage/Category";
import DetailProduct from "../pages/layouts/Main/mainLeft/DetailProduct";
import PageNotFound from "../components/PageNotFound";
export const userRouter = [
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
    {
        path: ROUTERS.NOTFOUND,
        component: <PageNotFound />
    }
];