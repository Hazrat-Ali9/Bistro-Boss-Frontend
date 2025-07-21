import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SectionTaitle from "../../../Components/SectionTaitle/SectionTaitle";
import Product from "./Product";

const Producats_cart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menus")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const filterProduct = products.slice(0, 3);
  return (
    <div className="md:w-11/12 md:mx-auto">
      <SectionTaitle
        title={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTaitle>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5 mb-20 md:w-11/12 md:mx-auto">
        {filterProduct.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Producats_cart;
