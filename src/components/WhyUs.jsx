import React from "react";

const WhyUs = () => {
  return (
    <div id="why-us-wrap">
      <div className="why-us-title">Why Us?</div>
      <div className="why-us-description">
        Mengapa harus pilih Binar Car Rental?
      </div>
      <div className="wrap-why-us-list">
        <div className="why-us-list">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Why-us-icon/icon_complete.png`}
              alt="icon-complete"
            />
          </div>
          <div className="why-us-list-title">Mobil Lengkap</div>
          <div className="why-us-list-text">
            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
            terawat
          </div>
        </div>
        <div className="why-us-list">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Why-us-icon/icon_price.png`}
              alt="icon-price"
            />
          </div>
          <div className="why-us-list-title">Harga Murah</div>
          <div className="why-us-list-text">
            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
            mobil lain
          </div>
        </div>
        <div className="why-us-list">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Why-us-icon/icon_24hrs.png`}
              alt="icon-24hrs"
            />
          </div>
          <div className="why-us-list-title">Layanan 24 Jam</div>
          <div className="why-us-list-text">
            Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
            tersedia di akhir minggu
          </div>
        </div>
        <div className="why-us-list">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Why-us-icon/icon_professional.png`}
              alt="icon-professional"
            />
          </div>
          <div className="why-us-list-title">Sopir Profesional</div>
          <div className="why-us-list-text">
            Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
            waktu
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
