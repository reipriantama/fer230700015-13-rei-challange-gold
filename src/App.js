import './App.css';
import { useRoutes } from 'react-router';

import { routes } from './routes';

const App = () => {
  return useRoutes(routes);
}

export default App;



// import "./App.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import DetailPage from "./pages/DetailPage";
// import LandingPage from "./pages/LandingPage";
// import SearchPage from "./pages/SearchPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="" element={<LandingPage />}></Route>
//           <Route path="search" element={<SearchPage />}></Route>
//           <Route path="detail" element={<DetailPage />}></Route>
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
