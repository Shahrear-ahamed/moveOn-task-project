import React from "react";

const Color = ({ colorScheme, showColorName }) => {
  return (
    <div
      onClick={() => {
        showColorName(colorScheme.name, colorScheme.id);
      }}
      className="rounded-md border-2 border-orange-400 w-[75px] p-2 bg-white"
    >
      <img className="w-full rounded-md" src={colorScheme.thumb} alt="" />
    </div>
  );
};

export default Color;
