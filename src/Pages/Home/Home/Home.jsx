import React from "react";
import Banner from "../Banner/Banner";
import Order_online from "../Order_online/Order_online";
import BistroBoss from "../BistroBoss/BistroBoss";
import From_our_menu from "../From_our_menu/From_our_menu";
import Our_menus from "../Our_menus/Our_menus";
import Producats_cart from "../Product_carts/Producats_cart";
import TESTIMONIALS from "../TESTIMONIALS/TESTIMONIALS";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Order_online></Order_online>
      <BistroBoss></BistroBoss>
      <From_our_menu></From_our_menu>
      <Producats_cart></Producats_cart>
      <Our_menus></Our_menus>
      <TESTIMONIALS></TESTIMONIALS>
    </div>
  );
};

export default Home;
