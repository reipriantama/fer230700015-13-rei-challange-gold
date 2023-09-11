import React from "react";
import { useNavigate } from "react-router";

const CardCar = (props) => {
  const { name, price, image, id } = props;
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/detail-page/${id}`);
  };

  const currencyFormatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR", // Kode mata uang, ganti sesuai kebutuhan
    minimumFractionDigits: 0, // Jumlah digit desimal minimum
    maximumFractionDigits: 2, // Jumlah digit desimal maksimum
  });

  return (
    <div className="col-4">
      <div id="hasil-pencarian">
        <div className="card-wrap">
          <div className="card">
            <img
              src={image}
              className="card-img-top"
              alt="imagecar1"
              style={{ width: "270px", height: "160px" }}
            />
            <div className="card-title">{name}</div>
            <div className="card-price">
              {" "}
              {currencyFormatter.format(price)} / hari
            </div>
            <div>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <button className="card-button" onClick={handleClick}>
              Pilih Mobil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCar;
