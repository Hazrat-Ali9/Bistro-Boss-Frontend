import React from "react";
import image from "../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div
      className="relative bg-cover md:w-11/12 md:mx-auto mb-32 bg-center bg-no-repeat h-[400px] flex items-center justify-center"
      style={{
        backgroundImage: `url('${image}')`, // এখানে আপনার ব্যাকগ্রাউন্ড ইমেজ URL ব্যবহার করুন
      }}
    >
      <div className="bg-white bg-opacity-90 px-10 py-8 max-w-3xl text-center shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Bistro Boss</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
