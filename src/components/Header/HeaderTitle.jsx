import React from "react";
import { useNavigate, useLocation } from "react-router-dom";


const HeaderTitle = () => {
  const navigate = useNavigate();
  const navigateToSearch = () => {
    navigate("/search-page");
  };

  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <div id="header-title">
        <div className="title-left">
          <h1 className="title-box">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p className="title-description">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>

          {location.pathname === "/landing-page" && (
            <button className="button-sewa" onClick={() => navigateToSearch()}>
              Mulai Sewa Mobil
            </button>
          )}
        </div>
        <div className="title-right">
          <img src="assets/img_car.png" alt="mobil" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;
