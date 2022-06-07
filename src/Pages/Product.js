import React, { useContext } from "react";
import { ProductContext } from "../App";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const {img} = useContext(ProductContext);

  return (
    <section className=" bg-slate-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 h-screen pt-10">
        <div>
          <img className="h-[80vh]" src={img} alt="" />
        </div>
        <ProductDetails />
      </div>
    </section>
  );
};

export default Product;
