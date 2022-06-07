import React, { useState } from "react";

const ProductSize = ({ sizes }) => {
  const [sizeCount, setSizeCount] = useState("");
  const sizeNumber = (numb, id) => {
    setSizeCount(numb);
  };
  return (
    <div className="mt-5 bg-slate-300 p-3">
      <h2 className="font-semibold">Size: {sizeCount}</h2>
      <div className="flex flex-warp mt-3 space-x-3">
        {sizes?.values.map((size) => (
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
