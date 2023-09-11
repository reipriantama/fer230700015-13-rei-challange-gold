import React, { useEffect } from "react";
import './LandingPage.css'

import OurService from "../../components/OurService";
import WhyUs from "../../components/WhyUs";
import Testimonial from "../../components/Testimonial";
import Banner from "../../components/Banner";
import Faq from "../../components/Faq";
import { loginAdmin } from "../../api";

const LandingPage = () => {
  useEffect(() => {
    const getToken = async () => {
      try {
        const login = await loginAdmin({
          email: "admin@bcr.io",
          password: "123456",
        });
  
        localStorage.setItem("token", login.data.access_token);
  
        console.log(localStorage.getItem("token"));
      } catch (err) {
        console.log(err);
      }
    };
    getToken()
  },[])
  
  return (
    <div>
      <OurService />
      <WhyUs />
      <Testimonial />
      <Banner />
      <Faq />
    </div>
  );
};

export default LandingPage;
