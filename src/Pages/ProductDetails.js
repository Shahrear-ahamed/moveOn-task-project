import React, { useContext } from "react";
import { ProductContext } from "../App";
import ProductColor from "./ProductColor";
import ProductSize from "./ProductSize";

const ProductDetails = () => {
  const product = useContext(ProductContext);
  const { title } = product;
  return (
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="space-x-3 flex items-center text-xl font-semibold mt-7">
        <p>Price:</p>
        <div className="space-x-4">
          <span className="text-lg"> &#8377; 500</span>
          <del className="text-gray-400">&#8377; 100</del>
          <span className="text-orange-600 bg-orange-100 text-base rounded-md px-2 py-1 uppercase">
            (50% off)
          </span>
        </div>
      </div>
      <ProductColor colors={product?.variation?.props[0]} />
      <ProductSize sizes={product?.variation?.props[1]} />
    </div>
  );
};

export default ProductDetails;
