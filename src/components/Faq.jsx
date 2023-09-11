import React, { useState } from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  const [accordionData] = useState([
    {
      text: "Apa saja syarat yang dibutuhkan?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      text: "Berapa hari minimal sewa mobil lepas kunci?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      text: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      text: "Apakah Ada biaya antar-jemput?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      text: "Bagaimana jika terjadi kecelakaan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]);

  return (
    <div id="faq">
      <div className="faq-wrap">
        <div className="faq-left">
          <div className="faq-title">Frequently Asked Question</div>
          <div className="faq-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className="accordion faq-right">
          <Accordion defaultActiveKey="0">
            {accordionData.map((item, index) => (
              <Accordion.Item key={`faq-${index}`} eventKey={index.toString()}>
                <Accordion.Header>{item.text}</Accordion.Header>
                <Accordion.Body>{item.description}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
