import React from "react";
import Category from "../../components/Category/Category";
import Heading from "../../components/Heading/Heading";
import Banner from "../../components/Slider/Banner";
import Trending from "../../components/Trending/Trending";
import bannerAd01 from "../../assets/image/banner-ad01.jpg";
import bannerAd02 from "../../assets/image/banner-ad02.jpg";
import mobile from "../../assets/mobile/mobile-01.jpg";
import Grid from "../../components/Product/Grid";
import ButtonPrimary from "../../components/Button/ButtonPrimary"

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
    rating: 4.5,
    reviews: 42,
  },
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
    rating: 4.5,
    reviews: 42,
  },
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
    rating: 4.5,
    reviews: 42,
  },
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
    rating: 4.5,
    reviews: 42,
  }
];

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mt-10">
        <Heading name={"Product"} span={"Category"} />
        <Category />
      </div>
      <div className="mt-10">
        <Heading name={"Trending"} span={"Product"} />
        <Trending />
      </div>
      <div className="container mx-auto md:mt-10 px-5 md:flex gap-10">
        <div className="md:w-6/12 pb-5">
          <img
            className="w-full h-auto rounded-md shadow-md hover:cursor-pointer hover:opacity-90"
            src={bannerAd01}
            alt=""
          />
        </div>
        <div className="md:w-6/12 pb-5">
          <img
            className="w-full h-auto rounded-md shadow-md hover:cursor-pointer hover:opacity-90"
            src={bannerAd02}
            alt=""
          />
        </div>
      </div>
      <div className="mt-10">
        <Heading name={"Special"} span={"Product"} />
        <div className="grid grid-cols-12 gap-4 container mx-auto mb-3 p-5">
          {products.map((p, i) => (
            <Grid
              key={i}
              img={p.img}
              name={p.name}
              price={p.price}
              rating={p.rating}
              reviews={p.reviews}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <ButtonPrimary>See All</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Home;
