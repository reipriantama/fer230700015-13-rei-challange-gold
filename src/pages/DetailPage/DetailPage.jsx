import React from "react";
import "./DetailPage.css"
import DetailSewa from "../../components/DetailSewa";
import { useParams } from "react-router";
import SearchNonActive from "../../components/SearchNonActive";

const DetailPage = () => {
  const { carId } = useParams();
  return (
    <div>
      <SearchNonActive />
      <DetailSewa id={carId} />
    </div>
  );
};

export default DetailPage;
