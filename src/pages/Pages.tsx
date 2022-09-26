import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AddProduct } from "./AddProduct";
import { Favourite } from "./Favourite";
import { Home } from "./Home";
import { ProductDetails } from "./ProductDetails";

export const Pages: FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>
        <Route path="/add/product" element={<AddProduct />}></Route>
      </Routes>
    </div>
  );
};
