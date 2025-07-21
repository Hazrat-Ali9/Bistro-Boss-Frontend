import React from "react";
import SectionTaitle from "../../../Components/SectionTaitle/SectionTaitle";
import image from "../../../assets/home/featured.jpg";
import "./Our_menus.css";
const Our_menus = () => {
  return (
    <div className="py-10 text-white bg-fixed mb-28 featured_items">
      <SectionTaitle
        title={"Check it out"}
        heading={"Featured item"}
      ></SectionTaitle>
      <div className="flex items-center justify-between  w-11/12 mx-auto">
        <div className="">
          <img className="w-[500px]" src={image} alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="font-bold text-xl">March 20, 2023</h1>
          <h1 className="">WHERE CAN I GET SOME?</h1>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Our_menus;
