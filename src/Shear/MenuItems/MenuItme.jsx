import React from "react";

const MenuItme = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div>
      <div className="flex items-center gap-5 justify-between">
        <div>
          <img
            className="w-28 rounded-r-full rounded-b-full"
            src={image}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-400">
            {name}-----------
          </h1>
          <h1 className="text-slate-800">{recipe}</h1>
        </div>
        <div>
          <h1 className="font-bold">${price}</h1>
        </div>
      </div>
    </div>
  );
};

export default MenuItme;
