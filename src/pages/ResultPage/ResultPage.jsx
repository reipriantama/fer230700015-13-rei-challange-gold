import React, { useEffect, useMemo, useState } from "react";
import "./ResultPage.css";
import CardCar from "../../components/CardCar";
import { useLocation } from "react-router";
import SearchBar from "../../components/SearchBar";
import { getCars } from "../../api";

const ResultPage = () => {
  const location = useLocation();

  const searchParams = useMemo(() => {
    return Object.fromEntries(new URLSearchParams(location.search));
  }, [location.search]);
  console.log(searchParams);

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await getCars(searchParams);
        console.log(response.data.cars);
        setCars(response.data.cars);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCarData();
  }, [searchParams]);

  return (
    <div>
      <SearchBar />
      <div
        className="row"
        style={{
          display: "flex",
          width: "1047px",
          alignItems: "flex-start",
        }}
      >
        {cars &&
          cars.map((car) => (
            <CardCar
              key={car.id}
              name={car.name}
              id={car.id}
              image={car.image}
              price={car.price}
            />
          ))}
      </div>
    </div>
  );
};

export default ResultPage;
