import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Shear/Cover/Cover";
import image from "../../../assets/menu/banner3.jpg";
import image2 from "../../../assets/menu/dessert-bg.jpeg";
import image3 from "../../../assets/menu/pizza-bg.jpg";
import image4 from "../../../assets/menu/salad-bg.jpg";
import image5 from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTaitle from "../../../Components/SectionTaitle/SectionTaitle";
import Menu_Category from "../Menu_Category/Menu_Category";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Our menu page</title>
      </Helmet>
      <Cover
        img={image}
        title={"OUR MENU"}
        des={"Would you like to try a dish?"}
      ></Cover>
      <SectionTaitle
        title={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTaitle>
      <div className="md:w-11/12 md:mx-auto mb-16">
        <Menu_Category items={offered}></Menu_Category>
      </div>
      <Link to={"/order"} className="flex justify-center">
        <button className="btn bg-black px-20 text-white mb-10">Order</button>
      </Link>
      {/* dessert */}
      <Cover
        img={image2}
        title={"DESSERTS"}
        des={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="md:w-11/12 md:mx-auto mt-10 mb-16">
        <Menu_Category items={dessert}></Menu_Category>
      </div>
      <Link to={"/order"} className="flex justify-center">
        <button className="btn bg-black px-20 text-white mb-10">Order</button>
      </Link>
      {/* pizza */}
      <Cover
        img={image3}
        title={"PIZZA"}
        des={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="md:w-11/12 md:mx-auto mt-10">
        <Menu_Category items={pizza}></Menu_Category>
      </div>
      <Link to={"/order"} className="flex justify-center">
        <button className="btn bg-black px-20 text-white mb-10">Order</button>
      </Link>
      {/* pizza */}
      <Cover
        img={image4}
        title={"SALADS"}
        des={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="md:w-11/12 md:mx-auto mt-10">
        <Menu_Category items={salad}></Menu_Category>
      </div>
      <Link to={"/order"} className="flex justify-center">
        <button className="btn bg-black px-20 text-white mb-10">Order</button>
      </Link>
      {/* sup */}
      <Cover
        img={image4}
        title={"SOUPS"}
        des={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="md:w-11/12 md:mx-auto mt-10">
        <Menu_Category items={soup}></Menu_Category>
      </div>
      <Link to={"/order"} className="flex justify-center">
        <button className="btn bg-black px-20 text-white mb-10">Order</button>
      </Link>
    </div>
  );
};

export default Menu;
