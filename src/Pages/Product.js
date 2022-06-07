import React, { useContext } from "react";
import { ProductContext } from "../App";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const product = useContext(ProductContext);
  const { image } = product;

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div>
          <img className="h-[80vh]" src={image} alt="" />
        </div>
        <ProductDetails />
      </div>
    </section>
  );
};

export default Product;
