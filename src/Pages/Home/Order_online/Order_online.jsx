import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../assets/home/slide1.jpg";
import image2 from "../../../assets/home/slide2.jpg";
import image3 from "../../../assets/home/slide3.jpg";
import image4 from "../../../assets/home/slide4.jpg";
import image5 from "../../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SectionTaitle from "../../../Components/SectionTaitle/SectionTaitle";

const Order_online = () => {
  return (
    <div className="md:w-11/12 md:mx-auto mt-20 mb-48">
      <section>
        <SectionTaitle
          title={"--- From 11:00am to 10:00pm ---"}
          heading={"ORDER ONLINE"}
        ></SectionTaitle>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image1} className="w-full" alt="" />
            <h1 className="text-center text-4xl text-white font-bold -mt-12">
              salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} className="w-full" alt="" />
            <h1 className="text-center text-4xl text-white font-bold -mt-12">
              pizza
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} className="w-full" alt="" />
            <h1 className="text-center text-4xl text-white font-bold -mt-12">
              Sup
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} className="w-full" alt="" />
            <h1 className="text-center text-4xl text-white font-bold -mt-12">
              cake
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} className="w-full" alt="" />
            <h1 className="text-center text-4xl text-white font-bold -mt-12">
              salad
            </h1>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Order_online;
