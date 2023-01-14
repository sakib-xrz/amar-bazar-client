import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Parallax, Pagination, Navigation } from "swiper";
import ButtonPrimary from "../Button/ButtonPrimary";

const Banner = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#FFFFFF",
          "--swiper-pagination-color": "#FFFFFF",
        }}
        speed={600}
        loop={true}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center lg:h-[calc(100vh-8rem)] space-y-5">
            <div
              slot="container-start"
              className="parallax-bg banner-1"
              data-swiper-parallax="-23%"
            ></div>
            <div className="title" data-swiper-parallax="-300">
              Easy Online <br />
              <span className="text-primary">Shopping</span>
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              iste aspernatur dolorem asperiores aliquam. Dicta a ducimus iusto
              pariatur minus.
            </div>
            <div className="text" data-swiper-parallax="-100">
              <ButtonPrimary>Shop Now</ButtonPrimary>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center lg:h-[calc(100vh-8rem)] space-y-5">
            <div
              slot="container-start"
              className="parallax-bg banner-2"
              data-swiper-parallax="-23%"
            ></div>
            <div className="title" data-swiper-parallax="-300">
              Shop from
              <br />
              <span className="text-primary">Anywhere</span>
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              iste aspernatur dolorem asperiores aliquam. Dicta a ducimus iusto
              pariatur minus.
            </div>
            <div className="text" data-swiper-parallax="-100">
              <ButtonPrimary>Shop Now</ButtonPrimary>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center lg:h-[calc(100vh-8rem)] space-y-5">
            <div
              slot="container-start"
              className="parallax-bg banner-3"
              data-swiper-parallax="-23%"
            ></div>
            <div className="title" data-swiper-parallax="-300">
              Super Fast
              <br />
              <span className="text-primary">Delivery</span>
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              iste aspernatur dolorem asperiores aliquam. Dicta a ducimus iusto
              pariatur minus.
            </div>
            <div className="text" data-swiper-parallax="-100">
              <ButtonPrimary>Shop Now</ButtonPrimary>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
