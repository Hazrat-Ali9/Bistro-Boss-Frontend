import React from "react";

const Cover = ({ img, title, des }) => {
  return (
    <div>
      <div className="relative w-full h-[400px]">
        <img src={img} alt="Desserts" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold mb-4">{title}</h1>
          <p className="text-white text-center max-w-md">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
