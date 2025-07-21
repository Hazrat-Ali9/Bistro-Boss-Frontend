import React, { useState } from "react";
import Cover from "../../Shear/Cover/Cover";
import image from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import useMenu from "../../hooks/useMenu";
import Product from "../Home/Product_carts/Product";

const Orders = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet title="order food"></Helmet>
      <div>
        <Cover
          img={image}
          title={"ORDER FOOD"}
          des={"Would you like to try a dish?"}
        ></Cover>
      </div>
      <div className="flex justify-center mt-10 mb-10 md:w-11/12 md:mx-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={"flex justify-center mb-5 gap-5"}>
            <Tab className="react-tabs__tab">DESSERTS</Tab>
            <Tab className="react-tabs__tab">PIZZA</Tab>
            <Tab className="react-tabs__tab">SALADS</Tab>
            <Tab className="react-tabs__tab">SOUPS</Tab>
            <Tab className="react-tabs__tab">OFFER MENU</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {salad.map((product) => (
                <Product key={product.id} product={product}></Product>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pizza.map((product) => (
                <Product key={product.id} product={product}></Product>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {salad.map((product) => (
                <Product key={product.id} product={product}></Product>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {soup.map((product) => (
                <Product key={product.id} product={product}></Product>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {offered.map((product) => (
                <Product key={product.id} product={product}></Product>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div></div>
    </div>
  );
};

export default Orders;
