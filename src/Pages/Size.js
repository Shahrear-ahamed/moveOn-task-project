import React from "react";

const Size = ({ size, sizeNumber }) => {
  return (
    <div
      onClick={() => {
        sizeNumber(size.title, size.id);
      }}
      className="bg-slate-300 w-10 border-2 rounded-md text-center"
    >
      <h3>{size.title}</h3>
    </div>
  );
};

export default Size;
