import React from "react";

const OurService = () => {
  return (
    <div id="our-service">
      <div className="service-bar-left">
        <img
          className="image-our-service"
          src="assets/img_service.png"
          alt="happy-girl"
        />
      </div>
      <div className="service-bar-right">
        <h2 className="service-title">
          Best Car Rental for any kind of trip in (Lokasimu)!
        </h2>
        <div className="service-description">
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
          <div className="wrap-list-service">
            <div className="service-list">
              <img src="assets/img_list.svg" alt="img" />
              Sewa Mobil Dengan Supir di Bali 12 Jam
            </div>
            <div className="service-list">
              <img src="assets/img_list.svg" alt="img" />
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </div>
            <div className="service-list">
              <img src="assets/img_list.svg" alt="img" />
              Sewa Mobil Jangka Panjang Bulanan
            </div>
            <div className="service-list">
              <img src="assets/img_list.svg" alt="img" />
              Gratis Antar - Jemput Mobil di Bandara
            </div>
            <div className="service-list">
              <img src="assets/img_list.svg" alt="img" />
              Layanan Airport Transfer / Drop In Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
