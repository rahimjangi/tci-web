import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tour from "../pages/Tour";
import Product from "../pages/Product";
import Features from "../pages/Features";
import Enterprise from "../pages/Enterprise";
import Support from "../pages/Support";
import Pricing from "../pages/Pricing";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/product" element={<Product />} />
      <Route path="/features" element={<Features />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/support" element={<Support />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
