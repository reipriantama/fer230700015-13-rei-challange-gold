import React from "react";
import { Outlet } from "react-router";

import Header from "../../components/Header/Header";
import HeaderTitle from "../../components/Header/HeaderTitle";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";

const Base = () => {
  const loc = useLocation();
  const isHeaderTitleShown =
    loc.pathname.includes("detail-page") || loc.pathname.includes("result-page");

  return (
    <>
      <Header>{isHeaderTitleShown ? <></> : <HeaderTitle />}</Header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Base;
