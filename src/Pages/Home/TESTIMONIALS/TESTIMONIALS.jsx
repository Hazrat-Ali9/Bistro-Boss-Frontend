import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SectionTaitle from "../../../Components/SectionTaitle/SectionTaitle";
// import "swiper/swiper-bundle.min.css";

const TESTIMONIALS = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="md:w-11/12 md:mx-auto my-10">
      <SectionTaitle
        title={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTaitle>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className="p-6">
            <div className="bg-gray-100 p-10 rounded-lg text-center shadow-lg">
              <div className="flex justify-center mb-3">
                {/* রেটিং স্টার */}
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-2xl ${
                      index < review.rating
                        ? "text-yellow-500"
                        : "text-gray-400"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="text-5xl text-black font-bold mb-5">❝</div>
              <p className="text-gray-600 text-sm italic mb-5">
                {review.details}
              </p>
              <h4 className="text-yellow-600 font-bold text-lg">
                {review.name.toUpperCase()}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TESTIMONIALS;
