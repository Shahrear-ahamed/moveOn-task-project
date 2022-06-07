import React, { useContext } from "react";
import { ProductContext } from "../App";
import ProductColor from "./ProductColor";
import ProductSize from "./ProductSize";

const ProductDetails = () => {
  const { price, title } = useContext(ProductContext);
  const discount = ((price.old - price.discounted) / 100) * 100;
  return (
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="space-x-3 flex items-center text-xl font-semibold mt-7">
        <p>Price:</p>
        <div className="space-x-4">
          <span className="text-lg"> &#8377; {price.discounted}</span>
          <del className="text-gray-400">&#8377; {price.old}</del>
          <span className="text-orange-600 bg-orange-100 text-base rounded-md px-2 py-1 uppercase">
            ({discount}% off)
          </span>
        </div>
      </div>
      <ProductColor />
      <ProductSize />
    </div>
  );
};

export default ProductDetails;
