import React, { useContext, useState } from "react";
import { ProductContext } from "../App";

const ProductSize = () => {
  const { sizes } = useContext(ProductContext);
  const defaultSize = sizes[0]?.name;
  const [sizeCount, setSizeCount] = useState(defaultSize);
  const sizeNumber = (numb, id) => {
    setSizeCount(numb);
  };
  console.log(sizes);
  return (
    <div className="mt-5 bg-slate-300 p-3">
      <h2 className="font-semibold">Size: {sizeCount}</h2>
      <div className="flex flex-warp mt-3 space-x-3">
        {sizes.map((size) => (
          <div
            key={size.id}
            onClick={() => {
              sizeNumber(size.title, size.id);
            }}
            className="bg-slate-300 w-10 border-2 rounded-md text-center"
          >
            <h3>{size.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSize;
