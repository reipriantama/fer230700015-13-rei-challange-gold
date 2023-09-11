import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";


const Header = (props) => {
  const { children } = props;
  const location = useLocation();
  const [isSideMenuShown, setIsSideMenuShown] = useState(false);
  const [showBCR] = useState(false);

  return (
    <div id="header">
      <div id="header-navigation-bar">
        <div>
          <div className="header-logo"></div>
        </div>
        <div>
          <div
            className={
              isSideMenuShown
                ? "header-navigation"
                : "header-navigation isShown"
            }
          >
            {isSideMenuShown ? (
              <div className="close-menu">
                <div onClick={() => setIsSideMenuShown(false)}>
                  <AiOutlineClose />
                </div>
              </div>
            ) : (
              <></>
            )}

            <div style={{fontWeight: "bold"}} className={showBCR ? "show-bcr" : "hide-bcr"}>BCR</div>

            <div>
              {location.pathname === "/landing-page" ? (
                <a href="#our-service">Our Service</a>
              ) : (
                <Link to="/landing-page">Our Service</Link>
              )}
            </div>
            <div>
              {location.pathname === "/landing-page" ? (
                <a href="#why-us-wrap">Why Us</a>
              ) : (
                <Link to="/landing-page">Why Us</Link>
              )}
            </div>
            <div>
              {location.pathname === "/landing-page" ? (
                <a href="#testimonial">Testimonial</a>
              ) : (
                <Link to="/landing-page">Testimonial</Link>
              )}
            </div>
            <div>
              {location.pathname === "/landing-page" ? (
                <a href="#faq">FAQ</a>
              ) : (
                <Link to="/landing-page">FAQ</Link>
              )}
            </div>
          </div>
        </div>
        <div
          className="hamburger-menu"
          onClick={() => setIsSideMenuShown(true)}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      {children}
    </div>
  );
};

export default Header;
