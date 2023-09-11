import React, { useEffect, useState } from "react";
import { handler } from "../api/apiService";

const DetailSewa = (props) => {
  const { id } = props;
  const [car, setCar] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await handler.get(`/customer/car/${id}`);
        setCar(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const currencyFormatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR", // Kode mata uang, ganti sesuai kebutuhan
    minimumFractionDigits: 0, // Jumlah digit desimal minimum
    maximumFractionDigits: 2, // Jumlah digit desimal maksimum
  });

  return (
    <div>
      <div id="detail-sewa">
        <div className="detail-content">
          <div className="detail-content-left">
            <div className="detail-title-left">Tentang Paket</div>
            <div className="detail-title-left include">
              Include
              <div className="include-content">
                <ul type="disc">
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
              </div>
            </div>
            <div className="detail-title-left exclude">
              Exclude
              <div className="exclude-content">
                <ul type="disc">
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </div>
            </div>
            <div
              className="accordion detail-title-left refund"
              id="accordionExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Refund, Reschedule, Overtime
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body refund-content">
                    <ul type="disc">
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                      <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                      <li>
                        Jika overtime lebih dari 12 jam akan ada tambahan biaya
                        Rp 20.000/jam
                      </li>
                      <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-content-right">
            <img
              src={car.image}
              alt="car"
              style={{
                margin: "4px 44px",
                maxHeight: "160px",
                maxWidth: "270px",
              }}
            />
            <div className="detail-title-right">{car.name}</div>
            <div className="detail-capacity-right">
              <div
                style={{
                  marginRight: "4px",
                }}
              >
                {" "}
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Detail-paket-sewa-mobil/fi_users.png`}
                  alt="user icon"
                />
                {car.category}
              </div>
            </div>
            <div className="detail-total-right">
              <div>Total</div>
              <div>{currencyFormatter.format(car.price)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSewa;
