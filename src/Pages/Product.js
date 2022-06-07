import React, { useContext } from "react";
import { ProductContext } from "../App";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const {img} = useContext(ProductContext);

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div>
          <img className="h-[80vh]" src={img} alt="" />
        </div>
        <ProductDetails />
      </div>
    </section>
  );
};

export default Product;
