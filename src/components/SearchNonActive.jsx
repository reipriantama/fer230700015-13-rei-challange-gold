import React from "react";

const SearchNonActive = () => {
  return (
    <div>
      <div id="search">
        <div className="container">
          <div className="search-title">Pencarianmu</div>
          <div className="row search-wrap">
            <div className="col search-text">
              Nama Mobil
              <div>
                <div className="mb-3">
                  <input
                    type="text"
                    disabled
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                    style={{
                      width: "210px",
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
                  disabled
                  defaultValue={""}
                  aria-label="Default select example"
                  style={{
                    width: "208px",
                    height: "36px",
                    color: "var(--neutral-03, #8a8a8a)",
                    fontFamily: "arial",
                    fontSize: "12px",
                  }}
                >
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="col search-text">
              Harga
              <div>
                <select
                  className="form-select"
                  disabled
                  defaultValue={""}
                  aria-label="Default select example"
                  style={{
                    width: "219px",
                    height: "36px",
                    color: "var(--neutral-03, #8a8a8a)",
                    fontFamily: "arial",
                    fontSize: "12px",
                  }}
                >
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="col search-text">
              Status
              <div>
                <select
                  className="form-select"
                  disabled
                  defaultValue={""}
                  aria-label="Default select example"
                  style={{
                    width: "190px",
                    height: "36px",
                    color: "var(--neutral-03, #8a8a8a)",
                    fontFamily: "arial",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  <option value=""></option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNonActive;
