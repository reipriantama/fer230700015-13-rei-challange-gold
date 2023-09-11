import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <div id="footer">
      <div className="footer-wrap">
        <div className="footer-adress">
          <div>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
          <div>binarcarrental@gmail.com</div>
          <div>081-233-334-808</div>
        </div>
        <div className="footer-navigation">
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
        <div className="footer-sosmed">
          <div>Connect with us</div>
          <div className="footer-icon">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/Footer-icon/icon_facebook.png`}
                alt="icon_facebook"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/Footer-icon/icon_instagram.png`}
                alt="icon_instagram"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/Footer-icon/icon_twitter.png`}
                alt="icon_twitter"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/Footer-icon/icon_mail.png`}
                alt="icon_mail"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/Footer-icon/icon_twitch.png`}
                alt="icon_twitch"
              />
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div>Copyright Binar 2022</div>
          <div className="footer-logo"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
