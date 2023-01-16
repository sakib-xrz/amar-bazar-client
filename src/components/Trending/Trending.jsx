import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import mobile from "../../assets/mobile/mobile-01.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "./Trending.css";
import { Autoplay } from "swiper";
import {
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Stars from "../Star/Stars";

const products = [
  {
    name: "Oppo A15s",
    img: mobile,
    price: 9450,
    rating: 4.5,
    reviews: 42,
  },
  {
    name: "Oppo A15s",
    img: mobile,
    price: 9450,
    rating: 3.5,
    reviews: 12,
  },
  {
    name: "Oppo A15s",
    img: mobile,
    price: 9450,
    rating: 4,
    reviews: 33,
  },
  {
    name: "Oppo A15s",
    img: mobile,
    price: 9450,
    rating: 4.5,
    reviews: 81,
  },
];

const Trending = () => {
  return (
    <div className="container mx-auto p-5">
      <Swiper
        style={{
          height: "auto",
        }}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="myProduct"
      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <div className="col-span-12 md:col-span-6 lg:col-span-3 mx-auto max-w-xs w-full mb-10 md:mb-0 sm:w-full lg:w-full">
              <div className="relative bg-white shadow-md rounded-md overflow-hidden hover:cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    className="w-56 h-auto mx-auto scale-105 duration-500 hover:scale-110"
                    src={product.img}
                    alt=""
                  />
                </div>
                <div className="absolute top-3 right-3">
                  <AiOutlineHeart className="text-2xl hover:text-primary" />
                </div>
                <div className="p-4 pt-0 bg-white">
                  <p className="uppercase tracking-wide font-semibold text-dark hover:text-primary">
                    {product.name}
                  </p>
                  <p className="text-3xl text-dark">${product.price}</p>
                  {/* <p className="text-dark">742 Evergreen Terrace</p> */}
                  <Stars rating={product.rating} reviews={product.reviews} />
                </div>
                <hr className="w-11/12 mx-auto text-gray" />
                <div className="flex justify-center lg:justify-between p-4">
                  <div>
                    <button className="flex items-center text-dark hover:text-primary font-medium">
                      {" "}
                      <AiOutlineShoppingCart className="mr-2 font-bold" />{" "}
                      <small>ADD TO CART</small>
                    </button>
                  </div>
                  <div className="hidden lg:block">
                    <button className="flex items-center text-dark hover:text-primary font-medium">
                      {" "}
                      <AiOutlineEye className="mr-2 font-bold" />{" "}
                      <small>SEE DETAILS</small>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trending;
