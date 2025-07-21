import React from "react";
import MenuItme from "../../../Shear/MenuItems/MenuItme";

const Menu_Category = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItme key={item._id} item={item}></MenuItme>
        ))}
      </div>
    </div>
  );
};

export default Menu_Category;
