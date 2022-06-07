import React, { useState } from "react";

const ProductColor = ({ colors }) => {
  const defaultColor = colors?.values[0]?.name;
  const [colorName, setColorName] = useState(defaultColor);
  const showColorName = (color, id) => {
    setColorName(color);
  };
  return (
    <div className="mt-5 bg-slate-300 p-3">
      <h2 className="font-semibold">Color: {colorName}</h2>
      <div className="flex flex-wrap space-x-3 mt-2">
        {colors?.values.map((color) => (
          <div
            key={color.id}
            onClick={() => {
              showColorName(color.name, color.id);
            }}
            className="rounded-md border-2 border-orange-400 w-[75px] p-2 bg-white"
          >
            <img className="w-full rounded-md" src={color.thumb} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductColor;
