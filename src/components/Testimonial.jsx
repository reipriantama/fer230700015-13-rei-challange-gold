import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";


const Testimonial = () => {
  const [testimonialData] = useState([
    {
      image: `${process.env.PUBLIC_URL}/assets/Testimonial/smile1.png`, 
      rating: 5,
      comment: "Pelayanan terbaik dan sangat memuaskan",
      info: "John Dee 32, Bromo",
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/Testimonial/smile2.png`,
      rating: 5,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam architecto optio vel consequuntur.",
      info: "Eddie Veder 18, Cimahi",
    },
    {
      image: `${process.env.PUBLIC_URL}/assets/Testimonial/smile2.png`,
      rating: 5,
      comment: "Mobil yang digunakan sangat nyaman dan bersih",
      info: "Lemi 40, Bandung",
    },
  ]);

  return (
    <div id="testimonial">
      <div className="tertimonial-title">Testimonial</div>
      <div className="testimonial-text">
        Berbagai review positif dari para pelanggan kami
      </div>

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {testimonialData &&
            testimonialData.map((item, index) => (
              <div
                key={`testimonial-${index + 1}`}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="testimonial-box">
                  <div className="testimonial-image">
                    <img src={item.image} alt="fotoSmile" />
                  </div>
                  <div className="testimonial-content">
                    <div className="testimonial-rate">
                      {[...Array(item.rating)].map((rate, index) => (
                        <IoIosStar key={`rate-${index + 1}`} />
                      ))}
                    </div>
                    <div className="testimonial-description">
                      {item.comment}
                    </div>
                    <div className="testimonial-name">{item.info}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="testimonial-button">
        <button
          className="carousel-button"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <div className="testimonial-button-left">
            <img src="assets/Testimonial/Left button.png" alt="button-left" />
          </div>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-button"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <div className="testimonial-button-right">
            <img src="assets/Testimonial/Right button.png" alt="button-right" />
          </div>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
