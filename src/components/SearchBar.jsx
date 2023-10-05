import React, { useState } from "react";
import { useLocation, createSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";


const SearchBar = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [minprice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [status, setStatus] = useState(false);

  
  const location = useLocation();

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangePrice = (event) => {
    if (event.target.value === "<400000") {
      setMinPrice(0);
      setMaxPrice(399999);
    } else if (event.target.value === "400000-600000") {
      setMinPrice(400000);
      setMaxPrice(600000);
    } else if (event.target.value === ">600000") {
      setMinPrice(600001);
      setMaxPrice(1000000);
    } else if (event.target.value === "0") {
      setMinPrice(0);
      setMaxPrice(1000000);
    }
  };

  const handleChangeStatus = (event) => {
    if (event.target.value === "disewa") {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  const handleChangeName = (event) => {
    setName(event.target.value.toLowerCase());
  };

  const handleSearch = async () => {
    navigate({
      pathname: "/result-page",
      search: createSearchParams({
        name: name,
        category: category,
        isRented: status,
        minPrice: minprice,
        maxPrice: maxPrice,
      }).toString(),
    });
  };

  return (
    <>
      <div id="search">
        <div className="container">
          <div className="row search-wrap">
            <div className="col search-text">
              Nama Mobil
              <div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ketik nama/tipe mobil"
                    onChange={handleChangeName}
                    style={{
                      width: "175px",
                      height: "36px",
                      fontFamily: "rubik",
                      fontSize: "12px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col search-text">
              Kategori
              <div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue=""
                  style={{
                    width: "208px",
                    height: "36px",
                    color: "var(--neutral-03, #8a8a8a)",
                    fontFamily: "arial",
                    fontSize: "12px",
                  }}
                  onChange={handleChangeCategory}
                >
                  <option value=""  >
                    Masukan Kapasitas Mobil
                  </option>
                  <option value="small">2 - 4 Orang</option>
                  <option value="medium">4 - 6 Orang</option>
                  <option value="large">6 - 8 Orang</option>
                </select>
              </div>
            </div>
            <div className="col search-text">
              Harga
              <div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={"0"}
                  onChange={handleChangePrice}
                  style={{
                    width: "219px",
                    height: "36px",
                    color: "var(--neutral-03, #8a8a8a)",
                    fontFamily: "arial",
                    fontSize: "12px",
                  }}
                >
                  <option  value="0">
                    Masukan Harga Sewa per Hari
                  </option>
                  <option value="<400000"> &lt; Rp.400.000</option>
                  <option value="400000-600000">Rp.400.000 - Rp.600.000</option>
                  <option value=">600000"> &gt; Rp.600.000</option>
                </select>
              </div>
            </div>
            <div className="col search-text">
              Status
              <div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={"disewa"}
                  onChange={handleChangeStatus}
                  style={{
                    width: "190px",
                    height: "36px",
                    color: "var(--neutral-03, #8a8a8a)",
                    fontFamily: "arial",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  <option value="disewa" >
                    Tersedia
                  </option>
                  <option value="tidak disewa"> Disewa</option>
                </select>
              </div>
            </div>
            <div className="col search-text">
              <div>
                <button
                  className={
                    location.pathname === "/search-page"
                      ? "button-search"
                      : "button-edit"
                  }
                  onClick={handleSearch}
                  type="submit"
                >
                  
                  {location.pathname === "/search-page" ? "Cari Mobil" : "Edit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
