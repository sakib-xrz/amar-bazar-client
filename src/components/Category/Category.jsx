import React from "react";
import Heading from "../Heading/Heading";

const Category = () => {
  const categories = [
    {
      name: "Mobile",
      img: "https://i.ibb.co/k8ss8cK/mobile.jpg",
    },
    {
      name: "Laptop",
      img: "https://i.ibb.co/RYqX8sQ/laptop.jpg",
    },
    {
      name: "Smart Tv",
      img: "https://i.ibb.co/KFSvvgj/smart-tv.jpg",
    },
    {
      name: "Camera",
      img: "https://i.ibb.co/PF1XK07/camera.jpg",
    },
    {
      name: "Smart Watch",
      img: "https://i.ibb.co/GsMvTQJ/smart-watch.jpg",
    },
    {
      name: "Headphone",
      img: "https://i.ibb.co/FxSMLfy/headphone.jpg",
    },
  ];
  return (
    <div className="container mx-auto px-5 space-y-5">
      <Heading>Categories</Heading>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-10">
        {categories.map((category) => (
          <div className="flex flex-col justify-center items-center p-4 shadow-md rounded-md border border-white hover:border-primary hover:cursor-pointer">
            <>
              <img src={category.img} alt="" />
              <h5>{category.name}</h5>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
