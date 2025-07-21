import React from "react";

const SectionTaitle = ({ title, heading }) => {
  return (
    <div className="text-center py-10">
      {/* Upper text */}
      <p className="text-yellow-600 italic text-lg mb-4">{title}</p>

      {/* Horizontal line */}
      <div className="border-t border-gray-300 mx-auto w-3/4 mb-4"></div>

      {/* Main text */}
      <h1 className="text-3xl font-bold text-black">{heading}</h1>

      {/* Lower horizontal line */}
      <div className="border-t border-gray-300 mx-auto w-3/4 mt-4"></div>
    </div>
  );
};

export default SectionTaitle;
