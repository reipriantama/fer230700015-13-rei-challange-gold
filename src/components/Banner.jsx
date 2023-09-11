import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const navigateToSearch = () => {
    navigate("/search-page");
  };

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div id="banner">
      <div className="banner-title">Sewa Mobil di (Lokasimu) Sekarang</div>
      <div className="banner-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      {location.pathname === "/landing-page" && (
        <button
          className="button-sewa"
          style={{
            margin: "auto",
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
          }}
          onClick={() => navigateToSearch()}
        >
          Mulai Sewa Mobil
        </button>
      )}
    </div>
  );
};

export default Banner;
