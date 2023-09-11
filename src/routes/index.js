import { Navigate } from "react-router";

import Base from "../pages/Base";
import LandingPage from "../pages/LandingPage/LandingPage";
import SearchPage from "../pages/SeachPage/SearchPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import ResultPage from "../pages/ResultPage/ResultPage";



const routes = [
  {
    path: "",
    element: <Navigate to="/landing-page" />,
  },
  {
    path: "/landing-page",
    element: <Base />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/search-page",
    element: <Base />,
    children: [
      {
        path: "",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/detail-page/:carId",
    element: <Base />,
    children: [
      {
        path: "",
        element: <DetailPage />,
      },
    ],
  },
  {
    path: "/result-page",
    element: <Base />,
    children: [
      {
        path: "",
        element: <ResultPage />,
      },
    ],
  },
];

export { routes };
