import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection/ProductSection";
import DetailsSection from "./components/DetailsSection";
import CardContainer from "./components/ProductSection/CardContainer";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductSection />}>
          <Route index element={<CardContainer />} />
        </Route>
        <Route path="details/:name/:ProductId" element={<DetailsSection />} />
      </Routes>
    </>
  );
}
export default App;
