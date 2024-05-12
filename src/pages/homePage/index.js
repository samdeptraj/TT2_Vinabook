import React, { memo, useEffect, useState } from "react";
import MainBanner from "../layouts/Main/MainBanner";
import HotSaleWeek from "../layouts/Main/mainRight/HotSaleWeek";
import HotSaleBook from "../layouts/Main/mainLeft/HotSaleBook";
import GoodBook from "../layouts/Main/mainLeft/GoodBook";
import LiteratureBook from "../layouts/Main/mainLeft/LiteratureBook";
import EconomicBook from "../layouts/Main/mainLeft/EconomicBook";
import BannerQc from "../layouts/Main/mainLeft/BannerQc";
import AuthorBook from "../layouts/Main/mainLeft/AuthorBook";
import MagazineBook from "../layouts/Main/mainLeft/MagazineBook";
import SkillBook from "../layouts/Main/mainLeft/SkillBook";
import LearnChildBook from "../layouts/Main/mainLeft/LearnChildBook";
import NewBookGood from "../layouts/Main/mainLeft/NewBookGood";
import SachMoiNhap from "../layouts/Main/mainRight/SachMoiNhap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
function HomePage() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch({
      type: "GET_ALL_SAN_PHAM_USER"
    })
  }, [location]);
  
  useEffect(()=>{
    dispatch({
      type: "CLEAR_SORT_SP"
    })
  },[])
  return (
    <div>
      <MainBanner />
      <div className="container mt-3">
        <div className="row">
          <div className="col-9">
            <NewBookGood />
            <HotSaleBook />
            <GoodBook />
            <LiteratureBook />
            <EconomicBook />
            <AuthorBook />
            <MagazineBook />
            <LearnChildBook />
            <SkillBook />
          </div>
          <div className="col-3">
            <HotSaleWeek />
            <SachMoiNhap />
            <BannerQc />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(HomePage);
